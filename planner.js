// HAMBURGER MENU
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navMenu = document.querySelector(".navLinks");
// turn the mouse icon into curser icon
hamburgerBtn.style.cursor = "pointer";

hamburgerBtn.addEventListener("click", function() {
    if (navMenu.classList.contains("nav-active")) {
        navMenu.classList.remove("nav-active");
    } else {
        navMenu.classList.add("nav-active");
    }
});

// NAVBAR LINLS
const navLinks = document.querySelectorAll(".navLinks a");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", function() {
        this.classList.add("text-highlight");
    });
    navLinks[i].addEventListener("mouseout", function() {
        this.classList.remove("text-highlight");
    });
}


let roomState = new Array (100).fill(null);
let draggedFurniture = null;
let selectedBlockIndex = null;
const gridContainer = document.getElementById("roomGrid")
for(let i=0; i<100; i++){
    const block = document.createElement("div");
    block.classList.add("gridBlock");
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
        const blocks = document.querySelectorAll(".gridBlock");
        roomState.forEach((data,index) => {
            if(data !== null){
                const block = blocks[index];
                block.innerHTML = "<span>" + data.icon + "</span>";

                const iconSpan = block.querySelector("span");
                if(iconSpan && data.rotation){
                    iconSpan.style.transform = "rotate(" + data.rotation + "deg)";
                }
                if(data.size === "2" && data.price > "0"){
                        block.classList.add("isLarge");
                }
            }
        });
        UpdateTotalPrice();
    }
}

LoadFromLocalStorage();

function changeColor(color){
    let blocks = document.querySelectorAll(".gridBlock");
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
    const displayPrice = document.getElementById("totalPrice")
    if(displayPrice){
        displayPrice.innerHTML = totalPrice + "$";
    }
    DisplayReceipt();
}
function DisplayReceipt(){
    const list = document.getElementById("receiptList");
    if(!list){
        return;
    }
    list.innerHTML = "";

    const items = {};

    roomState.forEach(furniture => {
        if(furniture && parseInt(furniture.price) > 0){
            const name = furniture.name || "Furniture";
            if(!items[name]){
                items[name] = {count: 0, price: parseInt(furniture.price)};
            }
            items[name].count++;
        }
    })

    for(let name in items){
        const li = document.createElement("li");
        const total = items[name].count * items[name].price;
        let countText = "";
        if(items[name].count > 1){
            countText = " x" + items[name].count;
        }

        li.innerHTML = "<span>" + name + countText + "</span> <span>$" + total + "</span>";
        list.appendChild(li);
    }
}
function resetGrid(){
    let blocks = document.querySelectorAll(".gridBlock");
    blocks.forEach(block => {
        block.style.backgroundColor = "white";
        block.innerHTML = "";
        block.classList.remove("isLarge");
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

document.getElementById("resetButton").addEventListener("click", function(){
    resetGrid()
})

const cards = document.querySelectorAll('.furnitureCard');
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

const blocks = document.querySelectorAll(".gridBlock")
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
            this.innerHTML = "<span>" + icon + "</span>";
            this.classList.add("isLarge");
            nextBlock.innerHTML = " ";
            roomState[index] = {
                icon: icon,
                size: size,
                price: price,
                name: name,
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
        if(selectedBlockIndex !== null && blocks[selectedBlockIndex]){
            blocks[selectedBlockIndex].classList.remove("isSelected");
        }
        selectedBlockIndex = index;
        this.classList.add("isSelected");

        const data = roomState[index];

        if(data){
            data.rotation = (data.rotation + 90) % 360;
            const iconSpan = this.querySelector("span");
            if(iconSpan){
                iconSpan.style.transform = "rotate(" + data.rotation + "deg)";
                iconSpan.style.transition = "transform 0.3s ease";
            }
            SaveToLocalStorage();
        }
    });
});

document.addEventListener("keydown", function(event){
    if((event.key === "r" || event.key === "R") && selectedBlockIndex !== null){
        const data = roomState[selectedBlockIndex];

        if(data){
            data.rotation = (data.rotation + 90) % 360;
            const block = blocks[selectedBlockIndex];
            const iconSpan = block.querySelector("span");
            if(iconSpan){
                iconSpan.style.transform = "rotate(" + data.rotation + "deg)";
                iconSpan.style.transition = "transform 0.3s ease";
            }
            SaveToLocalStorage();
        }
    } 
    else if ((event.key === "Delete" || event.key === "Backspace") && selectedBlockIndex !== null) {
        const index = selectedBlockIndex;
        const data = roomState[index];

        if (data) {
            if (data.size === "2") {
                let mainIndex;
                // Check if the selected block is the second part of a large item
                if (data.price == 0 && index > 0 && roomState[index - 1] && roomState[index - 1].size === "2") {
                    mainIndex = index - 1;
                } 
                else { 
                    mainIndex = index;
                }

                roomState[mainIndex] = null;
                roomState[mainIndex + 1] = null;

                const firstBlock = blocks[mainIndex];
                const secondBlock = blocks[mainIndex + 1];

                firstBlock.innerHTML = "";
                firstBlock.classList.remove("isLarge", "isSelected");
                secondBlock.innerHTML = "";
                secondBlock.classList.remove("isSelected");
            } 
            else { 
                roomState[index] = null;
                blocks[index].innerHTML = "";
                blocks[index].classList.remove("isSelected");
            }

            selectedBlockIndex = null;
            SaveToLocalStorage();
            UpdateTotalPrice();
        }
    }
})