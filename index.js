window.addEventListener('load',() => {
    const form = document.getElementById("form_new_task")
    const inputNewTask = document.getElementById("input_new_task")
    const tasksList = document.getElementById("task_list")
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = inputNewTask.value;
        if(!newTask) {
            alert("please fill out the task")
            return
        }else {
            const tasks = document.createElement("div")
            tasks.setAttribute("id","tasks")
 
            const task = document.createElement("div")
            task.classList.add("task")
            tasks.appendChild(task)
 
            const content = document.createElement("div")
            content.innerHTML=`
                         <div class="content">
                             <input type="text" class="taskDescription" value="${newTask}" read-only>  
                         </div>`
             task.appendChild(content)
             tasksList.appendChild(tasks)
             
             const action = document.createElement("div")
             action.classList.add("action")
             action.innerHTML=`
                        <button id="edit">Edit</button>
                        <button id="delete">Delete</button>
             `
             task.appendChild(action)

            // EDIT
            const editBtn = document.getElementById("edit")
            editBtn.addEventListener('click',()=>{
                const description = document.querySelector(".taskDescription")
                if(editBtn.innerText.toLowerCase()==="edit"){
                    description.removeAttribute('read-only')
                    description.focus()
                    editBtn.innerText="SAVE" 
                }else{
                    description.setAttribute('read-only','read-only')
                    editBtn.innerText="EDIT" 
                }
                
            })

        }

    } )
})