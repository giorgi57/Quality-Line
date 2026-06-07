// i18n.js — ენის მართვის სისტემა
const translations = {
    ka: {
        meta_title: "ხელოსნები ქუთაისში - Quality Line | პრემიუმ რემონტი",
        meta_desc: "პროფესიონალი ხელოსნები ქუთაისში. ბინების და ოფისების პრემიუმ რემონტი, ელექტროობა და სანტექნიკა. Quality Line - ხარისხი და ნდობა.",
        nav_home: "მთავარი",
        nav_services: "სერვისები",
        nav_portfolio: "ნამუშევრები",
        nav_contact: "კონტაქტი",
        hero_tag: "პრემიუმ ხარისხი",
        hero_title: "თქვენი ოცნების რემონტი <br> იწყება აქ",
        hero_desc: "პროფესიონალური გუნდი, რომელიც ზრუნავს თქვენს კომფორტზე. ინტერიერის დიზაინი და სრული რემონტი გასაღების ჩაბარებით.",
        hero_btn_portfolio: "პროექტების ნახვა",
        services_title: "ჩვენი სერვისები",
        svc1_title: "კონცეფცია & დიზაინი",
        svc1_sub: "იდეიდან ვიზუალიზაციამდე",
        svc1_extra: "+ უფასო ზომვა",
        svc2_title: "შავი კარკასი",
        svc2_sub: "მყარი ფუნდამენტი",
        svc2_extra: "საუკეთესო მასალა",
        svc3_title: "სრული რემონტი",
        svc3_sub: "გასაღების ჩაბარებით",
        svc4_title: "ზედამხედველობა",
        svc4_sub: "ხარისხის კონტროლი",
        svc4_extra: "24/7 მონიტორინგი",
        pricing_title: "მომსახურება",
        p1: "გიბსოკარდონი",
        p2: "კაფელ-მეტლახი",
        p3: "შპაკლი / სამღებრო",
        p4: "ლამინატი",
        p5: "ელექტროობა",
        p6: "სანტექნიკა",
        p7: "გათბობა",
        p8: "შპალერი",
        p9: "გასაჭიმი ჭერი",
        p10: "მძიმე ტექნიკა",
        p11: "დემონტაჟი",
        p12: "გაგრილება",
        portfolio_title: "შესრულებული ნამუშევრები",
        filter_all: "ყველა",
        filter_living: "მისაღები",
        filter_kitchen: "სამზარეულო",
        filter_bath: "სააბაზანო",
        filter_bedroom: "საძინებელი",
        footer_slogan: "ჩვენი მიზანია შევქმნათ გარემო, სადაც თავს ბედნიერად იგრძნობთ.",
        footer_links: "სწრაფი ლინკები",
        footer_city: "ქუთაისი, საქართველო",
        footer_follow: "მოგვყევით",
        modal_details: "დეტალები",
        modal_svc1: "დიზაინის ეტაპზე ვქმნით 3D ვიზუალიზაციას და ვგეგმავთ ყველა დეტალს.",
        modal_svc2: "შავი კარკასის სამუშაოები მოიცავს ტიხრების მოწყობას და გალესვას.",
        modal_svc3: "სრული რემონტი მოიცავს სამღებრო სამუშაოებს, იატაკს და განათებას.",
        modal_svc4: "ჩვენი ინჟინრები ყოველდღიურად აკონტროლებენ სამუშაოების ხარისხს.",
    },
    ru: {
        meta_title: "Мастера в Кутаиси - Quality Line | Премиум ремонт",
        meta_desc: "Профессиональные мастера в Кутаиси. Премиум ремонт квартир и офисов, электрика и сантехника. Quality Line — качество и доверие.",
        nav_home: "Главная",
        nav_services: "Услуги",
        nav_portfolio: "Портфолио",
        nav_contact: "Контакт",
        hero_tag: "Премиум качество",
        hero_title: "Ремонт вашей мечты <br> начинается здесь",
        hero_desc: "Профессиональная команда, которая заботится о вашем комфорте. Дизайн интерьера и полный ремонт под ключ.",
        hero_btn_portfolio: "Смотреть проекты",
        services_title: "Наши услуги",
        svc1_title: "Концепция & Дизайн",
        svc1_sub: "От идеи до визуализации",
        svc1_extra: "+ Бесплатный замер",
        svc2_title: "Черновой каркас",
        svc2_sub: "Прочная основа",
        svc2_extra: "Лучшие материалы",
        svc3_title: "Полный ремонт",
        svc3_sub: "Сдача под ключ",
        svc4_title: "Надзор",
        svc4_sub: "Контроль качества",
        svc4_extra: "Мониторинг 24/7",
        pricing_title: "Услуги",
        p1: "Гипсокартон",
        p2: "Кафель / плитка",
        p3: "Шпаклёвка / покраска",
        p4: "Ламинат",
        p5: "Электрика",
        p6: "Сантехника",
        p7: "Отопление",
        p8: "Обои",
        p9: "Натяжной потолок",
        p10: "Тяжелая техника",
        p11: "Демонтаж",
        p12: "Охлаждение",
        portfolio_title: "Выполненные работы",
        filter_all: "Все",
        filter_living: "Гостиная",
        filter_kitchen: "Кухня",
        filter_bath: "Ванная",
        filter_bedroom: "Спальня",
        footer_slogan: "Наша цель — создать пространство, где вы будете чувствовать себя счастливыми.",
        footer_links: "Быстрые ссылки",
        footer_city: "Кутаиси, Грузия",
        footer_follow: "Следите за нами",
        modal_details: "Детали",
        modal_svc1: "На этапе дизайна мы создаём 3D-визуализацию и планируем все детали.",
        modal_svc2: "Черновые работы включают возведение перегородок и оштукатуривание.",
        modal_svc3: "Полный ремонт включает малярные работы, полы и освещение.",
        modal_svc4: "Наши инженеры ежедневно контролируют качество выполненных работ.",
    },
    en: {
        meta_title: "Craftsmen in Kutaisi - Quality Line | Premium Renovation",
        meta_desc: "Professional craftsmen in Kutaisi. Premium renovation of apartments and offices, electrical and plumbing. Quality Line — quality and trust.",
        nav_home: "Home",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        hero_tag: "Premium Quality",
        hero_title: "Your Dream Renovation <br> Starts Here",
        hero_desc: "A professional team that cares about your comfort. Interior design and full renovation with key handover.",
        hero_btn_portfolio: "View Projects",
        services_title: "Our Services",
        svc1_title: "Concept & Design",
        svc1_sub: "From idea to visualization",
        svc1_extra: "+ Free measurement",
        svc2_title: "Rough Construction",
        svc2_sub: "Solid foundation",
        svc2_extra: "Best materials",
        svc3_title: "Full Renovation",
        svc3_sub: "Turnkey delivery",
        svc4_title: "Supervision",
        svc4_sub: "Quality control",
        svc4_extra: "24/7 Monitoring",
        pricing_title: "Services",
        p1: "Drywall / Plasterboard",
        p2: "Tiles / Ceramic",
        p3: "Plastering / Painting",
        p4: "Laminate flooring",
        p5: "Electrical work",
        p6: "Plumbing",
        p7: "Heating",
        p8: "Wallpaper",
        p9: "Stretch ceiling",
        p10: "Heavy Equipment",
        p11: "Demolition",
        p12: "Cooling Systems",
        portfolio_title: "Completed Projects",
        filter_all: "All",
        filter_living: "Living Room",
        filter_kitchen: "Kitchen",
        filter_bath: "Bathroom",
        filter_bedroom: "Bedroom",
        footer_slogan: "Our goal is to create a space where you feel truly happy.",
        footer_links: "Quick Links",
        footer_city: "Kutaisi, Georgia",
        footer_follow: "Follow Us",
        modal_details: "Details",
        modal_svc1: "During the design phase we create 3D visualizations and plan every detail.",
        modal_svc2: "Rough construction includes partition walls and plastering.",
        modal_svc3: "Full renovation includes painting, flooring and lighting.",
        modal_svc4: "Our engineers monitor work quality on a daily basis.",
    }
};

let currentLang = localStorage.getItem('lang') || 'ka';

function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    const t = translations[lang];

    // Update <title>
    if (t.meta_title) document.title = t.meta_title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t.meta_desc) metaDesc.setAttribute('content', t.meta_desc);

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Init after DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Wire up language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
    });
    // Apply saved or default language
    applyTranslations(currentLang);
});

// Expose for script.js modal usage
function getT(key) {
    return (translations[currentLang] || translations['ka'])[key] || '';
}