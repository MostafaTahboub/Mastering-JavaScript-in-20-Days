function createListItem(character) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = character.image;
    li.appendChild(img);

    const name = document.createElement("p");
    name.textContent = `Name: ${character.name}`;
    li.appendChild(name);

    const location = document.createElement("p");
    location.textContent = `Location: ${character.location.name}`;
    li.appendChild(location);

    const species = document.createElement("p");
    species.textContent = `Species: ${character.species}`;
    li.appendChild(species);

    const gender = document.createElement("p");
    gender.textContent = `Gender: ${character.gender}`;
    li.appendChild(gender);
    
    return li;
}

const characterList = document.getElementById("characterList");
async function fetchCharacterData() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");

        const data = await response.json();
        const characters = data.results.slice(0, 50);

        // create list items for each  alive character
        characters.forEach(character => {
            if (character.status==="Alive"){
                const listItem = createListItem(character);
                characterList.appendChild(listItem);
            }
        });

    } catch (error) {
        // Display an error message
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Failed to retrieve character data. Please try again later.";
        characterList.appendChild(errorMessage);
    }
}

// call a function 
fetchCharacterData();
