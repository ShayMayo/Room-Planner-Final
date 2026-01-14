let roomState = new Array (100).fill(null);
let draggedFurniture = null;

const gridContainer = document.getElementById("room-grid")
for(let i=0; i<100; i++){
    const block = document.createElement("div");
    block.classList.add("grid-block");
    block.dataset.index = i;
    gridContainer.appendChild(block);
}

function SaveToLocalStorage(){
    localStorage.setItem("YourRoomDesign", JSON.stringify(roomState))
}

function LoadFromLocalStorage(){
    const savedDesign = localStorage.getItem("YourRoomDesign");
    
    if(savedDesign){
        roomState = JSON.parse(savedDesign);
        const blocks = document.querySelectorAll(".grid-block");
        roomState.forEach((data,index) => {
            if(data !== null){
                const block = blocks[index];
                block.innerHTML = "<span>" + data.icon + "</span>";

                const iconSpan = block.querySelector("span");
                if(iconSpan && data.rotation){
                    iconSpan.style.transform = "rotate(" + data.rotation + "deg)";
                }
                if(data.size === "2" && data.price > "0"){
                        block.classList.add("is-large");
                }
            }
        });
        UpdateTotalPrice();
    }
}

LoadFromLocalStorage();

function changeColor(color){
    let blocks = document.querySelectorAll(".grid-block");
    blocks.forEach(block => {
        block.style.backgroundColor = color;
    });
    UpdateTotalPrice();
}

function UpdateTotalPrice(){
    let totalPrice = 0;
    roomState.forEach(furniture => {
        if(furniture != null){
            totalPrice += parseInt(furniture.price)
        }
    });
    const displayPrice = document.getElementById("total-price")
    if(displayPrice){
        displayPrice.innerHTML = totalPrice;
    }
}

function resetGrid(){
    let blocks = document.querySelectorAll(".grid-block");
    blocks.forEach(block => {
        block.style.backgroundColor = "white";
        block.innerHTML = "";
        block.classList.remove("is-large");
    })
    roomState.fill(null);
    SaveToLocalStorage();
    UpdateTotalPrice();
}
let numberOfColorChangers = document.querySelectorAll(".wallColorPicker").length

for(let i=0; i<numberOfColorChangers; i++){
    document.querySelectorAll(".wallColorPicker")[i].addEventListener("click", function(){
        let color = this.id;
        if(color !== "white" && color !== "grey"){
            color = "#" + color;
        }
        changeColor(color);
    })
}

document.getElementById("reset-button").addEventListener("click", function(){
    resetGrid()
})

const cards = document.querySelectorAll('.furniture-card');
cards.forEach(card => {
    card.addEventListener('dragstart', function(event) {
        draggedFurniture = this;
        event.dataTransfer.setData('icon', this.dataset.icon);
        event.dataTransfer.setData('size', this.dataset.size);
        event.dataTransfer.setData('price', this.dataset.price);
        event.dataTransfer.setData('name', this.dataset.name);
        draggedFurniture.classList.add("dragged");
    });
    card.addEventListener("dragend",function(){
        draggedFurniture = this;
        draggedFurniture.classList.remove("dragged");
    })
});

const blocks = document.querySelectorAll(".grid-block")
blocks.forEach(block => {
    block.addEventListener("dragover", function(event){
        event.preventDefault();
    })

    block.addEventListener("drop", function(event){
        event.preventDefault();
        const icon = draggedFurniture.getAttribute('data-icon');
        const size = draggedFurniture.getAttribute('data-size');
        const price = draggedFurniture.getAttribute('data-price');
        const name = draggedFurniture.getAttribute('data-name');
        const index = parseInt(this.dataset.index);
        const nextBlock = this.nextElementSibling;
        
        if(size === "1"){
            if(this.innerHTML != ""){
                return(alert("This spot is already taken"));
            }
            this.innerHTML = "<span>" + icon + "</span>";;
            roomState[index] = {
                icon: icon,
                size: size,
                price: price,
                name: name,
                rotation: 0
            }
        }
        if(size === "2"){
            if(!nextBlock || this.innerHTML != "" || nextBlock.innerHTML != ""){
                return(alert("No room for a big furniture"));
            }
            currentTop = this.getBoundingClientRect().top;
            nextTop = nextBlock.getBoundingClientRect().top;
            if(currentTop !== nextTop){
                return(alert("No room for a big furniture"));
            }
            this.innerHTML = "<span>" + icon + "</span>";;
            this.classList.add("is-large");
            nextBlock.innerHTML = " ";
            roomState[index] = {
                icon: icon,
                size: size,
                price: price,
                rotation: 0
            }
            roomState[index + 1] = {
                icon: icon,
                size: size,
                price: 0
            }
        }
        SaveToLocalStorage();
        UpdateTotalPrice();
    })

    block.addEventListener("click", function(){
        const index = parseInt(this.dataset.index);
        const data = roomState[index];
        
        if(data){
            data.rotation = (data.rotation + 90) % 360;
            const iconSpan = this.querySelector("span");
            if(iconSpan){
                iconSpan.style.transform = "rotate(" + data.rotation + "deg)";
                iconSpan.style.transition = "transform 0.3s ease";
            }
        }
        SaveToLocalStorage();
    })
})