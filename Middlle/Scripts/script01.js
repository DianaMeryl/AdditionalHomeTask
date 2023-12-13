
let enterName = document.querySelector("input");
let addBtn = document.querySelector("span");
let showArea = document.querySelector(".show-area");
let areaDoc = document.querySelector(".enter-name");

addBtn.addEventListener("click", handlerAddName);

areaDoc.addEventListener("click", (e) => {
    if(e.target !== showArea && e.target !== addBtn &&  e.target !== enterName)
    {
        enterName.value ="";
        showArea.textContent = "";
        showArea.classList.remove("error");
    }
});

function handlerAddName() {
    
    if (enterName.value && enterName.value.length > 3) {  
        showArea.textContent = `${enterName.value}`;
        showArea.classList.remove("error");
        enterName.value ="";
    } 
    else {
        showArea.textContent = "Помилка введення! Введіть ім'я з к-стю символів > 3";
        console.log("Помилка введення! Введіть ім'я з к-стю символів > 3");
        showArea.classList.add("error");
    }
}
