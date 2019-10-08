// Check off specific todos by clicking
$("li").on("click", (e) =>{
    $(e.target).toggleClass("completed");
})

//Click on X to delete Todo
$("span").on("click", (e)=> {
    alert("Clicked on")
})