const header = document.getElementById("header");
const main = document.getElementById("main");
const imgMeme = document.getElementById("imgMeme");
const memeContenido = document.getElementById("memeContenido");
const aside = document.getElementById("aside");
const panelImg = document.getElementById("panelImg");
const panelText = document.getElementById("panelText");
const btnOscuro = document.getElementById("modoOscuro");
const btnClaro = document.getElementById("modoClaro");
const btnImg = document.getElementById("btnImg");
const btnText = document.getElementById("btnText");
const panelUrlImagen = document.getElementById("panelUrlImagen");
const btnsFondo = document.getElementById("btnsFondo");
const elegirColorFondo = document.getElementById("elegirColorFondo");
const btnColorDeFondo = document.getElementById("btnBackgroundColor");
const panelInputImagen = document.getElementById("panelInputImagen");
const textareaTopText = document.getElementById("textareaTopText");
const textareaBottomText = document.getElementById("textareaBottomText");
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");
const cajaSinTopText = document.getElementById("cajaSinTopText");
const cajaSinBottomText = document.getElementById("cajaSinBottomText");
const inputBrillo = document.getElementById("inputBrillo");
const inputOpacidad = document.getElementById("inputOpacidad");
const inputContraste = document.getElementById("inputContraste");
const inputDesenfoque = document.getElementById("inputDesenfoque");
const inputEscala = document.getElementById("inputEscala");
const inputSepia = document.getElementById("inputSepia");
const inputHUE = document.getElementById("inputHUE");
const inputSaturado = document.getElementById("inputSaturado");
const inputNegativo = document.getElementById("inputNegativo");
const opcionNinguno = document.getElementById("opcionNinguno");
const opcionAclarar = document.getElementById("opcionNinguno");
const opcionOscurecer = document.getElementById("opcionOscurecer");
const opcionDiferencia = document.getElementById("opcionDiferencia");
const opcionLuminosidad = document.getElementById("opcionLuminosidad");
const opcionMultiplicar = document.getElementById("opcionMultiplicar");
const btnReestablecerFiltros = document.getElementById("btnReestablecerFiltros");
const divPanelTextoColor = document.getElementById("divPanelTextoColor");
const divPanelTextoColorFondo = document.getElementById("divPanelTextoColorFondo");

//                                     *************************************** MODO OSCURO/CLARO ***************************************

btnOscuro.addEventListener("click", () => {
  btnClaro.classList.remove("oculto");
  btnOscuro.classList.add("oculto");
  header.classList.add('modoClaroHeader');
  header.classList.remove('modoOscuroHeader');
  aside.classList.add('modoClaroAside');
  aside.classList.remove('modoOScuroAside');
  panelImg.classList.add('modoClaroAside');
  panelImg.classList.remove('modoOScuroAside');
  panelText.classList.add('modoClaroAside');
  panelText.classList.remove('modoOScuroAside');
  btnImg.classList.add('modoClaroBoton');
  btnImg.classList.remove('modoOscuroBoton');
  btnText.classList.add('modoClaroBoton');
  btnText.classList.remove('modoOscuroBoton');
  btnClaro.classList.add('modoClaroBoton');
  panelInputImagen.classList.remove('modoOscuro');
  panelInputImagen.classList.add('modoClaro');
  elegirColorFondo.classList.remove('modoOscuro');
  elegirColorFondo.classList.add('modoClaro');
  modoFondo.classList.remove('modoOscuro');
  modoFondo.classList.add('modoClaro');
  btnReestablecerFiltros.classList.remove('modoOscuro');
  btnReestablecerFiltros.classList.add('modoClaro');
  textareaTopText.classList.remove('modoOscuro');
  textareaTopText.classList.add('modoClaro');
  textareaBottomText.classList.remove('modoOscuro');
  textareaBottomText.classList.add('modoClaro');
  tipoDeFuente.classList.remove('modoOscuro');
  tipoDeFuente.classList.add('modoClaro');
  tamanoInput.classList.add('modoOscuro');
  tamanoInput.classList.add('modoClaro');
  alineacionIzquierda.classList.remove('modoOscuro');
  alineacionIzquierda.classList.add('modoClaro');
  alineacionDerecha.classList.remove('modoOscuro');
  alineacionDerecha.classList.add('modoClaro');
  alineacionCentro.classList.remove('modoOscuro');
  alineacionCentro.classList.add('modoClaro');
  divPanelTextoColor.classList.remove('modoOscuro');
  divPanelTextoColor.classList.add('modoClaro');
  divPanelTextoColorFondo.classList.remove('modoOscuro');
  divPanelTextoColorFondo.classList.add('modoClaro');
  sinContorno.classList.remove('modoOscuro');
  sinContorno.classList.add('modoClaro');
  contornoClaro.classList.remove('modoOscuro');
  contornoClaro.classList.add('modoClaro');;
  contornoOscuro.classList.remove('modoOscuro');
  contornoOscuro.classList.add('modoClaro');
  espacioInput.classList.remove('modoOscuro');
  espacioInput.classList.add('modoClaro');
  interlineadoInput.classList.remove('modoOscuro');
  interlineadoInput.classList.add('modoClaro');
});

