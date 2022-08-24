function percentage(){
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var obtMark = num1.value;
    var totalMark = num2.value;
    var percentage = Math.round((obtMark/totalMark) * 100)
    // var list = document.getElementById("list");
    // var li = document.createElement("li");
    // li.innerHTML += percentage
    // list.appendChild(li);
    swal("Hello your percentage is "+percentage+"%");
}
