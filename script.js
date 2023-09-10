const priceAmt = document.getElementById('price-amt');
const inputDts = document.getElementById('input');

const progress = document.querySelector('.progress');

const changeBtn = document.getElementById('changeBtn');
const indicator = document.getElementById('indicator');
let monthyear = document.getElementById('month-year');


inputDts.oninput = (() => {
    let value = inputDts.value;
    priceAmt.textContent = `$ ${value}.00`;
    
    if(indicator.classList.contains('active')) {
        inputDts.setAttribute('max', 384);
        priceAmt.textContent = `$ ${value}.00`;
    } else {
        inputDts.setAttribute('max', 32);
    }

    let maxValue = inputDts.getAttribute('max');
    let val = (value / maxValue) * 100 + '%';

    progress.style.width = val;
    
})


indicator.addEventListener('click', () => {
    indicator.classList.toggle('active');

    inputDts.value = 0;
    priceAmt.textContent = '$ 0.00';

    progress.style.width = 0;

    if(indicator.classList.contains('active')) {
        monthyear.textContent = ' / year ';
    } else {
        monthyear.textContent = ' / month ';
    }
    
});