function init() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;

    var bg = new Image();
    bg.src = "snow.jpg";

    var flakes = [];

    function snowfall() {
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(bg, 0, 0);
        addFlake();
        snow();
    };

    function addFlake() {
        var x = Math.floor(Math.random() * w);
        var s = Math.floor(Math.random() * 4) + 1; // Minimum size of 1
        flakes.push({"x": x, "y": 0, "s": s});
    };

    function snow() {
        for (var i = 0; i < flakes.length; i++) {
            var flake = flakes[i];
            ctx.beginPath();
            ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            ctx.arc(flake.x, flake.y += flake.s / 2, flake.s / 2, 0, 2 * Math.PI);
            ctx.fill();
            if (flake.y > h) {
                flakes.splice(i, 1);
                i--; // Adjust index after removing
            }
        }
    };

    setInterval(snowfall, 20);
};

window.onload = init;
