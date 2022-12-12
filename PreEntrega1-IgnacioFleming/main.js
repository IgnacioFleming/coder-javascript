/* Easy Client Manager está pensado como un gestor de cuentas corrientes dadas a clientes,
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

    //Procedemos a crear los metodos necesarios para ajustar los saldos de las cuentas y consultar los mismos.
    mostrarSaldo = function(){
        console.log(`El saldo disponible del cliente ${this.nombre} ${this.apellido} es de $${this.saldo}`);
    }
    acreditar = valor => this.saldo += valor;
    debitar = valor => this.saldo -= valor;
}

//Funcion auxiliar para ingresar un valor.
function input(){
    valor = parseInt(prompt("Ingrese el monto a imputar"));
    return valor;
}

//Luego se crea el array vacío que tendrá los clientes.
const clientes = [];

//A partir de aquí comienza la ejecución del programa.
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
        alert("Bienvenido! Comience a usar Easy Client Manager");
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

do{
    /*Se genera un menu principal donde el usuario puede elegir la acción que desea realizar
    El mismo se va a ejecutar indefinidamente hasta que el usuario decida salir.
    */
    opcion = prompt("Ingrese: \n 'alta' para dar de alta un nuevo cliente ,\n 'consulta' para consultar la base de clientes actuales,\n 'baja' para dar de baja un cliente,\n 'modificar' para registrar ingreso o egreso del cliente, \n 'movimiento' para registrar un crédito o débito en la cuenta y \n 'salir' para salir");
    //Segun la opcion elegida se ejecutará la accion correspondiente.
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
                cliente.mostrarSaldo(cliente);
            }
            )
            break;
        case "modificar":
            //en este caso solicito en primer lugar el dni del cliente a modificar.
            let dniModificacion = parseInt(prompt("Ingrese el dni del cliente que quiere modificar"));
            let clienteModificacion = clientes.find(clienteModificacion => clienteModificacion.dni == dniModificacion);
            let indiceClienteModificacion = clientes.indexOf(clienteModificacion);
            //si no existe el dni ingresado vamos a pedirle al usuario que reintente.
            if (indiceClienteModificacion == -1){
                console.log(`El dni ingresado no corresponde a un cliente registrado, reintente.`);
            //si existe el dni ingresado solicitamos al cliente nuevamente los datos para reemplazarlos, acá no modificamos el saldo.
            }else{
                
                let nombreModificado = prompt("Ingrese el nuevo nombre");
                let apellidoModificado = prompt("Ingrese el nuevo apellido");
                let dniModificado = prompt("Ingrese el nuevo dni");
                let domicilioModificado = prompt("Ingrese el nuevo domicilio");
                const clienteModificado = new Cliente(nombreModificado, apellidoModificado, dniModificado, domicilioModificado)
                clientes.splice(indiceClienteModificacion, 1, clienteModificado);
                console.log(`Se modificó el cliente ${clienteModificacion.nombre} ${clienteModificacion.apellido} por ${clienteModificado.nombre} ${clienteModificado.apellido}`);
            }
            break;

        case "movimiento":
            //en este menú se solicita al usuario que ingrese el dni para registrar los movimientos correspondientes en su cuenta.
            let dniMovimiento = prompt("Ingrese el dni del cliente a quien se va a registrar el movimiento");
            let clienteMovimiento = clientes.find(clienteMovimiento => clienteMovimiento.dni == dniMovimiento);

            //se abre un nuevo menú donde el usuario va a elegir entre sumar o restar saldo de la cuenta seleccionada tantas veces como quiera hasta salir.
            do{
                clienteMovimiento.mostrarSaldo();
                opcionSaldo = prompt("Para registrar un crédito en la cuenta ingrese 'acreditar', para registrar un debito 'debitar' y para salir del menú 'salir'");
                switch (opcionSaldo){
                    case "acreditar":
                        clienteMovimiento.saldo = clienteMovimiento.acreditar(input());
                        clienteMovimiento.mostrarSaldo();
                        break;
                    
                    case "debitar":
                        clienteMovimiento.debitar(input());
                        clienteMovimiento.mostrarSaldo();

                    case "salir":

                        //esta opcion nos lleva al menú principal.
                        break;
                    
                    default:
                        alert("La opción ingresada no es válida, vuelva a intentarlo")
                }
            }while(opcionSaldo != "salir")

            break;
        case "baja":
            //solicito al usuario el dni del cliente a bajar, luego lo busco en el array y lo elimino del mismo.

            let dniBaja = parseInt(prompt("Ingrese el dni del cliente que quiere dar de baja"));
            let clienteBaja = clientes.find(clienteBaja => clienteBaja.dni == dniBaja);
            let indiceClienteBaja = clientes.indexOf(clienteBaja);
            //si el dni no existe pediremos al cliente que reintente si lo desea.
            if (indiceClienteBaja == -1){
                console.log(`El dni ingresado no corresponde a un cliente registrado, reintente.`);
            //si el dni existe se eliminará el cliente seleccionado.
            }else{
                clientes.splice(indiceClienteBaja,1);
                console.log(`Se dió de baja al cliente ${clienteBaja.nombre} ${clienteBaja.apellido}`);
            }

            break;

        case "salir":
            //esta opción termina la ejecución del programa.
            alert("Su sesión ha sido finalizada");
            break;
        default:
            alert("Ingresó una opción no válida, vuelva a intentarlo");

        

    }
} while(opcion!="salir")



