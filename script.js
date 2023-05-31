const hearts = document.querySelectorAll('i.fa-regular')

hearts.forEach((heart) => {
    heart.addEventListener('click', function (e) {
        e.target.classList.toggle('fa-regular')
        e.target.classList.toggle('fa-solid')
    })
})


const cart = [
    {
        id: 1,
        name: "produit1",
        price: 20,
        qte: 0
    },
    {
        id: 2,
        name: "produit2",
        price: 25,
        qte: 0
    },
    {
        id: 3,
        name: "produit3",
        price: 15,
        qte: 0
    }
]


function calculerTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].qte * cart[i].price
    }
    return total;
}

const inputs = document.querySelectorAll('input')
inputs.forEach((input) => {
    input.addEventListener("change", function (e) {
        //  console.log(e.target.parentNode.id)
        const value = e.target.value
        const idClicked = e.target.parentNode.getAttribute('id');
        // console.log(idClicked)
        for (let i = 0; i < 3; i++) {
            if (cart[i].id == idClicked) {
                cart[i].qte = value
            }
        }
        document.querySelector('#total').textContent = calculerTotal()

    })
})