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

   card.innerHTML = ""

   meanings.forEach(meaning=>{

  

    let  storeMeaning = document.createElement("div")
    storeMeaning.classList.add("storeMeaning")
    card.appendChild(storeMeaning)

    let partOfSpeech = document.createElement("p")
    partOfSpeech.textContent = meaning.partOfSpeech
    partOfSpeech.classList.add("partOfSpeech")
    storeMeaning.appendChild(partOfSpeech)


    meaning.definitions.forEach((defObj,j)=>{
        let definition = document.createElement("p")
        definition.textContent = `${j+1}. `+ defObj.definition
        definition.classList.add("definition")
        storeMeaning.appendChild(definition)

        if(defObj.example){
            let example = document.createElement("p")
             example.textContent = "Example: " +defObj.example
             example.classList.add("example")
             storeMeaning.appendChild(example)
        }
    })

    

    if(meaning.synonyms.length>0){
        let synonyms = document.createElement("p")
        synonyms.textContent = "Synonyms: " +meaning.synonyms.join(", ")
        synonyms.classList.add("synonyms")
        storeMeaning.appendChild(synonyms)
    }

    if(meaning.antonyms.length>0){
        let antonyms = document.createElement("p")
        antonyms.textContent = "Antonyms: " + meaning.antonyms.join(", ")
        antonyms.classList.add("antonyms")
        storeMeaning.appendChild(antonyms)
    }

   })

   

   


})