btnClaro.addEventListener("click", () => {
  btnClaro.classList.add("oculto");
  btnOscuro.classList.remove("oculto");
  header.classList.add('modoOscuroHeader');
  header.classList.remove('modoClaroHeader');
  aside.classList.remove('modoClaroAside');
  aside.classList.add('modoOScuroAside');
  panelImg.classList.remove('modoClaroAside');
  panelImg.classList.add('modoOScuroAside');
  panelText.classList.remove('modoClaroAside');
  panelText.classList.add('modoOScuroAside');
  btnImg.classList.remove('modoClaroBoton');
  btnImg.classList.add('modoOscuroBoton');
  btnText.classList.remove('modoClaroBoton');
  btnText.classList.add('modoOscuroBoton');
  btnOscuro.classList.add('modoOscuroBoton');
  panelInputImagen.classList.add('modoOscuro');
  panelInputImagen.classList.remove('modoClaro');
  elegirColorFondo.classList.add('modoOscuro');
  elegirColorFondo.classList.remove('modoClaro');
  modoFondo.classList.add('modoOscuro');
  modoFondo.classList.remove('modoClaro');
  btnReestablecerFiltros.classList.add('modoOscuroBoton');
  btnReestablecerFiltros.classList.remove('modoClaro');
  textareaTopText.classList.add('modoOscuro');
  textareaTopText.classList.remove('modoClaro');
  textareaBottomText.classList.add('modoOscuro');
  textareaBottomText.classList.remove('modoClaro');
  tipoDeFuente.classList.add('modoOscuro');
  tipoDeFuente.classList.remove('modoClaro');
  tamanoInput.classList.add('modoOscuro');
  tamanoInput.classList.remove('modoClaro');
  alineacionIzquierda.classList.add('modoOscuro');
  alineacionIzquierda.classList.remove('modoClaro');
  alineacionDerecha.classList.add('modoOscuro');
  alineacionDerecha.classList.remove('modoClaro');
  alineacionCentro.classList.add('modoOscuro');
  alineacionCentro.classList.remove('modoClaro');
  divPanelTextoColor.classList.add('modoOscuro');
  divPanelTextoColor.classList.remove('modoClaro');
  divPanelTextoColorFondo.classList.add('modoOscuro');
  divPanelTextoColorFondo.classList.remove('modoClaro');
  sinContorno.classList.add('modoOscuro');
  sinContorno.classList.remove('modoClaro');
  contornoClaro.classList.add('modoOscuro');
  contornoClaro.classList.remove('modoClaro');;
  contornoOscuro.classList.add('modoOscuro');
  contornoOscuro.classList.remove('modoClaro');
  espacioInput.classList.add('modoOscuro');
  espacioInput.classList.remove('modoClaro');
  interlineadoInput.classList.add('modoOscuro');
  interlineadoInput.classList.remove('modoClaro');
});

//                                   ************************* OCULTAR/APARECER PANELES DE TEXTO E IMAGEN ************************

btnImg.addEventListener("click", () => {
  panelText.classList.add("oculto");
  panelImg.classList.remove("oculto");
  panelImg.style.display = 'block';
  aside.style.display = 'block';
  panelText.style.display = 'none';
});

