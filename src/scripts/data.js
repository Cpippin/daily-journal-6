
let URL = "http://localhost:3000/entries"

let API = {

  getJournalEntries() {
    return fetch(`${URL}`)
      .then(response => response.json())
  },

  // Use `fetch` with the POST method to add your entry to your API
  postJournalEntries(newJournalEntry) {
    return fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry)
    })
  },

  deleteJournalEntry(cardId) {
    return fetch(`${URL}/${cardId}`, {
      method: "DELETE"
    })
      .then(response => response.json())
  },

  updateFormFields(cardId) {

    // Get reference to input fields in the form
    const hiddenJournalEntryId = document.querySelector("#entryId")
    const journalConceptInput = document.querySelector("#entryConcept")
    const journalDateInput = document.querySelector("#entryDate")
    const journalEntryInput = document.querySelector("#entryBody")
    const journalMoodInput = document.querySelector("#entryMood")

    return fetch(`${URL}/${cardId}`)
      .then(response => response.json())
      .then(journalEntry => {
        /*
            Now that you KNOW you have the data, render
            an editing form that represents the current
            state of the resource.
        */
        hiddenJournalEntryId.value = journalEntry.id // Hidden value. User no see. 🙈
        journalConceptInput.value = journalEntry.concept
        journalDateInput.value = journalEntry.date
        journalEntryInput.value = journalEntry.body
        journalMoodInput.value = journalEntry.mood
      })
  },

  editCard(cardId) {
    const updatedObject = {
      entryID: document.querySelector("#entryId").value,
      concept: document.querySelector("#entryConcept").value,
      date: document.querySelector("#entryDate").value,
      body: document.querySelector("#entryBody").value,
      mood: document.querySelector("#entryMood").value
    }

    // Logic for the PUT operation
    return fetch(`${URL}/${cardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedObject)
    })
      .then(res => res.json())
      .then(() => {
        /*
            Since this is the point in the code where you KNOW
            the operation completed successfully, clear the
            value of the hidden input field to that your
            application is back to the state of creating instead
            of editing
        */
        document.querySelector("#entryId").value = ""
      })

  }

}

export default API