ketQua.style.display = 'none';
button.onclick = function() {
    var so = document.getElementById('so').value;
    var so_hang_dv = so % 10;
    var so_hang_chuc = so /10;
    var tong = so_hang_chuc + so_hang_dv;
    console.log(Math.round(tong));
    ketQua.style.display = 'block';
    an_hien.innerHTML = "Tổng Hai Ký Số: " + Math.round(tong) 
}