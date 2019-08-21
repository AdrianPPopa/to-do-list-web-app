window.ToDoList = {
    API_BASS_URL: "http://localhost:8083/to-do-items",

    createItem: function () {
        var description = $("#description-field").val();
        var deadline = $("#deadline-picker").val();
        var item = {
            description: description,
            deadline: deadline
        }
        $.ajax({
            url: ToDoList.API_BASS_URL,
            method:"POST",
            //NIME type
            contentType: "application/json",
            data: JASON.stringify(item)
        }).done(function (response) {
            console.log("Succesfully received response")
            console.log(response)
        })
    }
}