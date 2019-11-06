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
    },

    registerEditListener() {
        entryLog.addEventListener("click", event => {

            if (event.target.id.startsWith("editCard--")) {

                const entryIdToEdit = event.target.id.split("--")[1]

                /*
                    This function will get the recipe from the API
                    and populate the form fields (see below)
                */
                API.updateFormFields(entryIdToEdit)
                    .then(API.getJournalEntries)
                    .then(entries => renderDom.renderJournalEntries(entries))
            }
        })
    },

    registerSaveListener() {
        let saveButton = document.querySelector("#save-button")
        saveButton.addEventListener("click", event => {
            const hiddenJournalEntryId = document.querySelector("#entryId").value
        if (hiddenJournalEntryId !== "") {
                API.editCard(hiddenJournalEntryId)
                    .then(API.getJournalEntries)
                    .then(entries => renderDom.renderJournalEntries(entries))
            }
        })
    }
}

export default doThaThang