let getId = x => document.getElementById(x);
let myShop = (function () {
    let myBalance = 1000;
    let myProducts = {
        beer: {
            price: 30,
            count: 100
        },
        wine: {
            price: 150,
            count: 50
        },
        pepsi: {
            price: 20,
            count: 80
        }
    }
    return {
        buy: function (count, prod) {
            if (count > myProducts[prod].count) {
                alert(`${myProducts[prod].count} bottles of ${prod} is/are avaliable  `)
            }
            else {
                myProducts[prod].count -= count;
                myBalance += count * myProducts[prod].price;
            }
        },
        getProd: function (prod) {
            return  myProducts[prod].count
        },
        getBalance: () => myBalance
    }

}());

(function(shop){
    getId('add').addEventListener('click', ()=>{
        let count = getId("quantity").value;
        let productName = document.querySelector('input[type="radio"]:checked').value;
        let selected = getId("choice");
        selected.innerHTML += `${productName}: ${count} bottles; `;
        shop.buy(count, productName);
        shop.getProd(productName);
        shop.getBalance();
    })
    getId('buy').addEventListener('click', () => {
        getId('beer').value = shop.getProd('beer');
        getId('wine').value = shop.getProd('wine');
        getId('pepsi').value = shop.getProd('pepsi');
        getId('balance').value = shop.getBalance();
        getId('choice').innerHTML ="";
        getId("quantity").value = "";
    })
}(myShop));
