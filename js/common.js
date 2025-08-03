document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
});

function updateLanguage() {
    const lang = localStorage.getItem('lang') || 'en';
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = lang === 'en' ? el.dataset.en : el.dataset.ur;
        el.dir = lang === 'ur' ? 'rtl' : 'ltr';
    });
}

document.getElementById('lang-en').addEventListener('click', () => {
    localStorage.setItem('lang', 'en');
    updateLanguage();
});

document.getElementById('lang-ur').addEventListener('click', () => {
    localStorage.setItem('lang', 'ur');
    updateLanguage();
});
