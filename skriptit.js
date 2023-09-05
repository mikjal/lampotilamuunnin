// Globaalit vakiot

// Onko laitteella käytössä tumma teema? Jos on, otetaan se käyttöön automaattisesti
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    vaihdaTeema();
}

// Funktio: teeman vaihto vaalean ja tumman välillä
function vaihdaTeema() {
    const teema = document.getElementById('htmltagi').getAttribute('data-bs-theme');
    if (teema != null) {
        // vaihdetaan data-bs-theme toiseksi
        let uusiTeema = teema == 'light' ? 'dark' : 'light';
        document.getElementById('htmltagi').setAttribute('data-bs-theme',uusiTeema);
        // kuvake vanhan teeman mukaan
        document.getElementById('teemaikoni').innerHTML = teema + '_mode';
    }
}

// Väriteeman vaihtamiseen tarkoitetun kuvakkeen painaminen
document.getElementById('teemaikoni').addEventListener('click', () => {
    vaihdaTeema();
});
