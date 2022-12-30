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
    constructor(nombre,apellido,dni,mail){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.mail = mail;
        this.saldo = 0;
    }

    //Procedemos a crear los metodos necesarios para ajustar los saldos de las cuentas y consultar los mismos.
    mostrarSaldo = function(){
        console.log(`El saldo disponible del cliente ${this.nombre} ${this.apellido} es de $${this.saldo}`);
    }
    acreditar = valor => this.saldo += valor;
    debitar = valor => this.saldo -= valor;
}

//Creamos el array que va a contener a nuestros clientes

const clientes = []

//Creamos un div en el body donde se mostrará la información.
const display = document.getElementById("display");

//1)Dar de alta cliente.
//Al clickear el boton debería mostrarse un form con los datos a completar.
//El primer paso es crear el nodo del boton.
const alta = document.getElementById("alta");

//Ahora creamos la función que mostrará en la pantalla el form.
const abrirFormAlta = () =>{
    display.innerHTML= "";
    const form = document.createElement("div");
    form.classList.add("col-6", "col-md-6", "col-xl-6");
    form.innerHTML =    `<form id="formulario">
                            <div class="mb-3 mt-5">
                                <label for="nombre" class="form-label">Nombre:</label>
                                <input type="text" class="form-control" id="nombre">
                            </div>
                            <div class="mb-3">
                                <label for="apellido" class="form-label">Apellido:</label>
                                <input type="text" id="apellido" class="form-control" id="apellido" rows="3"></input>
                            </div>
                            <div class="mb-3">
                                <label for="dni" class="form-label">DNI:</label>
                                <input type="text" id="dni" class="form-control" id="dni" rows="3"></input>
                            </div>
                            <div class="mb-3">
                                <label for="mail"  class="form-label">Email:</label>
                                <input type="email" class="form-control" id="mail" rows="3" placeholder="nombre@ejemplo.com"></input>
                            </div>
                            <div class="mb-5">
                                <button id="darDeAlta" class="btn btn-primary">Dar de Alta</button>
                            </div>
                        </form>
                     `
    display.appendChild(form);
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const dni = document.getElementById("dni");
    const mail = document.getElementById("mail");

    //creamos el objeto nuevo cliente
    const nuevoCliente = new Cliente(nombre.value, apellido.value, dni.value, mail.value);
    clientes.push(nuevoCliente);
    console.log(clientes);
    nombre.value = "";
    apellido.value = "";
    dni.value = "";
    mail.value = "";
})
}

//Creamos evento al hacer click en boton Nuevo Cliente para cargar el formulario.
alta.addEventListener("click", () => {abrirFormAlta()});

//Vinculamos el formulario creado en html


