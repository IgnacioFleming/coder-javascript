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
let i = 1;
class Cliente{
    constructor(nombre,apellido,dni,mail){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.mail = mail;
        this.saldo = 0;
        
        this.id = i;
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
    form.classList.add("col-12", "col-md-6", "col-xl-6");
    form.innerHTML =    `<h2 class="mt-5">Ingrese los datos del nuevo cliente:</h2>
                            <form id="formulario">
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
    //Vinculamos el formulario creado en JS.
    const formulario = document.getElementById("formulario");
    //Le damos vida al boton de Dar de Alta para que cree el objeto Nuevo Cliente y lo pushee al array.
    formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const dni = document.getElementById("dni");
    const mail = document.getElementById("mail");

    //creamos el objeto nuevo cliente
    const nuevoCliente = new Cliente(nombre.value, apellido.value, dni.value, mail.value);
    nuevoCliente.id = i;
    i = i + 1;
    clientes.push(nuevoCliente);
    nombre.value = "";
    apellido.value = "";
    dni.value = "";
    mail.value = "";
})
}

//Creamos evento al hacer click en boton Nuevo Cliente para cargar el formulario.
alta.addEventListener("click", () => {abrirFormAlta()});

//2)Modificar Datos del cliente.
//Primero vinculamos el nodo.
const btnModificar = document.getElementById("btnModificar");
btnModificar.addEventListener("click", () => {
    display.innerHTML= "";
    const buscaCliente = document.createElement("div");
    buscaCliente.classList.add("col-12", "col-md-6", "col-xl-6")
    buscaCliente.innerHTML=`<h2 class="mt-5 mb-3">Ingrese el DNI del cliente a Modificar</h2>
                            <form id="buscar">
                                <input id="dniModificar" class="form-control mb-3 col-3 col-md-3 col-xl-3" type="text"></input>
                                <button class="btn btn-primary mb-3">Buscar</button>
                            </form>
    `
    display.appendChild(buscaCliente);
    const buscar = document.getElementById("buscar");
    buscar.addEventListener("submit", (e) => {
        e.preventDefault();
        const dniModificar = document.getElementById("dniModificar");
        const clienteModificacion = clientes.find(cliente => cliente.dni === dniModificar.value);
        console.log(clienteModificacion);
        const indiceCliente = clientes.indexOf(clienteModificacion);
        const modificarCliente = () => {
            display.innerHTML= "";
            const formModificacion = document.createElement("div");
            formModificacion.classList.add("col-12", "col-md-6", "col-xl-6");
            formModificacion.innerHTML =    `<h2 class="mt-5">Ingrese los nuevos datos del cliente a modificar:</h2>
                                            <form id="formularioModificacion">
                                                <div class="mb-3 mt-5">
                                                    <label for="nombreModificacion" class="form-label">Nombre:</label>
                                                    <input type="text" class="form-control" id="nombreModificacion">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="apellidoModificacion" class="form-label">Apellido:</label>
                                                    <input type="text" id="apellidoModificacion" class="form-control" rows="3"></input>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="dniModificacion" class="form-label">DNI:</label>
                                                    <input type="text" class="form-control" id="dniModificacion" rows="3"></input>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="mailModificacion"  class="form-label">Email:</label>
                                                    <input type="email" class="form-control" id="mailModificacion" rows="3" placeholder="nombre@ejemplo.com"></input>
                                                </div>
                                                <div class="mb-5">
                                                    <button id="modificarCliente" class="btn btn-primary">Modificar</button>
                                                </div>
                                            </form>
                                             `
            display.appendChild(formModificacion);
            //Vinculamos el formulario creado en JS.
            const formularioModificacion = document.getElementById("formularioModificacion");
            //Le damos vida al boton de Dar de Alta para que cree el objeto Nuevo Cliente y lo pushee al array.
            formularioModificacion.addEventListener("submit", (e) =>{
            e.preventDefault();
            const nombreModificacion = document.getElementById("nombreModificacion");
            const apellidoModificacion = document.getElementById("apellidoModificacion");
            const dniModificacion = document.getElementById("dniModificacion");
            const mailModificacion = document.getElementById("mailModificacion");
            //creamos el objeto nuevo cliente
            const clienteModificado = new Cliente(nombreModificacion.value, apellidoModificacion.value, dniModificacion.value, mailModificacion.value);
            clientes.splice(clienteModificacion, 1, clienteModificado);
            nombreModificacion.value = "";
            apellidoModificacion.value = "";
            dniModificacion.value = "";
            mailModificacion.value = "";
            })
        
        }
        if (indiceCliente == -1){
            display.innerHTML = `<h2>El DNI ingresado no corresponde a un cliente de la base</h2>`
        }else{
            modificarCliente();
            
        }
        
        
    })
    
})

//3)Consulta de clientes.
//Utilizaremos la funcion foreach para mostrar los clientes en una tabla.

//Vinculamos primero el boton.
const btnConsulta = document.getElementById("btnConsulta");
btnConsulta.onclick = () => {
    mostrarClientes();
}

//Funcion para mostrar los clientes.

const mostrarClientes = () =>{
    display.innerHTML = "";
    const tabla = document.createElement("div");
    tabla.classList.add("col-12", "col-md-12", "col-xl-12");
    tabla.innerHTML = `
                        <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">DNI</th>
                                <th scope="col">Mail</th>
                                <th scope="col">Saldo</th>
                                <th scope="col">Accionable</th>
                              </tr>
                            </thead>
                            <tbody id="tablaBody"></tbody>
                        </table>
                      `
    display.appendChild(tabla);
    const tablaBody = document.getElementById("tablaBody");
    tablaBody.classList.add("col-12", "col-md-12", "col-xl-12");
    clientes.forEach((cliente) => {
        const tablaRow = document.createElement("tr");
        tablaRow.innerHTML= `
                                <th scope="row">${cliente.nombre}</th>
                                <td>${cliente.apellido}</td>
                                <td>${cliente.dni}</td>
                                <td>${cliente.mail}</td>
                                <td>${cliente.saldo}</td>
                                <td><button class="btn btn-success" id="eliminar${cliente.id}">Eliminar</button></td>

      `
      tablaBody.appendChild(tablaRow);
    
    //Eliminar clientes
    const eliminarCliente = document.getElementById(`eliminar${cliente.id}`);
    eliminarCliente.onclick = () => {
        borrarCliente(cliente.id);
    }
    console.log(clientes);
})
}


//4)Dar de baja a los clientes.

const borrarCliente = (id) => {
    const clienteEliminado = clientes.find(cliente => cliente.id == id);
    const indiceEliminado = clientes.indexOf(clienteEliminado);
    clientes.splice(indiceEliminado, 1);
    mostrarClientes();
}

