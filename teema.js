if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    vaihdaTeema();
}

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

document.getElementById('teemaikoni').addEventListener('click', () => {
    vaihdaTeema();
});
