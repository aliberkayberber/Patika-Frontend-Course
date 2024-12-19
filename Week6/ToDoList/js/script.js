window.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
});

window.addEventListener("click", function(e) {
    const cancelBtn = document.querySelector(".close");
    
     if(e.target.tagName === "SPAN" && e.target.className === "close") {
        e.target.parentElement.style.display = "none";
     }
});

function newElement() {
    const input = document.getElementById("task").value;
    console.log("input: ",input.replace(/^\s+|\s+$/gm,''));
    const listElement = document.createElement("li");
    const cancel = document.createElement("span");
    const list = document.querySelector("#list");
    const x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    
    if(input.replaceAll(" ", "") == "") {
        x.innerHTML = "Listeye boş görev ekleyemezsiniz.";
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    } else {
        x.innerHTML = "Listeye eklendi."
        x.className = "show";
        cancel.innerHTML = "x";
        cancel.className = "close";
        listElement.innerHTML = input; // bunu inputtan çekeceğiz
        list.appendChild(listElement);
        listElement.appendChild(cancel);
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

}