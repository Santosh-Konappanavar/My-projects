function navbar(){
    return `<div id="navbar">
    <h3><a href="index.html">Home</a></h3>
    <input type="text" oninput="debonce(displaymovie(),3000)" placeholder="SearchFood" id="in" />
    <button id ="but">Search</button>
    <div id="option">
    <h3><a href="receip.html">receipe of the day</a></h3>
    <h3><a href="latest.html">latest receipe</a></h3>
    <h3><a href="#">Singn in</a></h3>
    <h3><a href="#">signup</a></h3>
    </div>
    </div>`
    }
    export default navbar