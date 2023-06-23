const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");
let hpCharacters = [];

let apiData;

// Make an API request
fetch('https://script.google.com/macros/s/AKfycbwcV8sq3D3k2Sfsx2dYxCtq5w6Oo9a23Pe5yKK_h2lTRa009h1HwVqnWwoxFiPG7UVSCQ/exec')
    .then(response => response.json())
    .then(data => {
        apiData = data;
        console.log(apiData);
        searchBar.addEventListener("keyup", (e) => {
          const searchString = e.target.value.toLowerCase();
        
          const filteredCharacters = hpCharacters.filter((character) => {
            return character.name.toLowerCase().includes(searchString);
          });
          displayCharacters(filteredCharacters);
        });
        
        const loadCharacters = async () => {
          try {
            const res = apiData;
            console.log(apiData);
            hpCharacters = res;
            console.error(hpCharacters);
            displayCharacters(hpCharacters);
          } catch (err) {
            console.error(err);
          }
        };
        
        const displayCharacters = (characters) => {
          const htmlString = characters.slice().reverse()
            .map((character) => {
              return `
              <a href='./rio_casa.html?name=${character.name}&contact=${character.contact}&amount=${character.advance}&balance=${character.balance}&checkin=${new Date(character.checkin).toLocaleDateString('en-GB')}&checkout=${new Date(character.checkout).toLocaleDateString('en-GB')}'>
              <li class="character">
                        <h2>
                       ${character.name}
                       <span>RIOCSA${character.contact}
                            </h2>
                            <p>${new Date(character.checkin).toLocaleDateString('en-GB')}</p>
                    </li></a>
                `;
            })
            .join("");
          charactersList.innerHTML = htmlString;
        };
        
        loadCharacters();

    })
    .catch(error => {
        console.log('Error:', error);
    });

