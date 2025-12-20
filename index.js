let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//localStorage.setItem("myName", "Per Harald Borgen")

//let name = localStorage.getItem("myName")
localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

inputBtn.addEventListener("click", function() {
    if (inputEl.value) {
        myLeads.push(inputEl.value)
        inputEl.value = "" // Clear the input field after saving

        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads()
    }
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Corrected the template string/concatenation logic
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>
    `
    }
    // Added this line to update the DOM
    ulEl.innerHTML = listItems
}