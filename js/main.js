/*create list

button to sumbit task
somwhere to add(input) task to 
somwhere to show it
something to listen for click when sumbit
something to grab input value(function)
create element to add value to
create function function to make list
reset field when click submit

*/
const input = document.getElementById('enterInput');
const button = document.getElementById('addToListBtn');
const list = document.getElementById('toDoList');
const del = document.getElementById('erase');
const taskLeft = document.getElementById('taskDone')
const deleteAll = document.getElementById('deleteAll')
   


function createToDoList(e){
  e.preventDefault()
  let text = input.value
  if(text === ''){
    return
  }
  const li = document.createElement('li');
  li.className ='notCrossed'
  li.innerText = text;
  list.appendChild(li)
  input.value = ''
  let count = document.querySelectorAll('.notCrossed').length
  taskLeft.innerText = count 
  
} 
function crossOut(e){
  if(e.target.classList.contains('notCrossed')){
    e.target.style.textDecoration = 'line-through'
    e.target.style.color= 'gray'
   e.target.className = 'crossed'
  }else if(e.target.classList.contains('crossed')){
    e.target.style.textDecoration='none';
    e.target.style.color= 'black'
    e.target.className = 'notCrossed'
  }  
   let count = document.querySelectorAll('.notCrossed').length
   taskLeft.innerText = count 
  }
function clearCrossedOut(){
  console.log(list)
  console.log(list.childNodes)
  Array.from(list.childNodes).forEach( element => {
    console.log(element.className)
    // console.log(element.getAttribute('class'))
    console.log('working')
    console.log(element.className == 'crossed')
    if(element.className == 'crossed'){
      console.log('working')
        element.remove()
  

    }
  })

}
function clearAll(){
  while(list.firstChild){
    list.removeChild(list.firstChild)
    taskLeft.innerText = count 
    /* looping and removing the 1st child from the list*/
  }
 }

deleteAll.addEventListener('click', clearAll)
list.addEventListener('click', crossOut)
button.addEventListener('click', createToDoList)
del.addEventListener('click',clearCrossedOut)

