document.querySelector("#add-btn").onclick = run_program;

document.querySelector('#input-container input').addEventListener('keydown', (ev) => {
    if(ev.key === 'Enter') {
        run_program()
    }
})

function run_program() {

    if (document.querySelector("#input-container input").value.length == 0) {

        alert("Please enter a task!");

    } else {

            //creating a knew item in the list
            document.querySelector("#list").innerHTML += ` 
            
            <div class="items">

                    <button class="check-btn"></button>

                    <div class="text-container">
                        <p class="text">${document.querySelector("#input-container input").value}</p>
                    </div>

                    <button class="delete-btn">
                    </button> 

                </div>

            `;

            let delete_btn = document.querySelectorAll(".delete-btn"); //gathering all items in a variable

            for (var i = 0; i < delete_btn.length; i++) { //iterate through all items and adding the remove action to the delete buttons
                delete_btn[i].addEventListener('click', (ev) => {
                    ev.target.parentNode.remove()
                    checkPlaceholder()
                })
            }

            let check_items = document.querySelectorAll(".check-btn");

            for (var i = 0; i < check_items.length; i++) {
                check_items[i].onclick = function () {
                    this.classList.toggle("completed");
                    this.parentNode.querySelector(".text").classList.toggle("completed-text");
                }
            }

            document.querySelector("#input-container input").value = "";
            checkPlaceholder()
    }

}

checkPlaceholder()

function checkPlaceholder () {
    const listContainer = document.querySelector('#list')

    // Verifying if the div id empty
    if (listContainer.innerHTML.trim() === '') {
        listContainer.classList.add('empty')
    } else {
        listContainer.classList.remove('empty')
    }
}
