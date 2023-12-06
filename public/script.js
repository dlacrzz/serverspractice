const secretButton = document.getElementById('secretButton');
const secretDiv = document.querySelector('.secret');


secretButton.addEventListener('click', function() {
  secretDiv.style.display = (secretDiv.style.display === 'none' || secretDiv.style.display === '') ? 'block' : 'none';
});



const d1Button = document.getElementById("res");
const d1Div = document.getElementById("d1");
const d2Button = document.getElementById("st");
const d2Div = document.getElementById("d2");
const d3Button = document.getElementById("gst");
const d3Div = document.getElementById("d3");
const d4Button = document.getElementById("bt");
const d4Div = document.getElementById("d4");
const secretButton2 = document.getElementById("sst");
const secretDiv2 = document.getElementById("secretd");

d1Button.addEventListener('click', function() {
  d1Div.classList.toggle('hidden');
});

d2Button.addEventListener('click', function() {
  d2Div.classList.toggle('hidden');
});

d3Button.addEventListener('click', function() {
  d3Div.classList.toggle('hidden');
});

d4Button.addEventListener('click', function() {
  d4Div.classList.toggle('hidden');
});

secretButton2.addEventListener('click', function() {
  secretDiv2.classList.toggle('hidden');
});



const priceButton1 = document.getElementById("price1");
const resPriceX = document.getElementById("resPrice");
const priceButton2 = document.getElementById("price2");
const stPriceX = document.getElementById("stPrice");
const priceButton3 = document.getElementById("price3");
const gstPriceX = document.getElementById("gstPrice");
const priceButton4 = document.getElementById("price4");
const btPriceX = document.getElementById("btPrice");
const priceButtonSecret = document.getElementById("priceSecret");
const secretPriceX = document.getElementById("secretPrice");

priceButton1.addEventListener('click', function() {
  resPriceX.classList.toggle('hidden');
});

priceButton2.addEventListener('click', function() {
  stPriceX.classList.toggle('hidden');
});

priceButton3.addEventListener('click', function() {
  gstPriceX.classList.toggle('hidden');
});

priceButton4.addEventListener('click', function() {
  btPriceX.classList.toggle('hidden');
});

priceButtonSecret.addEventListener('click', function() {
  secretPriceX.classList.toggle('hidden');
});
