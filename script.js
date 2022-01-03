





var array_object_list= [];

const btnAdd =document.getElementById("btn");
btnAdd.addEventListener("click", addNew);

// console.log(unique_id);
const accessDiv = document.getElementById("div-containers");
var add_cardtitle = document.getElementById("card_title");
let sub_taskTitle = document.getElementById("sub_taskMenu");
const newDiv = document.createElement("div");
let add_TrashIcon = document.createElement('div');
 // createnew_div
function addNew(){
    if(add_cardtitle.value == ''){
       alert("please enter")
    }

    else{
    // var unique_id = Date.now();
    const newDiv = document.createElement("div");
    newDiv.classList.add('div-make', unique_id);
    accessDiv.appendChild(newDiv);
    document.getElementById("hide-tasklist").style.display="none";
    document.getElementById("blurcontainer").style.filter="blur(5px)";
    var unique_id = Date.now();
    var unique_id1 = Date.now();
    var list_object = {
      task_id: unique_id,
      task_title: add_cardtitle.value,
      subtask: {
        subtask_id: unique_id1,
        subtask_name: sub_taskTitle.value
      }
    }

    // create titleof newdiv 
    let add_title = document.createElement("p");
    add_title.classList.add("cardTitle");
    add_title.textContent=add_cardtitle.value;
    add_title.addEventListener("click", redirect);
    function redirect(){
        window.location.href="./index2.html";
    }
    // let add_link = document.createElement("a");
    // add_title.appendChild(add_link);
    newDiv.appendChild(add_title);

    // create hrline
    let add_hr = document.createElement('hr');
    add_hr.classList.add("add_hrstyle");
    newDiv.appendChild(add_hr);
    // console.log(add_hr);

    // createTaskname
    let taskName = document.createElement('div');
    taskName.classList.add("taskName_style");
    newDiv.appendChild(taskName);

    let add_TrashIcon = document.createElement('div');
    add_TrashIcon.classList.add("addtrash_style");
    newDiv.appendChild(add_TrashIcon);
    let trashIcon = document.createElement("i")
    trashIcon.classList.add("fas", "fa-trash");
    add_TrashIcon.append(trashIcon);
    add_TrashIcon.addEventListener("click", funDelete);

    function funDelete(){
        $(".div-make").click(function(){
           $(this).hide();})
    }

    // addicon
    let add_addIcon = document.createElement('div');
    add_addIcon.classList.add("addIcon_style");
    newDiv.appendChild(add_addIcon);
    let plusIcon = document.createElement("i");
    plusIcon.classList.add("fas", "fa-plus-circle");
    add_addIcon.append(plusIcon);

    // addsubtask popup 
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn"); 
    var span = document.getElementsByClassName("close")[0];
    plusIcon.onclick = function() {
      modal.style.display = "block";
      let add_subtask_btn = document.getElementById("myBtn_subtask");
      add_subtask_btn.addEventListener("click", addNewTask);
      let sub_taskTitle = document.getElementById("sub_taskMenu");
     function addNewTask(){
      if(sub_taskTitle.value==''){
      alert("please enter task");
     }
     else{
      var unique_id1 = Date.now();
       var subtask_list = document.createElement('li');
       subtask_list.classList.add('list-style', unique_id1);
       subtask_list.textContent=sub_taskTitle.value;
       taskName.appendChild(subtask_list);
       subtask_list.addEventListener("click", strike);
       function strike(){
        subtask_list.style.textDecoration="line-through";
       }
       subtask_list.addEventListener("dblclick",hideList)
       function hideList(){
        taskName.removeChild(subtask_list);
       }
     }
    }
    // When the user clicks on <span> (x), close the modal
var crossbtn=document.getElementById("crossbtn")
crossbtn.addEventListener('click', closeCross);
function closeCross(){
    $(".modal").click(function(){
        $(this).hide();})
}
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    }
}

// var delete_card = document.getElementsByClassName("addtrash_style");
// delete_card.addEventListener("click", funcDelete);
// function funcDelete(){
//     console.log("work");
// }

const btnClose = document.getElementById("btn-close");
btnClose.addEventListener("click", closePopup);
function closePopup(){
    $(".pop-up").click(function(){
           $(this).hide();})
}
array_object_list.push(list_object);
}


console.log(array_object_list);