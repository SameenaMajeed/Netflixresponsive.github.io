let colls = document.getElementsByClassName("coll");
let i;
for (i = 0; i < colls.length; i++) {
    colls[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if(content.style.display === "block"){
            content.style.display = "none";
        }else{
                content.style.display = "block";
            }
        })
            
    }