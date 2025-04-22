import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSave, FaArrowLeft, FaGithub, FaCode, FaEye, FaImage, FaPalette, FaFont, FaHeading, FaRedo } from 'react-icons/fa';

const PageEditor = () => {
  const { pagePath } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [originalContent, setOriginalContent] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [isSaving, setSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [saveMessage, setSaveMessage] = useState('');
  const [errorDetails, setErrorDetails] = useState(null);
  const [viewMode, setViewMode] = useState('visual'); // 'visual' or 'code'
  const [showStyleOptions, setShowStyleOptions] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#0070f3'); // Default blue
  const editorRef = useRef(null);

  // Predefined color palette
  const colorPalette = [
    '#0070f3', // Blue
    '#00c853', // Green
    '#d50000', // Red
    '#6200ea', // Purple
    '#ff6d00', // Orange
    '#2979ff', // Light blue
    '#212121', // Dark gray
    '#757575', // Medium gray
  ];

  // Fetch page content on load
  useEffect(() => {
    fetchPageContent();
  }, [pagePath]);

  const fetchPageContent = async () => {
    setIsLoading(true);
    setErrorDetails(null);
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('You are not authenticated. Please log in again.');
      }

      const response = await fetch(`/api/content?path=${encodeURIComponent(pagePath)}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch (e) {
          errorData = { message: errorText || 'Failed to fetch page content' };
        }
        
        console.error('API Error Response:', errorData);
        throw new Error(errorData.message || 'Failed to fetch page content');
      }
        
      const data = await response.json();
      console.log('Content retrieved:', data);
      
      if (data.content && data.content.trim()) {
        setContent(data.content);
        setOriginalContent(data.content);
      } else {
        setContent('<p>No content found. Start adding your content here...</p>');
      }
      
      setPageTitle(data.title || getPageTitleFromPath(pagePath));
    } catch (error) {
      console.error('Error fetching content:', error);
      setErrorDetails({
        message: error.message || 'Error loading content. Please try again.',
        path: pagePath
      });
      // Set some default content if fetch fails
      setContent('<p>Error loading content. Please try again.</p>');
      setPageTitle(getPageTitleFromPath(pagePath));
    } finally {
      setIsLoading(false);
    }
  };

  const getPageTitleFromPath = (path) => {
    // Extract title from path, capitalize words
    const parts = path.split('/').filter(Boolean);
    const rawTitle = parts[parts.length - 1] || 'Home';
    return rawTitle
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleSave = async () => {
    if (content === originalContent) {
      setSaveMessage('No changes to save');
      setTimeout(() => setSaveMessage(''), 3000);
      return;
    }

    setSaving(true);
    setSaveMessage('Saving...');

    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          path: pagePath,
          title: pageTitle,
          content: content,
          commitMessage: `Update ${pageTitle} content via admin panel`
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save content');
      }

      setOriginalContent(content);
      setSaveMessage('Content saved successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      console.error('Error saving content:', error);
      setSaveMessage(`Error: ${error.message}`);
      setTimeout(() => setSaveMessage(''), 5000);
    } finally {
      setSaving(false);
    }
  };

  const applyFormatting = (format) => {
    if (!editorRef.current) return;
    
    document.execCommand(format);
    editorRef.current.focus();
    
    // Update content state after formatting
    setTimeout(() => {
      setContent(editorRef.current.innerHTML);
    }, 100);
  };

  const applyStyle = (property, value) => {
    if (!editorRef.current) return;
    
    document.execCommand('styleWithCSS', false, true);
    
    if (property === 'foreColor') {
      document.execCommand(property, false, value);
    } else {
      // For other CSS properties
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const span = document.createElement('span');
        span.style[property] = value;
        
        // Apply the style to the selected text
        range.surroundContents(span);
      }
    }
    
    editorRef.current.focus();
    
    // Update content state after styling
    setTimeout(() => {
      setContent(editorRef.current.innerHTML);
    }, 100);
  };

  const insertElement = (type) => {
    if (!editorRef.current) return;
    
    let element;
    
    switch (type) {
      case 'heading':
        element = document.createElement('h2');
        element.textContent = 'New Heading';
        break;
      case 'paragraph':
        element = document.createElement('p');
        element.textContent = 'New paragraph text...';
        break;
      case 'image':
        // For image, we'll just insert a placeholder
        element = document.createElement('div');
        element.innerHTML = '<div style="background-color: #f0f0f0; padding: 2rem; text-align: center;">[Image Placeholder - Replace with actual image]</div>';
        break;
      case 'button':
        element = document.createElement('button');
        element.textContent = 'Button Text';
        element.className = 'btn';
        element.style.backgroundColor = selectedColor;
        element.style.color = '#ffffff';
        element.style.padding = '0.5rem 1rem';
        element.style.border = 'none';
        element.style.borderRadius = '4px';
        element.style.cursor = 'pointer';
        break;
      default:
        return;
    }
    
    // Insert the element at the current cursor position
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(element);
    } else {
      // If no selection, append to the end
      editorRef.current.appendChild(element);
    }
    
    // Update content state after insertion
    setTimeout(() => {
      setContent(editorRef.current.innerHTML);
    }, 100);
  };

  // Clean the JSX content for visual editing
  const prepareVisualContent = (jsxContent) => {
    if (!jsxContent) return '';
    
    // Remove component tags
    let cleanedContent = jsxContent
      .replace(/{\/\* .* \*\/}/g, '') // Remove JSX comments
      .replace(/<WhyChooseUs.*?\/>/g, '<div class="component-placeholder">[Why Choose Us Component]</div>')
      .replace(/<Testimonials.*?\/>/g, '<div class="component-placeholder">[Testimonials Component]</div>')
      .replace(/<Partners.*?\/>/g, '<div class="component-placeholder">[Partners Component]</div>')
      .replace(/<QuickContact.*?\/>/g, '<div class="component-placeholder">[Quick Contact Form]</div>');
      
    return cleanedContent;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="mr-4 text-gray-500 hover:text-gray-700"
            >
              <FaArrowLeft />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              Editing: {pageTitle}
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('visual')}
                className={`px-3 py-1 rounded-md ${viewMode === 'visual' ? 'bg-white shadow-sm' : ''}`}
              >
                <FaEye className="inline mr-1" /> Visual
              </button>
              <button
                onClick={() => setViewMode('code')}
                className={`px-3 py-1 rounded-md ${viewMode === 'code' ? 'bg-white shadow-sm' : ''}`}
              >
                <FaCode className="inline mr-1" /> Code
              </button>
            </div>
            
            <button
              onClick={handleSave}
              disabled={isSaving || content === originalContent}
              className={`flex items-center px-4 py-2 rounded-md text-white ${
                isSaving || content === originalContent 
                  ? 'bg-gray-400' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSaving ? 'Saving...' : <><FaGithub className="mr-2" /> Save to GitHub</>}
            </button>
          </div>
        </div>
      </div>

      {saveMessage && (
        <div className={`text-center py-2 ${saveMessage.startsWith('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
          {saveMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading content...</p>
          </div>
        ) : errorDetails ? (
          <div className="bg-red-50 border border-red-200 rounded-md p-6 mb-6">
            <h2 className="text-lg font-medium text-red-800 mb-3">Error Loading Content</h2>
            <p className="text-red-700 mb-4">{errorDetails.message}</p>
            <div className="bg-white p-3 rounded-md text-sm font-mono text-gray-700 mb-4">
              <p>Page Path: {errorDetails.path}</p>
              <p>Auth Status: {localStorage.getItem('authToken') ? 'Token Found' : 'No Auth Token'}</p>
            </div>
            <button 
              onClick={fetchPageContent}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <FaRedo className="mr-2" /> Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <label htmlFor="pageTitle" className="block text-sm font-medium text-gray-700 mb-1">
                Page Title
              </label>
              <input
                type="text"
                id="pageTitle"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
                className="w-full p-2 border rounded-md shadow-sm"
              />
            </div>

            {viewMode === 'visual' ? (
              <>
                <div className="bg-white shadow-sm rounded-lg p-4 mb-4">
                  <div className="flex flex-wrap gap-2 mb-4 border-b pb-4">
                    <button 
                      className="p-2 bg-gray-100 rounded hover:bg-gray-200" 
                      onClick={() => applyFormatting('bold')}
                      title="Bold"
                    >
                      <span className="font-bold">B</span>
                    </button>
                    <button 
                      className="p-2 bg-gray-100 rounded hover:bg-gray-200" 
                      onClick={() => applyFormatting('italic')}
                      title="Italic"
                    >
                      <span className="italic">I</span>
                    </button>
                    <button 
                      className="p-2 bg-gray-100 rounded hover:bg-gray-200" 
                      onClick={() => applyFormatting('underline')}
                      title="Underline"
                    >
                      <span className="underline">U</span>
                    </button>
                    <div className="relative">
                      <button 
                        className="p-2 bg-gray-100 rounded hover:bg-gray-200 flex items-center" 
                        onClick={() => setShowStyleOptions(!showStyleOptions)}
                        title="Colors"
                      >
                        <FaPalette style={{color: selectedColor}} />
                      </button>
                      {showStyleOptions && (
                        <div className="absolute top-full left-0 mt-1 p-2 bg-white shadow-lg rounded-md z-10 w-48">
                          <div className="flex flex-wrap gap-2 mb-2">
                            {colorPalette.map((color, index) => (
                              <div 
                                key={index}
                                className="w-6 h-6 rounded-full cursor-pointer border border-gray-300"
                                style={{backgroundColor: color}}
                                onClick={() => {
                                  setSelectedColor(color);
                                  applyStyle('foreColor', color);
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <button 
                      className="p-2 bg-gray-100 rounded hover:bg-gray-200" 
                      onClick={() => insertElement('heading')}
                      title="Add Heading"
                    >
                      <FaHeading />
                    </button>
                    <button 
                      className="p-2 bg-gray-100 rounded hover:bg-gray-200" 
                      onClick={() => insertElement('paragraph')}
                      title="Add Paragraph"
                    >
                      <FaFont />
                    </button>
                    <button 
                      className="p-2 bg-gray-100 rounded hover:bg-gray-200" 
                      onClick={() => insertElement('image')}
                      title="Add Image"
                    >
                      <FaImage />
                    </button>
                    <button 
                      className="p-2 bg-gray-100 rounded hover:bg-gray-200" 
                      onClick={() => insertElement('button')}
                      title="Add Button"
                    >
                      Button
                    </button>
                  </div>
                  <div
                    ref={editorRef}
                    className="min-h-[500px] p-4 border rounded-md visual-editor"
                    contentEditable
                    dangerouslySetInnerHTML={{ __html: prepareVisualContent(content) }}
                    onBlur={(e) => setContent(e.currentTarget.innerHTML)}
                    style={{
                      backgroundImage: "repeating-linear-gradient(rgba(0, 0, 0, 0.05) 0px, rgba(0, 0, 0, 0.05) 1px, transparent 1px, transparent 21px)",
                      backgroundPosition: "0px 10px",
                      lineHeight: "20px",
                      padding: "10px"
                    }}
                  />
                </div>
                <div className="mt-4 text-gray-600 text-sm">
                  <p>
                    <strong>Tip:</strong> Select text to format it. Click the buttons above to add elements. Component placeholders represent existing components that will be preserved.
                  </p>
                </div>
              </>
            ) : (
              <div className="bg-white shadow-sm rounded-lg p-4">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[500px] w-full p-4 border rounded-md font-mono text-sm"
                />
              </div>
            )}
          </>
        )}
      </div>
      <style>
        {`
          .component-placeholder {
            background-color: #f8fafc;
            border: 2px dashed #cbd5e1;
            border-radius: 6px;
            padding: 1rem;
            margin: 1rem 0;
            text-align: center;
            color: #64748b;
            font-weight: 500;
          }
          
          .visual-editor {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          }
          
          .visual-editor h1, .visual-editor h2, .visual-editor h3 {
            margin-top: 1rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
            line-height: 1.25;
          }
          
          .visual-editor h1 {
            font-size: 1.875rem;
          }
          
          .visual-editor h2 {
            font-size: 1.5rem;
          }
          
          .visual-editor h3 {
            font-size: 1.25rem;
          }
          
          .visual-editor p {
            margin-bottom: 1rem;
            line-height: 1.5;
          }
          
          .visual-editor img {
            max-width: 100%;
            height: auto;
            margin: 1rem 0;
          }
        `}
      </style>
    </div>
  );
};

export default PageEditor;