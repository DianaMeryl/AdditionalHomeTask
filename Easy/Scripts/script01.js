const texts = document.querySelectorAll("span");
const textPrgf = document.querySelectorAll(".text__paragraph");
const btn = document.querySelectorAll(".text__btn");
let flag = true;

texts.forEach(elem => {    
    elem.addEventListener("click", handlerBtnClick);
});


function handlerBtnClick(e){
    if (flag) {
        if(e.target.closest("span")){
        textPrgf.forEach(elem => {
                if(e.target.dataset.id == elem.dataset.idParag && elem.dataset.idParag == "1")
                elem.textContent = "Перевіряє пошту інших користувачів.";
                else if(e.target.dataset.id == elem.dataset.idParag && elem.dataset.idParag == "2")
                elem.textContent = "Нічого, програмісти не сплять.";
                else if(e.target.dataset.id == elem.dataset.idParag && elem.dataset.idParag == "3")
                elem.textContent = "Тому, що блискавка виконується на сервері, а звук на клієнті.";
            })
        }
        flag = false;
    }
    else{
        if(e.target.closest("span")){
            textPrgf.forEach(elem => {
                if(e.target.dataset.id == elem.dataset.idParag && elem.dataset.idParag == "1")
                elem.textContent = "Що робить хакер зранку після того як помиється і перевірить свою пошту?";  
                if(e.target.dataset.id == elem.dataset.idParag && elem.dataset.idParag == "2")
                elem.textContent = "Що сниться програмісту?";  
                if(e.target.dataset.id == elem.dataset.idParag && elem.dataset.idParag == "3")
                elem.textContent = "Чому звук грому відстає від блискавки?";  
            })
        }
        flag = true;
    }
}
