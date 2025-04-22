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
        // Clean the content for visual editing
        const cleanedContent = prepareVisualContent(data.content);
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

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save content');
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

  // Clean JSX content for visual editing
  const prepareVisualContent = (jsxContent) => {
    if (!jsxContent) return '';
    
    // Replace common React/JSX components with placeholders or simplified HTML
    let cleanedContent = jsxContent
      // Replace self-closing tags with placeholders
      .replace(/<(NavBar|Footer)[^>]*\/>/g, (match, component) => 
        `<div class="component-placeholder">${component} Component</div>`)
      
      // Replace component tags with placeholders
      .replace(/<(NavBar|Footer)[^>]*>([\s\S]*?)<\/\1>/g, (match, component) => 
        `<div class="component-placeholder">${component} Component</div>`)
      
      // Replace motion.div with regular divs
      .replace(/<motion\.div([^>]*)>/g, '<div$1>')
      .replace(/<\/motion\.div>/g, '</div>')
      
      // Convert className to class for the visual editor
      .replace(/className=/g, 'class=')
      
      // Replace framer-motion animation props which are objects
      .replace(/\{[^{}]*\}/g, (match) => {
        // Keep actual content in braces, but remove code-like structures
        if (match.includes(':') || match.includes('function') || match.includes('=>')) {
          return '"..."';
        }
        return match;
      });
    
    return cleanedContent;
  };

  // Prepare content from visual editor for saving
  const prepareContentForSave = (visualContent) => {
    if (!visualContent) return '';
    
    // Convert back to React/JSX format
    let reactContent = visualContent
      // Convert class back to className
      .replace(/class=/g, 'className=')
      
      // Replace regular divs with motion.div if they were converted
      .replace(/<div(.*?)data-motion-div(.*?)>/g, '<motion.div$1$2>')
      .replace(/<\/div>(\s*?)<!-- \/motion\.div -->/g, '</motion.div>');
    
    // If there are significant differences with originalContent structure,
    // we might need to preserve some of the original structure
    if (originalContent.includes('<motion.') && !reactContent.includes('<motion.')) {
      // Try to preserve the motion components from original
      const motionTags = originalContent.match(/<motion\.[^>]*>[\s\S]*?<\/motion\.[^>]*>/g) || [];
      if (motionTags.length > 0) {
        // This is a simplified approach - in a real implementation you might need
        // a more sophisticated merge strategy
        reactContent = motionTags.reduce((content, tag, index) => {
          return content.replace(
            new RegExp(`<div[^>]*>\\s*<!-- motion\\.div placeholder ${index} -->\\s*</div>`), 
            tag
          );
        }, reactContent);
      }
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

  return (
    <div className="page-editor">
      <div className="editor-header">
        <button onClick={handleBack} className="back-button">
          <FaArrowLeft /> Back to Dashboard
        </button>
        <h1>{pageTitle}</h1>
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
              <div className="editor-toolbar">
                <div className="formatting-tools">
                  <button onClick={() => applyFormatting('bold')} title="Bold">B</button>
                  <button onClick={() => applyFormatting('italic')} title="Italic"><i>I</i></button>
                  <button onClick={() => applyFormatting('underline')} title="Underline"><u>U</u></button>
                  <button onClick={() => setShowStyleOptions(!showStyleOptions)} title="Color">
                    <FaPalette style={{ color: selectedColor }} />
                  </button>
                </div>

                <div className="insert-tools">
                  <button onClick={() => insertElement('heading')} title="Insert Heading">
                    <FaHeading />
                  </button>
                  <button onClick={() => insertElement('paragraph')} title="Insert Paragraph">
                    <FaFont />
                  </button>
                  <button onClick={() => insertElement('image')} title="Insert Image">
                    <FaImage />
                  </button>
                  <button onClick={() => insertElement('button')} title="Insert Button">
                    Button
                  </button>
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
    </div>
  );
};

export default PageEditor;