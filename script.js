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

function openLightbox(el) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    lbImg.src = el.querySelector('img').src;
    lb.style.display = 'flex';
}

const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
};

window.onclick = (e) => {
    if (e.target.classList.contains('modal')) closeModal();
};