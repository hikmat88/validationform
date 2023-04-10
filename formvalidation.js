const displayMsg = (msg, idName, colorName) => {
    document.getElementById(idName).innerHTML = msg
    document.getElementById(idName).style.color = colorName
}


const fnameValidate = () => {
    const first_name = document.querySelector('#firstname').value
    if (first_name == "") {
        displayMsg('firstname is mandatory', 'fnameMsg', 'red')
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('firstname accepts only alphabets','fnameMsg','red')
        return false
    }
    else if (first_name.length < 3) {
        displayMsg('firstname must be more than 2 characters', 'fnameMsg', 'red')
        return false
    }
    else {
        displayMsg('valid firstname', 'fnameMsg', 'green')
        return true
    }
}

const lnameValidate = () => {
    const last_name = document.querySelector('#lastname').value
    if (last_name == "") {
        displayMsg('lastname is mandatory', 'lnameMsg', 'red')
        return false
    }
    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg('lastname accepts only apphabets','lnameMsg','red')
        return false
    }
    else if (last_name.length < 3) {
        displayMsg('lastname must be more than 2 characters', 'lnameMsg', 'red')
        return false
    }
    else {
        displayMsg('valid lastname', 'lnameMsg', 'green')
        return true
    }

}

const emailValidate = () => {
    const email = document.querySelector('#email').value
    if (email == "") {
        displayMsg('email is mandatory', 'emailMsg', 'red')
        return false
    }
    else if(!email.match(/^([a-zA-Z0-9])[a-zA-Z0-9\-\.\_]+\@+([a-z]).+([a-z])/)){
        displayMsg('invalid email format','emailMsg','red')
        return false

    }
    else if (email.length < 7) {
        displayMsg('email must be clear', 'emailMsg', 'red')
        return false
    }
    else {
        displayMsg('valid email', 'emailMsg', 'green')
        return true
    }
}

const pwdValidate = () => {
    const pwd = document.querySelector('#pwd').value
    if (pwd == "") {
        displayMsg('pwd is mandatory', 'pwdMsg', 'red')
        return false
    }

    else if(!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/)){
        displayMsg('weak password it should be like: As23@ and minimum of 6 characters','pwdMsg','red')
        return false
    }
    else if (pwd.length < 3) {
        displayMsg('password must be strong', 'pwdMsg', 'red')
        return false
    }
    else {
        displayMsg('strong password', 'pwdMsg', 'green')
        return true
    }
}
const cpwdValidate=()=>{
    const cpwd=document.querySelector('#cpwd').value
    if(cpwd==""){
        displayMsg('confirm passward is mandatory','cpwdMsg','red')
        return false
    }
    //strpng password
    //(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?].{8,}$/))
    else if(!cpwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/)){
        displayMsg('weak password it should be like: As23@ and minimum of 6 characters','cpwdMsg','red')
        return false
    }
    else if(cpwd.length<3){
        displayMsg('confirm password must be strong','cpwdMsg','red')
        return false
    }
    else{
        displayMsg('strong password','cpwdMsg','green')
        return true
    }
}
const validForm=()=>{
    if(fnameValidate()&&lnameValidate()&&pwdValidate()&&cpwdValidate()){
        return true
    }
    else{
        return false
    }
}

