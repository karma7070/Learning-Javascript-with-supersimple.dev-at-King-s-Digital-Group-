
    //////////////////////////////////

          
    let inpVal = document.querySelector('.input1');

    let dis = document.querySelector('.display-js');

    const array1 = JSON.parse(localStorage.getItem('array')) || [];

   // localStorage.removeItem('array');

    function addTodo(){
  
    array1.push(inpVal.value);

    localStorage.setItem('array', JSON.stringify(array1));

    inpVal.value = "";

    displayWBtn();

  }



    function displayWBtn(){

        let todoListHTML = '';
      
     for(let i = 0; i < array1.length - 1; i++){
         const val = array1[i];
         const html =`<div>
                        <p>${val}</p>
                        <button 
                        onclick = " deleteTodo()"
                        class = "delbtn"
                        >Delete</button>
                      </div>`;
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

    
  