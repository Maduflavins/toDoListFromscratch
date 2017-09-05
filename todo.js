var todos = [];
var input = prompt("what will you like to do today");

while(input !== "quit"){
    //handle input
    if(input === "list"){
        listTodo();
    
    }else if(input === "new"){
        addTodo();
    
}else if(input === "delete"){
    deleteTodo();
    
}
    //ask for input again
    var input = prompt("what will you like to do today");

}
console.log("you quit the app");
function listTodo(){
    console.log("*******************");
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
        console.log("*******************");

}
function addTodo(){
    //ask for new todo
    var newTodo = prompt("Enter your activity for the day");
    //add to todos array
    todos.push(newTodo);
    console.log("todo added");

}
function deleteTodo(){
    //ask for index of todo to be deleted
    var index = prompt("enter index of todo to delete");
    //delete the todo item
    todos.splice(index, 1);
    console.log("deleted todo");
}