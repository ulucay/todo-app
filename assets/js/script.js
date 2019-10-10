// Check off specific todos by clicking
$("ul").on("click", "li", (e) => {
    $(e.target).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", (e) => {
    $(e.target).parent().fadeOut(300, () =>{
        $(e.target).remove();  
    });
    e.stopPropagation();
});

$("input[type='text']").on("keypress", (e) => {
    if(e.which === 13){
        //grab new todo text from input
        let todoText = $(e.target).val();
        //clear the input bar
        $(e.target).val("");
        //create a new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});