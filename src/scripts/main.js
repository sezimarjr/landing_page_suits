document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
      const abaAlvo = event.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodasAbas();
      aba.classList.add("shows__list--is-active");
      removeButtonAtivo();
      event.target.classList.add("shows__tabs__button--is-active");
    });
  }
});

function removeButtonAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id ]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}

// Seleção de botões
const buttons = document.querySelectorAll(".btn");
// Seleção de blocos de nota
const blocks = document.querySelectorAll(".tempNota");

// Adicionar evento de clique a cada botão
buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    // Esconder todos os blocos de nota
    blocks.forEach((block) => {
      block.style.display = "none";
    });

    // Exibir apenas o bloco de nota correspondente ao botão clicado
    blocks[index].style.display = "block";
  });
});

let btn0 = document.querySelector(".btn0");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");

let blco0 = document.querySelector(".trailler");
let blco1 = document.querySelector(".tempNota1");
let blco2 = document.querySelector(".tempNota2");
let blco3 = document.querySelector(".tempNota3");
let blco4 = document.querySelector(".tempNota4");
let blco5 = document.querySelector(".tempNota5");
let blco6 = document.querySelector(".tempNota6");
let blco7 = document.querySelector(".tempNota7");
let blco8 = document.querySelector(".tempNota8");
let blco9 = document.querySelector(".tempNota9");

let tmp0 = document.querySelector(".tmp-000");
let tmp1 = document.querySelector(".tmp-001");
let tmp2 = document.querySelector(".tmp-002");
let tmp3 = document.querySelector(".tmp-003");
let tmp4 = document.querySelector(".tmp-004");
let tmp5 = document.querySelector(".tmp-005");
let tmp6 = document.querySelector(".tmp-006");
let tmp7 = document.querySelector(".tmp-007");
let tmp8 = document.querySelector(".tmp-008");
let tmp9 = document.querySelector(".tmp-009");

btn0.addEventListener("click", function () {
  blco0.style.display = "block";
  blco1.style.display = "none";
  blco2.style.display = "none";
  blco3.style.display = "none";
  blco4.style.display = "none";
  blco5.style.display = "none";
  blco6.style.display = "none";
  blco7.style.display = "none";
  blco8.style.display = "none";
  blco9.style.display = "none";
});

btn1.addEventListener("click", function () {
  blco0.style.display = "none";
  blco1.style.display = "block";
  blco2.style.display = "none";
  blco3.style.display = "none";
  blco4.style.display = "none";
  blco5.style.display = "none";
  blco6.style.display = "none";
  blco7.style.display = "none";
  blco8.style.display = "none";
  blco9.style.display = "none";
});

btn2.addEventListener("click", function () {
  blco0.style.display = "none";
  blco1.style.display = "none";
  blco2.style.display = "block";
  blco3.style.display = "none";
  blco4.style.display = "none";
  blco5.style.display = "none";
  blco6.style.display = "none";
  blco7.style.display = "none";
  blco8.style.display = "none";
  blco9.style.display = "none";
});

btn3.addEventListener("click", function () {
  blco0.style.display = "none";
  blco1.style.display = "none";
  blco2.style.display = "none";
  blco3.style.display = "block";
  blco4.style.display = "none";
  blco5.style.display = "none";
  blco6.style.display = "none";
  blco7.style.display = "none";
  blco8.style.display = "none";
  blco9.style.display = "none";
});

btn4.addEventListener("click", function () {
  blco0.style.display = "none";
  blco1.style.display = "none";
  blco2.style.display = "none";
  blco3.style.display = "none";
  blco4.style.display = "block";
  blco5.style.display = "none";
  blco6.style.display = "none";
  blco7.style.display = "none";
  blco8.style.display = "none";
  blco9.style.display = "none";
});

btn5.addEventListener("click", function () {
  blco0.style.display = "none";
  blco1.style.display = "none";
  blco2.style.display = "none";
  blco3.style.display = "none";
  blco4.style.display = "none";
  blco5.style.display = "block";
  blco6.style.display = "none";
  blco7.style.display = "none";
  blco8.style.display = "none";
  blco9.style.display = "none";
});

