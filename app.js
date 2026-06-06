let allProblems = [];
let filteredProblems = [];
let currentProblem = null;

// Load problems list
async function loadProblemsList() {
    try {
        const response = await fetch('data/problems-list.json');
        const data = await response.json();
        allProblems = data.problems || [];
        filteredProblems = [...allProblems];
        renderProblemsList();
    } catch (error) {
        console.error('Error loading problems list:', error);
        document.getElementById('problemsList').innerHTML = 
            '<div class="loading">Error loading problems. Make sure you are running a local server.</div>';
    }
}

// Render problems list
function renderProblemsList() {
    const container = document.getElementById('problemsList');
    
    if (filteredProblems.length === 0) {
        container.innerHTML = '<div class="loading">No problems found.</div>';
        return;
    }
    
    container.innerHTML = filteredProblems.map(problem => `
        <div class="problem-item" data-filename="${problem.filename}" onclick="loadProblem('${problem.filename}')">
            <div class="problem-number">#${problem.id}</div>
            <div class="problem-title">${problem.title}</div>
            <div class="problem-meta">
                <span class="difficulty ${problem.difficulty}">${problem.difficulty}</span>
            </div>
        </div>
    `).join('');
}

// Load problem detail
async function loadProblem(filename) {
    try {
        const response = await fetch(`data/problems/${filename}`);
        const problem = await response.json();
        currentProblem = problem;
        displayProblemDetail(problem);
        
        // Highlight active problem
        document.querySelectorAll('.problem-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-filename="${filename}"]`)?.classList.add('active');
        
    } catch (error) {
        console.error('Error loading problem:', error);
        document.getElementById('problemDetail').innerHTML = 
            '<div class="loading">Error loading problem details.</div>';
    }
}

// Display problem detail
function displayProblemDetail(problem) {
    const container = document.getElementById('problemDetail');
    
    let html = `
        <button class="back-button" onclick="backToList()">← Back to List</button>
        
        <div class="problem-header">
            <h2>${problem.title}</h2>
            <div class="problem-info">
                <div class="info-item">
                    <span class="info-label">ID:</span>
                    <span>${problem.problem_id}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Difficulty:</span>
                    <span class="difficulty ${problem.difficulty}">${problem.difficulty}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Topics:</span>
                    <div class="topics">
                        ${problem.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Description
    if (problem.description) {
        html += `
            <div class="section">
                <h3>Description</h3>
                <div class="description">${problem.description}</div>
            </div>
        `;
    }
    
    // Examples
    if (problem.examples && problem.examples.length > 0) {
        html += `<div class="section"><h3>Examples</h3>`;
        problem.examples.forEach(example => {
            html += `
                <div class="example">
                    <h4>Example ${example.example_num}</h4>
                    <div class="example-content">${example.example_text}</div>
                </div>
            `;
        });
        html += `</div>`;
    }
    
    // Constraints
    if (problem.constraints && problem.constraints.length > 0) {
        html += `
            <div class="section constraints">
                <h3>Constraints</h3>
                <ul>
                    ${problem.constraints.map(constraint => `<li>${constraint}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Hints
    if (problem.hints && problem.hints.length > 0) {
        html += `
            <div class="section hints">
                <h3>Hints</h3>
                <ul>
                    ${problem.hints.map(hint => `<li>${hint}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Code Snippets
    if (problem.code_snippets && Object.keys(problem.code_snippets).length > 0) {
        const languages = Object.keys(problem.code_snippets);
        html += `
            <div class="section code-snippets">
                <h3>Code Templates</h3>
                <div class="language-tabs">
                    ${languages.map((lang, index) => `
                        <button class="language-tab ${index === 0 ? 'active' : ''}" 
                                onclick="switchLanguage('${lang}')">
                            ${lang.charAt(0).toUpperCase() + lang.slice(1)}
                        </button>
                    `).join('')}
                </div>
                ${languages.map((lang, index) => `
                    <div class="code-block ${index === 0 ? 'active' : ''}" data-lang="${lang}">
                        <pre><code>${escapeHtml(problem.code_snippets[lang])}</code></pre>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    container.innerHTML = html;
    container.scrollTop = 0;
}

// Switch code language
function switchLanguage(lang) {
    document.querySelectorAll('.language-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.code-block').forEach(block => {
        block.classList.remove('active');
    });
    
    event.target.classList.add('active');
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Back to list (mobile)
function backToList() {
    document.querySelector('.sidebar').scrollIntoView({ behavior: 'smooth' });
}

// Search filter
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const difficulty = document.getElementById('difficultyFilter').value;
    
    filteredProblems = allProblems.filter(problem => {
        const matchesSearch = problem.title.toLowerCase().includes(searchTerm) || 
                            problem.id.toString().includes(searchTerm);
        const matchesDifficulty = difficulty === 'all' || problem.difficulty === difficulty;
        return matchesSearch && matchesDifficulty;
    });
    
    renderProblemsList();
});

// Difficulty filter
document.getElementById('difficultyFilter').addEventListener('change', (e) => {
    const difficulty = e.target.value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredProblems = allProblems.filter(problem => {
        const matchesSearch = problem.title.toLowerCase().includes(searchTerm) || 
                            problem.id.toString().includes(searchTerm);
        const matchesDifficulty = difficulty === 'all' || problem.difficulty === difficulty;
        return matchesSearch && matchesDifficulty;
    });
    
    renderProblemsList();
});

// Initialize
loadProblemsList();
