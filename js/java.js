const btn = document.querySelector('.menu');

btn.addEventListener('click' , function () {
    const new1 = document.querySelector('.new'); 
    const list = document.querySelector('.list'); 
    if (new1.style.left === "0px") {
        new1.style.left = "-100%";
        list.style.right = "-100%";
    }else{
        new1.style.left = "0";
        list.style.right = "0";
    }
})