const ols = document.querySelector(".border");
const lis = document.querySelectorAll("li");
let flag = true;

    ols.addEventListener("click", handlerBtnClick);

function handlerBtnClick(e){

    if(e.target.closest("li")){
        lis.forEach(elem => {
            if(e.target.dataset.id == elem.dataset.id){
                elem.hidden = true;
                console.log(elem.textContent);
            }

        })
    }
}
