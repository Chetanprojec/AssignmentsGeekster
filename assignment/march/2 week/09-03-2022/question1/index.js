const todos = [];

const render = function(){
    const parent_container = document.getElementById('list_container');
    parent_container.innerHTML=""
    for(let i=0;i< todos.length; i+=1){
        
        const new_li = document.createElement('li');
        
        new_li.innerText = todos[i];

        parent_container.appendChild(new_li);


    }
}

const add_item = function(){
    const ip = document.getElementById('todo');

   const new_todo = ip.value;
   todos.push(new_todo);
   ip.value = "";
   render();
}

const btn = document.getElementById('add_btn');
btn.addEventListener('click', add_item);
