const panles= document.querySelectorAll(".panel");
panles.forEach((panel) => {
    panel.addEventListener('click', ()=> {
        removeActive();
        panel.classList.add('active')
    });
    
});
function removeActive() {
    panles.forEach((panel) =>{
        panel.classList.remove('active')
    });
}