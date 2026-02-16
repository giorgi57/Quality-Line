// 1. ბურგერ მენიუს მართვა
const burgerToggle = document.getElementById('burger-toggle');
const navLinks = document.getElementById('nav-links');
const burgerIcon = burgerToggle?.querySelector('i');

if (burgerToggle) {
    burgerToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // აიქონის შეცვლა
        if (navLinks.classList.contains('active')) {
            burgerIcon.classList.replace('fa-bars', 'fa-times');
        } else {
            burgerIcon.classList.replace('fa-times', 'fa-bars');
        }
    });
}

// მენიუს დაკეტვა ლინკზე დაჭერისას
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (burgerIcon) burgerIcon.classList.replace('fa-times', 'fa-bars');
    });
});

// 2. თემის გადამრთველი (Dark/Light Mode)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    // არჩევანის დამახსოვრება (სურვილისამებრ)
    localStorage.setItem('theme', newTheme);
};

// გვერდის ჩატვირთვისას შენახული თემის შემოწმება
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// 3. სერვისების მოდალი
function openModal(id) {
    const modal = document.getElementById('serviceModal');
    const body = document.getElementById('modalBody');
    const content = {
        'service1': 'დიზაინის ეტაპზე ვქმნით 3D ვიზუალიზაციას და ვგეგმავთ ყველა დეტალს.',
        'service2': 'შავი კარკასის სამუშაოები მოიცავს ტიხრების მოწყობას და გალესვას.',
        'service3': 'სრული რემონტი მოიცავს სამღებრო სამუშაოებს, იატაკს და განათებას.',
        'service4': 'ჩვენი ინჟინრები ყოველდღიურად აკონტროლებენ სამუშაოების ხარისხს.'
    };
    body.innerHTML = `<h3>დეტალები</h3><p style="margin-top:15px; line-height:1.6">${content[id]}</p>`;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('serviceModal').style.display = 'none';
}

// 4. პორტფოლიოს ფილტრაცია
function filterPortfolio(category, btn) {
    const cards = document.querySelectorAll('.p-card');
    const btns = document.querySelectorAll('.filter-btn');

    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 5. Lightbox სურათებისთვის
function openLightbox(el) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    lbImg.src = el.querySelector('img').src;
    lb.style.display = 'flex';
}

// ფანჯრის გარეთ დაჭერით დახურვა
window.onclick = (e) => {
    if (e.target.className === 'modal') closeModal();
    if (e.target.id === 'lightbox') e.target.style.display = 'none';
};