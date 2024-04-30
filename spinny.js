window.onload = function() {
        
    var me = document.querySelector("#me")
    function getrandomnum() {
        return Math.floor(Math.random() * 26)
    }
    
    function callrandom() {
        setInterval(function() {
            var num = getrandomnum();
            if (num == 1)
            {   
                me.classList.add("rotate")
            }
            else {
                me.classList.remove("rotate")
            }
            
        }, 1000
    )
    
    }callrandom()

}
