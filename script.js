function key(event) {

    if (event.which == 13) {

        if (rw == 0) {
            fid = f();
            rw = setInterval(run, 100);
            rs.play();
            bw = setInterval(background, 100);
            sw = setInterval(updateScore, 100);
            fw = setInterval(move, 100);
        }
    }
    if (event.which == 32) {

        if(jw == 0) {
            clearInterval(rw);
            rs.pause();
            rw = -1;
            jw = setInterval(jump,100);
            js.play();

        }
    }
}


var rs = new Audio("./audio/run.mp3");
rs.loop = true;

var js = new Audio("./audio/jump.mp3");

var ds = new Audio("./audio/dead.mp3");




var fid = 0;
var m = 800;

function f() {
    for (var y = 0; y < 10; y++) {

        var i = document.createElement("img");
        i.src = "./images/flame.gif";
        i.className = "i";


        i.style.marginLeft = m + "px";

        if (y <= 5) {
            m = m + 600;
        }

        if (y >= 6) {
            m = m + 400;
        }


        i.id = "a" + y;

        document.getElementById("b").appendChild(i);
    }
}



var rw = 0;
var r = 1;

function run() {

    var rimg = document.getElementById("boy");

    r = r + 1;

    if (r == 9) {
        r = 1;
    }

    rimg.src = "./images/Run ("+ r +").png";

}



var bw = 0;
var b = 0;

function background() {

    var bimg = document.getElementById("b");

    b = b - 20;

    bimg.style.backgroundPositionX = b + "px";

}



var sw = 0;
var a = 0;

function updateScore() {

    a = a + 10;

    document.getElementById("score").innerHTML = a;

}




var fw = 0;

function move() {

    for (var y = 0; y < 10; y++) {

        var z = getComputedStyle(document.getElementById("a" + y));

        var p = parseInt(z.marginLeft);

        p = p -20;

        document.getElementById("a" + y).style.marginLeft = p + "px";

        // 40   160

        // 280

        if (p >= 80 & p <= 150) {

            if (mt > 310) {
                clearInterval(rw);
                rs.pause();

                clearInterval(jw);
                jw = -1;

                clearInterval(bw);

                clearInterval(sw);

                clearInterval(fw);

                dw = setInterval(dead, 100);
                ds.play();
            }
        }
        
   
    }
}


var jw = 0;
var j = 1;
var mt = 400;

function jump() {

    var jimg = document.getElementById("boy");

    if (j <= 6) {
        mt = mt - 30;
    }

    if (j >= 7) {
        mt = mt + 30;
    }

    jimg.style.marginTop = mt + "px";

    j = j + 1;

    if (j == 13) {
        j = 1;

        clearInterval(jw);
        jw = 0;

        rw = setInterval(run,100);
        rs.play();

        if (bw == 0) {
            bw = setInterval(background, 100);
        }

        if (fid == 0) {
            fid = f();
        }

        if (sw == 0) {
            sw = setInterval(updateScore, 100);
        }

        if (fw == 0){
            fw = setInterval(move, 100);
        }

    }

    jimg.src = "./images/Jump ("+ j +").png";
}




var dw = 0;
var d = 1;

function dead() {

    var dimg = document.getElementById("boy");

    d = d + 1;

    if (d == 11) {
        d = 10;

        dimg.style.marginTop = "370px";

        document.getElementById("end").style.visibility = "visible";

        document.getElementById("endscore").innerHTML = a;
    }

    dimg.src = "./images/Dead ("+ d +").png";

}

function re() {
    location.reload();
}