btnText.addEventListener("click", () => {
  panelImg.classList.add("oculto");
  panelText.classList.remove("oculto");
  panelText.style.display = 'block';
  aside.style.display = 'block';
  panelImg.style.display = 'none';
});

//                                     *************************************** PANEL IMAGEN ***************************************

const btnCerrar = document.getElementById('btnCerrar');
btnCerrar.addEventListener('click', () => {
  aside.style.display = 'none';
  panelText.style.display = 'none';
  panelImg.style.display = 'none';
})


panelInputImagen.addEventListener("input", (event) => {
  const mostrarImage = event.target.value;
  imgMeme.style = `background-image: url("${mostrarImage}");"`;
});

const colorFondoInput = document.getElementById('colorFondoInput');
colorFondoInput.addEventListener('input', () => {
  imgMeme.style.backgroundColor = colorFondoInput.value;
})

const modoFondo = document.getElementById('modoFondo');
modoFondo.addEventListener('input', () => {
 imgMeme.style.backgroundBlendMode = modoFondo.value;
})

const filtro = () => {
  imgMeme.style.filter = `brightness(${inputBrillo.value}) opacity(${inputOpacidad.value}) contrast(${inputContraste.value * 100}%)
  blur(${inputDesenfoque.value}px) grayscale(${inputEscala.value}%) sepia(${inputSepia.value}%) 
  hue-rotate(${inputHUE.value * 100}deg) saturate(${inputSaturado.value}%) invert(${inputNegativo.value})`;
}

inputBrillo.addEventListener('input', filtro);
inputOpacidad.addEventListener('input', filtro);
inputContraste.addEventListener('input', filtro);
inputDesenfoque.addEventListener('input', filtro);
inputEscala.addEventListener('input', filtro);
inputSepia.addEventListener('input', filtro);
inputHUE.addEventListener('input', filtro);
inputSaturado.addEventListener('input', filtro);
inputNegativo.addEventListener('input', filtro);

btnReestablecerFiltros.addEventListener("click", () => {
  inputBrillo.value = 1;
  imgMeme.style.filter = `brightness(${inputBrillo.value})`;
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
});

//************inicio seccion panel texto************

textareaTopText.addEventListener("input", (event) => {
  const textoIngresado =  event.target.value;
  topText.innerHTML = textoIngresado;
});

textareaBottomText.addEventListener("input", (event) => {
  const textoIngresado =  event.target.value;
  bottomText.innerHTML = textoIngresado;
});

cajaSinTopText.addEventListener("input", () => {
  if (cajaSinTopText.checked) {
    topText.style.display = "none";
    imgMeme.style.backgroundSize = "cover";
  } else {
    topText.style.display = "block";
  }
});

cajaSinBottomText.addEventListener("input", () => {
  if (cajaSinBottomText.checked) {
    bottomText.style.display = "none";
    imgMeme.style.backgroundSize = "cover";
  } else {
    bottomText.style.display = "block";
  }
});

const tipoDeFuente = document.getElementById("tipoDeFuente");
tipoDeFuente.addEventListener("change", () => {
  topText.style.fontFamily = tipoDeFuente.value;
  bottomText.style.fontFamily = tipoDeFuente.value;
  console.log(tipoDeFuente.value);
});

const tamanoInput = document.getElementById("tamanoInput");
tamanoInput.addEventListener("input", () => {
  topText.style.fontSize = `${tamanoInput.value}px`;
  bottomText.style.fontSize = `${tamanoInput.value}px`;
});

const alineacionIzquierda = document.getElementById("alineacionIzquierda");
alineacionIzquierda.addEventListener("click", () => {
  topText.style.textAlign = "left";
  bottomText.style.textAlign = "left";
  alineacionIzquierda.classList.add("btnLadoSelected");
  alineacionCentro.classList.remove("btnLadoSelected");
  alineacionDerecha.classList.remove("btnLadoSelected");
});

const alineacionCentro = document.getElementById("alineacionCentro");
alineacionCentro.addEventListener("click", () => {
  topText.style.textAlign = "center";
  bottomText.style.textAlign = "center";
  alineacionCentro.classList.add("btnLadoSelected");
  alineacionDerecha.classList.remove("btnLadoSelected");
  alineacionIzquierda.classList.remove("btnLadoSelected");
});

