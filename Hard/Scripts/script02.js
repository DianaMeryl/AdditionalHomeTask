const divForShow = document.querySelector(".show");
const btnForShow = document.querySelector(".btn");
const img  = document.querySelector(".img");

const arrayPhotos = ["/Hard/Images/1.svg", "/Hard/Images/2.svg", "/Hard/Images/3.svg", "/Hard/Images/4.svg"]
let i = 0; 

btnForShow.addEventListener("click", handlerPictureShow);

document.addEventListener("keydown", (e) => {
  switch(e.code){
    case "Digit1":
     divForShow.innerHTML = `<img src="/Hard/Images/1.svg">`;
     break;
     case "Digit2":
     divForShow.innerHTML = `<img src="/Hard/Images/2.svg">`;
     break;
     case "Digit3":
     divForShow.innerHTML = `<img src="/Hard/Images/3.svg">`;
     break;
     case "Digit4":
     divForShow.innerHTML = `<img src="/Hard/Images/4.svg">`;
     break;
  }
  // if(e.code == "Digit1")
  // divForShow.innerHTML = `<img src="/Hard/Images/1.svg">`;
  // if(e.code == "Digit2")
  // divForShow.innerHTML = `<img src="/Hard/Images/2.svg">`;
  // if(e.code == "Digit3")
  // divForShow.innerHTML = `<img src="/Hard/Images/3.svg">`;
  // if(e.code == "Digit4")
  // divForShow.innerHTML = `<img src="/Hard/Images/4.svg">`;
})

function handlerPictureShow () {
    i++;
    if(i >= arrayPhotos.length){
        i = 0;
    }
    divForShow.innerHTML = `<img src="${arrayPhotos[i]}">`;
}

function getImages(n){
    let image;
    const array = [];
      for( let i = 1; i <= n; i++ ){
        image = new Image;
        image.src = "/Hard/Images/" + i + ".svg";
        array.push(image);
      };
      return array;
    };
    