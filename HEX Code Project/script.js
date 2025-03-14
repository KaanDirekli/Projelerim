document.querySelectorAll(".color-box").forEach(box =>{

		box.addEventListener("mouseover",function() {
			let bgColor = window.getComputedStyle(this).backgroundColor;
			let hexColor = rgbToHex(bgColor).toUpperCase();
			document.getElementById("colorCode").textContent = "HEX Code: "+hexColor;
		});
});

function rgbToHex(rgb){
	let rgbValues = rgb.match(/\d+/g);
	return "#" + rgbValues.map(val => {
		let hex = parseInt(val).toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}).join("");
}