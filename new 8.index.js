<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AdobeStocksy - Stock Image Search</title>

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-R64FNG54EZ');
       </script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <style>
        .keywords-container {
            max-height: 80px;
            overflow-y: auto;
            padding: 5px;
            border-radius: 4px;
            background-color: #f8f9fa;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
        }
        
        /* Custom scrollbar for keywords container */
        .keywords-container::-webkit-scrollbar {
            width: 6px;
        }
        
        .keywords-container::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
        }
        
        .keywords-container::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 3px;
        }
        
        .keywords-container::-webkit-scrollbar-thumb:hover {
            background: #999;
        }
        
        .keywords-container .badge {
            margin-right: 4px;
            margin-bottom: 4px;
            font-weight: normal;
        }
        
        .copy-keywords {
            padding: 0px 6px;
            font-size: 0.8rem;
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Main Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="/">AdobeStocksy</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    
                    
                </ul>
                <ul class="navbar-nav">
                    
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                    
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main>
        <div class="container mt-4">
            <!-- Alerts -->
            

            <!-- Hero Section -->
            <div class="row mb-5">
                <div class="col-md-12 text-center">
                    <h1 class="display-4 mt-5">Find the perfect stock images</h1>
                    <p class="lead">Search millions of high-quality stock photos, illustrations, and vectors</p>
                    
                    <!-- Search Bar -->
                    <div class="row mb-5">
                        <div class="col-md-12">
                            <form id="searchForm" class="d-flex flex-column align-items-center">
                                <div class="input-group mb-3 w-75">
                                    <input type="text" id="searchQuery" name="q" class="form-control" placeholder="Search for stock images..." aria-label="Search" aria-describedby="button-search" required>
                                    <button class="btn btn-primary" type="submit" id="button-search">Search</button>
                                </div>
                                
                                <div class="w-75 mb-3">
                                    <div class="d-flex justify-content-end">
                                        <button type="button" class="btn btn-sm btn-outline-secondary" id="toggleAdvancedFilters">
                                            <i class="fas fa-sliders-h"></i> Advanced Filters
                                        </button>
                                    </div>
                                </div>
                                
                                <!-- Advanced Filters -->
                                <div id="advancedFilters" class="w-75 mb-3" style="display: none;">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group mb-3">
                                                        <label for="imageType">Content Type</label>
                                                        <select class="form-select" id="imageType" name="type">
                                                            <option value="any" selected>Any Type</option>
                                                            <option value="photo">Photos</option>
                                                            <option value="illustration">Illustrations</option>
                                                            <option value="vector">Vectors</option>
                                                            <option value="video">Videos</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group mb-3">
                                                        <label for="orientation">Orientation</label>
                                                        <select class="form-select" id="orientation" name="orientation">
                                                            <option value="" selected>Any Orientation</option>
                                                            <option value="horizontal">Horizontal</option>
                                                            <option value="vertical">Vertical</option>
                                                            <option value="square">Square</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group mb-3">
                                                        <label for="premium">Content Type</label>
                                                        <select class="form-select" id="premium" name="premium">
                                                            <option value="" selected>All Content</option>
                                                            <option value="1">Premium Only</option>
                                                            <option value="0">Free Only</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <!-- Google Sign-in -->
                    
                        <div class="mt-4">
                            <a href="/auth/google" class="btn btn-outline-dark">
                                <i class="fab fa-google"></i> Sign in with Google to begin
                            </a>
                        </div>
                    
                </div>
            </div>
            
            <!-- Recent Searches Section -->
            
            
            <!-- Search Results -->
            <div class="row" id="searchResults">
                <!-- Search results will be displayed here -->
            </div>
            
            <!-- Premium Upgrade Banner -->
            
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-light py-4 mt-5">
        <div class="container">
            <!-- MAIN FOOTER IDENTIFIER -->
            <div class="row">
                <div class="col-md-6">
                    <h5>AdobeStocksy</h5>
                    <p>contact via WhatsApp only: +923248259877.</p>
                </div>
                <div class="col-md-3">
                    <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/terms">Terms</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>Connect</h5>
                    <div class="social-icons">
                        <a href="#" class="text-dark me-2"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-dark me-2"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-dark me-2"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <hr>
            <div class="text-center">
                <p>&copy; 2023-2025 AdobeStocksy. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/js/main.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const searchForm = document.getElementById('searchForm');
            const recentSearchesSection = document.getElementById('recentSearchesSection');
            const recentSearchesList = document.getElementById('recentSearchesList');
            const clearRecentSearchesBtn = document.getElementById('clearRecentSearches');
            const toggleAdvancedFiltersBtn = document.getElementById('toggleAdvancedFilters');
            const advancedFiltersSection = document.getElementById('advancedFilters');
            
            // Fetch recent searches if user is authenticated
            if (recentSearchesSection) {
                fetchRecentSearches();
            }
            
            // Handle clear recent searches button
            if (clearRecentSearchesBtn) {
                clearRecentSearchesBtn.addEventListener('click', function() {
                    // Clear the recent searches display
                    if (recentSearchesList) {
                        recentSearchesList.innerHTML = '';
                        recentSearchesSection.style.display = 'none';
                    }
                });
            }
            
            // Toggle advanced filters
            if (toggleAdvancedFiltersBtn && advancedFiltersSection) {
                toggleAdvancedFiltersBtn.addEventListener('click', function() {
                    if (advancedFiltersSection.style.display === 'none') {
                        advancedFiltersSection.style.display = 'block';
                        toggleAdvancedFiltersBtn.innerHTML = '<i class="fas fa-times"></i> Hide Filters';
                    } else {
                        advancedFiltersSection.style.display = 'none';
                        toggleAdvancedFiltersBtn.innerHTML = '<i class="fas fa-sliders-h"></i> Advanced Filters';
                    }
                });
            }
            
            // Function to fetch recent searches
            async function fetchRecentSearches() {
                try {
                    const response = await fetch('/api/recent-searches');
                    if (response.status === 401) {
                        // User not authenticated, don't show recent searches
                        return;
                    }
                    
                    const data = await response.json();
                    if (data.recentSearches && data.recentSearches.length > 0) {
                        displayRecentSearches(data.recentSearches);
                    }
                } catch (error) {
                    console.error('Error fetching recent searches:', error);
                }
            }
            
            // Function to display recent searches
            function displayRecentSearches(searches) {
                if (!recentSearchesList) return;
                
                recentSearchesList.innerHTML = '';
                
                searches.forEach(query => {
                    const searchBadge = document.createElement('button');
                    searchBadge.className = 'btn btn-sm btn-outline-primary';
                    searchBadge.textContent = query;
                    searchBadge.addEventListener('click', function() {
                        // Fill the search box with this query
                        const searchInput = document.getElementById('searchQuery');
                        if (searchInput) {
                            searchInput.value = query;
                            // Trigger search
                            const submitEvent = new Event('submit');
                            searchForm.dispatchEvent(submitEvent);
                        }
                    });
                    
                    recentSearchesList.appendChild(searchBadge);
                });
                
                // Show the recent searches section
                recentSearchesSection.style.display = 'block';
            }
            
            if (searchForm) {
                console.log('Search form found, attaching event listener');
                
                searchForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    console.log('Search form submitted');
                    e.preventDefault();
                    const searchInput = document.getElementById('searchQuery');
                    const searchQuery = searchInput.value.trim();
                    
                    if (!searchQuery) return;
                    
                    // Show loading state
                    const searchButton = document.getElementById('button-search');
                    const searchResults = document.getElementById('searchResults');
                    searchButton.disabled = true;
                    searchButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Searching...';
                    searchResults.innerHTML = '<div class="col-12 text-center"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div></div>';
                    
                    // Collect filter parameters
                    const imageType = document.getElementById('imageType')?.value || 'any';
                    const orientation = document.getElementById('orientation')?.value || '';
                    const premium = document.getElementById('premium')?.value || '';
                    
                    // Build query string with filters
                    let queryString = `/api/search?q=${encodeURIComponent(searchQuery)}`;
                    if (imageType !== 'any') queryString += `&type=${encodeURIComponent(imageType)}`;
                    if (orientation) queryString += `&orientation=${encodeURIComponent(orientation)}`;
                    if (premium !== '') queryString += `&premium=${encodeURIComponent(premium)}`;
                    
                    try {
                        const response = await fetch(queryString);
                        const data = await response.json();
                        console.log('API response status:', response.status);
                        
                        if (response.status !== 200) {
                            console.error('API error:', data.error);
                            searchResults.innerHTML = `<div class="col-12 text-center"><div class="alert alert-danger">${data.error || 'Search failed'}</div></div>`;
                            return;
                        }
                        
                        // Check if we have valid results
                        const results = data.results || [];
                        const resultCount = results.length;
                        
                        if (resultCount === 0) {
                            console.log('No results found');
                            searchResults.innerHTML = `
                                <div class="col-12 text-center">
                                    <div class="alert alert-info">
                                        <i class="fas fa-info-circle"></i> No results found for "${searchQuery}". Try a different search term.
                                    </div>
                                </div>`;
                            return;
                        }
                        
                        // Display results
                        console.log('Displaying', resultCount, 'results');
                        
                        // Show total results count and sort options
                        searchResults.innerHTML = `
                            <div class="col-12 mb-3">
                                <div class="alert alert-info d-flex justify-content-between align-items-center">
                                    <div>
                                        <i class="fas fa-info-circle"></i> Found <strong>${resultCount}</strong> results for "${searchQuery}"
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <label for="sortOptions" class="me-2 mb-0">Sort by:</label>
                                        <select id="sortOptions" class="form-select form-select-sm" style="width: auto;">
                                            <option value="relevance" selected>Relevance</option>
                                            <option value="downloads">Most Downloads</option>
                                            <option value="date">Most Recent</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        `;
                        
                        // Refresh recent searches after successful search
                        if (recentSearchesSection) {
                            fetchRecentSearches();
                        }
                        
                        // Store the original search results data and make a copy for sorting
                        const originalData = [...results];
                        
                        // Function to render search results based on current data
                        function renderSearchResults(resultsData) {
                            // Clear existing results (except the header with sort dropdown)
                            const header = searchResults.querySelector('.col-12.mb-3');
                            searchResults.innerHTML = '';
                            if (header) searchResults.appendChild(header);
                            
                            // Ensure we're working with an array
                            const items = Array.isArray(resultsData) ? resultsData : [];
                            
                            // Add results to the page
                            items.forEach(item => {
                                const col = document.createElement('div');
                                col.className = 'col-md-4 col-lg-3 mb-4';
                                
                                // Create a unique ID for each image's keywords container
                                const keywordsContainerId = `keywords-${item.id}`;
                                
                                // Safely escape HTML and handle missing values
                                const safeTitle = item.title ? String(item.title).replace(/[&<>"']/g, 
                                    tag => ({
                                        '&': '&amp;',
                                        '<': '&lt;',
                                        '>': '&gt;',
                                        '"': '&quot;',
                                        "'": '&#39;'
                                    }[tag] || tag)) : 'Untitled';
                                
                                const safeThumbnail = item.thumbnail ? String(item.thumbnail).replace(/"/g, '&quot;') : 'https://via.placeholder.com/300x200?text=No+Image';
                                const safeKeywords = Array.isArray(item.keywords) ? item.keywords : [];
                                const safeCategory = item.category ? String(item.category).replace(/[&<>"']/g, 
                                    tag => ({
                                        '&': '&amp;',
                                        '<': '&lt;',
                                        '>': '&gt;',
                                        '"': '&quot;',
                                        "'": '&#39;'
                                    }[tag] || tag)) : 'Uncategorized';
                                
                                col.innerHTML = `
                                    <div class="card h-100">
                                        <img src="${safeThumbnail}" class="card-img-top" alt="${safeTitle}" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x200?text=Image+Not+Available';">
                                        <div class="card-body">
                                            <h5 class="card-title">${safeTitle}</h5>
                                            <p class="card-text small">
                                                <i class="fas fa-download"></i> ${item.nb_downloads || 0} downloads<br>
                                                <i class="fas fa-tag"></i> ${safeCategory}<br>
                                                <i class="fas fa-id-card"></i> ID: ${item.id || 'N/A'}<br>
                                                <i class="fas fa-user"></i> Creator: ${item.creator_name || 'Unknown'}<br>
                                                <i class="fas fa-calendar-alt"></i> ${item.creation_date ? new Date(item.creation_date).toLocaleDateString() : 'N/A'}
                                            </p>
                                            <div class="mt-2">
                                                <div class="d-flex justify-content-between align-items-center mb-1">
                                                    <span class="text-muted small">Keywords:</span>
                                                    <button class="btn btn-sm btn-outline-secondary copy-keywords" data-keywords="${safeKeywords.join(', ')}" title="Copy keywords">
                                                        <i class="fas fa-copy"></i>
                                                    </button>
                                                </div>
                                                <div id="${keywordsContainerId}" class="keywords-container">
                                                    ${safeKeywords.length > 0 ? 
                                                        safeKeywords.map(keyword => 
                                                            `<span class="badge bg-light text-dark me-1 mb-1">${keyword}</span>`
                                                        ).join('') : 
                                                        '<span class="text-muted small">No keywords available</span>'
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer bg-white">
                                            <small class="text-muted">By: ${item.creator_name ? String(item.creator_name).replace(/[&<>"']/g, 
                                                tag => ({
                                                    '&': '&amp;',
                                                    '<': '&lt;',
                                                    '>': '&gt;',
                                                    '"': '&quot;',
                                                    "'": '&#39;'
                                                }[tag] || tag)) : 'Unknown'}</small>
                                        </div>
                                    </div>
                                `;
                                
                                searchResults.appendChild(col);
                            });
                            
                            // Add event listeners for copy keyword buttons
                            document.querySelectorAll('.copy-keywords').forEach(button => {
                                button.addEventListener('click', function(e) {
                                    e.preventDefault();
                                    const keywords = this.getAttribute('data-keywords');
                                    
                                    // Copy to clipboard
                                    navigator.clipboard.writeText(keywords).then(() => {
                                        // Show success feedback
                                        const originalText = this.innerHTML;
                                        this.innerHTML = '<i class="fas fa-check"></i>';
                                        this.classList.remove('btn-outline-secondary');
                                        this.classList.add('btn-success');
                                        
                                        // Reset after 2 seconds
                                        setTimeout(() => {
                                            this.innerHTML = originalText;
                                            this.classList.remove('btn-success');
                                            this.classList.add('btn-outline-secondary');
                                        }, 2000);
                                    }).catch(err => {
                                        console.error('Failed to copy: ', err);
                                        alert('Failed to copy keywords to clipboard');
                                    });
                                });
                            });
                        }
                        
                        // Initial render with original data
                        renderSearchResults(originalData);
                        
                        // Add event listener for sort dropdown
                        const sortOptions = document.getElementById('sortOptions');
                        if (sortOptions) {
                            sortOptions.addEventListener('change', function() {
                                const sortBy = this.value;
                                let sortedData = [...originalData];
                                
                                // Sort data based on selected option
                                if (sortBy === 'downloads') {
                                    sortedData.sort((a, b) => (b.nb_downloads || 0) - (a.nb_downloads || 0));
                                } else if (sortBy === 'date') {
                                    sortedData.sort((a, b) => {
                                        const dateA = a.creation_date ? new Date(a.creation_date).getTime() : 0;
                                        const dateB = b.creation_date ? new Date(b.creation_date).getTime() : 0;
                                        return dateB - dateA;
                                    });
                                }
                                // For 'relevance', use the original order (no sorting needed)
                                
                                // Re-render results with sorted data
                                renderSearchResults(sortedData);
                            });
                        }
                        
                        // Reset search button state
                        searchButton.disabled = false;
                        searchButton.innerHTML = 'Search';
                        
                    } catch (error) {
                        console.error('Search error:', error);
                        searchResults.innerHTML = '<div class="col-12 text-center"><div class="alert alert-danger">Error performing search: ' + error.message + '</div></div>';
                        // Reset search button on error
                        searchButton.disabled = false;
                        searchButton.innerHTML = 'Search';
                    }
                });
            } else {
                console.error('Search form not found on page');
            }
        });
    </script>
</body>
</html>
