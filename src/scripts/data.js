
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
}
}




export default API