
    //////////////////////////////////

          
    let inpVal = document.querySelector('.input1');

    let dis = document.querySelector('.display-js');

    let inpDate = document.querySelector('.input2');

    const array1 = JSON.parse(localStorage.getItem('array')) || [{name: nothing, due_date: nothing}, { name: nothing, due_date: nothing}];

    //localStorage.removeItem('array');

    function addTodo(){

      if(inpDate.value === null){
        inpDate.value = "No date";
      }

      console.log(inpDate.value);
  
    array1.push({name: inpVal.value, duedate: inpDate.value});

    localStorage.setItem('array', JSON.stringify(array1));

    inpVal.value = "";

    displayWBtn();

  }

let todoListHTML;

    function displayWBtn(){

    todoListHTML = '';
      
      array1.forEach(
      function(array1Object, index){

         const {name, duedate} = array1Object; //returns the name and due date in the object to the variables in the curly braces
         const html =`
                        <div>${name}</div>
                        <div> ${duedate}</div>
                        <button 
                        onclick = " array1.splice(${index}, 1);
                        displayWBtn();"
                        class = "delbtn"
                        >Delete</button>
                                              `;
         todoListHTML += html;
     });

     console.log(todoListHTML);

     dis.innerHTML = todoListHTML;

     localStorage.setItem('list', JSON.stringify(todoListHTML))

      
    }

    function displayWEvent(event){

      if(event.key === 'Enter'){
        console.log(event.key)
         dis.innerHTML = JSON.parse(localStorage.getItem('array'));
      }

      function deleteTodo(){    
         array1.splice(array1.length - 1);
         localStorage.setItem('array', JSON.stringify(array1));

         console.log(array1)
      }

    }

    dis.innerHTML = JSON.parse(localStorage.getItem('list'));//display the list that holds the elements instead of the array that stores the objects

    
  