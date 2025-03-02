const button = document.getElementById("completed-1");

        button.addEventListener("click", function () {
            button.disabled = true; 
            button.innerText = "Completed";
            button.classList.remove("bg-blue-600");
            button.classList.add("bg-gray-500", "cursor-not-allowed");

            const substract01 = document.getElementById("task-assigned").innerText
            const Substract01 = parseInt(substract01)
            document.getElementById("task-assigned").innerText = Substract01 - 1
            
            const sum01 = document.getElementById("nav-number").innerText
            const Sum01 = parseInt(sum01)
            document.getElementById("nav-number").innerText = Sum01 + 1
            alert("Board updated Successfully")

            const container = document.getElementById("clear-history")
            const username = "Fix Mobile Button Issue" 
            const div = document.createElement("div")
            div.classList.add("bg-gray-100")
            div.innerHTML = `
            <p>You have completed the task ${username} at <span>2.30</span></p>
            `
            
container.appendChild(div)


            
            
            
            })