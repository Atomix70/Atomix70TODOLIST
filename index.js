// valid();
login()
$(document.body).on("click","#but1",(()=>{

    a=$("#user").val();
    b=$("#psw").val();
    console.log(a,b)
    if(a=="admin"&&b=="12345")
    {
        tableview()
    }
    else{
        alert("username or password is incorrect")
    }
}))
// $(document).ready(function() {
//     $("#but2").click(function() {
//         alert('OK!');
//     });
// });




function login()
{
    resp=[];
    console.log("login")
    $(".change").html(
        `
        <div class="login-dark change">


        <form  id="logform">
              <h2 class="sr-only">Login Form</h2>
              <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
              <div class="form-group"><input class="form-control" id="user" type="text" name="Username" placeholder="Username"></div>
              <div class="form-group"><input class="form-control" id="psw" type="password" name="password" placeholder="Password"></div>
              <div class="form-group"><button class="btn btn-primary btn-block" id="but1" type="button">Log In</button></div>     
              <!-- <a href="#" class="forgot">Forgot your email or password?</a> -->
        </form>
               
        
`    )
}

// function valid(){
//     a=$("#user").val();
//     b=$("#psw").val();
//     console.log(a)
//     if(a=="admin"&&b=="12345")
//     {
//         tableview()
//     }
//     else{
//         alert("username or password is incorrect")
//     }

// }


var resp=[]
// var myhtml="";
function tableview()
{
    console.log("table")
var myhtml="";
var noc=0;
function checkedcheck(a)
{
    if (a==true)
    {
        return "checked disabled"
    }
    else
    {
        return ""
    }
}

// wait(afterwait)
function wait()
{
    console.log("wait")
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){

        if(this.readyState==4&&this.status==200){
            response=JSON.parse(this.responseText)
            // console.log(response)
            for(i=0;i<response.length;i++)
            {
            resp.push(response[i])
        }
        }

    } 
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    // console.log(resp)
    // callback()
}

function afterwait()
{
    $(document).ready(function () {
    console.log(resp)
    console.log("afterwait")
    console.log(resp.length);


    for(i=0;i<resp.length;i++)
    {
        if(resp[i].completed==true){
            noc+=1;
        }
        // console.log(`hi`+resp[i].completed+`hello`)
        myhtml+=` 
        <tr>
        <td>
            <label class="custom-control custom-checkbox ">
                <input type="checkbox" class="custom-control-input checker"`+checkedcheck(resp[i].completed)+`>
                <span class="custom-control-indicator"></span>
            </label>
        </td>
        <td>`+resp[i].title+`</td>
    </tr>`}

    // console.log(noc)
    // console.log(`hi`+myhtml)

            $(".change").html(
                `<div class="form-group"><button class="btn btn-primary btn-block" onclick="login()" >Log Out</button></div>   
                </div>
                <main class="container pt-5">
                <div class="card mb-5">
                    <div class="card-header"><b>MY TO DO LIST</b></div>
                    <div class="card-block p-0">
                        <table class="table table-bordered table-sm m-0" id="thetable">
                            <thead class="">
                                <tr>
                                    <th>Check</th>
                                    <th>Task</th>
                                </tr>
                            </thead>`+myhtml+
                            `
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                </main>
                `
            )
    // console.log(resp.push[i].title)



    })
    

    $(function(){
        $("input[type=checkbox]").on("change", function(){
        var numberOfChecked = $('input:checkbox:checked').length; 
        //    $("#dem").text(numberOfChecked);  
        // console.log(numberOfChecked)
        // console.log(noc)

       

        const ch = new Promise(function(resolve, reject) {
            console.log(numberOfChecked)
            console.log(noc)
            if (numberOfChecked-noc==5) {
                resolve("Succesfully completed 5 tasks")
            }
            // } else {
            //   reject(new Error(''))
            // }
        });
        const alerter = function() {
            ch
            .then(function(done) {
                alert(done)
            })
            
        }
        alerter();
        });
    });
}
wait();
setTimeout(afterwait, 500);
}

