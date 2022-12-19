$(document).ready(onReady);

function onReady(){
    console.log('doc ready');
    $('#addTask').on('click', postTask);
}

function postTask(){
    let newTask = {
        task: $('#task').val()
    };
    console.log(newTask);
    $.ajax({
        type: 'POST',
        url: '/task',
        data: newTask
    });
    
    
}