const alineacionDerecha = document.getElementById("alineacionDerecha");
alineacionDerecha.addEventListener("click", () => {
  topText.style.textAlign = "right";
  bottomText.style.textAlign = "right";
  alineacionDerecha.classList.add("btnLadoSelected");
  alineacionIzquierda.classList.remove("btnLadoSelected");
  alineacionCentro.classList.remove("btnLadoSelected");
});

const textoColorInput = document.getElementById("textoColorInput");
textoColorInput.addEventListener("input", () => {
  topText.style.color = textoColorInput.value;
  bottomText.style.color = textoColorInput.value;
});

const backgroundColorInput = document.getElementById("backgroundColorInput");
backgroundColorInput.addEventListener("input", () => {
  if (!sinColorFondoTexto.checked) {
    topText.style.backgroundColor = backgroundColorInput.value;
    bottomText.style.backgroundColor = backgroundColorInput.value;
  }
});

const sinColorFondoTexto = document.getElementById("sinColorFondoTexto");
sinColorFondoTexto.addEventListener("input", () => {
  if (sinColorFondoTexto.checked) {
    topText.style.backgroundColor = "transparent";
    topText.style.position= "absolute";
    bottomText.style.backgroundColor = "transparent";
    bottomText.style.position= "absolute";
    bottomText.style.top="85%"
  } else {
    topText.style.backgroundColor = backgroundColorInput.value;
    topText.style.position="static";
    bottomText.style.backgroundColor = backgroundColorInput.value;
    bottomText.style.position="static";
  }
});

const sinContorno = document.getElementById("sinContorno");
const contornoClaro = document.getElementById("contornoClaro");
const contornoOscuro = document.getElementById("contornoOscuro");

sinContorno.addEventListener("click", () => {
  topText.style.textShadow = "none";
  bottomText.style.textShadow = "none";
  sinContorno.classList.add("btnContornoSelected");
  contornoClaro.classList.remove("btnContornoSelected");
  contornoOscuro.classList.remove("btnContornoSelected");
});

contornoClaro.addEventListener("click", () => {
  topText.style.textShadow = "2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white ";
  bottomText.style.textShadow = "2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white";
  contornoClaro.classList.add("btnContornoSelected");
  sinContorno.classList.remove("btnContornoSelected");
  contornoOscuro.classList.remove("btnContornoSelected");
});

contornoOscuro.addEventListener("click", () => {
  topText.style.textShadow = "2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black";
  bottomText.style.textShadow = "2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black";
  contornoOscuro.classList.add("btnContornoSelected");
  sinContorno.classList.remove("btnContornoSelected");
  contornoClaro.classList.remove("btnContornoSelected");
});


const espacioInput = document.getElementById("espacioInput");
espacioInput.addEventListener("input", () => {
  topText.style.padding = `${espacioInput.value}px`;
  bottomText.style.padding = `${espacioInput.value}px`;
  console.log(espacioInput.value);
});

const interlineadoInput = document.getElementById("interlineadoInput");
interlineadoInput.addEventListener("change", () => {
  topText.style.lineHeight = interlineadoInput.value;
  bottomText.style.lineHeight = interlineadoInput.value;
});


//************* BOTÖN DE DESCARGA ********************** */
const memeContenedor = document.getElementById('memeContenedor');
const botonDescargar = document.getElementById('botonDescargar');
botonDescargar.addEventListener('click', () => 
domtoimage.toBlob(document.getElementById('memeContenedor')).then(blob => 
saveAs(blob, 'memeContenedor.png')))




//  window.addEventListener('resize', () => {
//  if (window.innerWidth < 1300){
//   panelImg.style.display = 'none';
//    panelText.style.display = 'none';
//    aside.style.display = 'none';
//    btnCerrar.style.display ='block';
//  }
//  if(window.innerWidth >= 1300){
//  panelImg.style.display = 'block';
//  panelText.style.display = 'none';
//  btnCerrar.style.display ='none';
//  aside.style.display = 'block';
//  }
// })
