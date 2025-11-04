// let products = JSON.stringify(['bread', 'water', 'milk'])
// console.log(products)

// localStorage.setItem('arrayOfProduct', products)
// console.log(JSON.parse(localStorage.getItem('arrayOfProduct')))
// // localStorage.removeItem('arrayOfProduct')
// console.log(localStorage.length)
// // localStorage.clear()
// console.log(localStorage.key(0))

// sessionStorage.setItem('arrayOfProduct', products)
// console.log(JSON.parse(sessionStorage.getItem('arrayOfProduct')))
// // localStorage.removeItem('arrayOfProduct')
// console.log(sessionStorage.length)
// // localStorage.clear()
// console.log(sessionStorage.key(0))


let productsArray = JSON.parse(localStorage.getItem('products'))
console.log(productsArray)

let listTag = document.querySelector('#productsList')

function printList(item) {
    let li = document.createElement('li')
    li.innerHTML = `<p>${item.product_name}</p>
    <p>${item.product_description}</p>
    <p>${item.product_price}</p>
    <p>${item.store_address}</p>
    <p>${item.store_name}</p>
    <button>ADD TO BAG</button>
    `
    li.querySelector('button').addEventListener('click', function () {
        let bag = JSON.parse(localStorage.getItem('bag'))
        let product = { ...item, count: 1 }
        if (bag.some((el) => el.id === product.id)) {
            let elIndex = bag.findIndex((el) => el.id === product.id)
            bag[elIndex].count = bag[elIndex].count + 1
        } else {
            bag.push(product)
        }
        localStorage.setItem('bag', JSON.stringify(bag))
    })
    listTag.appendChild(li)
}

productsArray.forEach(element => {
    printList(element)
});



