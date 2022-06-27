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
const btnColorDeFondo = document.getElementById('btnBackgroundColor');
const panelInputImagen = document.getElementById('panelInputImagen');
const textareaTopText = document.getElementById('textareaTopText');
const textareaBottomText = document.getElementById('textareaBottomText');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const cajaSinTopText = document.getElementById('cajaSinTopText');
const cajaSinBottomText = document.getElementById('cajaSinBottomText');
const inputBrillo = document.getElementById('inputBrillo');
const inputOpacidad = document.getElementById('inputOpacidad');
const inputContraste = document.getElementById('inputContraste');
const inputDesenfoque = document.getElementById('inputDesenfoque');
const inputEscala = document.getElementById('inputEscala');
const inputSepia = document.getElementById('inputSepia');
const inputHUE = document.getElementById('inputHUE');
const inputSaturado = document.getElementById('inputSaturado');
const inputNegativo = document.getElementById('inputNegativo');
const opcionNinguno = document.getElementById('opcionNinguno');
const opcionAclarar = document.getElementById('opcionNinguno');
const opcionOscurecer = document.getElementById('opcionOscurecer');
const opcionDiferencia = document.getElementById('opcionDiferencia');
const opcionLuminosidad = document.getElementById('opcionLuminosidad');
const opcionMultiplicar = document.getElementById('opcionMultiplicar');
const btnReestablecerFiltros = document.getElementById('btnReestablecerFiltros');
const divPanelTextoColor = document.getElementById('divPanelTextoColor');
const divPanelTextoColorFondo = document.getElementById('divPanelTextoColorFondo');

//                                     *************************************** MODO OSCURO/CLARO ***************************************

btnOscuro.addEventListener('click', () => {
  btnClaro.classList.remove('oculto');
  btnOscuro.classList.add('oculto');
  header.style.backgroundColor = "#dce4dc";
  header.style.color = "#191E2B";
  btnClaro.style.backgroundColor = "#e3f8e3";
  btnOscuro.style.backgroundColor = "#e3f8e3";
  btnImg.style.backgroundColor = "#e3f8e3";
  btnText.style.backgroundColor = "#e3f8e3";
  btnClaro.style.color = "#191E2B";
  btnOscuro.style.color = "#191E2B";
  btnImg.style.color = "#191E2B";
  btnText.style.color = "#191E2B";
  main.style.backgroundColor = "#e3f0e3";
  panelImg.style.backgroundColor = "#f0faf0";
  panelImg.style.color = "#191E2B";
  panelText.style.backgroundColor = "#f0faf0";
  panelText.style.color = "#191E2B";
  panelInputImagen.style.color = "#191E2B";
  panelInputImagen.style.backgroundColor = "#dce4dc";
  elegirColorFondo.style.color = "#191E2B";
  elegirColorFondo.style.backgroundColor = "#dce4dc";
  modoFondo.style.color = "#191E2B";
  modoFondo.style.backgroundColor = "#dce4dc";
  btnReestablecerFiltros.style.color = "#191E2B";
  btnReestablecerFiltros.style.backgroundColor = "#dce4dc";
  textareaTopText.style.backgroundColor = "#dce4dc";
  textareaTopText.style.color = "#191E2B";
  textareaBottomText.style.backgroundColor = "#dce4dc";
  textareaBottomText.style.color = "#191E2B";
  tipoDeFuente.style.backgroundColor = "#dce4dc";
  tipoDeFuente.style.color = "#191E2B";
  tamanoInput.style.backgroundColor = "#dce4dc";
  tamanoInput.style.color = "#191E2B";
  alineacionIzquierda.style.backgroundColor = "#dce4dc";
  alineacionIzquierda.style.color = "#191E2B";
  alineacionDerecha.style.backgroundColor = "#dce4dc";
  alineacionDerecha.style.color = "#191E2B";
  alineacionCentro.style.backgroundColor = "#dce4dc";
  alineacionCentro.style.color = "#191E2B";
  divPanelTextoColor.style.backgroundColor = "#dce4dc";
  divPanelTextoColor.style.color = "#191E2B";
  divPanelTextoColorFondo.style.backgroundColor = "#dce4dc";
  divPanelTextoColorFondo.style.color = "#191E2B";
})

