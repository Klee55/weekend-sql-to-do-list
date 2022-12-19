$(document).ready(onReady);

function onReady(){
    console.log('doc ready');
    $('#addTask').on('click', postTask);
    getTask();
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
        appendTasks(response);
    });
}


function appendTasks(){
    $('#tasksToComplete').empty().append(`
        <div>
            
        </div>
    `)

}
