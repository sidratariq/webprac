document.addEventListener("DOMContentLoaded",
function(event){

    //Unobstrusively event binding

    document.querySelector("button")
    .addEventListener("click",function(){
        var self = this;
        var name = "";

        //call server to get the name

        $ajaxUtils
        .sendGetRequest("./data/name.json",
        function(res){
            var message = res.firstname +" "+ res.lastname
            if(res.LikesChineseFood){
                message += "Likes chinese food";
            }
            else{
                message +="does not like Chinese food";
            }

            message +="and uses";
            message +=res.numberofdisplay+1;
            message +="display for coding.";

            document.querySelector("#content").innerHTML ="<h2>" + message +"</h2>";
        });









    });




});