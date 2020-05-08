
$(document).ready(function(){
    $("#grid").click(function(){
        $(".table-view").removeClass("active");
        $(this).addClass('active');
        $("#table").css("display","none")
        $("#cards").css("display","block")
    });
    $(".table-view").click(function(){
        $("#grid").removeClass("active");
        $(this).addClass('active');
        $("#cards").css("display","none")
        $("#table").css("display","block")
    });
});