import '../scss/login.scss'
//import '../../dashboard'

//Login 
const email=document.getElementById('email')
const password=document.getElementById('password')
const login=document.getElementById('login')
const register=document.getElementById('register')
login.addEventListener('click',signIn)
register.addEventListener('click',signUp)

function signIn(){
    event.preventDefault();
    const emailValue= email.value
    const passValue= password.value
    if(emailValue=="admin@admin.com" && passValue=="password")
    {
        location.replace("../../dashboard.html")
    }else{
        alert("El usuario y/o contraseña son incorrectos. Inténtelo de nuevo")
    }
}

function signUp(){
    event.preventDefault();
    location.replace("../../register.html")
}
