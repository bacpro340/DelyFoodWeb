const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const title = document.querySelector(".head_1");

const stepOne = document.querySelector(".step1");
const stepTwo = document.querySelector(".step2");
const stepThree = document.querySelector(".step3");
const stepFour = document.querySelector(".step4");
stepOne.innerHTML = time();

one.onclick = function () {
  one.classList.add("active");
  two.classList.remove("active");
  three.classList.remove("active");
  four.classList.remove("active");
  stepOne.innerHTML = time();
  stepTwo.innerHTML = "";
  stepThree.innerHTML = "";
  stepFour.innerHTML = "";
  title.innerHTML = "Đặt hàng thành công";
};

two.onclick = function () {
  one.classList.add("active");
  two.classList.add("active");
  three.classList.remove("active");
  four.classList.remove("active");
  stepTwo.innerHTML = time();
  stepThree.innerHTML = "";
  stepFour.innerHTML = "";
  title.innerHTML = "Nhà hàng đang làm món";
};
three.onclick = function () {
  one.classList.add("active");
  two.classList.add("active");
  three.classList.add("active");
  four.classList.remove("active");
  stepThree.innerHTML = time();
  stepFour.innerHTML = "";
  title.innerHTML = "Đang giao hàng";
};
four.onclick = function () {
  one.classList.add("active");
  two.classList.add("active");
  three.classList.add("active");
  four.classList.add("active");
  stepFour.innerHTML = time();
  title.innerHTML = "Giao hàng thành công";
};

function checkTime(i) {
  if (i < 0) {
    i = "0" + i;
  }
  return i;
}
function time() {
  var date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();

  mm = checkTime(mm);

  return hh + ":" + mm;
}
