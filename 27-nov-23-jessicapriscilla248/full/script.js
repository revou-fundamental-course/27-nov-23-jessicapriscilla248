function calculateLuas() {
    var base = document.getElementById('alas').value;
    var height = document.getElementById('tinggi').value;

    if (isNaN(base) || isNaN(height)) {
        alert("Please enter valid numbers for base and height.");
        return;
    }

    var resultDetails = document.getElementById('resultDetailsLuas');
    resultDetails.innerHTML = `L = 1/2 x a x t<br>`;
    resultDetails.innerHTML += `L = 1/2 x ${base} x ${height}<br>`;
    resultDetails.innerHTML += `L = ${0.5 * base * height}<br>`;

    var area = 0.5 * base * height;

    document.getElementById('resultLuas').innerHTML = "Luas segitiga adalah " + area;
}

function resetFormLuas() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';

    document.getElementById('resultDetailsLuas').innerHTML = '';
    document.getElementById('resultLuas').innerHTML = '';
}

function calculateKeliling() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Please enter valid numbers for A, B, and C.");
        return;
    }

    var resultDetails = document.getElementById('resultDetailsKeliling');
    resultDetails.innerHTML = `L = S1 + S2 + S3<br>`;
    resultDetails.innerHTML += `L = ${a} + ${b} + ${c}<br>`;
    resultDetails.innerHTML += `L = ${parseInt(a) + parseInt(b) + parseInt(c)}<br>`;

    var perimeter = parseInt(a) + parseInt(b) + parseInt(c);

    document.getElementById('resultKeliling').innerHTML = "Keliling segitiga adalah " + perimeter;
}

function resetFormKeliling() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';

    document.getElementById('resultDetailsKeliling').innerHTML = '';
    document.getElementById('resultKeliling').innerHTML = '';
}
