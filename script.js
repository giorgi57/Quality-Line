// 1. ბურგერ მენიუ
const burgerToggle = document.getElementById('burger-toggle');
const navLinks = document.getElementById('nav-links');
const burgerIcon = burgerToggle?.querySelector('i');

if (burgerToggle) {
    burgerToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            burgerIcon.classList.replace('fa-bars', 'fa-times');
        } else {
            burgerIcon.classList.replace('fa-times', 'fa-bars');
        }
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (burgerIcon) burgerIcon.classList.replace('fa-times', 'fa-bars');
    });
});

// 2. Dark / Light Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', newTheme);
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// 3. მოდალი — i18n-enabled
function openModal(id) {
    const modal = document.getElementById('serviceModal');
    const body = document.getElementById('modalBody');
    const keyMap = {
        service1: 'modal_svc1',
        service2: 'modal_svc2',
        service3: 'modal_svc3',
        service4: 'modal_svc4',
    };
    const text = typeof getT === 'function' ? getT(keyMap[id]) : '';
    const heading = typeof getT === 'function' ? getT('modal_details') : 'Details';
    body.innerHTML = `<h3>${heading}</h3><p style="margin-top:15px; line-height:1.6">${text}</p>`;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('serviceModal').style.display = 'none';
}

// 4. Portfolio filter
function filterPortfolio(category, btn) {
    const cards = document.querySelectorAll('.p-card');
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    cards.forEach(card => {
        card.style.display = (category === 'all' || card.classList.contains(category)) ? 'block' : 'none';
    });
}

// 5. Lightbox
function openLightbox(el) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    lbImg.src = el.querySelector('img').src;
    lb.style.display = 'flex';
}

window.onclick = (e) => {
    if (e.target.className === 'modal') closeModal();
    if (e.target.id === 'lightbox') e.target.style.display = 'none';
};