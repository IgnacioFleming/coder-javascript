/* Easy Client Manager está pensado como un gestor de cuentas corrientes dadas a clientes,
 el cual permite ingresar los datos de los clientes, los retiros de mercaderia y los pagos de saldo.
 */

 /*
 Las funcionalidades del programa serán:
 1)Dar de alta clientes
 2)Consultar mi listado de clientes
 3)Modificar datos de clientes
 4)Registrar movimientos de Creditos o Debitos a los clientes.
 5)Dar de baja clientes.
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

//1)Dar de alta cliente.
//Al clickear el boton debería mostrarse un form con los datos a completar.
//El primer paso es crear el nodo del boton.
const alta = document.getElementById("alta");

//Ahora creamos la función que mostrará en la pantalla el form.
const abrirFormAlta = () =>{
    const form = document.createElement("form");
    form.classList.add("col-6", "col-md-6", "col-xl-6");
    form.innerHTML =    `<div class="mb-3">
                            <label for="nombre" class="form-label">Nombre:</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Escribe tu nombre..">
                        </div>
                        <div class="mb-3">
                        <label for="apellido" class="form-label">Apellido:</label>
                        <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                     `
}