var sky = document.getElementById("sky")
var moon = document.getElementById('moon')
var building = document.getElementById("building")
var word = document.getElementById("word")
console.log(word)

    window.addEventListener("scroll", function(){
        var value = window.scrollY;
        // console.log(value)
        // sky.style.bottom = value * 0.25 + "px"
        moon.style.top = value * 2 + "px"
        building.style.top = value * 0.50 + "px"
        console.log(moon.style.top = value * 2 + "px")
        // word.style.transform = ` translateX${value * 20 + "%"}`
        word.style.left = value * 1 + "px"
        // console.log(word.style.top = value * 1 * "px")
        // console.log(word.style.left)
    
    })

