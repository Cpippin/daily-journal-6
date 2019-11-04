import API from "./data.js"
import renderDom from "./entriesDOM.js"

const entryLog = document.querySelector(".entryLog")
const doThaThang = {
    registerDeleteListener() {
        entryLog.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteCard--")) {
                // Extract recipe id from the button's id attribute
                const entryCardToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all recipes and render them
                API.deleteJournalEntry(entryCardToDelete)
                    .then(API.getJournalEntries)
                    .then(entries => renderDom.renderJournalEntries(entries))
            }
        })
    }
}

export default doThaThang