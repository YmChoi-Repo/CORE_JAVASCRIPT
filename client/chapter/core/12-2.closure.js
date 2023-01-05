function earth() {
  let water = true;
  let apple = {
    founder: "Steve Jobs",
    ceo: "Tim Cook",
    product: ["iphone", "macbook", "macStudio", "appleWatch"],
  };
  let o2 = 9999;

  /* 
  function tiger(){
    console.log( water, o2);
  }
  return tiger
   */

  return function () {
    console.log(water, o2);
  };
}

const ufo = earth();

function handler() {
  let isClicked = false;
  //클릭이 됐는지 여쭤보는 선언

  return function () //리턴값을 넣어서 폐쇄시켜줌
  {
    if (isClicked === true) {
      this.style.background = "transparent";
    } else {
      this.style.background = "red";
    }
    isClicked = !isClicked;
  };
}

document.querySelector(".first").addEventListener("click", handler());

//handler 전체를 실행하느냐 or handler 내의 return 값을 실행하느냐?

// isClicked
