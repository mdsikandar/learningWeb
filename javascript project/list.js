var todos =["Buy bike"];
var input = prompt("What would you like to do?");
while(input != "quit"){
	if(input == "list") {
		todoList();
	}
	else if(input ==="new"){
		createList();
	}
	else if(input==="delete"){
		deleteList();
	}
	input = prompt("What would you like to do?");

}

console.log("it's ok!, App is closed");


function todoList(){
	console.log("*********")
		todos.forEach(function(todo, i){
			console.log(i+ ": "+todo);
		});
		// console.log(todos);
		console.log("*********")
}

function createList(){
	var newTodo = prompt("Enter the new todo");
		todos.push(newTodo);
		console.log("New item added to Todo")
	}
function deleteList(){
	// ask for index todo to be deleted
	var index = prompt("Enter the index of  Todo to delete" );
	// delete the todo
	todos.splice(index,1);
	console.log("Deleted Todo");
	}
	