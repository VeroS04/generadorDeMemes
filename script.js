const header = document.getElementById('header');
const main = document.getElementById('main');
const imgMeme = document.getElementById('imgMeme');
const memeContenido = document.getElementById('memeContenido');
const aside = document.getElementById('aside');
const panelImg = document.getElementById('panelImg');
const panelText = document.getElementById('panelText');
const btnOscuro = document.getElementById('modoOscuro');
const btnClaro = document.getElementById('modoClaro');
const btnImg = document.getElementById('btnImg');
const btnText = document.getElementById('btnText');
const panelUrlImagen = document.getElementById('panelUrlImagen');
const btnsFondo = document.getElementById('btnsFondo');
const elegirColorFondo = document.getElementById('elegirColorFondo');
const modoFondo = document.getElementById('modoFondo');
const btnColorDeFondo = document.getElementById('btnBackgroundColor');
const colorFondoInput = document.getElementById('colorFondoInput');
const panelInputImagen = document.getElementById('panelInputImagen');
const textareaTopText = document.getElementById('textareaTopText');
const textareaBottomText = document.getElementById('textareaBottomText');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const sinCajaTopText = document.getElementById('sinCajaTopText');
const sinCajaBottomText = document.getElementById('sinCajaBottomText');
const inputBrillo = document.getElementById('inputBrillo');
const inputOpacidad = document.getElementById('inputOpacidad');
const inputContraste = document.getElementById('inputContraste');
const inputDesenfoque = document.getElementById('inputDesenfoque');
const inputEscala = document.getElementById('inputEscala');
const inputSepia = document.getElementById('inputSepia');
const inputHUE = document.getElementById('inputHUE');
const inputSaturado = document.getElementById('inputSaturado');
const inputNegativo = document.getElementById('inputNegativo');
const levelBrillo = document.getElementById('levelBrillo');
const levelOpacidad = document.getElementById('levelOpacidad');
const levelContraste = document.getElementById('levelContraste');
const levelDesenfoque = document.getElementById('levelDesenfoque');
const levelEscala = document.getElementById('levelEscala');
const levelSepia = document.getElementById('levelSepia');
const levelHUE = document.getElementById('levelHUE');
const levelSaturado = document.getElementById('levelSaturado');
const levelNegativo = document.getElementById('levelNegativo');
const opcionNinguno = document.getElementById('opcionNinguno');
const opcionAclarar = document.getElementById('opcionNinguno');
const opcionOscurecer = document.getElementById('opcionOscurecer');
const opcionDiferencia = document.getElementById('opcionDiferencia');
const opcionLuminosidad = document.getElementById('opcionLuminosidad');
const opcionMultiplicar = document.getElementById('opcionMultiplicar');
const btnReestablecerFiltros = document.getElementById('btnReestablecerFiltros');


//                                     *************************************** MODO OSCURO/CLARO ***************************************

btnOscuro.addEventListener('click', () =>{
    btnClaro.classList.remove('oculto');
    btnOscuro.classList.add('oculto');
    header.style.backgroundColor= "#dce4dc";
    header.style.color= "#191E2B";
    btnClaro.style.backgroundColor= "#e3f8e3";
    btnOscuro.style.backgroundColor= "#e3f8e3";
    btnImg.style.backgroundColor= "#e3f8e3";
    btnText.style.backgroundColor= "#e3f8e3";
    btnClaro.style.color= "#191E2B";
    btnOscuro.style.color= "#191E2B";
    btnImg.style.color= "#191E2B";
    btnText.style.color= "#191E2B";
    main.style.backgroundColor= "#e3f0e3";
    panelImg.style.backgroundColor= "#f0faf0";
    panelImg.style.color= "#191E2B";
    panelText.style.backgroundColor= "#f0faf0";
    panelText.style.color= "#191E2B";
    panelInputImagen.style.color= "#191E2B";
    panelInputImagen.style.backgroundColor= "#dce4dc";
    elegirColorFondo.style.color= "#191E2B";
    elegirColorFondo.style.backgroundColor= "#dce4dc";
    modoFondo.style.color= "#191E2B";
    modoFondo.style.backgroundColor= "#dce4dc";
    btnReestablecerFiltros.style.color= "#191E2B";
    btnReestablecerFiltros.style.backgroundColor= "#dce4dc";textareaTopText
    textareaTopText.style.backgroundColor= "#dce4dc";
    textareaTopText.style.color= "#191E2B";
    textareaBottomText.style.backgroundColor= "#dce4dc";
    textareaBottomText.style.color= "#191E2B";
  })
  

