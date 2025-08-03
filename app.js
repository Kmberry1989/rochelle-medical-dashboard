// Medical Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeCharts();
    initializeTabs();
    initializeInsights();
    initializeQueryTool();
    initializeVitalsLog();
});

// Chart initialization
function initializeCharts() {
    // Chart colors from design system
    const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];
    
    // Ferritin Chart
    const ferritinCtx = document.getElementById('ferritinChart');
    if (ferritinCtx) {
        new Chart(ferritinCtx, {
            type: 'line',
            data: {
                labels: ['May 2024', 'Jan 2025'],
                datasets: [{
                    label: 'Ferritin (ng/mL)',
                    data: [9, 12],
                    borderColor: chartColors[0],
                    backgroundColor: chartColors[0] + '20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Normal Range (Min)',
                    data: [16, 16],
                    borderColor: '#94A3B8',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Goal: >75 ng/mL'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 80,
                        title: {
                            display: true,
                            text: 'ng/mL'
                        }
                    }
                }
            }
        });
    }

    // Platelet Chart
    const plateletCtx = document.getElementById('plateletChart');
    if (plateletCtx) {
        new Chart(plateletCtx, {
            type: 'line',
            data: {
                labels: ['May 2024', 'Jan 2025'],
                datasets: [{
                    label: 'Platelets (x10³/μL)',
                    data: [553, 491],
                    borderColor: chartColors[1],
                    backgroundColor: chartColors[1] + '20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Normal Range (Max)',
                    data: [400, 400],
                    borderColor: '#94A3B8',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Normal: 140-400 x10³/μL'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 300,
                        max: 600,
                        title: {
                            display: true,
                            text: 'x10³/μL'
                        }
                    }
                }
            }
        });
    }

    // Vitamin D Chart
    const vitaminDCtx = document.getElementById('vitaminDChart');
    if (vitaminDCtx) {
        new Chart(vitaminDCtx, {
            type: 'line',
            data: {
                labels: ['May 2024', 'Jan 2025'],
                datasets: [{
                    label: 'Vitamin D (ng/mL)',
                    data: [17, 24],
                    borderColor: chartColors[2],
                    backgroundColor: chartColors[2] + '20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Optimal Range (Min)',
                    data: [40, 40],
                    borderColor: '#94A3B8',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Goal: >40 ng/mL'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 50,
                        title: {
                            display: true,
                            text: 'ng/mL'
                        }
                    }
                }
            }
        });
    }

    // CPAP Usage Chart
    const cpapCtx = document.getElementById('cpapChart');
    if (cpapCtx) {
        new Chart(cpapCtx, {
            type: 'bar',
            data: {
                labels: ['Last Night', 'Last Week Avg', 'Last 30 Days', 'Last 6 Months'],
                datasets: [{
                    label: 'CPAP Usage (hours)',
                    data: [6.8, 5.53, 4.6, 4.45],
                    backgroundColor: [
                        chartColors[0] + '80',
                        chartColors[1] + '80',
                        chartColors[2] + '80',
                        chartColors[3] + '80'
                    ],
                    borderColor: [
                        chartColors[0],
                        chartColors[1],
                        chartColors[2],
                        chartColors[3]
                    ],
                    borderWidth: 2
                }, {
                    label: 'Target (7+ hours)',
                    data: [7, 7, 7, 7],
                    type: 'line',
                    borderColor: '#94A3B8',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Compliance: 85/98 days (86.7%)'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 10,
                        title: {
                            display: true,
                            text: 'Hours'
                        }
                    }
                }
            }
        });
    }
}

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => {
                panel.classList.add('hidden');
                panel.classList.remove('active');
            });
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.remove('hidden');
                targetPanel.classList.add('active');
            }
        });
    });
}

// Clinical insights expandable functionality
function initializeInsights() {
    const insightToggles = document.querySelectorAll('.insight-toggle');
    
    insightToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('data-target');
            const content = document.getElementById(targetId);
            const icon = this.querySelector('.toggle-icon');
            
            if (!content) {
                console.error('Content element not found:', targetId);
                return;
            }
            
            // Toggle the content visibility
            if (content.classList.contains('hidden')) {
                // Show content
                content.classList.remove('hidden');
                this.classList.add('active');
                if (icon) icon.textContent = '−';
            } else {
                // Hide content
                content.classList.add('hidden');
                this.classList.remove('active');
                if (icon) icon.textContent = '+';
            }
        });
    });
}

