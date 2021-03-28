const modal = {
    open(){
        //Abrir modal
        //Adicionar a class active ao modal
        document
        .querySelector('.modal-overlay')
        .classList.add('active')
    },
    close(){
        document
        .querySelector('.modal-overlay')
        .classList.remove('active')
    }
}

//array
const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 50000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
    {
        id: 4,
        description: 'App',
        amount: 20000,
        date: '23/01/2021',
    },
]

const Transaction = {
    incomes() {
        //Somar as entradas
    },
    expenses() {
        //Somar as saídas
    },
    total() {
        //entradas - saídas
    }
}

//Substituir os dados do HTML com os dados do JS
const DOM = { //Document Object Model (forma de modificar o html com JS)
    transactionsContainer: document.querySelector("#data-table tbody"),

    addTransaction(transaction, index) {

        const tr = document.createElement('tr') //Manipulando elementos com a DOM
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)

    },

    innerHTMLTransaction(transaction) {

        //Verifica se o valor de transação e positivo ou negativo
        const CSSclass = transaction.amount > 0 ? "income" : "expense" //if ternário



        //${} interpolar(introduzir)
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover Transação"></td>
        </tr>    
        `

        return html
    }
}

const Utils = {
    formatCurrency(value) {
        //Formatação da moeda
        const signal = Number(value) < 0 ? "-" : ""
    }
}

//O método forEach() executa uma dada função em cada elemento de um array.
transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})