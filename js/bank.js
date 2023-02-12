const depositBalence = document.getElementById('depositBalence');
const withdrawBalance = document.getElementById('withdrawBalance');
const totalBalance = document.getElementById('totalBalance');

//inputs
const depositValue = document.getElementById('depositValue');
const withdrawInput = document.getElementById('withdrawInput');

//buttons
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

depositBtn.addEventListener('click', function(){
        depositBalence.innerText = +depositBalence.innerText + +depositValue.value;
        totalBalance.innerText = +totalBalance.innerText + +depositValue.value;
    depositValue.value = '';
})
withdrawBtn.addEventListener('click', function(){
    if(+withdrawInput.value <= +totalBalance.innerText){
        withdrawBalance.innerText = +withdrawBalance.innerText + +withdrawInput.value;
        totalBalance.innerText = +totalBalance.innerText - +withdrawInput.value;
    }
    else{
        alert('not allowd')
    }
    withdrawInput.value = '';
})