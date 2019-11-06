/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import renderDom from "./entriesDOM.js"

import API from "./data.js"

import doThaThang from "./events.js"



API.getJournalEntries()
    .then(entries => renderDom.renderJournalEntries(entries))

const newJournalEntry = (date, concept, text, mood) => {
    return {
        "date": date,
        "concept": concept,
        "entry": text,
        "mood": mood
    }
}

const attachSearchEvent = () => {

    const journalInputButton = document.querySelector("#recordButton")
    journalInputButton.addEventListener("click", () => {
        let dateInput = document.querySelector("#dateInput").value
        let conceptInput = document.querySelector("#conceptInput").value
        let textInput = document.querySelector("#textInput").value
        let moodInput = document.querySelector("#moodInput").value
        const journalObject = newJournalEntry(dateInput, conceptInput, textInput, moodInput)
        API.postJournalEntries(journalObject)
            .then(API.getJournalEntries)
            .then(entries => renderDom.renderJournalEntries(entries))
    })
}

attachSearchEvent();

// get mood values from journal entries 

// attach mood value of journal entries to corresponding mood radio buttons
const radioEvent = document.getElementsByName("moodRadioButtons")

radioEvent.forEach((radioButton) => {
    radioButton.addEventListener("click", event => {
        const selectedMood = event.target.value

        function filterMood(entry) {
            return entry.mood === selectedMood
        }

        API.getJournalEntries()
            .then(response => {
                const currentMood = response.filter(filterMood)
                renderDom.renderJournalEntries(currentMood)
            })
    })
})


// write function to append appropriate entries based on mood selected by radio button

// Invoke the method that attaches the event listener
doThaThang.registerDeleteListener()
doThaThang.registerEditListener()
doThaThang.registerSaveListener()

// Get all recipes from API and render them in the DOM
API.getJournalEntries().then(renderDom)