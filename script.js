let isActive = false;
function toggleSwitch() {
    const toggle = document.querySelector('.toggle');
    const circle = document.querySelector('.circle');
    const infoText1 = document.getElementById('infoText');
    const infoText2 = document.getElementById('infoText2');
    
    isActive = !isActive;
    toggle.classList.toggle('active', isActive);
    
    if (isActive) {
        infoText1.style.display = 'none';
        infoText2.style.display = 'flex';
        

        circle.style.left = '25px';
    } else {
        infoText1.style.display = 'flex';
        infoText2.style.display = 'none';
        circle.style.left = '3px';
    }
}

