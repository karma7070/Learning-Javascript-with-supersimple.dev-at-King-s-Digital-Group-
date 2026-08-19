
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



    function displayWBtn(){

        let todoListHTML = '';
      
     for(let i = 0; i < array1.length; i++){
         const val = array1[i];
         const {name, duedate} = val;
         const html =`
                        <div>${name}</div>
                        <div> ${duedate}</div>
                        <button 
                        onclick = " array1.splice(${i}, 1);
                        displayWBtn();"
                        class = "delbtn"
                        >Delete</button>
                                              `;
         todoListHTML += html;
     }

     console.log(todoListHTML);

     dis.innerHTML = `${todoListHTML}`;

    

      //dis.innerHTML = `${JSON.parse(localStorage.getItem('array'))}`;
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

    
  