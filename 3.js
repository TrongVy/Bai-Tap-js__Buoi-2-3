ketQua.style.display = 'none';
button.onclick = function() {
    var so_Usd_Muon_Quy_DOi = document.getElementById('so_Usd_Muon_Quy_DOi').value;
    var sau_Quy_Doi =so_Usd_Muon_Quy_DOi*23500;
    console.log(sau_Quy_Doi);
    ketQua.innerHTML = "giá trị sau quy đổi từ "+ so_Usd_Muon_Quy_DOi + " USD sang VND là: " + sau_Quy_Doi + " VND";
    ketQua.style.display = 'block';
}