// AI Query Tool functionality
function initializeQueryTool() {
    const queryInput = document.getElementById('query-input');
    const submitButton = document.getElementById('submit-query');
    const responseDiv = document.getElementById('query-response');
    const responseContent = document.getElementById('response-content');

    if (!queryInput || !submitButton || !responseDiv || !responseContent) {
        console.error('Query tool elements not found');
        return;
    }

    // Prevent default form behavior and focus issues
    queryInput.addEventListener('focus', function(e) {
        e.stopPropagation();
    });

    queryInput.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const query = queryInput.value.trim();
        
        if (!query) {
            showQueryMessage('Please enter a question first.', 'error');
            return;
        }

        // Show loading state
        submitButton.textContent = 'Processing...';
        submitButton.disabled = true;

        // Simulate API call with setTimeout
        setTimeout(() => {
            const response = generateMockResponse(query);
            
            responseContent.innerHTML = response;
            responseDiv.classList.remove('hidden');
            
            // Reset button
            submitButton.textContent = 'Ask Question';
            submitButton.disabled = false;
            
            // Scroll to response
            responseDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1500);
    });

    // Allow Enter key to submit (but not Shift+Enter)
    queryInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submitButton.click();
        }
    });

    function showQueryMessage(message, type) {
        // Remove existing messages
        const existingMessages = submitButton.parentNode.querySelectorAll('.error-message, .success-message');
        existingMessages.forEach(msg => msg.remove());
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `${type}-message`;
        messageDiv.textContent = message;
        
        submitButton.parentNode.appendChild(messageDiv);
        
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 3000);
    }
}

// Mock response generator for AI queries
function generateMockResponse(query) {
    const lowercaseQuery = query.toLowerCase();
    
    if (lowercaseQuery.includes('iron') || lowercaseQuery.includes('ferritin') || lowercaseQuery.includes('restless')) {
        return `
            <p><strong>Iron Deficiency and Restless Legs Connection:</strong></p>
            <p>Your current ferritin level of 12 ng/mL is significantly below the optimal range for RLS management (>75 ng/mL). Low iron stores in the brain can worsen restless legs symptoms.</p>
            <p><strong>Recommendations:</strong></p>
            <ul>
                <li>Continue iron supplementation as prescribed</li>
                <li>Take iron with vitamin C to enhance absorption</li>
                <li>Avoid calcium, coffee, or tea within 2 hours of iron</li>
                <li>Follow up with Dr. Moyer in July for repeat ferritin levels</li>
            </ul>
        `;
    } else if (lowercaseQuery.includes('cpap') || lowercaseQuery.includes('sleep')) {
        return `
            <p><strong>CPAP Compliance Optimization:</strong></p>
            <p>Your current average of 4.45 hours is below the recommended 7+ hours nightly. However, recent improvement to 5.5 hours weekly shows good progress.</p>
            <p><strong>Tips for better compliance:</strong></p>
            <ul>
                <li>Gradual increase: Add 30 minutes each week</li>
                <li>Ensure proper mask fit - no air leaks</li>
                <li>Use heated humidifier for comfort</li>
                <li>Practice wearing mask while awake initially</li>
                <li>Follow up with Dr. Nazzal on March 18th</li>
            </ul>
        `;
    } else if (lowercaseQuery.includes('vitamin d')) {
        return `
            <p><strong>Vitamin D Status:</strong></p>
            <p>Your vitamin D level has improved from 17 to 24 ng/mL, but still below optimal (>40 ng/mL). Continue supplementation with 2,000 IU daily.</p>
            <p><strong>Additional recommendations:</strong></p>
            <ul>
                <li>Take with fat-containing meal for better absorption</li>
                <li>Consider increasing dose if levels don't improve</li>
                <li>Safe sun exposure 10-15 minutes daily</li>
                <li>Recheck levels in July 2025</li>
            </ul>
        `;
    } else if (lowercaseQuery.includes('smoking') || lowercaseQuery.includes('quit')) {
        return `
            <p><strong>Smoking Cessation Support:</strong></p>
            <p>Great job setting a quit date of February 10, 2025! Reducing from higher usage to 3-4 cigarettes daily shows commitment.</p>
            <p><strong>Quit strategies:</strong></p>
            <ul>
                <li>Use nicotine patch as prescribed</li>
                <li>Identify and avoid triggers</li>
                <li>Call Indiana Quitline: 1-800-QUIT-NOW</li>
                <li>Consider behavioral support groups</li>
                <li>Track cravings and successful resistance</li>
            </ul>
        `;
    } else {
        return `
            <p><strong>General Health Information:</strong></p>
            <p>Based on your current health profile, here are key focus areas:</p>
            <ul>
                <li>CPAP compliance improvement for better sleep quality</li>
                <li>Iron supplementation for RLS symptom management</li>
                <li>Smoking cessation preparation</li>
                <li>Regular follow-ups with your healthcare team</li>
            </ul>
            <p><em>For specific medical advice, please consult with your healthcare providers.</em></p>
        `;
    }
}

