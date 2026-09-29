let bagItems;

onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = JSON.parse(bagItemsStr);
    if (!Array.isArray(bagItems)) {
        bagItems = [];
    }
    displyItemsOnHomePage();
    displyBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displyBagIcon();
}

function displyBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }

}

function displyItemsOnHomePage() {

    let itemsContainerElement = document.querySelector('.items-container');

    if (!itemsContainerElement) {
        return;
    }

    let innerHtml = ``;


    items.forEach(item => {
        innerHtml += `
          <div class="item-container">
                    <img src="${item.image}" alt="item image" class="item-img">
                    <div class="rating"> ${item.rating.stars} ⭐ | ${item.rating.count} </div>
                    <div class="company-name">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="price">
                        <span class="current-price">${item.current_price}</span>
                        <span class="original-price">${item.original_price}</span>
                        <span class="discount"> (${item.discount_percentage}% OFF)</span>
                    </div>
                    <button class="btn-add-bag" onclick="addToBag(${item.id})" >Add to Bag</button>
            </div>
    `;
    })

    itemsContainerElement.innerHTML = innerHtml;
}
