function CalculateArea(length, width) {
    let area = length * width;
    return area;
}
function calculate() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    let area = CalculateArea(length, width);
    document.getElementById("area").value = area;
}
