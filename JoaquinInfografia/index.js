const slider = document.getElementById("myRange");
const output = document.getElementById("myPrice");
const output2 = document.getElementById("price");
const body = document.getElementById("body");
const primary = document.getElementById("primary");
const second = document.getElementById("second");
const showSecond = document.getElementById("showSecond");
const imageFiltro = document.getElementById("filtro");

const btnPersonal = document.getElementById("btnPersonal");
const btnEmpresarial = document.getElementById("btnEmpresarial");
const btnIndustrial = document.getElementById("btnIndustrial");

btnPersonal.addEventListener("click", Personal);
btnEmpresarial.addEventListener("click", Empresarial);
btnIndustrial.addEventListener("click", Industrial);

output.innerHTML = "500";

//click uso Personal
function Personal() {
  output.innerHTML = "500";
  price.innerHTML = "500";
  slider.value = 0;

  slider.oninput = function () {
    output.innerHTML = this.value * 500;
    price.innerHTML = this.value * 500;
    slider.step = 1;
  };
  slider.classList.remove("industrial");
  slider.classList.remove("empresarial");
  slider.classList.add("personal");
  imageFiltro.src = "img/bottle.png";
  btnPersonal.classList.add("active");
  btnEmpresarial.classList.remove("active");
  btnIndustrial.classList.remove("active");
}

//click uso Empresarial
function Empresarial() {
  output.innerHTML = "134400";
  price.innerHTML = "134400";
  slider.value = 0;

  slider.oninput = function () {
    output.innerHTML = this.value * 134400;
    price.innerHTML = this.value * 134400;
  };

  slider.classList.remove("industrial");
  slider.classList.add("empresarial");
  slider.classList.remove("personal");
  imageFiltro.src = "img/empresarial.png";
  btnPersonal.classList.remove("active");
  btnEmpresarial.classList.add("active");
  btnIndustrial.classList.remove("active");
}

//click Uso Industrial
function Industrial() {
  output.innerHTML = "497658";
  price.innerHTML = "497658";
  slider.value = 0;

  slider.oninput = function () {
    output.innerHTML = this.value * 497658;
    price.innerHTML = this.value * 497658;
  };
  slider.classList.add("industrial");
  slider.classList.remove("empresarial");
  slider.classList.remove("personal");
  imageFiltro.src = "img/industrial.png";
  btnPersonal.classList.remove("active");
  btnEmpresarial.classList.remove("active");
  btnIndustrial.classList.add("active");
}

//Click acpetar
showSecond.addEventListener("click", function () {
  primary.classList.add("hidden");
  second.classList.add("active");
  second.classList.remove("hidden");
  body.classList.add("active");
});

Personal();
