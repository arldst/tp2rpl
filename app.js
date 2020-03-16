let DB_USER = []

console.log("Array DB_USER :");
console.log(DB_USER);

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputKonfirmasiPassword = document.querySelector("#konfirmasiPassword")
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputUsername = inputUsername.value;
    const valueInputPassword = inputPassword.value;
    const valueInputKonfirmasiPassword = inputKonfirmasiPassword.value;

    const warningMsg1 = document.querySelector(".warning1");
    const warningMsg2 = document.querySelector(".warning2");
    const warningMsg3 = document.querySelector(".warning3");

    if(valueInputUsername === "" || valueInputPassword === "" || valueInputKonfirmasiPassword === ""){
        warningMsg1.className = "text-danger";
    }

    else {
        const passwordString = valueInputPassword.localeCompare(valueInputKonfirmasiPassword);
    
        if(passwordString != 0){
            warningMsg2.className = "text-danger";
        }

        else {
            let check = false;
            for(let i = 0; i < DB_USER.length; i++){
                if(DB_USER[i].username === valueInputUsername){
                    check = true;
                    break;
                }
            }

            if(!check){
                DB_USER.push({username:valueInputUsername, password:valueInputPassword });
                console.log("Data telah dimasukan ke DB_USER :")
                console.log(DB_USER);

                alert("Selamat anda berhasil registrasi");
            }

            else {
                warningMsg3.className = "text-danger";
            }
        }
    }
})

