const DB_USER = [
    {
        username: "arldst",
        password: "password"
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputUsername = inputUsername.value;
    const valueInputPassword = inputPassword.value;

    let flag = 0;
    DB_USER.map((data) => {
        if ((data.username === valueInputUsername) && (data.password === valueInputPassword)){
            flag = 1;
        }
    })

    const warningMsg = document.querySelector(".warning");

    if (flag === 0){
        warningMsg.className = "text-danger";
    } else {
        alert("Selamat anda masuk ke home");
    }
})

