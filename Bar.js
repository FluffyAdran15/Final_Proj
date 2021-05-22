var i = 0;
var j = 0
var k = 0
var l = 0



function Java() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("dour");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 65) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}



function html() {
  if (j == 0) {
    j = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 95) {
        clearInterval(id);
        j = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}


function move() {
  if (k == 0) {
    k = 1;
    var elem = document.getElementById("Bar");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        k = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}


function mads() {
  if (l == 0) {
    j = 1;
    var elem = document.getElementById("modes");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 45) {
        clearInterval(id);
        j = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}




var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function Nav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}





window.onload = Java();
window.onload = html();
window.onload = move();
window.onload = mads();

