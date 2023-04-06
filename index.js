window.addEventListener('load',() => {
    const form = document.getElementById("form_new_task")
    const inputNewTask = document.getElementById("input_new_task")
    const tasksList = document.getElementById("task_list")
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = inputNewTask.value;
        console.log(inputNewTask)
        if(!newTask) {
            alert("please fill the task name")
        }else {
            console.log("success")
        }
    } )
})