const app = document.getElementById("app");

const kissingGif = "https://media.giphy.com/media/KmxmoHUGPDjfQXqGgv/giphy.gif";
const huggingGif = "https://media.giphy.com/media/IzXiddo2twMmdmU8Lv/giphy.gif";

let historyStack = [];

/* ---------- RENDER SYSTEM ---------- */

function renderPage(contentFunction) {
    historyStack.push(contentFunction);
    app.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.className = "slide-in";
    wrapper.innerHTML = contentFunction();
    app.appendChild(wrapper);
}

function goBack() {
    historyStack.pop();
    const previous = historyStack.pop();
    if (previous) {
        renderPage(previous);
    }
}

/* ---------- START PAGE ---------- */

function showStartPage() {
    renderPage(() => `
        <div class="container">
            <h1>Here's a Question 💭</h1>
            <img src="${kissingGif}" class="gif">
            <br>
            <button class="main-btn" onclick="showDateOptions()">
                Will you go on a virtual date with me? 💙
            </button>
        </div>
    `);
}

/* ---------- DATE OPTIONS ---------- */

function showDateOptions() {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="goBack()">⬅ Back</button>
            <h1>Pick Our Virtual Date 💫</h1>
            <div class="grid">
                <div class="option" onclick="showMovieGenres()">🎬 Movie Night</div>
                <div class="option" onclick="showGameTypes()">🎮 Game Night</div>
                <div class="option" onclick="showCuisines()">🍕 Dinner Date</div>
                <div class="option" onclick="showMusicMoods()">🎵 Music Date</div>
            </div>
        </div>
    `);
}

/* ---------- MOVIES ---------- */

function showMovieGenres() {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="goBack()">⬅ Back</button>
            <h1>Choose a Genre 🎬</h1>
            <div class="grid">
                <div class="option" onclick="showRomanceMovies()">💖 Romance</div>
                <div class="option" onclick="showComedyMovies()">😂 Comedy</div>
                <div class="option" onclick="showHorrorMovies()">👻 Horror</div>
                <div class="option" onclick="showActionMovies()">🔥 Action</div>
            </div>
        </div>
    `);
}

function showRomanceMovies() {
    renderPage(() => movieList("Romance Picks 💖",
        ["The Notebook 💖","Before Sunrise 🌅","Pride & Prejudice 🌸","La La Land 🎶"]
    ));
}

function showComedyMovies() {
    renderPage(() => movieList("Comedy Picks 😂",
        [
            "The Proposal 😂",
            "FRIENDS 📺",
            "How I Met Your Mother 🍻",
            "10 Things I Hate About You 💌"
        ]
    ));
}

function showHorrorMovies() {
    renderPage(() => movieList("Horror Picks 👻",
        ["The Conjuring 👻","A Quiet Place 🤫","IT 🎈","The Nun 😨"]
    ));
}

function showActionMovies() {
    renderPage(() => movieList("Action Picks 🔥",
        ["Avengers Endgame 🦸","John Wick 🔫","Mission Impossible 🎯","Mad Max Fury Road 🚗"]
    ));
}

function movieList(title, movies) {
    return `
        <div class="container">
            <button class="main-btn" onclick="goBack()">⬅ Back</button>
            <h1>${title}</h1>
            <div class="grid">
                ${movies.map(m => 
                    `<div class="option" onclick="showFinal('${m}')">${m}</div>`
                ).join("")}
            </div>
        </div>
    `;
}

/* ---------- GAMES ---------- */

