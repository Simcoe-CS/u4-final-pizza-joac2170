let total = 0;
let pizzaPrice = 0;
let pizzaType = "";
let top1Type = "";
let top2Type = "";
let top3Type = "";
let top4Type = "";
let top5Type = "";
let top1Price = 0;
let top2Price = 0;
let top3Price = 0;
let top4Price = 0;
let top5Price = 0;

function pizzaSelection(){
    let pizzaSize = document.getElementsByName("pizzaSize");
    pizzaSelect.src="/images/pizza.png";
    if (pizzaSize[0].checked){
        pizzaSelect.width = 160; 
        pizzaPrice = 8;
        pizzaType = "Small pizza";
    }
    else if (pizzaSize[1].checked){
        pizzaSelect.width = 220;
        pizzaPrice = 12;
        pizzaType = "Medium pizza";
    }
    else {
        pizzaSelect.width = 300;
        pizzaPrice = 16;
        pizzaType = "Large pizza";
    }
}

function toppingSelection(){
    let topping = document.getElementsByName("topping");

    top1Select.src=""; 
    top1Type = "";
    top1Price = 0;
    if(topping[0].checked){
        top1Select.src="/images/pepperoni.jpg";
        top1Select.width=100;
        top1Type = "Pepperoni";
        top1Price = 1;
    }

    top2Select.src="";
    top2Type = "";
    top2Price = 0;
    if(topping[1].checked){
        top2Select.src="/images/cheese.jpg";
        top2Select.width=100;
        top2Type = "Cheese";
        top2Price = 1;
    }

    top3Select.src="";
    top3Type = "";
    top3Price = 0;
    if(topping[2].checked){
        top3Select.src="/images/spinnach.jpg";
        top3Select.width=100;
        top3Type = "Spinnach";
        top3Price = 1;
    }

    top4Select.src="";
    top4Type = "";
    top4Price = 0;
    if(topping[3].checked){
        top4Select.src="/images/mushrooms.jpg";
        top4Select.width=100;
        top4Type = "Mushrooms";
        top4Price = 1;
    }

    top5Select.src="";
    top5Type = "";
    top5Price = 0;
    if(topping[4].checked){
        top5Select.src="/images/hotPeppers.jpg";
        top5Select.width=100;
        top5Type = "Hot Peppers";
        top5Price = 1;
    }

}

function calculatePrice(){

    receiptPizzaType.innerHTML = `${pizzaType}`;
    receiptPizzaPrice.innerHTML = `$${pizzaPrice.toFixed(2)}`;

    receiptTop1Type.innerHTML = "";
    receiptTop1Price.innerHTML = "";
    if(top1Price>0){
        receiptTop1Type.innerHTML = `${top1Type}`;
        receiptTop1Price.innerHTML = `$${top1Price.toFixed(2)}`;
    }

    receiptTop2Type.innerHTML = "";
    receiptTop2Price.innerHTML = "";
    if(top2Price>0){
        receiptTop2Type.innerHTML = `${top2Type}`;
        receiptTop2Price.innerHTML = `$${top2Price.toFixed(2)}`;
    }

    receiptTop3Type.innerHTML = "";
    receiptTop3Price.innerHTML = "";
    if(top3Price>0){
        receiptTop3Type.innerHTML = `${top3Type}`;
        receiptTop3Price.innerHTML = `$${top3Price.toFixed(2)}`;
    }

    receiptTop4Type.innerHTML = "";
    receiptTop4Price.innerHTML = "";
    if(top4Price>0){
        receiptTop4Type.innerHTML = `${top4Type}`;
        receiptTop4Price.innerHTML = `$${top4Price.toFixed(2)}`;
    }

    receiptTop5Type.innerHTML = "";
    receiptTop5Price.innerHTML = "";
    if(top5Price>0){
        receiptTop5Type.innerHTML = `${top5Type}`;
        receiptTop5Price.innerHTML = `$${top5Price.toFixed(2)}`;
    }

    total = pizzaPrice + top1Price + top2Price + top3Price + top4Price + top5Price;

    receiptTotal.innerHTML = `Total Price: `; 
    receiptTotalPrice.innerHTML = `$${total.toFixed(2)}`;
}

function reset(){
    total = 0;
    pizzaPrice = 0;
    pizzaType = "";
    top1Type = "";
    top2Type = "";
    top3Type = "";
    top4Type = "";
    top5Type = "";
    top1Price = 0;
    top2Price = 0;
    top3Price = 0;
    top4Price = 0;
    top5Price = 0;

    receiptPizzaType.innerHTML = "";
    receiptPizzaPrice.innerHTML = "";

    receiptTop1Type.innerHTML = "";
    receiptTop1Price.innerHTML = "";

    receiptTop2Type.innerHTML = "";
    receiptTop2Price.innerHTML = "";

    receiptTop3Type.innerHTML = "";
    receiptTop3Price.innerHTML = "";

    receiptTop4Type.innerHTML = "";
    receiptTop4Price.innerHTML = "";

    receiptTop5Type.innerHTML = "";
    receiptTop5Price.innerHTML = "";

    receiptTotal.innerHTML = ""; 
    receiptTotalPrice.innerHTML = "";

    let pizzaSize = document.getElementsByName("pizzaSize");
    for(let i = 0; i < pizzaSize.length; i++){
        pizzaSize[i].checked = false;
    }

    let topping = document.getElementsByName("topping");
    for (let i = 0; i < topping.length; i++){
        topping[i].checked = false;
    }

    let image = document.getElementsByName("selectImage");
    for (let i = 0; i < image.length; i++){
        image[i].src = "";
    }



}
