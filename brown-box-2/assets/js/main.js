function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;

    document.getElementById("banner").style.position = "absolute";
    document.getElementById("banner").style.transform = "translateX("+x+"px)"+"translateY("+y+"px)";
  }
  
  function clearCoor() {
    console.log("Out")
  }