btn6.addEventListener("click", function () {
  blco0.style.display = "none";
  blco1.style.display = "none";
  blco2.style.display = "none";
  blco3.style.display = "none";
  blco4.style.display = "none";
  blco5.style.display = "none";
  blco6.style.display = "block";
  blco7.style.display = "none";
  blco8.style.display = "none";
  blco9.style.display = "none";
});
btn7.addEventListener("click", function () {
  blco0.style.display = "none";
  blco1.style.display = "none";
  blco2.style.display = "none";
  blco3.style.display = "none";
  blco4.style.display = "none";
  blco5.style.display = "none";
  blco6.style.display = "none";
  blco7.style.display = "block";
  blco8.style.display = "none";
  blco9.style.display = "none";
});
btn8.addEventListener("click", function () {
  blco0.style.display = "none";
  blco1.style.display = "none";
  blco2.style.display = "none";
  blco3.style.display = "none";
  blco4.style.display = "none";
  blco5.style.display = "none";
  blco6.style.display = "none";
  blco7.style.display = "none";
  blco8.style.display = "block";
  blco9.style.display = "none";
});

btn9.addEventListener("click", function () {
  blco0.style.display = "none";
  blco1.style.display = "none";
  blco2.style.display = "none";
  blco3.style.display = "none";
  blco4.style.display = "none";
  blco5.style.display = "none";
  blco6.style.display = "none";
  blco7.style.display = "none";
  blco8.style.display = "none";
  blco9.style.display = "block";
});

