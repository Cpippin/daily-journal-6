const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
      <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.body}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
        <button id="deleteCard--${journalEntry.id}">Delete</button>
        <button id="editCard--${journalEntry.id}">Edit</button>
      </section>
    `
  }
}

export default entryManager