btnClaro.addEventListener('click', () =>{
    btnClaro.classList.add('oculto');
    btnOscuro.classList.remove('oculto');
    header.style.backgroundColor= "#191E2B";
    header.style.color= "#e3f8e3";
    btnClaro.style.backgroundColor= "#191E2B";
    btnOscuro.style.backgroundColor= "#191E2B";
    btnImg.style.backgroundColor= "#191E2B";
    btnText.style.backgroundColor= "#191E2B";
    btnClaro.style.color= "#e3f8e3";
    btnOscuro.style.color= "#e3f8e3";
    btnImg.style.color= "#e3f8e3";
    btnText.style.color= "#e3f8e3";
    main.style.backgroundColor= "#2d3443";
    panelImg.style.backgroundColor= "#272e3f";
    panelImg.style.color= "#e3f8e3";
    panelText.style.backgroundColor= "#272e3f";
    panelText.style.color= "#e3f8e3";
    panelInputImagen.style.color= "#e3f8e3";
    panelInputImagen.style.backgroundColor= "#394052";
    elegirColorFondo.style.color= "#e3f8e3";
    elegirColorFondo.style.backgroundColor= "#394052";
    modoFondo.style.color= "#e3f8e3";
    modoFondo.style.backgroundColor= "#394052";
    btnReestablecerFiltros.style.color= "#e3f8e3";
    btnReestablecerFiltros.style.backgroundColor= "#394052";
    textareaTopText.style.backgroundColor= "#394052";
    textareaTopText.style.color= "#e3f8e3";
    textareaBottomText.style.backgroundColor= "#394052";
    textareaBottomText.style.color= "#e3f8e3";
  })

  //                                   ************************* OCULTAR/APARECER PANELES DE TEXTO E IMAGEN ************************

btnImg.addEventListener('click', () => {
    panelImg.classList.remove('oculto');
    panelText.classList.add('oculto');
})

btnText.addEventListener('click', () => {
    panelText.classList.remove('oculto');
    panelImg.classList.add('oculto');
})

//                                     *************************************** PANEL IMAGEN ***************************************

panelInputImagen.addEventListener('input', () =>{
  imgMeme.src = panelInputImagen.value;
})


inputBrillo.addEventListener('input', () =>{
  imgMeme.style.filter = `brightness(${inputBrillo.value})`
})

inputOpacidad.addEventListener('input', () =>{
  imgMeme.style.opacity = inputOpacidad.value;
})

inputContraste.addEventListener('input', () =>{
  imgMeme.style.filter = `contrast(${inputContraste.value * 100}%)`;
})

inputDesenfoque.addEventListener('input', () =>{
  imgMeme.style.filter = `blur(${inputDesenfoque.value}px)`;
})

inputEscala.addEventListener('input', () =>{
  imgMeme.style.filter = `grayscale(${inputEscala.value}%)`;
})

inputSepia.addEventListener('input', () =>{
  imgMeme.style.filter = `sepia(${inputSepia.value}%)`;
})

inputHUE.addEventListener('input', () =>{
  imgMeme.style.filter = `hue-rotate(${inputHUE.value * 100}deg)`;
})

inputSaturado.addEventListener('input', () =>{
  imgMeme.style.filter = `saturate(${inputSaturado.value}%)`;
})

inputNegativo.addEventListener('input', () =>{
  imgMeme.style.filter = `invert(${inputNegativo.value})`;
})




                                   //************inicio seccion panel texto************



textareaTopText.addEventListener('input', () => {
  topText.innerHTML = textareaTopText.value;
});

textareaBottomText.addEventListener('input', () => {
  bottomText.innerHTML = textareaBottomText.value;
});