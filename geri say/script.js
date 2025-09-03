let geriSayimInterval;

function geriSayimBaslat() {
	let tarihSecici = document.getElementById("tarihSecici").value;
	let hedefTarih = new Date(tarihSecici).getTime();

	if (!tarihSecici || isNaN(hedefTarih)) {
		alert("Lütfen geçerli bir tarih seçiniz");
		return;
	}

	document.getElementById("baslatBtn").disabled = true;
	document.getElementById("durdurBtn").disabled = false;

	geriSayimInterval = setInterval(() =>{
		let simdi = new Date().getTime();
		let fark = hedefTarih - simdi;

		if (fark <=0) {
			clearInterval(geriSayimInterval);
			document.getElementById("geriSayim").innerHTML = "Süre Doldu";
			return;

		};

		let gun = Math.floor(fark / (1000 * 60 * 60 * 24));
		let saat = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let dakika = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));
		let saniye = Math.floor((fark % (1000 * 60)) / 1000);

		document.getElementById("geriSayim").innerHTML = `${gun}g ${saat}s ${dakika}dk ${saniye}sn`;
	},1000);


}

function geriSayimiDurdur() {
	clearInterval(geriSayimInterval);
	let geriSayimMetin = document.getElementById("geriSayim").innerHTML;
	document.getElementById("geriSayim").innerHTML = `${geriSayimMetin} - Geri Sayım Durduruldu`;

	document.getElementById("baslatBtn").disabled = false;
	document.getElementById("durdurBtn").disabled = true;

}