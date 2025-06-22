const dictionaryForm = document.querySelector(".dictionaryForm")
const wordInput = document.querySelector(".wordInput")
const card = document.querySelector(".card")

const apikey = "https://api.dictionaryapi.dev/api/v2/entries/en/<word>"


dictionaryForm.addEventListener("submit", async event=>{
    event.preventDefault()

    const word = wordInput.value

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    const response = await fetch(apiUrl)

    

    const data = await response.json()

   const meanings = data[0].meanings

   

   

   


})



