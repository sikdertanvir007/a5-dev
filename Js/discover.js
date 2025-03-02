// Redirect to the index.html
document.getElementById("backToDesk").addEventListener("click",
    function(){
        window.location.href = "index.html"
    }

    setTimeout(() => {
        alert("Second Alert: Now disabling the button!")
    })
        