function showSelectedContent() {
  let select = document.querySelector("#seasonSelect");
  let optionValue = select.options[select.selectedIndex];
  let value = optionValue.value;

  if (value === "tmp-000") {
    blco0.style.display = "block";
    tmp0.style.display = "block";
    blco1.style.display = "none";
    tmp1.style.display = "none";
    blco2.style.display = "none";
    tmp2.style.display = "none";
    blco3.style.display = "none";
    tmp3.style.display = "none";
    blco4.style.display = "none";
    tmp4.style.display = "none";
    blco5.style.display = "none";
    tmp5.style.display = "none";
    blco6.style.display = "none";
    tmp6.style.display = "none";
    blco7.style.display = "none";
    tmp7.style.display = "none";
    blco8.style.display = "none";
    tmp8.style.display = "none";
    blco9.style.display = "none";
    tmp9.style.display = "none";
  } else if (value === "tmp-001") {
    blco0.style.display = "none";
    tmp0.style.display = "none";
    blco1.style.display = "block";
    tmp1.style.display = "block";
    blco2.style.display = "none";
    tmp2.style.display = "none";
    blco3.style.display = "none";
    tmp3.style.display = "none";
    blco4.style.display = "none";
    tmp4.style.display = "none";
    blco5.style.display = "none";
    tmp5.style.display = "none";
    blco6.style.display = "none";
    tmp6.style.display = "none";
    blco7.style.display = "none";
    tmp7.style.display = "none";
    blco8.style.display = "none";
    tmp8.style.display = "none";
    blco9.style.display = "none";
    tmp9.style.display = "none";
  } else if (value === "tmp-002") {
    blco0.style.display = "none";
    tmp0.style.display = "none";
    blco1.style.display = "none";
    tmp1.style.display = "none";
    blco2.style.display = "block";
    tmp2.style.display = "block";
    blco3.style.display = "none";
    tmp3.style.display = "none";
    blco4.style.display = "none";
    tmp4.style.display = "none";
    blco5.style.display = "none";
    tmp5.style.display = "none";
    blco6.style.display = "none";
    tmp6.style.display = "none";
    blco7.style.display = "none";
    tmp7.style.display = "none";
    blco8.style.display = "none";
    tmp8.style.display = "none";
    blco9.style.display = "none";
    tmp9.style.display = "none";
  } else if (value === "tmp-003") {
    blco0.style.display = "none";
    tmp0.style.display = "none";
    blco1.style.display = "none";
    tmp1.style.display = "none";
    blco2.style.display = "none";
    tmp2.style.display = "none";
    blco3.style.display = "block";
    tmp3.style.display = "block";
    blco4.style.display = "none";
    tmp4.style.display = "none";
    blco5.style.display = "none";
    tmp5.style.display = "none";
    blco6.style.display = "none";
    tmp6.style.display = "none";
    blco7.style.display = "none";
    tmp7.style.display = "none";
    blco8.style.display = "none";
    tmp8.style.display = "none";
    blco9.style.display = "none";
    tmp9.style.display = "none";
  } else if (value === "tmp-004") {
    blco0.style.display = "none";
    tmp0.style.display = "none";
    blco1.style.display = "none";
    tmp1.style.display = "none";
    blco2.style.display = "none";
    tmp2.style.display = "none";
    blco3.style.display = "none";
    tmp3.style.display = "none";
    blco4.style.display = "block";
    tmp4.style.display = "block";
    blco5.style.display = "none";
    tmp5.style.display = "none";
    blco6.style.display = "none";
    tmp6.style.display = "none";
    blco7.style.display = "none";
    tmp7.style.display = "none";
    blco8.style.display = "none";
    tmp8.style.display = "none";
    blco9.style.display = "none";
    tmp9.style.display = "none";
  } else if (value === "tmp-005") {
    blco0.style.display = "none";
    tmp0.style.display = "none";
    blco1.style.display = "none";
    tmp1.style.display = "none";
    blco2.style.display = "none";
    tmp2.style.display = "none";
    blco3.style.display = "none";
    tmp3.style.display = "none";
    blco4.style.display = "none";
    tmp4.style.display = "none";
    blco5.style.display = "block";
    tmp5.style.display = "block";
    blco6.style.display = "none";
    tmp6.style.display = "none";
    blco7.style.display = "none";
    tmp7.style.display = "none";
    blco8.style.display = "none";
    tmp8.style.display = "none";
    blco9.style.display = "none";
    tmp9.style.display = "none";
  } else if (value === "tmp-006") {
    blco0.style.display = "none";
    tmp0.style.display = "none";
    blco1.style.display = "none";
    tmp1.style.display = "none";
    blco2.style.display = "none";
    tmp2.style.display = "none";
    blco3.style.display = "none";
    tmp3.style.display = "none";
    blco4.style.display = "none";
    tmp4.style.display = "none";
    blco5.style.display = "none";
    tmp5.style.display = "none";
    blco6.style.display = "block";
    tmp6.style.display = "block";
    blco7.style.display = "none";
    tmp7.style.display = "none";
    blco8.style.display = "none";
    tmp8.style.display = "none";
    blco9.style.display = "none";
    tmp9.style.display = "none";
  } else if (value === "tmp-007") {
    blco0.style.display = "none";
    tmp0.style.display = "none";
    blco1.style.display = "none";
    tmp1.style.display = "none";
    blco2.style.display = "none";
    tmp2.style.display = "none";
    blco3.style.display = "none";
    tmp3.style.display = "none";
    blco4.style.display = "none";
    tmp4.style.display = "none";
    blco5.style.display = "none";
    tmp5.style.display = "none";
    blco6.style.display = "none";
    tmp6.style.display = "none";
    blco7.style.display = "block";
    tmp7.style.display = "block";
    blco8.style.display = "none";
    tmp8.style.display = "none";
    blco9.style.display = "none";
    tmp9.style.display = "none";
  } else if (value === "tmp-008") {
    blco0.style.display = "none";
    tmp0.style.display = "none";
    blco1.style.display = "none";
    tmp1.style.display = "none";
    blco2.style.display = "none";
    tmp2.style.display = "none";
    blco3.style.display = "none";
    tmp3.style.display = "none";
    blco4.style.display = "none";
    tmp4.style.display = "none";
    blco5.style.display = "none";
    tmp5.style.display = "none";
    blco6.style.display = "none";
    tmp6.style.display = "none";
    blco7.style.display = "none";
    tmp7.style.display = "none";
    blco8.style.display = "block";
    tmp8.style.display = "block";
    blco9.style.display = "none";
    tmp9.style.display = "none";
  } else if (value === "tmp-009") {
    blco0.style.display = "none";
    tmp0.style.display = "none";
    blco1.style.display = "none";
    tmp1.style.display = "none";
    blco2.style.display = "none";
    tmp2.style.display = "none";
    blco3.style.display = "none";
    tmp3.style.display = "none";
    blco4.style.display = "none";
    tmp4.style.display = "none";
    blco5.style.display = "none";
    tmp5.style.display = "none";
    blco6.style.display = "none";
    tmp6.style.display = "none";
    blco7.style.display = "none";
    tmp7.style.display = "none";
    blco8.style.display = "none";
    tmp8.style.display = "none";
    blco9.style.display = "block";
    tmp9.style.display = "block";
  }
}
