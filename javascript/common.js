const dropDowns = document.querySelectorAll(".link .animal-link");
let count = 0;


dropDowns.forEach(e => {
    let check = false;
    e.addEventListener("click", () => {
       console.log(e.getBoundingClientRect());
       const child = e.lastElementChild;
       if (!check) {
        child.classList.remove("fa-angle-right");
        child.classList.add("fa-angle-down");
        check = true;
       } else {
        child.classList.remove("fa-angle-down");
        child.classList.add("fa-angle-right");
        check = false;
       }
    })
});

let checkOne = false;
dropDowns[0].addEventListener("click", () => {
    dropDowns[1].lastElementChild.classList.remove("fa-angle-down");
    dropDowns[1].lastElementChild.classList.add("fa-angle-right");
    document.getElementById("menu2").style.display = "none";
    dropDowns[2].lastElementChild.classList.remove("fa-angle-down");
    dropDowns[2].lastElementChild.classList.add("fa-angle-right");
    document.getElementById("menu3").style.display = "none";
    const menuOne = document.getElementById("menu1");
    if (!checkOne) {
        menuOne.style.display = "block";
        checkOne = true;
    } else {
        menuOne.style.display = "none";
        checkOne = false;
    }
});

let checkTwo = false;
dropDowns[1].addEventListener("click", () => {
    dropDowns[0].lastElementChild.classList.remove("fa-angle-down");
    dropDowns[0].lastElementChild.classList.add("fa-angle-right");
    document.getElementById("menu1").style.display = "none";
    dropDowns[2].lastElementChild.classList.remove("fa-angle-down");
    dropDowns[2].lastElementChild.classList.add("fa-angle-right");
    document.getElementById("menu3").style.display = "none";
    const menuTwo = document.getElementById("menu2");
    if (!checkTwo) {
        menuTwo.style.display = "block";
        checkTwo = true;
    } else {
        menuTwo.style.display = "none";
        checkTwo = false;
    }
});

let checkThree = false;
dropDowns[2].addEventListener("click", () => {
    dropDowns[0].lastElementChild.classList.remove("fa-angle-down");
    dropDowns[0].lastElementChild.classList.add("fa-angle-right");
    document.getElementById("menu1").style.display = "none";
    dropDowns[1].lastElementChild.classList.remove("fa-angle-down");
    dropDowns[1].lastElementChild.classList.add("fa-angle-right");
    document.getElementById("menu2").style.display = "none";
    const menuThree = document.getElementById("menu3");
    if (!checkThree) {
        menuThree.style.display = "block";
        checkThree = true;
    } else {
        menuThree.style.display = "none";
        checkThree = false;
    }
});

