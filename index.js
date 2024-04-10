var rut = document.getElementById("rut").value;
var nombres = document.getElementById("nombres").value;
var apellidos = document.getElementById("apellidos").value;
var direccion = document.getElementById("direccion").value;
var ciudad = document.getElementById("ciudad").value;
var telefono = document.getElementById("telefono").value;
var email = document.getElementById("email").value;
var fechaNacimiento = document.getElementById("fecha_n").value;
var estadoCivil = document.getElementById("estado_c").value;
var comentarios = document.getElementById("comentarios").value;
var nuevoBoton = document.getElementById("nuevo");
var buscarBoton = document.getElementById("buscar");
var formularioBusqueda =  document.getElementById("busqueda22");
var searchB = document.getElementById("searchB");
var SeccionFormularios = document.getElementById("Formulario_Imgreso");
var fichasMedicas = JSON.parse(localStorage.getItem('fichasMedicas')) || [];
var form1 = document.getElementById("form1");

nuevoBoton.addEventListener("click", ()=>{
  SeccionFormularios.classList.remove("hide")
})

buscarBoton.addEventListener("click", ()=>{
  if(!SeccionFormularios.classList.contains("hide")){
    SeccionFormularios.classList.add("hide")
  }

  formularioBusqueda.classList.remove("hide")

})

function cerrarFormulario(){
  if(!SeccionFormularios.classList.contains("hide")){
    SeccionFormularios.classList.add("hide")
  }
}
function limpiarCampos(){
  form1.reset();
}




        function guardarFicha() {

            var ficha = {
                rut: rut,
                nombres: nombres,
                apellidos: apellidos,
                direccion: direccion,
                ciudad: ciudad,
                telefono: telefono,
                email: email,
                fechaNacimiento: fechaNacimiento,
                estadoCivil: estadoCivil,
                comentarios: comentarios
            };
            var fichaExistente = fichasMedicas.find(function(elemento) {
              return elemento.apellidos === apellidos; });

            if (fichaExistente) {
              var confirmacion = confirm("Ya existe una ficha médica con ese apellido. ¿Desea sobrescribir la información?");
              if (confirmacion) {
                  fichasMedicas = fichasMedicas.map(function(elemento) {
                      return elemento.apellidos === apellidos ? ficha : elemento;
                  });
                  alert("Ficha médica sobrescrita correctamente.");
              }
          } else {
              fichasMedicas.push(ficha);
              alert("Ficha médica guardada correctamente.");
             
          }
          localStorage.setItem('fichasMedicas', JSON.stringify(fichasMedicas));
          limpiarCampos();


            
           
        }
        function buscarPorApellido() {
          var apellidoABuscar = document.getElementById("buscarApellido").value;
          for (var i = 0; i < fichasMedicas.length; i++) {
              if (fichasMedicas[i].apellidos === apellidoABuscar) {
                  rut = fichasMedicas[i].rut;
                  nombres= fichasMedicas[i].nombres;
                  apellidos = fichasMedicas[i].apellidos;
                  direccion = fichasMedicas[i].direccion;
                  ciudad = fichasMedicas[i].ciudad;
                  telefono = fichasMedicas[i].telefono;
                  email = fichasMedicas[i].email;
                  fechaNacimiento = fichasMedicas[i].fechaNacimiento;
                  estadoCivil= fichasMedicas[i].estadoCivil;
                  comentarios = fichasMedicas[i].comentarios;
                  alert("Ficha médica encontrada.");
                  return;
              }
          }
          alert("No se encontró ninguna ficha médica con ese apellido.");
      }

searchB.addEventListener("click", ()=> {
  SeccionFormularios.classList.remove("hide");
  buscarPorApellido();
})

        