let formValidation=(e)=>{
    e.preventDefault()

    let email=document.getElementById('em')
    let pass=document.getElementById('ps')
    
    if(email.value==='' || email.value===null){
        email.style.border="solid 4px orange"
    }
    else if
        (pass.value==='' || pass.value===null){
            pass.style.border="solid 10px red"
        }
        else{
            window.location="welcome.html"
        }
    }
