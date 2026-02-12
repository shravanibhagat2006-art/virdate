const app = document.getElementById("app");

const kissingGif = "https://media.giphy.com/media/KmxmoHUGPDjfQXqGgv/giphy.gif";
const huggingGif = "https://media.giphy.com/media/IzXiddo2twMmdmU8Lv/giphy.gif";

function showStartPage() {
    app.innerHTML = `
        <div class="container fade">
            <h1>Here's a Question 💭</h1>
            <img src="${kissingGif}" class="gif">
            <br>
            <button class="main-btn" onclick="showDateOptions()">
                Will you go on a virtual date with me? 💙
            </button>
        </div>
    `;
}

function showDateOptions() {
    app.innerHTML = `
        <div class="container fade">
            <h1>Pick Our Virtual Date 💫</h1>
            <div class="grid">
                <div class="option" onclick="showMovieGenres()">🎬 Movie Night</div>
                <div class="option" onclick="showGameTypes()">🎮 Game Night</div>
                <div class="option" onclick="showCuisines()">🍕 Dinner Date</div>
                <div class="option" onclick="showMusicMoods()">🎵 Music Date</div>
            </div>
        </div>
    `;
}

/* ---------- MOVIES ---------- */

function showMovieGenres() {
    app.innerHTML = `
        <div class="container fade">
            <h1>Choose a Genre 🎬</h1>
            <div class="grid">
                <div class="option" onclick="showFinal('Romance Movie Night 💖')">💖 Romance</div>
                <div class="option" onclick="showFinal('Comedy Movie Night 😂')">😂 Comedy</div>
                <div class="option" onclick="showFinal('Horror Movie Night 👻')">👻 Horror</div>
                <div class="option" onclick="showFinal('Action Movie Night 🔥')">🔥 Action</div>
            </div>
        </div>
    `;
}

/* ---------- GAMES ---------- */

function showGameTypes() {
    app.innerHTML = `
        <div class="container fade">
            <h1>Choose Game Type 🎮</h1>
            <div class="grid">
                <div class="option" onclick="showFinal('Online Multiplayer Game 🌍')">🌍 Online</div>
                <div class="option" onclick="showFinal('Mobile Game Night 📱')">📱 Mobile</div>
                <div class="option" onclick="showFinal('Board Game Night 🎲')">🎲 Board</div>
                <div class="option" onclick="showFinal('Truth or Dare Night 😈')">😈 Truth/Dare</div>
            </div>
        </div>
    `;
}

/* ---------- FOOD ---------- */

function showCuisines() {
    app.innerHTML = `
        <div class="container fade">
            <h1>Pick Cuisine 🍕</h1>
            <div class="grid">
                <div class="option" onclick="showFinal('Italian Dinner Date 🍝')">🍝 Italian</div>
                <div class="option" onclick="showFinal('Korean Dinner Date 🍜')">🍜 Korean</div>
                <div class="option" onclick="showFinal('Indian Dinner Date 🍛')">🍛 Indian</div>
                <div class="option" onclick="showFinal('Dessert Date 🍰')">🍰 Dessert</div>
            </div>
        </div>
    `;
}

/* ---------- MUSIC ---------- */

function showMusicMoods() {
    app.innerHTML = `
        <div class="container fade">
            <h1>Pick Music Mood 🎵</h1>
            <div class="grid">
                <div class="option" onclick="showFinal('Romantic Playlist 💖')">💖 Romantic</div>
                <div class="option" onclick="showFinal('Chill Vibes 🌙')">🌙 Chill</div>
                <div class="option" onclick="showFinal('Party Playlist 🎉')">🎉 Party</div>
                <div class="option" onclick="showFinal('Lofi Night ☕')">☕ Lofi</div>
            </div>
        </div>
    `;
}

/* ---------- FINAL PAGE ---------- */

function showFinal(choice) {
    app.innerHTML = `
        <div class="container fade">
            <h1>It's a Date! 💙</h1>
            <h2>${choice}</h2>
            <img src="${huggingGif}" class="gif">
            <br>
            <button class="main-btn" onclick="showStartPage()">
                Start Over 🔄
            </button>
        </div>
    `;
}

/* Load first page */
showStartPage();
