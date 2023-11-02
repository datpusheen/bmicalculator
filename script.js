document.getElementById("calculate").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("result").textContent = "Vui lòng nhập đúng cân nặng và chiều cao.";
    } else {
        const bmi = weight / (height * height);
        const roundedBMI = bmi.toFixed(1);
        document.getElementById("result").innerHTML = `Chỉ số BMI của bạn là ${roundedBMI}<br>${getBMICategory(bmi)}`;
    }
});

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Bạn bị thiếu cân";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Bạn bình thường";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "Bạn bị béo phì cấp độ 1";
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "Bạn bị béo phì cấp độ 2";
    } else if (bmi >= 40.0) {
        return "Bạn bị béo phì cấp độ 3";
    }
}