var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
        var content = this.nextElementSibling;
    if (content.style.display === "inline-block") {
        content.style.display = "none";
    } else {
        content.style.display = "inline-block";
    }
        });
    }
    function topFunction() {
        console.log("virker det her?")
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };