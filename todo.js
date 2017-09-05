var todos = [];
var input = prompt("what will you like to do today");

while(input !== "quit"){
    //handle input
    if(input === "list"){
        consle.log(todos);
    }else if(input === "new"){
    //ask for new todo
    var newTodo = prompt("Enter your activity for the day");
    //add to todos array
    todos.push(newTodo);
}
    //ask for input again
    var input = prompt("what will you like to do today");

}
console.log("you quit the app");