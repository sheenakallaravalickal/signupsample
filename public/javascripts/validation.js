$(document).ready(function (){
    $("#signup-form").validate({
        rules:{
            uname:{
                required:true,
                minlength:4
            },
            pwd:{
                required:true,
                    minlength :5
            },
            cpwd:{
                required:true,
                    minlength:5,
                    equalTo:"#pwd"
            }
        },
        messages:{
            uname:{
                required:"please enter valid user name",
                    minlength:"min len 4"
            },
            pwd:{
                required:"password required",
                    minlength:"min len 5"
            },
            cpwd:{
                required:"required password",
                    minlength:"min len 5",
                    equalTo:"password matched"
            }
        }
    })
})