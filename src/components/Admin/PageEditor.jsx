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
  
  // Add new state variables for images
  const [showImageSelector, setShowImageSelector] = useState(false);
  const [siteImages, setSiteImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [imageError, setImageError] = useState(null);

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

  // Add editorStyles at the top of the component
  const editorStyles = `
    .page-editor {
      background-color: #f8fafc;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .editor-header {
      background-color: #ffffff;
      padding: 1rem;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      position: sticky;
      top: 0;
      z-index: 10;
    }
    
    .back-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: #f1f5f9;
      border: 1px solid #e2e8f0;
      border-radius: 0.375rem;
      font-weight: 500;
      color: #475569;
      transition: all 0.2s;
    }
    
    .back-button:hover {
      background-color: #e2e8f0;
    }
    
    .page-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0;
    }
    
    .editor-actions {
      display: flex;
      gap: 0.75rem;
    }
    
    .view-toggle, .save-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      font-weight: 500;
      transition: all 0.2s;
    }
    
    .view-toggle {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      color: #64748b;
    }
    
    .view-toggle.active {
      background-color: #f1f5f9;
      color: #1e293b;
    }
    
    .save-button {
      background-color: #3b82f6;
      border: 1px solid #2563eb;
      color: white;
    }
    
    .save-button:hover:not(:disabled) {
      background-color: #2563eb;
    }
    
    .save-button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .save-message {
      padding: 0.75rem;
      text-align: center;
      font-weight: 500;
    }
    
    .save-message.success {
      background-color: #dcfce7;
      color: #166534;
    }
    
    .save-message.error {
      background-color: #fee2e2;
      color: #b91c1c;
    }
    
    .editor-container {
      flex: 1;
      padding: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
    
    .editor-tools {
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 0.5rem;
      padding: 1rem;
      margin-bottom: 1rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }
    
    .toolbar-section {
      flex: 1;
      min-width: 250px;
    }
    
    .toolbar-title {
      font-size: 0.875rem;
      font-weight: 600;
      color: #64748b;
      margin: 0 0 0.75rem 0;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .formatting-tools, .insert-tools {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .tool-button {
      min-width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 0.375rem;
      color: #475569;
      font-weight: 500;
      transition: all 0.2s;
    }
    
    .tool-button:hover {
      background-color: #f1f5f9;
      border-color: #cbd5e1;
    }
    
    .color-palette {
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 0.375rem;
      padding: 0.75rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    
    .color-option {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid transparent;
      transition: transform 0.1s;
    }
    
    .color-option:hover {
      transform: scale(1.1);
    }
    
    .color-option.selected {
      border-color: #0f172a;
      box-shadow: 0 0 0 2px white, 0 0 0 4px #cbd5e1;
    }
    
    .visual-editor {
      background-color: #ffffff;
      min-height: 500px;
      padding: 2rem;
      border: 1px solid #e2e8f0;
      border-radius: 0.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.5;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      overflow-y: auto;
    }
    
    .visual-editor h1 {
      font-size: 2.25rem;
      font-weight: 800;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      line-height: 1.2;
      color: #111827;
    }
    
    .visual-editor h2 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      line-height: 1.3;
      color: #1f2937;
    }
    
    .visual-editor h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      color: #374151;
    }
    
    .visual-editor p {
      margin-bottom: 1rem;
      color: #4b5563;
    }
    
    .visual-editor section {
      margin-bottom: 2rem;
      padding: 1rem;
      border: 1px dashed #cbd5e0;
      border-radius: 0.25rem;
    }
    
    .component-placeholder {
      background-color: #f0f9ff;
      border: 2px dashed #93c5fd;
      border-radius: 0.375rem;
      padding: 1.5rem;
      margin: 1rem 0;
      text-align: center;
      color: #2563eb;
      font-weight: 500;
    }
    
    .code-editor {
      width: 100%;
      min-height: 500px;
      font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
      padding: 1rem;
      border: 1px solid #e2e8f0;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5;
      background-color: #ffffff;
      color: #1e293b;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }
    
    .editor-footer {
      background-color: #ffffff;
      padding: 1rem;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      font-size: 0.875rem;
      color: #64748b;
    }
    
    .github-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .last-saved {
      font-style: italic;
      color: #ef4444;
    }
    
    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem 0;
      color: #64748b;
    }
    
    .loading:before {
      content: '';
      width: 2rem;
      height: 2rem;
      border: 3px solid #e2e8f0;
      border-top-color: #3b82f6;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    .error-details {
      background-color: #fee2e2;
      border: 1px solid #fecaca;
      border-radius: 0.5rem;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      color: #b91c1c;
    }
    
    .error-details button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: #ef4444;
      color: white;
      border: none;
      border-radius: 0.375rem;
      font-weight: 500;
      cursor: pointer;
    }
    
    .error-details button:hover {
      background-color: #dc2626;
    }
  `;

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

      console.log(`Fetching content for path: ${pagePath}`);
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
        // Clean the content for visual editing and strip out any unwanted code elements
        const cleanedContent = removePreamble(prepareVisualContent(data.content));
        setContent(cleanedContent);
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

  // Function to remove code preamble and formatting elements often found at the top of React components
  const removePreamble = (content) => {
    // Replace any raw code structures that might appear at the top of the content
    let cleaned = content
      // Remove any raw code indicators
      .replace(/^home\s*/, '')
      .replace(/^CodeSave Changes\s*/, '')
      .replace(/^B\/I\/U\s*/, '')
      .replace(/^HAD Button\s*/, '')
      // Remove raw React component markers
      .replace(/<Home.*?>/g, '')
      .replace(/<\/Home>/g, '')
      // Remove any other raw code fragments that shouldn't be in the editor
      .replace(/^[\s\S]*?(?=<section|<div|<h1|<p|<motion)/i, '');
    
    // If we've removed too much, go back to the original
    if (!cleaned.trim()) {
      return content;
    }
    
    return cleaned;
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

  // Load site images
  const fetchSiteImages = async () => {
    setLoadingImages(true);
    setImageError(null);
    try {
      const response = await fetch('/api/images');
      
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      
      const data = await response.json();
      setSiteImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
      setImageError('Failed to load images. Please try again.');
    } finally {
      setLoadingImages(false);
    }
  };

  // Modify handleSave to improve error handling
  const handleSave = async () => {
    // Prepare the content for saving - convert from visual editor format back to React format
    const contentToSave = viewMode === 'visual' ? prepareContentForSave(content) : content;
    
    if (contentToSave === originalContent) {
      setSaveMessage('No changes to save');
      setTimeout(() => setSaveMessage(''), 3000);
      return;
    }

    setSaving(true);
    setSaveMessage('Saving...');

    try {
      console.log('Saving content with auth token:', localStorage.getItem('authToken') ? 'Token exists' : 'No token');
      console.log('Content path:', pagePath);
      
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          path: pagePath,
          title: pageTitle,
          content: contentToSave,
          commitMessage: `Update ${pageTitle} content via admin panel`
        })
      });

      // Log response for debugging
      const responseText = await response.text();
      console.log('API Response status:', response.status);
      console.log('API Response text:', responseText);
      
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (e) {
        // If not valid JSON, use text as message
        responseData = { message: responseText || 'Unknown error' };
      }

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to save content');
      }

      setOriginalContent(contentToSave);
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

  // Clean JSX content for visual editing - update this to be more comprehensive
  const prepareVisualContent = (jsxContent) => {
    if (!jsxContent) return '';
    
    console.log('Original content:', jsxContent);
    
    // First, handle special component tags
    let cleanedContent = jsxContent
      // Replace raw JSX comments with HTML comments
      .replace(/{\/\*\s*(.*?)\s*\*\/}/g, '<!-- $1 -->')
      
      // Handle section components
      .replace(/<WhyChooseUs.*?\/>/g, '<div class="component-placeholder">[Why Choose Us Component]</div>')
      .replace(/<Testimonials.*?\/>/g, '<div class="component-placeholder">[Testimonials Component]</div>')
      .replace(/<Partners.*?\/>/g, '<div class="component-placeholder">[Partners Component]</div>')
      .replace(/<QuickContact.*?\/>/g, '<div class="component-placeholder">[Quick Contact Form]</div>')
      
      // Handle HTML-like React components
      .replace(/<motion\.([a-z0-9]+)([^>]*)>/gi, '<div data-motion-component="$1" $2>')
      .replace(/<\/motion\.[a-z0-9]+>/gi, '</div>')
      
      // Handle Link components  
      .replace(/<Link([^>]*)to=["']([^"']*)["']([^>]*)>/g, '<a href="$2" data-react-link="true" $1$3>')
      .replace(/<\/Link>/g, '</a>')
      
      // Convert className to class
      .replace(/className=/g, 'class=')
      
      // Handle simple JSX expressions
      .replace(/{([^{}]*?)}/g, (match, content) => {
        // Skip complex expressions
        if (content.includes('(') || content.includes('=>') || content.includes(':')) {
          return '«' + content + '»';
        }
        // Handle simple variable or literal
        return content;
      });
    
    console.log('Cleaned content:', cleanedContent);
    return cleanedContent;
  };

  // Prepare content from visual editor for saving
  const prepareContentForSave = (visualContent) => {
    if (!visualContent) return '';
    
    // Convert back to React/JSX format
    let reactContent = visualContent
      // Convert class back to className
      .replace(/class=/g, 'className=')
      
      // Convert data-motion-component divs back to motion components
      .replace(/<div data-motion-component="([a-z0-9]+)"([^>]*)>/gi, '<motion.$1$2>')
      .replace(/<\/div><!-- \/motion\.[a-z0-9]+ -->/gi, '</motion.$1>')
      
      // Convert anchors with data-react-link back to Link components
      .replace(/<a href="([^"]*)" data-react-link="true"([^>]*)>/g, '<Link to="$1"$2>')
      .replace(/<\/a><!-- \/Link -->/g, '</Link>')
      
      // Convert HTML comments back to JSX comments
      .replace(/<!-- {\/\*(.*?)\*\/} -->/g, '{/*$1*/}')
      
      // Convert expression markers back to JSX expressions
      .replace(/«([^»]*)»/g, '{$1}');
    
    // Add back any specific components needed
    if (originalContent.includes('<WhyChooseUs') && !reactContent.includes('<WhyChooseUs')) {
      reactContent = reactContent.replace('[Why Choose Us Component]', '<WhyChooseUs />');
    }
    
    if (originalContent.includes('<Testimonials') && !reactContent.includes('<Testimonials')) {
      reactContent = reactContent.replace('[Testimonials Component]', '<Testimonials />');
    }
    
    if (originalContent.includes('<Partners') && !reactContent.includes('<Partners')) {
      reactContent = reactContent.replace('[Partners Component]', '<Partners />');
    }
    
    if (originalContent.includes('<QuickContact') && !reactContent.includes('<QuickContact')) {
      reactContent = reactContent.replace('[Quick Contact Form]', '<QuickContact />');
    }
    
    return reactContent;
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

  // Add a function to handle image insertion
  const handleImageClick = (image) => {
    if (!editorRef.current) return;
    
    // Create image HTML
    const imageHtml = `<img src="${image.url}" alt="${image.description || image.name}" style="max-width: 100%; height: auto;" />`;
    
    // Insert at cursor position or append to editor
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const node = document.createElement('div');
      node.innerHTML = imageHtml;
      range.deleteContents();
      range.insertNode(node.firstChild);
    } else {
      // If no selection, append to editor
      editorRef.current.innerHTML += imageHtml;
    }
    
    // Update content state
    setContent(editorRef.current.innerHTML);
    
    // Close the image selector
    setShowImageSelector(false);
  };

  // Modify the insertElement function to handle image selection
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
        // Instead of inserting a placeholder, show the image selector
        setShowImageSelector(true);
        fetchSiteImages();
        return; // Exit early
      case 'button':
        element = document.createElement('button');
        element.textContent = 'Button Text';
        element.className = 'button';
        element.style.backgroundColor = selectedColor;
        element.style.color = '#ffffff';
        element.style.padding = '10px 20px';
        element.style.border = 'none';
        element.style.borderRadius = '4px';
        element.style.cursor = 'pointer';
        break;
      default:
        return;
    }
    
    // Insert at cursor position
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(element);
      
      // Move cursor after inserted element
      range.setStartAfter(element);
      range.setEndAfter(element);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      // If no selection, append to editor
      editorRef.current.appendChild(element);
    }
    
    // Update content state after insertion
    setTimeout(() => {
      setContent(editorRef.current.innerHTML);
    }, 100);
  };

  // Toggle between visual and code editing modes
  const toggleViewMode = () => {
    if (viewMode === 'visual') {
      // Switching to code view - use original content format
      setViewMode('code');
    } else {
      // Switching to visual view - clean content for editing
      const cleanedContent = prepareVisualContent(content);
      setContent(cleanedContent);
      setViewMode('visual');
    }
  };

  // Handle content changes in code view mode
  const handleCodeChange = (e) => {
    setContent(e.target.value);
  };

  // Handle content changes in visual mode
  const handleVisualContentChange = () => {
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  // Handle back navigation to dashboard
  const handleBack = () => {
    navigate('/admin/dashboard');
  };

  // Add this to the component's JSX, right after the editor container
  const imageSelector = showImageSelector && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Select an Image</h3>
          <button 
            onClick={() => setShowImageSelector(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        
        {loadingImages ? (
          <div className="text-center py-8">Loading images...</div>
        ) : imageError ? (
          <div className="text-center py-8 text-red-600">{imageError}</div>
        ) : siteImages.length === 0 ? (
          <div className="text-center py-8">
            <p>No images found.</p>
            <button 
              onClick={() => navigate('/admin/dashboard')}
              className="mt-2 text-blue-600 hover:underline"
            >
              Upload images in Dashboard
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {siteImages.map(image => (
              <div 
                key={image.id}
                className="border rounded overflow-hidden cursor-pointer hover:border-blue-500"
                onClick={() => handleImageClick(image)}
              >
                <div className="h-32 bg-gray-100 flex items-center justify-center">
                  <img 
                    src={image.url} 
                    alt={image.description || image.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-2">
                  <div className="text-sm truncate">{image.name}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="page-editor">
      <style>{editorStyles}</style>
      
      <div className="editor-header">
        <button onClick={handleBack} className="back-button">
          <FaArrowLeft /> Back to Dashboard
        </button>
        <h1 className="page-title">{pageTitle}</h1>
        <div className="editor-actions">
          <button 
            className={`view-toggle ${viewMode === 'visual' ? 'active' : ''}`} 
            onClick={toggleViewMode}
            title={viewMode === 'visual' ? 'Switch to Code View' : 'Switch to Visual View'}
          >
            {viewMode === 'visual' ? <FaCode /> : <FaEye />}
            {viewMode === 'visual' ? ' Code' : ' Visual'}
          </button>
          <button 
            className="save-button" 
            onClick={handleSave} 
            disabled={isSaving || content === originalContent}
          >
            <FaSave /> {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
      
      {saveMessage && (
        <div className={`save-message ${saveMessage.includes('Error') ? 'error' : 'success'}`}>
          {saveMessage}
        </div>
      )}
      
      {errorDetails && (
        <div className="error-details">
          <p><strong>Error:</strong> {errorDetails.message}</p>
          <p><strong>Page Path:</strong> {errorDetails.path}</p>
          <button onClick={fetchPageContent}>Retry</button>
        </div>
      )}
      
      {isLoading ? (
        <div className="loading">Loading content...</div>
      ) : (
        <div className="editor-container">
          {viewMode === 'visual' && (
            <>
              <div className="editor-tools">
                <div className="toolbar-section">
                  <h3 className="toolbar-title">Format Text</h3>
                  <div className="formatting-tools">
                    <button onClick={() => applyFormatting('bold')} title="Bold" className="tool-button">
                      <strong>B</strong>
                    </button>
                    <button onClick={() => applyFormatting('italic')} title="Italic" className="tool-button">
                      <i>I</i>
                    </button>
                    <button onClick={() => applyFormatting('underline')} title="Underline" className="tool-button">
                      <u>U</u>
                    </button>
                    <button 
                      onClick={() => setShowStyleOptions(!showStyleOptions)} 
                      title="Change Text Color" 
                      className="tool-button"
                    >
                      <FaPalette style={{ color: selectedColor }} />
                    </button>
                  </div>
                </div>

                <div className="toolbar-section">
                  <h3 className="toolbar-title">Insert Content</h3>
                  <div className="insert-tools">
                    <button onClick={() => insertElement('heading')} title="Insert Heading" className="tool-button">
                      <FaHeading />
                    </button>
                    <button onClick={() => insertElement('paragraph')} title="Insert Paragraph" className="tool-button">
                      <FaFont />
                    </button>
                    <button onClick={() => insertElement('image')} title="Insert Image" className="tool-button">
                      <FaImage />
                    </button>
                    <button onClick={() => insertElement('button')} title="Insert Button" className="tool-button">
                      Button
                    </button>
                  </div>
                </div>
              </div>
              
              {showStyleOptions && (
                <div className="color-palette">
                  {colorPalette.map(color => (
                    <div 
                      key={color}
                      className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        setSelectedColor(color);
                        applyStyle('foreColor', color);
                      }}
                    />
                  ))}
                </div>
              )}
              
              <div
                ref={editorRef}
                className="visual-editor"
                contentEditable
                dangerouslySetInnerHTML={{ __html: content }}
                onInput={handleVisualContentChange}
              />
            </>
          )}
          
          {viewMode === 'code' && (
            <textarea
              className="code-editor"
              value={content}
              onChange={handleCodeChange}
              spellCheck={false}
            />
          )}
        </div>
      )}
      
      <div className="editor-footer">
        <div className="github-info">
          <FaGithub /> Changes are committed to GitHub
        </div>
        <div className="last-saved">
          {originalContent !== content && 'Unsaved changes'}
        </div>
      </div>
      
      {/* Image selector modal */}
      {imageSelector}
    </div>
  );
};

export default PageEditor;