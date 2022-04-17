function postItem() {
    let modelName = document.createElement('span');
    let img = document.createElement('img');
    let modelSize = document.createElement('span');
    let modelPrice = document.createElement('span');
    let modelQuantity = document.createElement('span');

    //// need to create uniqe id to make other items be on there own div**** 
    let imgInputValue = document.getElementById("imgSrc").value;  
    let nameInputValue = document.getElementById("shoeName").value;
    let sizeInputValue = document.getElementById("shoeSize").value;
    let priceInputValue = document.getElementById("shoePrice").value;
    let quantityInputValue = document.getElementById("shoeQuantity").value;

    img.src = imgInputValue;
    img.className = 'img-thumbnail';
    modelName.innerHTML = nameInputValue;
    modelSize.innerHTML = sizeInputValue;
    modelPrice.innerHTML = priceInputValue;
    modelQuantity.innerHTML = quantityInputValue;

    let model =
        `
        ${document.getElementById('body').appendChild(img)} 
        ${document.getElementById('body').appendChild(modelName)} 
        ${document.getElementById('body').appendChild(modelSize)} 
        ${document.getElementById('body').appendChild(modelPrice)} 
        ${document.getElementById('body').appendChild(modelQuantity)} `

    document.getElementById("imgSrc").value = "";
    document.getElementById("shoeName").value = "";
    document.getElementById("shoeSize").value = "";
    document.getElementById("shoePrice").value = "";
    document.getElementById("shoeQuantity").value = "";

    let down = document.getElementById('postItem');
    down.innerHTML = "Item Added!";
    down.className = 'added'

    setTimeout(function () {
        down.innerHTML = "Fill In The Details";
        down.className = 'fill'
    }, 3000);

    document.getElementById('body').appendChild(model)


}