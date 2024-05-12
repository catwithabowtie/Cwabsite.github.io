
window.onload = function() {
    const xtraupgrades = document.querySelector("#extraupgrades")
    var power = 1
    var points = 0
    let booleansaved_game = false
   function updatetitle() {
    setInterval(() => {
        document.title = `Cwabclicker, currently ${points} points.`
    }, 400)
   }
   const loadgamebutton  = document.querySelector("#loadsavebutton") 
   const darkmodebutton = document.querySelector("#darkmodeon")
    const newaudio = new Audio("sounds/Cwabclicknew.wav")
    const newupgradebuy = new Audio("sounds/Upgradebuy.wav")
    const totalpointcounter = document.querySelector("#totalpointcounter")
    const totalevelcounter = document.querySelector("#totalupgradecounter")
    const autoclickclick = new Audio("sounds/Autoclick1.wav")
    const autoclicktimercounter = document.querySelector("#autoclicktimer")
    const savebutton = document.querySelector("#savepointsbutton")
    var cwab = document.querySelector("#cwab")
   const configbutton = document.querySelector("#achivementbutton")
    const configmenu = document.querySelector("#configmenunotdiv")
    let visiblemenu = false
    configbutton.addEventListener("click", () => { //this is for toggling the menu on and off 
        configmenu.classList.toggle("invisible")
        configmenu.classList.toggle("fixedposition") //i just realized there was a toggle method for classlist lol

    })
    
    
    var buypowercost = 25
    var buypowerpower = 3
    var totalpoints = 0
    var lock = 0
    var totallevel = 0
    var buypowerlevel = 0
    var counter = document.querySelector("#counter")
    var buypower = document.querySelector("#buypower")
    var autoclickerbutton = document.querySelector("#autoclick")
    var autoclickdesc = document.querySelector("#autoclickdesc")
    var autoclickerclickpower = 1
    var autoclickerlevel = 0
    var autoclicker_delay = 6000
    var autoclickdelaystring = autoclicker_delay
    var autolcickercost = 100
    let gameobjectschildren = [points,totalpoints,totallevel]
    let autoclickchildren = [autolcickercost,autoclickerlevel,autoclickerclickpower,autoclicker_delay,autoclickdesc,autoclickdelaystring]
    let buypowerchildren = [buypowercost,buypowerlevel,buypowerpower]
    autoclickerbutton.addEventListener("click",() => {
            console.log("lo bomboclat")

            if (points < autolcickercost) {
                c = 6
            }
            else if (points >= autolcickercost) {
                points -= autolcickercost
                autoclickerlevel++
                totallevel++
                autolcickercost += 320
                newupgradebuy.play()
                counter.innerHTML = `You have: ${points} points`
                totalevelcounter.innerHTML = `You have bought a total of: ${totallevel} upgrades this run.`
                autoclickdesc.innerHTML = autoclickdesc.innerHTML = `cost:${autolcickercost}, rate:${autoclickerclickpower}/${autoclicker_delay}ms,bought:${autoclickerlevel},power: ${autoclickerclickpower}, clicks every x amount of seconds`
                function decreasetimerforautoclicker() {
                    autoclicktimercounter.innerHTML = `${autoclickdelaystring}`
                }
                function autoclick() {
                    console.log("exec")
                    setInterval(() => {
                        points += autoclickerclickpower

                        totalpoints += autoclickerclickpower    
                        counter.innerHTML = `You have: ${points} points`
                        totalpointcounter.innerHTML = `You have a total of: ${totalpoints} points in this run.`
                        autoclickclick.play()
                        updatetitle()
                    
                },autoclicker_delay)
                setInterval(() => {
                    let autoclickdelaystringfunctionsetinterval = autoclicker_delay
                    autoclickdelaystring -= 1000
                    autoclicktimercounter.innerHTML = `${autoclickdelaystring}`
                    if (autoclickdelaystring <= 0) {
                        autoclickdelaystring = 6000
                    }
                    if (autoclicker_delay == 6000) {
                        autoclickdelaystringfunctionsetinterval /= 6
                    }else if (autoclicker_delay == 5000) {
                        autoclickdelaystringfunctionsetinterval /= 5
                    }else if(autoclicker_delay == 4000) {
                        autoclickdelaystringfunctionsetinterval /= 4
                    }else if (autoclicker_delay == 3000) {
                        autoclickdelaystringfunctionsetinterval /=3

                    }else if (autoclicker_delay == 2000) {
                        autoclickdelaystringfunctionsetinterval /= 2
                    }
                    

                    
                    
                },autoclickdelaystringfunctionsetinterval)
                }
                if (lock == 0) {
                    autoclick()
                    lock++
                    
                    
                }
                else if (lock == 1) {
                    autoclickerclickpower += 4
                    if (autoclickerlevel % 3 == 0) {
                        autoclicker_delay -= 500
                        autoclickdesc.innerHTML = `cost:${autolcickercost}, rate:${autoclickerclickpower}/${autoclicker_delay}ms,bought:${autoclickerlevel},power: ${autoclickerclickpower}, clicks every x amount of seconds`
                    } else if (autoclicker_delay <=  1000) {
                        autoclicker_delay = 1000
                    }
                    
                }
                
            }
            
        })
       
        
        
        
    
    buypower.addEventListener("click",() => {
        
        if (points < buypowercost) {
            points = points
        }
        
        else {
            buypowerlevel++
            var buypowerdesc = document.querySelector("#buypowerdesc")
            power += buypowerpower
            points = points - buypowercost
            totallevel++
            buypowercost += 295
            counter.innerHTML = `You have: ${points} points`
            totalevelcounter.innerHTML = `You have bought a total of: ${totallevel} upgrades this run.`
            buypowerdesc.innerHTML = `cost:${buypowercost}, power:10, bought:${buypowerlevel} adds 10 power to your clicks.`
            autoclicker_delay - 100
            newupgradebuy.play()
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
        if (booleansaved_game == false) {
            points += power
            totalpoints += power
            newaudio.play()
            totalpointcounter.innerHTML = `You have a total of: ${totalpoints} points in this run.`
            counter.innerHTML = `You have: ${points} points`
            console.log(points)
            updatetitle()
        } else if(booleansaved_game == true) {
            gameobjectschildren[0] += power //update saving variables
            gameobjectschildren[1] += power
            console.log(gameobjectschildren[0],gameobjectschildren[1]) //log variable values
            points = gameobjectschildren[0]
            counter.innerHTML = `You have: ${gameobjectschildren[0]} save`/*counter.innerHTML = `You have: ${gameobjectschildren[0]} points (saved)`
            
            totalpoints.innerHTML = `You have a total of: ${localStorage.getItem("Total_points")} points in this run.`
            totalevelcounter.innerHTML = `You have bought a total of: ${localStorage.getItem("Total_level")} upgrades this run.`
            newaudio.play()*/
        }
        
        
        
        
        
        
        
        
    }) 
    savebutton.addEventListener("click", () => {
        
        function savepoints(array1,array2,array3) {
            console.log("Saving game...")
            console.log(`Saved game with ${gameobjectschildren[1]} points`)
            try {
                localStorage.setItem("Points",gameobjectschildren[0]) 
                localStorage.setItem("Total_points", gameobjectschildren[1])
                localStorage.setItem("Total_level", gameobjectschildren[2])                                                                                        /* [buypowercost,buypowerlevel,buypowerpower] */
            } /*[points,totalpoints,totallevel] , [autolcickercost,autoclickerlevel,autoclickerclickpower,autoclicker_delay,autoclickdesc,autoclickdelaystring] */
            catch (err) {
                throw "information too big, your save might be corrupted or have too much information"
            }
            finally {
                console.log(localStorage.getItem("Points"))
            }
        }
        savepoints(gameobjectschildren,autoclickchildren,buypowerchildren)
    })
    loadgamebutton.addEventListener("click", () => {
        console.log(localStorage.getItem("Points"))
        
        
        booleansaved_game = true
    })
}
