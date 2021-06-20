const name = document.querySelector('#name')
const password = document.querySelector('#password')
const form = document.querySelector('#form')
const errorDiv = document.querySelector('#error')

form.addEventListener('submit', (e) => {
    let messages = []

    if (name.value === '' || name.value === null) {
        messages.push('Name is required')
    }  
    
    if (password.value === '' || password.value === null) {
        messages.push('Insert Password')
    } 

    if (password.value.length < 6) {
        messages.push('Password must contains atleast 6 characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must contain less than 20 characteres')
    }

    if (messages.length > 0) {
         errorDiv.innerText = messages.join(', ')
        e.preventDefault()
    } 
})

