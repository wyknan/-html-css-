    
window.onload=function(){
    let roll = document.getElementById('roll');
    let rollLeft = roll.children[0]
    let rollRight = roll.children[1]
    const emg = document.getElementById('emg')
    let c = 'n'
    // 闭包
    function add(c) {
        let timer1
        let timer2
        return function toChange(c){
            console.log(c);
            if (c==='y') {
                timer1 = setTimeout(function auto() {
                    togo('next')
                    timer2=setTimeout(auto,3000)
                        },3000);
            }else if(c==='n') {
                clearTimeout(timer1)
                clearTimeout(timer2)
                timer1 = null
                console.log();
            }
        }
    }
    var add1 = add(c)
    // 
    add1(c)
    add1('y')
    emg.onmouseenter = function(){
        add1('n')
        adds('n')
    }
    emg.onmouseleave = function(){
        add1('y')
        adds('y')
    }
    function togo(dir) {
        const emg = document.getElementById('emg')
        let current = document.querySelector(".current")
        let yes
        if(dir==='next'){
            yes = current.nextElementSibling || emg.getElementsByTagName("li")[0];
        }else if(dir==='prev'){
            yes = current.previousElementSibling || emg.getElementsByTagName("li")[3];
        }
        current.classList.remove('current')
        yes.classList.add('current')
    }
    rollLeft.onclick=function(){
        togo('prev')
    }
    rollRight.onclick=function(){
        togo('next')
    }
    let rollS = document.getElementsByClassName("roll-s")
    let next
    let op
    adds("y")
    function adds(op){
        if(op === 'y' ){timer=setTimeout(function autos(){
        let O = document.querySelector(".-o-")
        next = O.nextElementSibling ||  rollS[0].getElementsByTagName("div")[0]
        O.classList.remove('-o-')
        next.classList.add('-o-')
        timer=setTimeout(autos, 3000)
    },3000)}else if(op === 'n'){
        clearTimeout(timer)
        timer = null
    }
    }
}