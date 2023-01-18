    
window.onload=function(){
    let roll = document.getElementsByClassName('roll');
    let rollLeft = roll.firstElementChild
    let rollRight = roll.lastElementChild
    
    
    setTimeout(function auto() {
        const emg = document.getElementById('emg')
        let current = document.querySelector(".current")
        const next = current.nextElementSibling || emg.getElementsByTagName("li")[0];
        current.classList.remove('current')
        next.classList.add('current')
        setTimeout(auto,3000)
    },3000)
}