/**
 * H1 Tag Checker
 * 
 * This script validates that each page has exactly one H1 tag and logs any issues.
 * Run with 'node tools/check-h1-tags.js' after building the site.
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Configuration
const BUILD_DIR = path.resolve(__dirname, '../build');
const PAGES_DIR = path.resolve(__dirname, '../src/components/pages');
const RESULTS_FILE = path.resolve(__dirname, '../h1-check-results.txt');

// Initialize results
let results = '# H1 Tag Check Results\n\n';
let hasErrors = false;

/**
 * Check a component file for H1 tags
 * @param {string} filePath - Path to the component file
 */
function checkComponentFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Count occurrences of <h1 in the file
    const h1Count = (content.match(/<h1[^>]*>/g) || []).length;
    
    const fileName = path.basename(filePath);
    
    if (h1Count === 0) {
      results += `⚠️ ${fileName}: No H1 tag found\n`;
      hasErrors = true;
    } else if (h1Count > 1) {
      results += `❌ ${fileName}: Multiple H1 tags (${h1Count}) found\n`;
      hasErrors = true;
    } else {
      // Extract H1 content using a simple regex
      const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/s);
      const h1Content = h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim() : 'Unknown';
      results += `✅ ${fileName}: One H1 tag found - "${h1Content}"\n`;
    }
  } catch (error) {
    results += `⚠️ Error checking ${path.basename(filePath)}: ${error.message}\n`;
    hasErrors = true;
  }
}

/**
 * Check all component files
 */
function checkAllComponents() {
  results += '## Component Files\n\n';
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx')) {
        checkComponentFile(filePath);
      }
    });
  }
  
  scanDirectory(PAGES_DIR);
}

// Run the checks
checkAllComponents();

// Add summary
results += '\n## Summary\n\n';
results += hasErrors 
  ? '⚠️ Problems were found with H1 tags. Please review and fix the issues above.\n'
  : '✅ All pages have exactly one H1 tag!\n';

// Output the results
console.log(results);
fs.writeFileSync(RESULTS_FILE, results);

console.log(`\nResults saved to ${RESULTS_FILE}`);
console.log(hasErrors 
  ? '⚠️ Problems were found! Review the results file.'
  : '✅ All checks passed!'); 