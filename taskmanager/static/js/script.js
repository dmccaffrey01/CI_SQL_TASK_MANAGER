$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.datepicker').datepicker({
        format: "dd mmmm, yyy",
        i18n: {done: "Select"}
    });
    $('select').formSelect();
});

