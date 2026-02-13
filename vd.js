function renderPage(contentFunction) {
    document.getElementById("app").innerHTML = contentFunction();
}

/* ========= HOME ========= */
function showHome() {
    renderPage(() => `
        <div class="container">
            <h1>Will you go on a virtual date with me? 💙</h1>
            <button class="main-btn" onclick="showDateOptions()">Yes 💕</button>
        </div>
    `);
}

/* ========= DATE OPTIONS ========= */
function showDateOptions() {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="showHome()">⬅ Back</button>
            <h1>Pick Our Virtual Date 💫</h1>

            <div class="grid">
                <div class="option" onclick="showMovieGenres()">🎬 Movie Night</div>
                <div class="option" onclick="showGameTypes()">🎮 Game Night</div>
                <div class="option" onclick="showCuisines()">🍕 Dinner Date</div>
                <div class="option" onclick="showMemoryWall()">📸 Memory Wall</div>
                <div class="option" onclick="showMusicMoods()">🎵 Music Date</div>
            </div>
        </div>
    `);
}

/* ========= MOVIES ========= */
function showMovieGenres() {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="showDateOptions()">⬅ Back</button>
            <h1>Movie Night 🎬</h1>

            <div class="grid">
                <div class="option">😂 Comedy</div>
                <div class="option">💖 Romance</div>
                <div class="option">👻 Horror</div>
                <div class="option">🚀 Sci-Fi</div>
            </div>
        </div>
    `);
}

/* ========= GAMES ========= */
function showGameTypes() {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="showDateOptions()">⬅ Back</button>
            <h1>Game Night 🎮</h1>

            <div class="grid">
                <div class="option">🎲 Truth or Dare</div>
                <div class="option">🧠 Quiz Game</div>
                <div class="option">🎯 Would You Rather</div>
                <div class="option">🎤 Karaoke Battle</div>
            </div>
        </div>
    `);
}

/* ========= DINNER ========= */
function showCuisines() {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="showDateOptions()">⬅ Back</button>
            <h1>Dinner Date 🍕</h1>

            <div class="grid">
                <div class="option">🍣 Sushi Night</div>
                <div class="option">🍝 Italian</div>
                <div class="option">🌮 Mexican</div>
                <div class="option">🍔 Fast Food Date</div>
            </div>
        </div>
    `);
}

/* ========= MUSIC ========= */
function showMusicMoods() {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="showDateOptions()">⬅ Back</button>
            <h1>Music Date 🎵</h1>

            <div class="grid">
                <div class="option">💖 Love Songs</div>
                <div class="option">🔥 Hype Songs</div>
                <div class="option">🌙 Late Night Vibes</div>
                <div class="option">🎧 Chill Playlist</div>
            </div>
        </div>
    `);
}

/* ========= MEMORY WALL ========= */
function showMemoryWall() {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="showDateOptions()">⬅ Back</button>
            <h1>Our Memories 📸</h1>

            <div class="grid">
                <div class="option">💬 Our late night talks</div>
                <div class="option">😂 That one inside joke</div>
                <div class="option">🎵 The song that reminds me of you</div>
                <div class="option">✨ The first time we talked</div>
            </div>
        </div>
    `);
}

/* ========= START ========= */
showHome();
