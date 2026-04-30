const btnApri = document.getElementById('apriMenu');
const btnChiudi = document.getElementById('chiudiMenu');
const menuLaterale = document.getElementById('menuLaterale');
const ombraSito = document.getElementById('ombraSito');

function toggleMenu(){
    menuLaterale.classList.toggle('aperto');
    ombraSito.classList.toggle('aperto');

    document.body.style.overflow = document.body.style.overflow == 'hidden' ? '' : 'hidden';
}

btnApri.addEventListener('click', toggleMenu);
btnChiudi.addEventListener('click', toggleMenu);

ombraSito.addEventListener('click', toggleMenu);

const bottone = document.getElementById('bottoneShow');
const contenitoreGallerie = document.getElementById('conGal');

bottone.addEventListener('click', function(){
    contenitoreGallerie.classList.toggle('mostra-tutto');
    bottone.classList.toggle('attivo');
});