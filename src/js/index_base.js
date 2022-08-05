const winLoginGoogle = document.getElementById('loginGoogle');
const winLoginApple = document.getElementById('loginApple');
const winLoginPhone = document.getElementById('loginPhone');


winLoginGoogle.addEventListener("click", () => {
    window.open("../pages/googleLogin.html", "ventana1", "width=510,height=560,scrollbars=NO");
});

winLoginApple.addEventListener("click", () => {
    window.open("../pages/appleLogin.html", "ventana1", "width=700,height=658,scrollbars=NO");
})

winLoginPhone.addEventListener("click", () => {
    window.open("../pages/phoneLogin.html", "ventana1", "width=620,height=590,scrollbars=NO");
})




