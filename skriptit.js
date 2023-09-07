// Globaalit vakiot
let cels2Fahr = true;
let ekaKerta = true;
let virhe = false;

// Muunnostyypin vaihto
document.getElementById('selectCF').addEventListener('change', () => {
    const selectArvo = document.getElementById('selectCF').value;
    document.getElementById('yksikko').innerHTML = '&deg' + selectArvo;
    cels2Fahr = (selectArvo == 'C') ? true : false;
});

// Lomakkeen submit
document.getElementById('lomake').addEventListener('submit', (event) => {
    event.preventDefault();
    const tulosKortti = document.getElementById('tuloskortti');
    const tekstikentta = document.getElementById('inputaste');
    let arvo = tekstikentta.value.replace(',','.');

    if (isNaN(arvo) || arvo == '') {
        tekstikentta.classList.add('is-invalid');
        virhe = true;
    } else {
        if (ekaKerta == true) {
            tulosKortti.classList.add('mt-3');
            tulosKortti.style.opacity = 1;
            tulosKortti.style.maxHeight = 'initial';
            ekaKerta = false;
        }
            document.getElementById('vastausotsikko').innerText = tekstikentta.value + ' ' + document.getElementById('yksikko').innerText + ' on';
            //let vastaus = (cels2Fahr) ? (arvo * 1.8 + 32).toFixed(document.getElementById('selectDes').value) + ' &degF' : ((arvo - 32) / 1.8).toFixed(document.getElementById('selectDes').value) + ' &degC';
            //let nollapiste = (cels2Fahr) ? arvo : vastaus;
            let vastaus, nollapiste;

            if (cels2Fahr) {
                vastaus = (arvo * 1.8 + 32).toFixed(document.getElementById('selectDes').value) + ' &degF';
                nollapiste = arvo;
            } else {
                vastaus = ((arvo - 32) / 1.8).toFixed(document.getElementById('selectDes').value);
                nollapiste = vastaus;
                vastaus += ' &degC';
            }
            
            document.querySelector('#nollapiste').style.opacity = (nollapiste < -273.15) ? 1 : 0;
            document.querySelector('#vastaus').innerHTML = vastaus;
        }
});

document.getElementById('inputaste').addEventListener('input',() => {
    if (virhe == true) {
        virhe = false;
        document.getElementById('inputaste').classList.remove('is-invalid');
    }
});

document.getElementById('inputaste').focus();
