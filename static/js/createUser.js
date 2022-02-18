const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(event.target)

    const user = {
        name: event.target.name.value,
        username: event.target.username.value,
        email: event.target.email.value,
        user_status:true
    };

    const response = await fetch('/register', {
        method: 'post',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user)
    }); 
    const result = await response.json();

    document.getElementById('operation-result').innerHTML = await result;
    userForm.reset();
})