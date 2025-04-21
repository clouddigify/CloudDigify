import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSave, FaArrowLeft, FaGithub, FaCode, FaEye } from 'react-icons/fa';

const PageEditor = () => {
  const { pagePath } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [originalContent, setOriginalContent] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [isSaving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [viewMode, setViewMode] = useState('visual'); // 'visual' or 'code'

  // Fetch page content on load
  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const response = await fetch(`/api/content?path=${encodeURIComponent(pagePath)}`);
        if (!response.ok) throw new Error('Failed to fetch page content');
        
        const data = await response.json();
        setContent(data.content);
        setOriginalContent(data.content);
        setPageTitle(data.title || getPageTitleFromPath(pagePath));
      } catch (error) {
        console.error('Error fetching page content:', error);
        // Set some default content if fetch fails
        setContent('<p>Edit your content here...</p>');
        setPageTitle(getPageTitleFromPath(pagePath));
      }
    };

    fetchPageContent();
  }, [pagePath]);

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

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'visual' ? 'code' : 'visual');
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
          <div className="bg-white shadow-sm rounded-lg p-4">
            <div
              className="min-h-[400px] p-4 border rounded-md"
              contentEditable
              dangerouslySetInnerHTML={{ __html: content }}
              onBlur={(e) => setContent(e.currentTarget.innerHTML)}
            />
          </div>
        ) : (
          <div className="bg-white shadow-sm rounded-lg p-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[400px] w-full p-4 border rounded-md font-mono text-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageEditor; 