// Vitals logging functionality
function initializeVitalsLog() {
    const logButton = document.getElementById('log-entry');
    const entriesList = document.getElementById('entries-list');
    
    if (!logButton || !entriesList) {
        console.error('Vitals log elements not found');
        return;
    }
    
    // Load existing entries from memory (since we can't use localStorage)
    let entries = [];

    logButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const cpapHours = document.getElementById('cpap-hours').value;
        const sleepQuality = document.getElementById('sleep-quality').value;
        const fatigueLevel = document.getElementById('fatigue-level').value;
        const rlsSymptoms = document.getElementById('rls-symptoms').value;

        // Validate required fields
        if (!cpapHours || !sleepQuality || !fatigueLevel || !rlsSymptoms) {
            showVitalsMessage('Please fill in all fields before logging.', 'error');
            return;
        }

        // Validate CPAP hours range
        const hours = parseFloat(cpapHours);
        if (hours < 0 || hours > 12) {
            showVitalsMessage('CPAP hours must be between 0 and 12.', 'error');
            return;
        }

        // Create new entry
        const entry = {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            cpapHours: hours,
            sleepQuality: parseInt(sleepQuality),
            fatigueLevel: parseInt(fatigueLevel),
            rlsSymptoms: rlsSymptoms
        };

        entries.unshift(entry); // Add to beginning of array
        
        // Keep only last 10 entries
        if (entries.length > 10) {
            entries = entries.slice(0, 10);
        }

        updateEntriesList();
        clearVitalsForm();
        showVitalsMessage('Entry logged successfully!', 'success');
    });

    function updateEntriesList() {
        if (entries.length === 0) {
            entriesList.innerHTML = '<p class="text-secondary">No entries logged yet.</p>';
            return;
        }

        const entriesHtml = entries.map(entry => `
            <div class="entry-item">
                <strong>${entry.date} ${entry.time}</strong><br>
                CPAP: ${entry.cpapHours}h | Sleep: ${entry.sleepQuality}/10 | 
                Fatigue: ${entry.fatigueLevel}/10 | RLS: ${entry.rlsSymptoms}
            </div>
        `).join('');

        entriesList.innerHTML = entriesHtml;
    }

    function clearVitalsForm() {
        const form = logButton.closest('.log-form');
        if (form) {
            const inputs = form.querySelectorAll('input, select');
            inputs.forEach(input => input.value = '');
        }
    }

    function showVitalsMessage(message, type) {
        // Remove existing messages
        const existingMessages = logButton.parentNode.querySelectorAll('.error-message, .success-message');
        existingMessages.forEach(msg => msg.remove());
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `${type}-message`;
        messageDiv.textContent = message;
        
        logButton.parentNode.appendChild(messageDiv);
        
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 3000);
    }
}

// Utility functions
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add keyboard navigation for tabs
document.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('tab-button')) {
        const tabs = Array.from(document.querySelectorAll('.tab-button'));
        const currentIndex = tabs.indexOf(e.target);
        
        let nextIndex;
        if (e.key === 'ArrowRight') {
            nextIndex = (currentIndex + 1) % tabs.length;
        } else if (e.key === 'ArrowLeft') {
            nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        }
        
        if (nextIndex !== undefined) {
            e.preventDefault();
            tabs[nextIndex].focus();
            tabs[nextIndex].click();
        }
    }
});

// Prevent form submission on Enter key in select elements
document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'SELECT' && e.key === 'Enter') {
        e.preventDefault();
    }
});

// Add error handling for charts
window.addEventListener('error', function(e) {
    if (e.target && e.target.tagName === 'CANVAS') {
        console.error('Chart rendering error:', e);
        const canvas = e.target;
        const container = canvas.parentElement;
        if (container) {
            container.innerHTML = '<p class="error-message">Chart could not be loaded. Please refresh the page.</p>';
        }
    }
});

// Initialize tooltips (if needed)
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            // Tooltip functionality can be added here if needed
        });
    });
}

// Call tooltip initialization
initializeTooltips();