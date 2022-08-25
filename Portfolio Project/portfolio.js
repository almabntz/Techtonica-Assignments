
const form = document.getElementById("test_form")
function onSubmit(event){
event.preventDefault() //prevents webpage from reloading itself
const data=new FormData(event.target)
const email= data.get("user_mail") //retrieves email input that was entered into form
console.log(email)
}
form.addEventListener("submit",onSubmit)//event listener for form