let productsArray = JSON.parse(localStorage.getItem('bag'))
console.log(productsArray)

let listTag = document.querySelector('#productsList')

function calcBag() {
    let total = JSON.parse(localStorage.getItem('bag'))
    .reduce((total, current) => total + current.totalOfProduct, 0)
    document.querySelector('#priceOfBag').innerText = total
    return total
}

calcBag()

function printList(item) {
    let li = document.createElement('li')
    li.innerHTML =  `<p>${item.product_name}</p>
    <p>${item.product_description}</p>
    <p>${item.product_price}</p>
    <p>${item.store_address}</p>
    <p>${item.store_name}</p>
    <p id="countTag">count: ${item.count}</p>
    <p id="totalSumTag">total sum: ${item.totalOfProduct}</p>
    <button id="deleteProduct">DELETE</button>
    <button id="plusCount">+</button>
    <button id="minusCount">-</button>
    `
    li.querySelector('#deleteProduct').addEventListener('click', function () {
        let bag = JSON.parse(localStorage.getItem('bag'))
        let productIndex = bag.findIndex((el) => el.id === item.id)
        bag.splice(productIndex, 1)
        li.remove()
        localStorage.setItem('bag', JSON.stringify(bag))
        calcBag()
    })

    li.querySelector('#plusCount').addEventListener('click', function () {
        let bag = JSON.parse(localStorage.getItem('bag'))
        let productIndex = bag.findIndex((el) => el.id === item.id)
        bag[productIndex].count = bag[productIndex].count + 1
        bag[productIndex].totalOfProduct = bag[productIndex].product_price * bag[productIndex].count
        li.querySelector('#countTag').innerText = `count: ${bag[productIndex].count}`
        li.querySelector('#totalSumTag').innerText = `total sum: ${bag[productIndex].totalOfProduct}`
        localStorage.setItem('bag', JSON.stringify(bag))
        calcBag()
    })

    li.querySelector('#minusCount').addEventListener('click', function () {
        let bag = JSON.parse(localStorage.getItem('bag'))
        let productIndex = bag.findIndex((el) => el.id === item.id)
        bag[productIndex].count = bag[productIndex].count - 1
        bag[productIndex].totalOfProduct = bag[productIndex].product_price * bag[productIndex].count
        li.querySelector('#totalSumTag').innerText = `total sum: ${bag[productIndex].totalOfProduct}`
        li.querySelector('#countTag').innerText = `count: ${bag[productIndex].count}`
        if(bag[productIndex].count < 1){
            bag.splice(productIndex, 1)
            li.remove()
        }
        localStorage.setItem('bag', JSON.stringify(bag))
        calcBag()
    })
    listTag.appendChild(li)
}

productsArray.forEach(element => {
    printList(element)
});