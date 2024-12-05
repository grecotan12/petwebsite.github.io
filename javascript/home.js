const dropDowns = document.querySelectorAll(".link .animal-link");

let check = false;
dropDowns.forEach(e => {
    e.addEventListener("click", () => {
       const child = e.children;
       console.log(child);
    })
})