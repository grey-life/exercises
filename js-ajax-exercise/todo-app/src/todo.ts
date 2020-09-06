fetch(`http://jsonplaceholder.typicode.com/todos`)
    .then(function(response) {
        return response.json();
    })
    .then(function(todos) {
        todos.length = 10;
        const container = <HTMLElement> document.querySelector('.container');
        const completed : any [] = [];
        const addItem = (todo: any, completed? : boolean) => {
            const div = document.createElement('div');
            div.classList.add('todo');
            if(completed) {
                div.classList.add('completed');
            }
            div.textContent = todo.title;
            container.appendChild(div);
        }

        todos.forEach((todo : any) => {
            addItem(todo);
            if(todo.completed) {
                completed.push(todo);
                return
            }
            
        });
        completed.forEach((todo: any) => addItem(todo,true));
    })
    .catch(function(error) {
        console.log(error.message);
    })