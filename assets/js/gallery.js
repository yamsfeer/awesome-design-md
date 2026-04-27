// State
let designsData = [];
let currentCategory = 'all';
let currentSearch = '';
let currentTheme = 'light';
let currentDesign = null;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const designsGrid = document.getElementById('designsGrid');
const resultsCount = document.getElementById('resultsCount');
const themePills = document.querySelectorAll('.theme-pill');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const previewIframe = document.getElementById('previewIframe');
const colorsGrid = document.getElementById('colorsGrid');
const fontsList = document.getElementById('fontsList');
const designMdContent = document.getElementById('designMdContent');
const tabButtons = document.querySelectorAll('.tab-btn');
const categoryButtons = document.querySelectorAll('.category-btn');

// Initialize - 直接使用嵌入的数据
function init() {
  if (typeof DESIGNS_DATA === 'undefined') {
    designsGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        </div>
        <div class="empty-state-text">Failed to load designs<br><small>Please run: node scripts/generate-data.js</small></div>
      </div>
    `;
    return;
  }

  designsData = DESIGNS_DATA;
  updateCounts();
  renderDesigns();
  setupEventListeners();
}

// Update counts
function updateCounts() {
  document.getElementById('countAll').textContent = designsData.length;

  const counts = {
    'AI & Machine Learning': 0,
    'Developer Tools & Platforms': 0,
    'Infrastructure & Cloud': 0,
    'Design & Productivity': 0,
    'Fintech & Crypto': 0,
    'Enterprise & Consumer': 0,
    'Car Brands': 0
  };

  designsData.forEach(design => {
    if (counts[design.category] !== undefined) {
      counts[design.category]++;
    }
  });

  document.getElementById('countAI').textContent = counts['AI & Machine Learning'];
  document.getElementById('countDev').textContent = counts['Developer Tools & Platforms'];
  document.getElementById('countInfra').textContent = counts['Infrastructure & Cloud'];
  document.getElementById('countDesign').textContent = counts['Design & Productivity'];
  document.getElementById('countFintech').textContent = counts['Fintech & Crypto'];
  document.getElementById('countEnterprise').textContent = counts['Enterprise & Consumer'];
  document.getElementById('countCar').textContent = counts['Car Brands'];
}

// Filter designs
function filterDesigns() {
  return designsData.filter(design => {
    const matchesCategory = currentCategory === 'all' || design.category === currentCategory;
    const matchesSearch = currentSearch === '' ||
      design.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      design.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
      design.category.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

// Render designs
function renderDesigns() {
  const filtered = filterDesigns();
  resultsCount.textContent = `${filtered.length} design${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    designsGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
        <div class="empty-state-text">No designs found</div>
      </div>
    `;
    return;
  }

  designsGrid.innerHTML = filtered.map(design => `
    <article class="design-card" data-slug="${design.slug}">
      <div class="card-preview">
        <iframe src="${currentTheme === 'light' ? design.previewPath : design.previewDarkPath}" loading="lazy"></iframe>
      </div>
      <div class="card-info">
        <div class="card-category">${design.category}</div>
        <h3 class="card-name">${design.name}</h3>
        <p class="card-description">${design.description}</p>
      </div>
      ${design.colors.length > 0 ? `
        <div class="card-colors">
          ${design.colors.slice(0, 5).map(color => `
            <div class="color-swatch" style="background-color: ${color.value}" title="${color.name}: ${color.value}"></div>
          `).join('')}
        </div>
      ` : ''}
    </article>
  `).join('');

  // Add click listeners
  document.querySelectorAll('.design-card').forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.dataset.slug;
      const design = designsData.find(d => d.slug === slug);
      if (design) {
        openModal(design);
      }
    });
  });
}

// Open modal
function openModal(design) {
  currentDesign = design;
  modalTitle.textContent = design.name;
  previewIframe.src = currentTheme === 'light' ? design.previewPath : design.previewDarkPath;

  // Render colors
  if (design.colors.length > 0) {
    colorsGrid.innerHTML = design.colors.map(color => `
      <div class="color-card">
        <div class="color-preview" style="background-color: ${color.value}"></div>
        <div class="color-info">
          <div class="color-name">${color.name}</div>
          <div class="color-value">${color.value}</div>
        </div>
      </div>
    `).join('');
  } else {
    colorsGrid.innerHTML = '<p style="color: var(--text-tertiary);">No color data available</p>';
  }

  // Render fonts
  if (design.fonts.length > 0) {
    fontsList.innerHTML = design.fonts.map(font => `
      <div class="font-card">
        <div class="font-name">${font.name}</div>
        <div class="font-value">${font.value}</div>
        <div class="font-sample">The quick brown fox jumps over the lazy dog</div>
      </div>
    `).join('');
  } else {
    fontsList.innerHTML = '<p style="color: var(--text-tertiary);">No font data available</p>';
  }

  // Load DESIGN.md (使用嵌入的数据)
  loadDesignMd(design);

  // Reset to first tab
  switchTab('preview');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  previewIframe.src = '';
}

// Load DESIGN.md (使用嵌入的数据，无需 fetch)
function loadDesignMd(design) {
  if (design.designMd && design.designMd.trim()) {
    designMdContent.textContent = design.designMd;
  } else {
    designMdContent.innerHTML = '<p style="color: var(--text-tertiary);">DESIGN.md not available</p>';
  }
}

// Switch tab
function switchTab(tabName) {
  tabButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.toggle('active', content.id === `tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
  });
}

// Set theme
function setTheme(theme) {
  currentTheme = theme;

  // Update pills
  themePills.forEach(pill => {
    pill.classList.toggle('active', pill.dataset.theme === theme);
  });

  // Update iframe in modal if open
  if (currentDesign) {
    previewIframe.src = currentTheme === 'light' ? currentDesign.previewPath : currentDesign.previewDarkPath;
  }

  renderDesigns();
}

// Setup event listeners
function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderDesigns();
  });

  // Category buttons
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderDesigns();
    });
  });

  // Theme pills
  themePills.forEach(pill => {
    pill.addEventListener('click', () => {
      setTheme(pill.dataset.theme);
    });
  });

  // Modal close
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Tab buttons
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // Copy Design.md
  const copyBtn = document.getElementById('copyDesignMd');
  copyBtn.addEventListener('click', () => {
    if (!currentDesign || !currentDesign.designMd) return;
    navigator.clipboard.writeText(currentDesign.designMd).then(() => {
      copyBtn.classList.add('copied');
      setTimeout(() => copyBtn.classList.remove('copied'), 2000);
    });
  });
}

// Start
init();
