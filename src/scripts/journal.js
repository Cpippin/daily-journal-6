/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import renderDom from "./entriesDOM.js"

import API from "./data.js"

API.getJournalEntries()
.then(entries => renderDom.renderJournalEntries(entries))