function showGameTypes() {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="goBack()">⬅ Back</button>
            <h1>Choose Game Type 🎮</h1>
            <div class="grid">
                <div class="option" onclick="gameList('Online Games 🌍',
                ['Valorant 🔫','Minecraft ⛏','Among Us 👀','Call of Duty 💥'])">🌍 Online</div>

                <div class="option" onclick="gameList('Mobile Games 📱',
                ['BGMI 🔥','Clash Royale 👑','8 Ball Pool 🎱','UNO 🃏'])">📱 Mobile</div>

                <div class="option" onclick="gameList('Board Games 🎲',
                ['Chess ♟','Ludo 🎯','Monopoly 🏠','Scrabble 🔤'])">🎲 Board</div>

                <div class="option" onclick="gameList('Fun Night 😈',
                ['Truth or Dare 😈','Never Have I Ever 🤭','Would You Rather 🤔','Rapid Fire ⚡'])">😈 Fun</div>
            </div>
        </div>
    `);
}

function gameList(title, games) {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="goBack()">⬅ Back</button>
            <h1>${title}</h1>
            <div class="grid">
                ${games.map(g => 
                    `<div class="option" onclick="showFinal('${g}')">${g}</div>`
                ).join("")}
            </div>
        </div>
    `);
}

/* ---------- DINNER ---------- */

function showCuisines() {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="goBack()">⬅ Back</button>
            <h1>Pick Cuisine 🍕</h1>
            <div class="grid">
                <div class="option" onclick="foodList('Italian 🍝',
                ['Pizza 🍕','Pasta 🍝','Lasagna ❤️','Tiramisu ☕'])">🍝 Italian</div>

                <div class="option" onclick="foodList('Korean 🍜',
                ['Ramen 🍜','KBBQ 🔥','Tteokbokki 🌶','Fried Chicken 🍗'])">🍜 Korean</div>

                <div class="option" onclick="foodList('Indian 🍛',
                ['Butter Chicken 🍗','Biryani 🍚','Paneer 🧀','Gulab Jamun 💕'])">🍛 Indian</div>

                <div class="option" onclick="foodList('Dessert Date 🍰',
                ['Ice Cream 🍦','Brownie 🍫','Cheesecake 🍰','Cupcake 🧁'])">🍰 Dessert</div>
            </div>
        </div>
    `);
}

function foodList(title, foods) {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="goBack()">⬅ Back</button>
            <h1>${title}</h1>
            <div class="grid">
                ${foods.map(f => 
                    `<div class="option" onclick="showFinal('${f}')">${f}</div>`
                ).join("")}
            </div>
        </div>
    `);
}

/* ---------- MUSIC ---------- */

function showMusicMoods() {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="goBack()">⬅ Back</button>
            <h1>Pick Music Mood 🎵</h1>
            <div class="grid">
                <div class="option" onclick="musicList('Romantic 💖',
                ['Perfect 🎶','All of Me ❤️','Until I Found You 💞','Kesariya 💙'])">💖 Romantic</div>

                <div class="option" onclick="musicList('Chill 🌙',
                ['Sunset Lover 🌅','Location Unknown 🌌','Golden Hour ✨','I Like Me Better 💫'])">🌙 Chill</div>

                <div class="option" onclick="musicList('Party 🎉',
                ['Levitating 💃','Blinding Lights 🌟','APT 🎧','Desi Party Mix 🥳'])">🎉 Party</div>

                <div class="option" onclick="musicList('Lofi ☕',
                ['Snowman ☃️','Falling (Lofi) 💙','Night Coffee ☕','Until I Found You (Lofi) 🎧'])">☕ Lofi</div>
            </div>
        </div>
    `);
}

function musicList(title, songs) {
    renderPage(() => `
        <div class="container">
            <button class="main-btn" onclick="goBack()">⬅ Back</button>
            <h1>${title}</h1>
            <div class="grid">
                ${songs.map(s => 
                    `<div class="option" onclick="showFinal('${s}')">${s}</div>`
                ).join("")}
            </div>
        </div>
    `);
}

/* ---------- FINAL PAGE ---------- */

function showFinal(choice) {
    renderPage(() => `
        <div class="container">
            <h1>It's a Date! 💙</h1>
            <h2>You chose: ${choice}</h2>
            <img src="${huggingGif}" class="gif">
            <br>
            <button class="main-btn" onclick="showStartPage()">
                Start Over 🔄
            </button>
        </div>
    `);
}

/* ---------- LOAD ---------- */

showStartPage();