btnClaro.addEventListener('click', () => {
  btnClaro.classList.add('oculto');
  btnOscuro.classList.remove('oculto');
  header.style.backgroundColor = "#191E2B";
  header.style.color = "#e3f8e3";
  btnClaro.style.backgroundColor = "#191E2B";
  btnOscuro.style.backgroundColor = "#191E2B";
  btnImg.style.backgroundColor = "#191E2B";
  btnText.style.backgroundColor = "#191E2B";
  btnClaro.style.color = "#e3f8e3";
  btnOscuro.style.color = "#e3f8e3";
  btnImg.style.color = "#e3f8e3";
  btnText.style.color = "#e3f8e3";
  main.style.backgroundColor = "#2d3443";
  panelImg.style.backgroundColor = "#272e3f";
  panelImg.style.color = "#e3f8e3";
  panelText.style.backgroundColor = "#272e3f";
  panelText.style.color = "#e3f8e3";
  panelInputImagen.style.color = "#e3f8e3";
  panelInputImagen.style.backgroundColor = "#394052";
  elegirColorFondo.style.color = "#e3f8e3";
  elegirColorFondo.style.backgroundColor = "#394052";
  modoFondo.style.color = "#e3f8e3";
  modoFondo.style.backgroundColor = "#394052";
  btnReestablecerFiltros.style.color = "#e3f8e3";
  btnReestablecerFiltros.style.backgroundColor = "#394052";
  textareaTopText.style.backgroundColor = "#394052";
  textareaTopText.style.color = "#e3f8e3";
  textareaBottomText.style.backgroundColor = "#394052";
  textareaBottomText.style.color = "#e3f8e3";
  tipoDeFuente.style.backgroundColor = "#394052";
  tipoDeFuente.style.color = "#e3f8e3";
  tamanoInput.style.backgroundColor = "#394052";
  tamanoInput.style.color = "#e3f8e3";
  alineacionIzquierda.style.backgroundColor = "#394052";
  alineacionIzquierda.style.color = "#e3f8e3";
  alineacionDerecha.style.backgroundColor = "#394052";
  alineacionDerecha.style.color = "#e3f8e3";
  alineacionCentro.style.backgroundColor = "#394052";
  alineacionCentro.style.color = "#e3f8e3";
  divPanelTextoColor.style.backgroundColor = "#394052";
  divPanelTextoColor.style.color = "#e3f8e3";
  divPanelTextoColorFondo.style.backgroundColor = "#394052";
  divPanelTextoColorFondo.style.color = "#e3f8e3";
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

panelInputImagen.addEventListener('input', () => {
  imgMeme.style= `background-image: url("${panelInputImagen.value}");"`; 
});

 const colorFondoInput = document.getElementById('colorFondoInput');
 colorFondoInput.addEventListener('input', () => {
   imgMeme.style.backgroundColor = colorFondoInput.value;
})

const modoFondo = document.getElementById('modoFondo');
modoFondo.addEventListener('input', () => {
  imgMeme.style.backgroundBlendMode = modoFondo.value;
})


inputBrillo.addEventListener('input', () => {
  imgMeme.style.filter = `brightness(${inputBrillo.value})`
});

inputOpacidad.addEventListener('input', () => {
  imgMeme.style.filter = `opacity(${inputOpacidad.value})`;
});

inputContraste.addEventListener('input', () => {
  imgMeme.style.filter = `contrast(${inputContraste.value * 100}%)`;
})

inputDesenfoque.addEventListener('input', () => {
  imgMeme.style.filter = `blur(${inputDesenfoque.value}px)`;
})

inputEscala.addEventListener('input', () => {
  imgMeme.style.filter = `grayscale(${inputEscala.value}%)`;
})

inputSepia.addEventListener('input', () => {
  imgMeme.style.filter = `sepia(${inputSepia.value}%)`;
})

inputHUE.addEventListener('input', () => {
  imgMeme.style.filter = `hue-rotate(${inputHUE.value * 100}deg)`;
})

inputSaturado.addEventListener('input', () => {
  imgMeme.style.filter = `saturate(${inputSaturado.value}%)`;
})

inputNegativo.addEventListener('input', () => {
  imgMeme.style.filter = `invert(${inputNegativo.value})`;
})

btnReestablecerFiltros.addEventListener('click', () => {
  inputBrillo.value = 1;
  imgMeme.style.filter = `brightness(${inputBrillo.value})`
  inputOpacidad.value = 1;
  imgMeme.style.filter = `opacity(${inputOpacidad.value})`;
  inputContraste.value = 100;
  imgMeme.style.filter = `contrast(${inputContraste.value * 100}%)`;
  inputDesenfoque.value = 0;
  imgMeme.style.filter = `blur(${inputDesenfoque.value}px)`;
  inputEscala.value = 0;
  imgMeme.style.filter = `grayscale(${inputEscala.value}%)`;
  inputSepia.value = 0;
  imgMeme.style.filter = `sepia(${inputSepia.value}%)`;
  inputHUE.value = 0;
  imgMeme.style.filter = `hue-rotate(${inputHUE.value * 100}deg)`;
  inputSaturado.value = 100;
  imgMeme.style.filter = `saturate(${inputSaturado.value}%)`;
  inputNegativo.value = 0;
  imgMeme.style.filter = `invert(${inputNegativo.value})`;
} )


//************inicio seccion panel texto************


textareaTopText.addEventListener('input', () => {
  topText.innerHTML = textareaTopText.value;
});

textareaBottomText.addEventListener('input', () => {
  bottomText.innerHTML = textareaBottomText.value;
});

cajaSinTopText.addEventListener('input', () => {
  if(cajaSinTopText.checked) {
      topText.style.display = 'none';
      imgMeme.style.backgroundSize = "cover"
    } else {
      topText.style.display = 'block';
    }
})

cajaSinBottomText.addEventListener('input', () => {
  if(cajaSinBottomText.checked) {
      bottomText.style.display = 'none';
      imgMeme.style.backgroundSize = "cover"
    } else {
      bottomText.style.display = 'block';
    }
})



const tipoDeFuente = document.getElementById('tipoDeFuente');
tipoDeFuente.addEventListener('change', () => {
  topText.style.fontFamily = tipoDeFuente.value;
  bottomText.style.fontFamily = tipoDeFuente.value;
  console.log(tipoDeFuente.value);
})

const tamanoInput = document.getElementById('tamanoInput');
tamanoInput.addEventListener('input', () => {
  topText.style.fontSize = `${tamanoInput.value}px`;
  bottomText.style.fontSize = `${tamanoInput.value}px`;
})

const alineacionIzquierda = document.getElementById('alineacionIzquierda');
alineacionIzquierda.addEventListener('click', () => {
  topText.style.textAlign = "left";
  bottomText.style.textAlign = "left";
  alineacionIzquierda.classList.add('btnLadoSelected');
  alineacionCentro.classList.remove('btnLadoSelected');
  alineacionDerecha.classList.remove('btnLadoSelected');
})

const alineacionCentro = document.getElementById('alineacionCentro');
alineacionCentro.addEventListener('click', () => {
  topText.style.textAlign = "center";
  bottomText.style.textAlign = "center";
  alineacionCentro.classList.add('btnLadoSelected');
  alineacionDerecha.classList.remove('btnLadoSelected');
  alineacionIzquierda.classList.remove('btnLadoSelected');
})

const alineacionDerecha = document.getElementById('alineacionDerecha');
alineacionDerecha.addEventListener('click', () => {
  topText.style.textAlign = "right";
  bottomText.style.textAlign = "right";
  alineacionDerecha.classList.add('btnLadoSelected');
  alineacionIzquierda.classList.remove('btnLadoSelected');
  alineacionCentro.classList.remove('btnLadoSelected');
})

const textoColorInput = document.getElementById('textoColorInput');
textoColorInput.addEventListener('input', () =>{
  topText.style.color = textoColorInput.value;
  bottomText.style.color = textoColorInput.value;

})

const backgroundColorInput = document.getElementById('backgroundColorInput');
backgroundColorInput.addEventListener('input', () =>{
  if(!sinColorFondoTexto.checked){
    topText.style.backgroundColor = backgroundColorInput.value;
    bottomText.style.backgroundColor = backgroundColorInput.value;
  }
})

const sinColorFondoTexto = document.getElementById('sinColorFondoTexto');
sinColorFondoTexto.addEventListener('input', ()=> {
  if(sinColorFondoTexto.checked){
    topText.style.backgroundColor = 'transparent';
    bottomText.style.backgroundColor ='transparent';
  }else{
    topText.style.backgroundColor = backgroundColorInput.value;
    bottomText.style.backgroundColor = backgroundColorInput.value;
  }
})

const sinContorno = document.getElementById('sinContorno');
const contornoClaro = document.getElementById('contornoClaro');
const contornoOscuro = document.getElementById('contornoOscuro');

sinContorno.addEventListener('click', () =>{
topText.style.textShadow = 'none';
bottomText.style.textShadow = 'none';
sinContorno.classList.add('btnContornoSelected');
contornoClaro.classList.remove('btnContornoSelected');
contornoOscuro.classList.remove('btnContornoSelected');
})

contornoClaro.addEventListener('click',() =>{
topText.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
bottomText.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
contornoClaro.classList.add('btnContornoSelected');
sinContorno.classList.remove('btnContornoSelected');
contornoOscuro.classList.remove('btnContornoSelected')

})

contornoOscuro.addEventListener('click',() =>{
topText.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
bottomText.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
contornoOscuro.classList.add('btnContornoSelected');
sinContorno.classList.remove('btnContornoSelected');
contornoClaro.classList.remove('btnContornoSelected');
})


// const alineacionIzquierda = document.getElementById('alineacionIzquierda');
// alineacionIzquierda.addEventListener('click', () => {
//   topText.style.textAlign = "left";
//   bottomText.style.textAlign = "left";
//   alineacionIzquierda.classList.add('btnLadoSelected');
//   alineacionCentro.classList.remove('btnLadoSelected');
//   alineacionDerecha.classList.remove('btnLadoSelected');
// })




const espacioInput = document.getElementById('espacioInput');
espacioInput.addEventListener('input', () =>{
  topText.style.padding = `${espacioInput.value}px`;
  bottomText.style.padding = `${espacioInput.value}px`;
  console.log(espacioInput.value);
})


const interlineadoInput = document.getElementById('interlineadoInput');
interlineadoInput.addEventListener('change',() =>{
  topText.style.lineHeight = interlineadoInput.value; 
  bottomText.style.lineHeight = interlineadoInput.value;
  console.log(interlineadoInput.value);
})



