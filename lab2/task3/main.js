let calculateButton = document.getElementById("calculate");
let depositType = document.getElementById("deposit-type");
let money = document.getElementById("money-amount");
let duration = document.getElementById("duration");
let output = document.getElementById("output-block");

var refillableDepositData = {
    6: 20,
    12: 22,
    18: 15,
    24: 10
};

var termDepositData = {
    3: 20,
    6: 22,
    9: 23,
    12: 24,
    18: 18,
    24: 15
};

updateDurations();

function getAmount(deposit, duratiionInMonths, rate) {
    let totalAmount = deposit + ((deposit * rate * duratiionInMonths * 30.0 / 365.0) / 100.0);
    return totalAmount.toFixed(2);
};

calculateButton.onclick = function () {
    let collection = getCurrentCollection();

    let totalAmount = getAmount(Number(money.value), Number(duration.value), Number(collection[duration.value]));
    let msg1 = `Вклад "${depositType.options[depositType.selectedIndex].text}". Cтавка: ${collection[duration.value]}%. Cрок: ${duration.value} мес. Cумма: ${money.value} руб.`;
    let msg2 = `В конце срока Вы получите ${totalAmount} руб.`;
    output.innerHTML = msg1 + "<br><br>" + msg2;
};

depositType.oninput = function () {
    output.innerHTML = "";
    updateDurations();
};

money.oninput = function () {
    output.innerHTML = "";
    if (money.value < 10000 || money.value >= 100000000) {
        alert("Неверынй ввод суммы. Минимальный взнос 10 000 руб., максимальный 100 000 000 руб.");
        money.value = 10000;
    }
    ;

}

duration.oninput = function () {
    output.innerHTML = "";
};

function updateDurations() {
    let collection = getCurrentCollection();

    duration.innerHTML = "";
    for (const [key] of Object.entries(collection)) {
        var opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = `${key} мес.`;
        duration.appendChild(opt);
    }
    ;
};

function getCurrentCollection() {
    return depositType.value == 0 ? refillableDepositData : termDepositData;
};