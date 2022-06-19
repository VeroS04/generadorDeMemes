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
const btnColorDeFondo = document.getElementById('btnBackgroundColor');
const panelUrlImagen = document.getElementById('panelUrlImagen');
const btnsFondo = document.getElementById('btnsFondo');
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


btnOscuro.addEventListener('click', () =>{
    btnClaro.classList.remove('oculto');
    btnOscuro.classList.add('oculto');
    header.style.backgroundColor= "#e3f8e3";
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
    panelInputImagen.style.color= "#f0faf0";
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
    panelInputImagen.style.color= "#f0faf0";
  })


btnImg.addEventListener('click', () => {
    panelImg.classList.remove('oculto');
    panelText.classList.add('oculto');
})

btnText.addEventListener('click', () => {
    panelText.classList.remove('oculto');
    panelImg.classList.add('oculto');
})

// panelInputImagen.addEventListener('input', () => {
//   const memeInput = panelInputImagen.value
//   imgMeme.innerHTML = `src= "${memeInput.value}"`
// })

// levelContraste.addEventListener('input', (event) => {
//   const valorContraste = event.target.value;
//   inputContraste.innerHTML = `${valorContraste}%`;
//   memeContenido.style.filter = `contrast${valorContraste}%`;
  
// })
// console.log(valorContraste)
















                                   //************inicio seccion panel texto************

// sinCajaTopText.addEventListener('click', () => {
//   topText.classList.add('oculto');
//   // topText.classList.remove('oculto');
// })

// sinCajaBottomText.addEventListener('input', () => {
//   main.classList.add('oculto');
//   // topText.classList.remove('oculto');
// })


textareaTopText.addEventListener('input', () => {
  topText.innerHTML = textareaTopText.value;
});

textareaBottomText.addEventListener('input', () => {
  bottomText.innerHTML = textareaBottomText.value;
});