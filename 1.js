var luongMotNgay = 100000;
tongTien.style.display = 'none';
btnTinhTienLuong.onclick = function() {
    var soNgayLam =document.getElementById('soNgayLam').value;
    console.log(soNgayLam);
    var tongTienLuong = soNgayLam*luongMotNgay;
    console.log(tongTienLuong);
    tongTien.style.display = 'block';
    tong.innerHTML = "Số tiền lương nhân được sau"+ soNgayLam  + " ngày làm là: " +tongTienLuong + ' VND';
}