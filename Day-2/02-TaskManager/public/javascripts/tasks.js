$(function(){
    $(".toggleButton").click(function(){
        var $taskNode = $(this).parent("li")
        var taskId = $taskNode.attr("taskid");
        $.ajax({
            url : "/tasks/toggle",
            method : "post",
            data : JSON.stringify({id : taskId}),
            dataType : "json",
            contentType : "application/json",
            success : function(res){
                if (res.isCompleted){
                    $taskNode.find("span").addClass("completed");
                }else{
                    $taskNode.find("span").removeClass("completed");
                }

            }
        });

    });
});
