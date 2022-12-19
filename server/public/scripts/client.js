$(document).ready(onReady);

function onReady(){
    console.log('doc ready');
    getTask();
    $('#addTask').on('click', postTask);
    $('#tasksToComplete').on('click', '.deleteButton', deleteTask);
    $('#tasksToComplete').on('click', '.completeButton', completeTask);
}

// function for grabbing new task and send to server
function postTask(){
    let newTask = {
        task: $('#task').val()
    };
    console.log(newTask);
    $.ajax({
        type: 'POST',
        url: '/task',
        data: newTask
    }).then(function (response) {
        console.log(response);
        $('#task').val('');
        getTask();
    });
}

// function to get data from server
function getTask(){
    $.ajax({
        type: 'GET',
        url: '/task'
    }).then(function (response){
        // console.log(response);
        appendTasks(response);
    });
}


function appendTasks(array){
    console.log(array);
    $('#tasksToComplete').empty();
    for (let newTask of array){
        $('#tasksToComplete').append(`
            <tr>
                <td>${newTask.task}</td>
                <td>${newTask.status}</td>
                <td>
                    <button class="deleteButton" data-id=${newTask.id}>Delete</button>
                    <button class="completeButton" data-id=${newTask.id}>Complete</button>
                </td>
            </tr>
        `);
    }
}

// function will delete task and update database
function deleteTask(){
    console.log('delete button');
    const id = ($(this).data('id'));
    $.ajax({
        type: 'DELETE',
        url: `/task/${id}`
    }).then(function(){
        getTask();
    }).catch(function(error){
        console.log('error with delete button:', error)
    });
}

// function will complete task and update database
function completeTask(){
    console.log('complete button');
    const id = ($(this).data('id'));
    $.ajax({
        type: 'PUT',
        url: `/task/${id}`,
    }).then(function() {
        getTask();
    }).catch(function(error){
        console.log('error wtih complete button', error);
    });
    $(this).remove();
}


// notes for Monday: fix css so status will change color when task is completed
// notes cont..: add complete option to be checked off
// notes cont..: fix compelte button so it can update status to compelete in DOM without refreshin