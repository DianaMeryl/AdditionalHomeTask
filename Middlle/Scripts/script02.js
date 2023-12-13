const showArea = document.querySelector(".show-product");

const products = [
    {
        name: 'Мандарин',
        price: 49.99,
        category: 'Фрукти',
    },
    {
        name: 'Банан',
        price: 59.99,
        category: 'Фрукти',
    },
    {
        name: 'Хліб',
        price: 30.99,
        category: 'Випічка',
    },
    {
        name: 'Манго',
        price: 119.00,
        category: 'Фрукти',
    },
    {
        name: 'Батон',
        price: 24.99,
        category: 'Випічка',
    },
    {
        name: 'Капсули для прання 13шт',
        price: 199.00,
        category: 'Акційні товари',
    },
    {
        name: 'Рушники паперові',
        price: 18.99,
        category: 'Акційні товари',
    }
];

product.onchange = e => {
   showArea.innerHTML = "";
   let prod = [];
   products.forEach(elem =>{
        if(e.target.value == elem.category)
        {
            prod.push(elem);
          
        }
    })
    let filteredProd = productList(prod); 
    showArea.append(filteredProd); 
} 

function productList(arr) {
  let ul = document.createElement('ul');
  arr.forEach(elem => {
    let li = document.createElement('li');
    li.textContent = `${elem.name} - ${elem.price}грн - ${elem.category}`;
    ul.append(li);
  });
  return ul; 
}

