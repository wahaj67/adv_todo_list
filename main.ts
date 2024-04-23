import inquirer from"inquirer"
let todos:string[]=[]
 async function createTodo(todos:string[]){
    do{
        let ans = await inquirer.prompt({
            name:"select",
            type:"list",
            message:"what do you want",
            choices:["Add","Update","View","Delete","Exit"]
        })
        if (ans.select==="Add"){
            let addTask = await inquirer.prompt({
                name:"todo",
                type:"input",
                message:"what would you like to add in your todo?"
            })
            todos.push(addTask.todo)
            console.log(todos)
        }
         if (ans.select==="Update"){
            let UpdateTodo = await inquirer.prompt({
                name:"todo",
                type:"list",
                message:"what would you like to update in your todo?",
                choices : todos.map(item=>item)
            
            })
            let addTask=await inquirer.prompt({
                name:"todo",
                type:"input",
                message:"what would you like to add in your to do ?"
            })
            let newTodo = todos.filter(val => val !==UpdateTodo.todo)
            todos= [...newTodo,addTask.todo]
            console.log(todos)
           }
           if (ans.select==="View"){
            console.log("*************TO DO LIST *****************")
            console.log(todos)
            console.log("***************************")
           }

           if (ans.select==="Delete"){
            let DeleteTodo = await inquirer.prompt({
                name:"todo",
                type:"list",
                message:"what would you like to delete in your todos?",
                choices:todos.map(item=>item)
            })
            let newTodo = todos.filter(val => val !==DeleteTodo.todo)
            todos=[...newTodo]
            console.log(todos)
           }
           if (ans.select==="Exit"){
            break;
           }
        } while(true)
        }



createTodo(todos)