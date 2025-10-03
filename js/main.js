// Main JavaScript file for team website functionality

// DOM Content Loaded event listener
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeModal();
    initializeRandomMemberButton();
});

// Theme functionality
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeToggleIcon(currentTheme);

    // Add event listener for theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleIcon(newTheme);
}

function updateThemeToggleIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('memberModal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
}

function openModal(content) {
    const modal = document.getElementById('memberModal');
    const modalBody = document.getElementById('modalBody');

    if (modal && modalBody) {
        modalBody.innerHTML = content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('memberModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Random member functionality
function initializeRandomMemberButton() {
    const randomMemberBtn = document.getElementById('randomMemberBtn');

    if (randomMemberBtn) {
        randomMemberBtn.addEventListener('click', showRandomMember);
    }
}

function showRandomMember() {
    const members = [
        {
            name: 'Иван Клочков',
            role: 'Full-stack разработчик',
            bio: 'Специализируется на Python и веб-разработке. Имеет опыт создания Telegram-ботов и работы с базами данных.',
            skills: ['Python', 'JavaScript', 'SQL/NoSQL', 'Web Development'],
            link: 'member1.html'
        },
        {
            name: 'Анна Петрова',
            role: 'Frontend разработчик',
            bio: 'Создает интуитивные и отзывчивые пользовательские интерфейсы. Эксперт в HTML, CSS и JavaScript.',
            skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
            link: 'member2.html'
        },
        {
            name: 'Петр Сидоров',
            role: 'Backend разработчик',
            bio: 'Специалист по серверной разработке и архитектуре баз данных. Работает с Java и C++.',
            skills: ['Java', 'C++', 'SQL', 'Microservices'],
            link: 'member3.html'
        },
        {
            name: 'Мария Иванова',
            role: 'UI/UX дизайнер',
            bio: 'Создает эстетичные и функциональные дизайны. Работает с no-code инструментами и прототипированием.',
            skills: ['UI Design', 'UX Research', 'Figma', 'Prototyping'],
            link: 'member4.html'
        }
    ];

    const randomMember = members[Math.floor(Math.random() * members.length)];
    const modalContent = createMemberModalContent(randomMember);

    openModal(modalContent);
}

function createMemberModalContent(member) {
    return `
        <div class="modal-member">
            <h2>${member.name}</h2>
            <h3>${member.role}</h3>
            <p>${member.bio}</p>
            <div class="modal-skills">
                <strong>Ключевые навыки:</strong>
                <div class="skills-tags">
                    ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="modal-actions">
                <a href="${member.link}" class="cta-button" style="display: inline-block; margin-top: 1rem;">Подробнее</a>
            </div>
        </div>
    `;
}

// Smooth scrolling for anchor links
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

// Add loading animation for better UX
function showLoading() {
    // Could be implemented for future AJAX functionality
    console.log('Loading...');
}

function hideLoading() {
    // Could be implemented for future AJAX functionality
    console.log('Loading complete');
}

// Export functions for potential module usage (if needed in future)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeTheme,
        toggleTheme,
        openModal,
        closeModal,
        showRandomMember
    };
}