/* Easy Client Account Manager está pensado como un gestor de cuentas corrientes dadas a clientes,
 el cual permite ingresar los datos de los clientes, los retiros de mercaderia y los pagos de saldo.
 */

//Se genera una clase que nos permitirá dar de alta los clientes.

class Cliente{
    constructor(nombre,apellido,dni,domicilio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.domicilio = domicilio;
        this.saldo = 0;
    }
}

//Luego se crea el array vacío que tendrá los clientes.
const clientes = [];

//Primero se pedirá una Registración o Logueo según corresponda

alert("Antes de empezar por favor siga los pasos para crear una cuenta");
// Aquí se establece las que serán las credenciales del usuario que hará el Data Entry.
const usuarioAutorizado=prompt("Elija un nombre de Usuario para su cuenta");
const contraAutorizada=prompt("Elija una contraseña para su cuenta");
//Una vez hecho el registro, el usuario puede proceder a loguearse, para ello tendrá 3 intentos, de lo contrario finaliza la sesión.

let intento = 2;
for(let i=1 ; i<=3 ; i++){
    let usuario = prompt("Ingrese su nombre de Usuario.");
    let contraseña = prompt("Ingrese su contraseña");
    console.log(i);
    if(usuario == usuarioAutorizado && contraseña == contraAutorizada){
        alert("Bienvenido! Comience a usar Easy Budget");
        break;
    } else {
        switch (i) {
            case 1:
            case 2:
                alert("El Usuario o la Contraseña ingresados son incorrectos, le queda " + intento + " intentos.");
                intento = intento - 1;
                break;
            
            case 3:
                alert("Ha utilizado sus 3 intentos, vuelva a intentar más tarde.");
                break;
        }
        
    }
}



/*Una vez iniciada la sesion, ingresamos al menú principal.
Tenemos la opcion de declarar Ingresos, Egresos y armar presupuestos.*/
let saldo = 0;
let valor;
let opcion;
let opcionPresupuesto;
let comida = 0;
let alquiler = 0;
let transporte = 0;
let ahorro = 0;
let Suma = (a,b) => a + b;
let Resta = (a,b) => a - b;
do{
    opcion = prompt("Ingrese: \n 'alta' para dar de alta un nuevo cliente ,\n 'consulta' para consultar la base de clientes actuales,\n 'baja' para dar de baja un cliente,\n 'modificar' para registrar ingreso o egreso del cliente y \n 'salir' para salir");

    switch (opcion){
        case "alta":
            //solicito al usuario los datos del cliente para pushearlo al array.
            let nombre = prompt("Ingrese el nombre del cliente");
            let apellido = prompt("Ingrese el apellido del cliente");
            let dni = prompt("Ingrese el dni del cliente");
            let domicilio = prompt("Ingrese el domicilio del cliente");
            const nuevoCliente = new Cliente(nombre, apellido, dni, domicilio);
            clientes.push(nuevoCliente);
            break;
        case "consulta":
            //muestro por consola el listado de clientes y su saldo
            console.log("Resumen de clientes en cartera:");
            clientes.forEach(cliente => {
                console.log(`El cliente ${cliente.nombre} ${cliente.apellido} tiene un saldo de $${cliente.saldo}`);
            }
            )
            break;
        case "modificar":


            /*do{
                muestraSaldo()
                opcionPresupuesto = prompt("Para asignar dinero a su presupuesto ingrese 'comida', 'alquiler', 'transporte' o 'ahorro', según corresponda. En caso contrario ingrese 'salir' para volver al menú anterior")
                switch (opcionPresupuesto){
                    case "comida":
                        comida = Suma(comida,input(valor))
                        saldo = Resta(saldo,comida)
                        break;
                    
                    case "alquiler":
                        alquiler = Suma(alquiler,input(valor))
                        saldo = Resta(saldo,alquiler)
                        break;
                    case "transporte":
                        transporte = Suma(transporte,input(valor))
                        saldo = Resta(saldo,transporte)
                        break;
                    case "ahorro":
                        ahorro = Suma(ahorro,input(valor))
                        saldo = Resta(saldo,ahorro)
                        break;

                    case "salir":
                        break;
                    
                    default:
                        alert("La opción ingresada no es válida, vuelva a intentarlo")
                }
            }while(opcionPresupuesto != "salir")*/

            break;
        case "baja":
            //solicito al usuario el dni del cliente a bajar, luego lo busco en el array y lo elimino del mismo.

            let dniBaja = parseInt(prompt("Ingrese el dni del cliente que quiere dar de baja"));
            let clienteBaja = clientes.find(clienteBaja => clienteBaja.dni == dniBaja);
            let indiceClienteBaja = clientes.indexOf(clienteBaja);
            if (indiceClienteBaja == -1){
                console.log(`El dni ingresado no corresponde a un cliente registrado, reintente.`);
            }else{
                clientes.splice(indiceClienteBaja,1);
                console.log(`Se dió de baja al cliente ${clienteBaja.nombre} ${clienteBaja.apellido}`);
            }

            break;

        case "salir":
            alert("Su sesión ha sido finalizada");
            break;
        default:
            alert("Ingresó una opción no válida, vuelva a intentarlo");

        

    }
} while(opcion!="salir")

function input(valor){
    valor = parseInt(prompt("Ingrese el monto a imputar"));
    return valor;
}
function muestraSaldo(){
    console.log("Su saldo disponible es de $" + saldo);
}

function consultaSaldos(){
    console.log("Su saldo disponible es de $",saldo);
    console.log("Su saldo asignado a comida es de $",comida);
    console.log("Su saldo asignado a alquileres es de $",alquiler);
    console.log("Su saldo asignado a transporte es de $",transporte);
    console.log("Su saldo asignado a ahorro es de $",ahorro);
}

