function openDropDown(){
    const dropDown = document.querySelector(".dropdown");
    dropDown.style.display = "flex";
}
function closeDropDown(){
    const dropDown = document.querySelector(".dropdown");
    dropDown.style.display = "none";
}

const menuButton = document.querySelector(".dropButton");
dropButton.addEventListener("click", openDropDown);

