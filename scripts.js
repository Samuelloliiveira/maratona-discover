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
    all: transactions,
    
    incomes() {
        let income = 0;
        
        transactions.forEach(transaction => {
            if( transaction.amount > 0) {
                income += transaction.amount;
            }
        })

        return income
    },
    expenses() {
        let expense = 0;
        
        transactions.forEach(transaction => {
            if( transaction.amount < 0) {
                expense += transaction.amount;
            }
        })

        return expense
    },
    total() {

        return Transaction.incomes() + Transaction.expenses()
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

        const amount = Utils.formatCurrency(transaction.amount)

        //${} interpolar(introduzir)
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover Transação"></td>
        </tr>    
        `

        return html
    },

    updateBalance() {
        document
            .getElementById("incomeDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.incomes())

        document
            .getElementById("expenseDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.expenses())

        document
            .getElementById("totalDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.total())
    }
}

const Utils = {
    formatCurrency(value) {
        //Formatação da moeda
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g,"")//Expressão regular(regex)

        value = Number(value) / 100

        /*O método toLocaleString() retorna uma string com uma representação sensível 
        ao idioma da data presente na mesma.*/
        value = value.toLocaleString("pt-BR", {
            style: "currency", //Moeda
            currency: "BRL"     //Real Brasileiro
        })

        return signal + value
    }
}

//O método forEach() executa uma dada função em cada elemento de um array.
transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})

DOM.updateBalance()