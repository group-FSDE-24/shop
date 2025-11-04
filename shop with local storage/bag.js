let productsArray = JSON.parse(localStorage.getItem('bag'))
console.log(productsArray)

let listTag = document.querySelector('#productsList')

function printList(item) {
    let li = document.createElement('li')
    li.innerHTML =  `<p>${item.product_name}</p>
    <p>${item.product_description}</p>
    <p>${item.product_price}</p>
    <p>${item.store_address}</p>
    <p>${item.store_name}</p>
    <p>count: ${item.count}</p>
    <button id="deleteProduct">DELETE</button>
    `
    li.querySelector('#deleteProduct').addEventListener('click', function () {
        let bag = JSON.parse(localStorage.getItem('bag'))
        let productIndex = bag.findIndex((el) => el.id === item.id)
        bag.splice(productIndex, 1)
        li.remove()
        localStorage.setItem('bag', JSON.stringify(bag))
    })
    listTag.appendChild(li)
}

productsArray.forEach(element => {
    printList(element)
});