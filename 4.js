ketQua.style.display = "none";
button.onclick = function() {
    var chieuDai = document.getElementById('chieuDai').value;
    console.log(chieuDai);
    var chieuRong = document.getElementById('chieuRong').value;
    console.log(chieuRong);
    ketQua.style.display = "block";
    var dienTich = chieuDai*chieuRong;
    console.log(dienTich);
    ketQuaDienTich.innerHTML = "kết quả diên tích: " + dienTich + "."
    var chuVi = chieuDai*2 + chieuRong*2;
    // var chuVi = (chieuDai + chieuRong)*2;
    console.log(chuVi);
    ketQuaChuVi.innerHTML = "kết quả chu vi: " + chuVi +"."
}   