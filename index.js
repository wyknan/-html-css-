    
window.onload=function(){
    let roll = document.getElementById('roll');
    let rollLeft = roll.children[0]
    let rollRight = roll.children[1]
    
    
    setTimeout(function auto() {
        const emg = document.getElementById('emg')
        let current = document.querySelector(".current")
        const next = current.nextElementSibling || emg.getElementsByTagName("li")[0];
        current.classList.remove('current')
        next.classList.add('current')
        setTimeout(auto,3000)
    },3000);
    rollLeft.onclick=function(){
        const emg = document.getElementById('emg')
        let current = document.querySelector(".current")
        const previous = current.previousElementSibling || emg.getElementsByTagName("li")[3];
        current.classList.remove('current')
        previous.classList.add('current')
    }
    rollRight.onclick=function(){
        const emg = document.getElementById('emg')
        let current = document.querySelector(".current")
        const next = current.nextElementSibling || emg.getElementsByTagName("li")[0];
        current.classList.remove('current')
        next.classList.add('current')
    }
}