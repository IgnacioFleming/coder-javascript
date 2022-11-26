// Easy Budget está pensado como una Web App para control de gastos y gestión de presupuestos para finanzas personales.

//Primero se pedirá una Registración o Logueo según corresponda



alert("Antes de empezar por favor siga los pasos para crear una cuenta");

const userAuth=prompt("Elija un nombre de Usuario para su cuenta");
const passwordAuth=prompt("Elija una contraseña para su cuenta");
let intento = 2
for(i=1 ; i<=3 ; i++){
    let user = prompt("Ingrese su nombre de Usuario.");
    let password = prompt("Ingrese su contraseña");
    console.log(i);
    if(user == userAuth && password == passwordAuth){
        alert("Bienvenido! Comience a usar Easy Budget");
        break;
    } else {
        switch (i) {
            case 1:
            case 2:
                alert("El Usuario o la Contraseña ingresados son incorrectos, le queda " + intento + " intentos.");
                intento = intento - 1
                break;
            
            case 3:
                alert("Ha utilizado sus 3 intentos, vuelva a intentar más tarde.");
                break;
        }
        
    }
}