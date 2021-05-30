ketQua.style.display = 'none';
button.onclick = function() {
    var a = document.getElementById("a").value;
    console.log(a)
    var b = document.getElementById("b").value;
    console.log(b)
    var c = document.getElementById("c").value;
    console.log(c)
    var d = document.getElementById("d").value;
    console.log(d)
    var e = document.getElementById("e").value;
    console.log(e)
    var giaTriTB = (Number(a)+Number(b)+Number(c)+Number(d)+Number(e))/5;
    console.log('gia tri TB = ' + giaTriTB);
    ketQua.style.display = 'block';
    ketQua.innerHTML = "giá trị trung bình của 5 số thực là: " + giaTriTB;
}
