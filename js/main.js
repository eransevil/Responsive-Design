function  mouseOver(num){
    document.querySelector(`.arrow${num}`).style.display = "inline-block";

}

function mouseOut(num) {
    document.querySelector(`.arrow${num}`).style.display = "none";
  }