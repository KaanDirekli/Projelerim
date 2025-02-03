function login(){
	var k_adi = document.giris.ad.value;
	var parola = document.giris.parola.value;

	if (k_adi=="Kaan" && parola=="1234") 
	{
		document.getElementById('info').innerHTML
		="Success"
		document.getElementById('link').removeAttribute('style');
	}

	else
	{
		document.getElementById('info').innerHTML
		="Error: Wrong password/username"
	}
}