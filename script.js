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

totalAmount.addEventListener("keyup", myScript)
tipAmount.addEventListener("keyup", myScript)

//      // All three methods and all of them are worked
//   //    Method 1

// tipAmount.addEventListener("keypress", total = (e) => {
//     if (e.key === "Enter") {
//         let convertedNum = Number(totalAmount.value)

//         let totaltip = ((convertedNum / 100) * tipAmount.value) / numberOfPeople.textContent
//         let totalBill = totaltip + convertedNum

//         let rounded = totalBill.toFixed(3)    // toFixed id used to limit the number of floating point values
//         // resultAmount.textContent = `$ ${total}`
//         resultAmount.textContent = `$ ${rounded}`
//     }
// })

//     // Method 2    in  ES6 sentence

// tipAmount.addEventListener("keyup", total = () => {

//             let convertedNum = Number(totalAmount.value)

//             let totaltip = ((convertedNum / 100) * tipAmount.value) / numberOfPeople.textContent
//             let totalBill = totaltip + convertedNum

//             let rounded = totalBill.toFixed(3)    // toFixed id used to limit the number of floating point values
//             // resultAmount.textContent = `$ ${total}`
//             resultAmount.textContent = `$ ${rounded}`

//     })
// total()


//         //  Method 3 by ES5 sentence or traditionl sentence but for this you have to run line 84 and 85   this is the most dynamic 

function myScript() {

    let convertedNum = Number(totalAmount.value)

    let totaltip = ((convertedNum / 100) * tipAmount.value)
    let totalBill = totaltip + convertedNum
    let perPerson = totalBill / numberOfPeople.textContent

    let rounded = perPerson.toFixed(3)    // toFixed id used to limit the number of floating point values
    // resultAmount.textContent = `$ ${total}`
    resultAmount.textContent = `$ ${rounded}`

}
myScript()

increaseP.onclick = () => {
    let convertedNum = Number(totalAmount.value)

    numberOfPeople.innerText++
    // and if you want to make it shorter then call  myScript() here instead of bottom lines
    let totaltip = ((convertedNum / 100) * tipAmount.value)
    let totalBill = totaltip + convertedNum
    let perPerson = totalBill / numberOfPeople.textContent
    let rounded = perPerson.toFixed(3)
    resultAmount.textContent = `$ ${rounded}`
}

decreaseP.onclick = () => {
    let convertedNum = Number(totalAmount.value)
    if (numberOfPeople.innerText <= 1) {

        return
    }
    numberOfPeople.innerText -= 1

    myScript()
    // let totaltip = ((convertedNum / 100) * tipAmount.value)
    // let totalBill = totaltip + convertedNum
    // let perPerson = totalBill / numberOfPeople.textContent
    // let rounded = perPerson.toFixed(3)
    // resultAmount.textContent = `$ ${rounded}`
}
