const games = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const gameContainer = document.querySelector(".container");
async function getGames() {
    try {
        const response = await fetch(games);
        const data = await response.json();
        const facts = data.result;
        gameContainer.innerHTML = "";

        for (let i = 0; i < data.length i++;) {
            if (i === 8) {
                break;
            }

            gameContainer.innerHTML += `
            <div class="game">
                <h1 class="gamename">${data[i].name}</h1>
                <div class="gamenumbers">
                    <p>Rating: <div class="gamerating">${data[i].rating}/</div></p>
                    <p>Tags: ${data[i].tags.length}</p>
                </div>
            </div>`;

    } catch (error) {
        gameContainer.innerHTML = displayError("Bad things happened");
    }
}

getGames();