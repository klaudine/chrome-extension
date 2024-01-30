let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""; //clears the input field after submitting
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (i = 0; i < myLeads.length; i++) {
        // listItems += "<li>" + "<a target='_blank' href=>" + myLeads[i] + "</a>" + "</li>" // list as a link and open in a new tab
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
}

