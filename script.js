function initialize() {
    items = [];
    currentIndex = 0;
    list = document.getElementById("list");
}

function addItem(itemInput, amountInput) {
    var listItem = document.createElement("li");
    listItem.innerText = amountInput.value + " " + itemInput.value + " (s)"; // passed the field. 
    list.appendChild(listItem);
    listItem.setAttribute("id", items.length.toString())
    document.getElementById((items.length).toString()).className = ('item');
    items.push([itemInput.value, amountInput.value]);
    console.log(items);
    console.log(listItem.getAttribute("id"));
    return false; // stop submission
}

function display() {
    // for(var i in items) 
}

function moveItem(direction) {
    if (currentIndex + direction >= 0 && currentIndex + direction <= items.length - 1) {
        let tempIndex = currentIndex + direction; //direction is either -1 or 1, up or down respectfully
        let tempItem = items[currentIndex];
        document.getElementById(currentIndex.toString()).innerText = items[tempIndex][1] + " " + items[tempIndex][0] + " (s)";
        document.getElementById(tempIndex.toString()).innerText = tempItem[1] + " " + tempItem[0] + " (s)";
        items[currentIndex] = items[tempIndex];
        items[tempIndex] = tempItem;

        console.log(items);
        return false;
    }
}

function changeCurrentIndex(index) {
    realIndex = index.value - 1;
    if (realIndex >= 0 && realIndex < items.length) {
        currentIndex = realIndex;
        document.getElementById("index").placeholder = "Current Item Selected: " + (currentIndex + 1);
    }
    console.log(currentIndex);
    return false;
}

function deleteItem() {
    if (currentIndex < items.length - 1) {
        items.splice(currentIndex, 1);
        document.getElementById(currentIndex.toString()).remove();
        var itemList = document.getElementsByClassName("item");
        for (i = 0; i < itemList.length; i++) {
            itemList[i].setAttribute("id", i.toString())
        }
    }
}
