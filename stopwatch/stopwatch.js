let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let h2 = document.querySelector("h2")
let i = 0
start.addEventListener('click', function(){
       
        let d = setInterval(function(){
            h2.innerText = i
           
            stop.addEventListener('click', function(){
                clearInterval(d) 
            
            });
            reset.addEventListener('click',function(){
               clearInterval(d)
               i = 0
               h2.innerText = i
            })
           
            i++;

        }, 100)
    
})
