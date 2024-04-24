document.querySelector("#add-btn").onclick = run_program;

function run_program() {

    if (document.querySelector("#input-task input").value.length == 0) {

        alert("Please enter a task!");

    } else {

            //creating a knew item in the list
            document.querySelector("#list").innerHTML += ` 
            
            <div class="items">

                    <div class="check-container">
                        <button 
                        class="check">
                        </button>
                    </div>

                    <div class="text-container">
                        <p class="text">${document.querySelector("#input-task input").value}</p>
                    </div>

                    <div class="delete-container">
                        <img 
                        src="img/delete-icon2.png"
                        alt="delete icon"
                        class="delete">
                    </div> 

                </div>

            `;

            let delete_items = document.querySelectorAll(".delete-container"); //gathering all items in a variable

            for (var i = 0; i < delete_items.length; i++) { //iterate through all items and adding the remove action to the delete buttons
                delete_items[i].onclick = function() {
                    this.parentNode.remove();
                }
            }

            let check_items = document.querySelectorAll(".check");

            for (var i = 0; i < check_items.length; i++) {
                check_items[i].onclick = function () {
                    this.classList.toggle("completed");
                    this.parentNode.parentNode.querySelector(".text").classList.toggle("completed-text");
                }
            }

            document.querySelector("#input-task input").value = "";
    }

}