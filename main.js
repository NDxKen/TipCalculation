document.querySelector('.btnCalculatorTip').addEventListener('click', function(event) {
    event.preventDefault();
    var moneyPaid =  document.getElementById("moneyPaid").value;
    var tipPercent = document.getElementById("tipPercent").value;
    var amountOfPerson = document.getElementById("amountOfPerson").value;
    var sumTip = moneyPaid*tipPercent/(amountOfPerson*100);
    if(moneyPaid != '' && tipPercent != '' && sumTip != '') {
        document.getElementById("notifyTip").innerHTML = sumTip;
        document.querySelector(".info-tip").classList.add('d-block');
    } else {
        alert("Bạn nhập thiếu thông tin")
    }
})