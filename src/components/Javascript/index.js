// Componentes
const txtEntrada = document.querySelector(".txtEntrada");
const txtSalida = document.querySelector(".txtSalida");

const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");

const bannerInfo = document.querySelector(".containerInfo");
const areaCopy = document.querySelector(".desencriptarSection");

// Varibales y estados
let dataGlobal = "";
let onEncript = {
  a: "usnx",
  e: "ofgn",
  i: "lñes",
  o: "cnek",
  u: "zlks",
};
let offEncript = {
  usnx: "a",
  ofgn: "e",
  lñes: "i",
  cnek: "o",
  zlks: "u",
};

// Captura de valores
const textValue = (e) => {
  value = e.target.value;
  dataGlobal = value;

  if (value.length) {
    txtEntrada.value = value;
    txtSalida.classList.remove("inactive");
    bannerInfo.classList.add("inactive");
  } else {
    txtSalida.classList.add("inactive");
    bannerInfo.classList.remove("inactive");
  }

  if (value.length <= 0) {
    txtSalida.textContent = "";
  }
};

// Validar que solo acepte minusculas y sin acentos.
txtEntrada.addEventListener("input", function (e) {
  var value = e.target.value;
  if (!/^[a-z]+$/u.test(value)) {
    e.target.value = value.replace(/[A-Z]/g, "");
  }
});

// Encripta el texto.
const encriptarTexto = (texto, cripto) => {
  let data = texto;

  let regex = new RegExp(Object.keys(cripto).join("|"), "gi");
  data = texto.replace(regex, (matched) => cripto[matched]);

  txtSalida.textContent = data;
};

// Desencripta el texto.
const desencriptarTexto = (texto, cripto) => {
  let data = texto;

  let regex = new RegExp(Object.keys(cripto).join("|"), "gi");
  data = texto.replace(regex, (matched) => cripto[matched]);

  txtSalida.textContent = data;
};

// Función para copiar.
const copyCripto = () => {
      if (txtEntrada.value) {
            txtSalida.select();
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
      }else{
            return;
      }
};

//Eventos.
btnEncriptar.addEventListener("click", () =>
  encriptarTexto(dataGlobal, onEncript)
);
btnDesencriptar.addEventListener("click", () =>
  desencriptarTexto(dataGlobal, offEncript)
);
txtEntrada.addEventListener("keyup", textValue);
areaCopy.addEventListener("click", copyCripto);


