//----MENU MOBILE----

function menuShow() {
    let menuMobile = document.querySelector('.mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}
function mudarTamanho(){
    let menuMobile = document.querySelector('.mobile');
    if (window.innerWidth >= 1024){
        menuMobile.classList.remove('open');
    }
}

//----HOME CONSULTÓRIO----


let slides2 = document.querySelectorAll('.slide-container2');
let index2 = 0;

function next2(){
    slides2[index2].classList.remove('active');
    index2 = (index2 + 1) % slides2.length;
    slides2[index2].classList.add('active');
}

function prev2(){
    slides2[index2].classList.remove('active');
    index2 = (index2 - 1 + slides2.length) % slides2.length;
    slides2[index2].classList.add('active');
}

var elementos2  = document.querySelector(".Consultorio")
if (elementos2 !== null) {
    setInterval(next2, 7000);
}

//----HOME COMENTÁRIOS----


let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

var elementos  = document.querySelector(".Comentarios")
if (elementos !== null) {
    setInterval(next, 7000);
}




//----ABRIR SUBMENUS----

function submenuServicos() {
    let subServicos = document.querySelector('.submenu_ulmobile_servicos');
    if (subServicos.classList.contains('open')) {
        subServicos.classList.remove('open');
    } else {
        subServicos.classList.add('open');
    }
}

function submenuEbooks() {
    let subServicos = document.querySelector('.submenu_ulmobile_ebooks');
    if (subServicos.classList.contains('open')) {
        subServicos.classList.remove('open');
    } else {
        subServicos.classList.add('open');
    }
}

function submenuYoutube() {
    let subServicos = document.querySelector('.submenu_ulmobile_youtube');
    if (subServicos.classList.contains('open')) {
        subServicos.classList.remove('open');
    } else {
        subServicos.classList.add('open');
    }
}

//----MODAL SERVIÇOS----

const openEsp1 = document.querySelector("#open-esp1");
const openEsp2 = document.querySelector("#open-esp2");
const openEsp3 = document.querySelector("#open-esp3");
const openEsp4 = document.querySelector("#open-esp4");
const openEsp5 = document.querySelector("#open-esp5");
const openEsp6 = document.querySelector("#open-esp6");
const openEsp7 = document.querySelector("#open-esp7");
const openEsp8 = document.querySelector("#open-esp8");
const openEsp9 = document.querySelector("#open-esp9");
const openEsp10 = document.querySelector("#open-esp10");
const openEsp11 = document.querySelector("#open-esp11");
const openEsp12 = document.querySelector("#open-esp12");
const openEsp13 = document.querySelector("#open-esp13");
const openEsp14 = document.querySelector("#open-esp14");
const openEsp15 = document.querySelector("#open-esp15");
const openEsp16 = document.querySelector("#open-esp16");
const openEsp17 = document.querySelector("#open-esp17");

const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

var elementos  = document.querySelector(".Servicos")
if (elementos !== null) {
    [openEsp1, openEsp2, openEsp3, openEsp4, openEsp5, openEsp6, openEsp7, openEsp8, openEsp9, openEsp10, openEsp11, openEsp12, openEsp13, openEsp14, openEsp15, openEsp16, openEsp17, closeModalButton, fade].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
      });
}

function exibirTexto(botao) {
    var idDoBotao = botao.id;
    var elementoAtivo = document.querySelector(".Modais .modal-body #txt_" + idDoBotao)
    var tituloAtivo = document.querySelector(".Modais .modal-header #tit_" + idDoBotao)
    
    for (var i = 1; i <= 17; i++) {
        var idEsperado = "open-esp" + i;
        var elementoInativo = document.querySelector(".Modais .modal-body #txt_open-esp" + i)
        var tituloInativo = document.querySelector(".Modais .modal-header #tit_open-esp" + i)
       
        if (idDoBotao === idEsperado) {
            elementoAtivo.classList.add('open_text');
            tituloAtivo.classList.add('open_text');
            
        } else {
            elementoInativo.classList.remove('open_text');
            tituloInativo.classList.remove('open_text');
        }
    }
}