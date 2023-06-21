let UserForm{};
UserForm.loginFormCollback = function(data) {
    loginFormAction(data)
};

function loginFormAction(data){
    console.log("Логин: " + data.username);
    console.log("Пароль: " + data.password);  
}