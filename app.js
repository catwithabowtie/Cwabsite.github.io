window.onload = function() {
    const xtraupgrades = document.querySelector("#extraupgrades")
    var power = 1
    var points = 0
    var cwab = document.querySelector("#cwab")
    var buypowercost = 25
    var buypowerpower = 3
    var buypowerlevel = 0
    var counter = document.querySelector("#counter")
    var buypower = document.querySelector("#buypower")
    var autoclickerbutton = document.querySelector("#autoclick")
    var autoclickdesc = document.querySelector("#autoclickdesc")
    var autoclickerclickpower = 1
    var autoclickerlevel = 0
    var autoclicker_delay = 6000
    var autolcickercost = 100
    
    autoclickerbutton.addEventListener("click",() => {
        console.log("cl")
    })
    buypower.addEventListener("click",() => {
        
        if (points < buypowercost) {
            points = points
        }
        
        else {
            buypowerlevel += 1
            var buypowerdesc = document.querySelector("#buypowerdesc")
            power += buypowerpower
            points = points - buypowercost
            buypowercost += 295
            counter.innerHTML = `You have: ${points} points`
            buypowerdesc.innerHTML = `cost:${buypowercost}, power:10, bought:${buypowerlevel} adds 10 power to your clicks.`
            autoclicker_delay - 100
            console.log(points)
        }
    })
    
    cwab.addEventListener("click",() => {
        if (points < 0) {
            points = 0
        }
        counter.classList.remove("smallfont")
        counter.classList.add("bigfont")
        xtraupgrades.classList.add(".fixmovextra")
        points += power
        counter.innerHTML = `You have: ${points} points`
        console.log(points)
    }) 
    
    
}