// Generate Table of Contents from headings
document.addEventListener('DOMContentLoaded', () => {
  const tocNav = document.getElementById('tocNav');
  if (!tocNav) return;

  const contentArticle = document.querySelector('.content-article');
  if (!contentArticle) return;

  // Get all headings (h2, h3, h4)
  const headings = contentArticle.querySelectorAll('h2, h3, h4');
  
  if (headings.length === 0) {
    tocNav.innerHTML = '<p style="font-size: 0.85rem; color: var(--text-secondary);">No headings found</p>';
    return;
  }

  // Create TOC items
  const tocItems = [];
  let currentH2 = null;
  let currentH3 = null;

  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }

    const level = parseInt(heading.tagName[1]);
    const text = heading.innerText;

    const item = {
      id: heading.id,
      text: text,
      level: level
    };

    tocItems.push(item);
  });

  // Build TOC HTML
  let tocHtml = '';
  let currentLevel = 0;

  tocItems.forEach((item) => {
    const isActive = window.location.hash === `#${item.id}`;
    
    if (item.level > currentLevel) {
      // Open new list
      tocHtml += '<div>';
      currentLevel = item.level;
    } else if (item.level < currentLevel) {
      // Close list
      for (let i = currentLevel; i > item.level; i--) {
        tocHtml += '</div>';
      }
      currentLevel = item.level;
    }

    const activeClass = isActive ? 'active' : '';
    tocHtml += `<a href="#${item.id}" class="toc-link ${activeClass}" data-level="${item.level}">${item.text}</a>`;
  });

  // Close remaining lists
  for (let i = currentLevel; i >= 2; i--) {
    tocHtml += '</div>';
  }

  tocNav.innerHTML = tocHtml;

  // Add click handlers for TOC links
  const tocLinks = tocNav.querySelectorAll('a.toc-link');
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      
      if (target) {
        // Update active state
        tocLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Smooth scroll
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Update active TOC item on scroll
  function updateActiveTOC() {
    let current = null;
    
    headings.forEach((heading) => {
      const top = heading.getBoundingClientRect().top;
      if (top <= 150) {
        current = heading.id;
      }
    });

    tocLinks.forEach(link => {
      link.classList.remove('active');
    });

    if (current) {
      const activeLink = document.querySelector(`a.toc-link[href="#${current}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }

  // Debounce scroll handler
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveTOC, 100);
  });

  // Initial call
  updateActiveTOC();
});
