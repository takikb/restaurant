let allFoodBtn = document.querySelectorAll(".overview-item a");
let cartCounter = document.querySelector(".links li p").innerText;
console.log(cartCounter);
console.log(cartCounter)
console.log(allFoodBtn);

allFoodBtn.forEach(btn => {
    btn.addEventListener("click",()=>{
        cartCounter = parseInt(cartCounter) + 1;
        console.log(cartCounter)
    })
})

let qt = document.querySelectorAll(".little-part select");
let totals = document.querySelector(".shop-item .total p").textContent;


document.addEventListener("DOMContentLoaded",()=>{
    let shopItems = document.querySelectorAll(".shop-item");
    console.log(shopItems[0].querySelector(".total"))
    shopItems.forEach(item => {
        console.log(item.childNodes[1].childNodes[5].childNodes[3])
        let unitPrice = parseInt(item.querySelector(".desc span"));
        let selectedQt = item.querySelector("select").textContent;
        console.log(selectedQt);
        item.querySelector(".total p").textContent = `Total: ${unitPrice * selectedQt}`
    })
    console.log(totals);
    console.log(qt);
})
