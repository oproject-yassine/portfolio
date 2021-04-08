
/* ----------------Abrir caminho dos fotos--------------*/

let img1 = document.querySelector('#pic1');
let img2 = document.querySelector('#pic2');
let img3 = document.querySelector('#pic3');
let img4 = document.querySelector('#pic4');

let open1 = document.querySelector('#open1')
let open1 = document.querySelector('#open2');
let open1 = document.querySelector('#open3');
let open1 = document.querySelector('#open4');

img1.addEventListener('click', () => {
    a.href = open1;
});

img2.addEventListener('click', () => {
    a.href = open2;
});

img3.addEventListener('click', () => {  
    a.href = open3;
});

img4.addEventListener('click', () => {
    a.href = open4;
});


/*-------------------GOOGLE API-------------------*/

 var meuEndereco = new google.maps.LatLng(-23.5232802538071, -46.68401367385697)

function findMe(){
    var mapa = {
        center: meuEndereco,
        zoom: 12,
        mapTypeId: google.maps.mapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapa);
    var marker = new google.maps.Marker({
        position: mapa,
    });
    marker.setMap(map);

    google.maps.event.addDomListener(window, 'load', initialize);
} 

/* ------------------Trocar as paginas------------------------- */

let inicio = document.querySelector('#inicio');
let sobre = document.querySelector('#sobre');
let projetos = document.querySelector('#contato');
let contato = document.querySelector('#contato');


inicio.addEventListener('click', () => {
    a.href="index.html";
});

sobre.addEventListener('click', () => {
    a.href="sobre_mim.html";
});

projetos.addEventListener('click', () => {  
    a.href="meus_projetos.html";
});

contato.addEventListener('click', () => {
    a.href="fale_comigo.html";
});