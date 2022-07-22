const container1 = document.querySelector(".container1")

//    {  

const h2_1 = document.createElement("h3")
h2_1.classList.add("h2_1")
h2_1.textContent = "Bill total"
container1.appendChild(h2_1)

const totalAmount = document.createElement("input")
totalAmount.classList.add("input-totalAmount", "inputs")
totalAmount.placeholder = ("$")
container1.appendChild(totalAmount)

const h2_2 = document.createElement("h3")
h2_2.classList.add("h2_2")
h2_2.textContent = "Tip"
container1.appendChild(h2_2)

const tipAmount = document.createElement("input")
tipAmount.classList.add("input-tipAmount", "inputs")
tipAmount.placeholder = ("%")
container1.appendChild(tipAmount)

//    }

//   { 
const container2 = document.createElement("div")
container2.classList.add("container2")
container1.appendChild(container2)

const h3_1 = document.createElement("h4")
h3_1.classList.add("h3_1")
h3_1.textContent = "People"
container2.appendChild(h3_1)

const h3_2 = document.createElement("h4")
h3_2.classList.add("h3_2")
h3_2.textContent = "Total per person"
container2.appendChild(h3_2)

//   }

//   {  
const container3 = document.createElement("div")
container3.classList.add("container3")
container1.appendChild(container3)

const minicontiner1 = document.createElement("div")
minicontiner1.classList.add("minicontaier1")
container3.appendChild(minicontiner1)

const increaseP = document.createElement("button")
increaseP.textContent = "+"
increaseP.classList.add("incrementBtn")
minicontiner1.appendChild(increaseP)

const numberOfPeople = document.createElement("span")
numberOfPeople.classList.add("numberOfPeople")
numberOfPeople.textContent = "1"
numberOfPeople.value = 1
minicontiner1.appendChild(numberOfPeople)

const decreaseP = document.createElement("button")
decreaseP.textContent = "-"

decreaseP.classList.add("decrementBtn")
minicontiner1.appendChild(decreaseP)

//   }

//   { 
const minicontiner2 = document.createElement("div")
minicontiner2.classList.add("minicontaier2")
container3.appendChild(minicontiner2)

const resultAmount = document.createElement("h2")
resultAmount.textContent = "$ 0.00"
resultAmount.classList.add("resultAmount")
container3.appendChild(resultAmount)

//   }


tipAmount.addEventListener("keypress", total = (e) => {
    if (e.key === "Enter") {
        let total = ((totalAmount.value / 100) * tipAmount.value) / numberOfPeople.textContent
        let rounded = total.toFixed(3)    // toFixed id used to limit the number of floating point values
        // resultAmount.textContent = `$ ${total}`
        resultAmount.textContent = `$ ${rounded}`
    }
})

increaseP.onclick = () => {
    numberOfPeople.innerText++
    let total = ((totalAmount.value / 100) * tipAmount.value) / numberOfPeople.innerText
    let rounded = total.toFixed(3)
        resultAmount.textContent = `$ ${rounded}`
}

 decreaseP.onclick = () => {
        numberOfPeople.innerText -= 1
        // numberOfPeople.value -=1
        let total = ((totalAmount.value / 100) * tipAmount.value) / numberOfPeople.textContent
        let rounded = total.toFixed(3)
        resultAmount.textContent = `$ ${rounded}`
    }