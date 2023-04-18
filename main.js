//               REGISTRO DE "ATLETAS" CONFECCIONADO CON FUNCION CONSTRUCTORA Y ARRAY
function Atletas(nombreAtleta, apellidoAtleta, edadAtleta, fechanacAtleta, dniAtleta, contrasenafinal){
    this.nombreAtleta= nombreAtleta;
    this.apellidoAtleta=apellidoAtleta;
    this.edadAtleta=edadAtleta;
    this.fechanacAtleta=fechanacAtleta;
    this.dniAtleta=dniAtleta;
    this.contrasenafinal=contrasenafinal;
}

//                BASE DE DATOS DE LOS ATLETAS
const atleta1 = new Atletas ("Pedro", "Perez", 23, "12/07/1996","35095329","12345")
const atleta2 = new Atletas ("Pablo", "Pedraza",20,"10/02/2003","45005333","123456")
const atleta3 = new Atletas ("Carolina", "Bulacios",25, "02/01/1999","40637322","1234567")
const atleta4 = new Atletas ("Paula", "Yance", 34, "30/01/1990", "34783169","1234")

let registroAtletas = [atleta1,atleta2,atleta3, atleta4]


//                FILTROS POR APELLIDO, DNI Y EDAD
const filtroapellido = registroAtletas.filter((busquedaapellido) => busquedaapellido.apellidoAtleta.includes("Perez"))
const filtrodni = registroAtletas.filter((busquedadni) => busquedadni.dniAtleta.includes("34783169"))
const filtroedad = registroAtletas.filter((busquedaedad) => busquedaedad.edadAtleta > 24)

console.log(filtroapellido)
console.log(filtrodni)
console.log(filtroedad)


//                 CANTIDAD DE ATLETAS REGISTRADOS
const totalAtletas = registroAtletas.length
console.log(totalAtletas)
console.table(registroAtletas)


//                 FUNCION PARA AGREGAR NUEVOS ATLETAS
function agregarAtletas (){
    let nombreAtleta = prompt("Ingrese su nombre")
    let apellidoAtleta = prompt("Ingrese su apellido")
    let edadAtleta = parseInt(prompt("Ingrese su edad"))
    let fechanacAtleta = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA)")
    let dniAtleta = prompt("Ingrese su DNI")
    if (nombreAtleta === " " || apellidoAtleta === " " || isNaN(edadAtleta) || fechanacAtleta === " " || isNaN(dniAtleta) ) { 
        alert("Por favor ingresa valores válidos.");
        nombreAtleta = prompt("Ingrese su nombre")
        apellidoAtleta = prompt("Ingrese su apellido")
        edadAtleta = parseInt(prompt("Ingrese su edad"))
        fechanacAtleta = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA)")
        dniAtleta = prompt("Ingrese su DNI"); 
    }
    let contrasenafinal = newcontrasena = prompt("Ingrese una contraseña")
    let recontrasena = prompt("Ingrese nuevamente su contraseña")
    if (newcontrasena === "" || recontrasena === ""){
        return
    }
    else if(newcontrasena === recontrasena){
    }
    else{
    alert("Las contraseñas ingresadas no son identicas, vuelva a ingresarlas")
        contrasenafinal = newcontrasena = prompt("Ingrese una contraseña")
        recontrasena = prompt("Ingrese nuevamente su contraseña")
    }
    let atleta = new Atletas (nombreAtleta, apellidoAtleta, edadAtleta, fechanacAtleta, dniAtleta, contrasenafinal)
    if (registroAtletas.some((dni) => dni.dniAtleta === atleta.dniAtleta)) {
        alert("El DNI ingresado ya existe en el registro, intente nuevamente.");
        return agregarAtletas ();
    }    
    registroAtletas.push(atleta);
}


//                         FUNCION DEL MENU DE ACCESO

function menugym(){
    
    let lista = prompt ("Bienvenido atleta, que desea realizar? \n1- Reservar turnos; \n2- Ver creditos disponibles; \n3- Vencimiento de Abono; \n4- Anular Reserva; \n5- Renovar abono; \n6- Cerrar sesión")
    let vencimientocreditos = "15/05/2023"
    let totalcreditos = 0
    let creditosdisponibles = 0
    let diareserva
    let cancelareserva 
    
    // Profe trate de incluir la función de que la reserva ingresada no sea inferior a la fecha actual con Date usando el codigo siguiente pero no tuve suerte, me arroja un error de que la fecha , no se si estoy haciendo algo mal o hay otra función especifica que no estoy viendo o si debo esperar a la clase de librerias para usar calculos con fechas ya que una funcionalidad que me gustaria agregar es que al comprar el abono automaticamente a la fecha de vencimiento abono se le incremente el tipo de abono comprado (mensual, trimestral, semestral o anual)
    /*
    let fechaactual = new Date()
    let vencimientocreditos = new Date ("May, 15, 2023")
    console.log(vencimientocreditos.toLocaleDateString)
    console.log(fechaactual.toLocaleDateString) 
    vencimientocreditos= vencimientocreditos.toLocaleDateString
    fechaactual= fechaactual.toLocaleDateString
    */
    
    while (lista != "6"){
        {
    
    //                   OPCION 1 - RESERVA DE TURNOS SOLO CON CREDITOS DISPONIBLES
        if (lista =="1"){
        if(totalcreditos == 0){
            alert("Usted no cuenta con creditos disponibles, ingrese en la opción 5- Renovar abono.")   
        }
        else{
        diareserva = prompt ("Ingrese el dia que quiere asistir (DD/MM/AAAA)");
        while(diareserva > vencimientocreditos || diareserva === "" || diareserva === null){
        diareserva = prompt("La fecha de reserva es incorrecta, ingrese una fecha valida")
        }
        /*diareserva = prompt ("Ingrese el dia que quiere asistir (DD/MM/AAAA)");
        while(diareserva.toLocaleDateString > vencimientocreditos || diareserva === "" || diareserva === null || diareserva.toLocaleDateString < fechaactual){
        diareserva = prompt("La fecha de reserva es incorrecta, ingrese una fecha valida")
        diareserva= diareserva.toLocaleDateString
    }   */
        let horareserva = prompt ("Ingrese la hora que desea asistir (DE 8 A 20)")
        while (horareserva < 8 || horareserva > 20 || horareserva === null){
        horareserva = prompt("Ha ingresado un horario fuera del establecido, ingrese nuevamente")
        }
        alert ("Se ha confirmado su turno el " + diareserva + " a las " + horareserva + " hs.")
        creditosdisponibles = (creditosdisponibles - 1)
        }  
    }

    //                     OPCION 2 - CREDITOS DISPONIBLES Y UTILIZADOS
    else if (lista =="2"){
        alert ("Usted cuenta con " + creditosdisponibles + " creditos")
        alert ("Usted va utilizando " + (0 + totalcreditos- creditosdisponibles + " creditos"))
    }

    //                      OPCION 3 - VENCIMIENTO DE ABONO CON INGRESO MANUAL
    else if (lista =="3"){
        alert ("Su abono vence el " + vencimientocreditos)
    }

    //                      OPCION 4 - CANCELACION DE RESERVA EFECTUADA
    else if (lista =="4"){
        cancelareserva = prompt ("Ingrese el dia de la reserva que quiere cancelar (DD/MM/AAAA)")
        while(cancelareserva > vencimientocreditos || cancelareserva === null){
        cancelareserva = prompt("La fecha de la reserva que quiere cancelar es incorrecta, ingrese una fecha valida")
        }
        horareserva = prompt ("Ingrese el horario de la clase que desea cancelar")
        while (horareserva < 8 || horareserva > 20 || horareserva === null){
        horareserva = prompt("Ha ingresado un horario incorrecto, ingrese nuevamente")
        }
        alert ("Se ha confirmado la cancelación de su turno del " + cancelareserva + " a las " + horareserva + " hs")
        creditosdisponibles = (creditosdisponibles + 1)
    }

    //                        OPCION 5 - RENOVACION DE ABONO CON ACREDITACION AUTOMATICA
    else if (lista =="5"){
        let planes = prompt ("Elija un plan de abono? \n1- Plan mensual ($5.000); \n2- Plan trimestral ($13.000); \n3- Plan semestral ($22.000); \n4- Plan anual ($38.000); \n5- Volver al menu anterior.")
        while(planes != "5"){
            if (planes =="1"){
                alert ("Esta siendo dirigido a la plataforma de pago, una vez abonado volvera a este menu.")
                alert ("Su pago ha sido completado, ha adquirido 24 creditos.")
                creditosdisponibles = creditosdisponibles + 24
                totalcreditos = creditosdisponibles
            }
            else if (planes =="2"){
                alert ("Esta siendo dirigido a la plataforma de pago, una vez abonado volvera a este menu.")
                alert ("Su pago ha sido completado, ha adquirido 72 creditos.")
                creditosdisponibles = creditosdisponibles + 72
                totalcreditos = creditosdisponibles
            }
            else if (planes =="3" || planes =="4"){
                alert ("Esta siendo dirigido a la plataforma de pago, una vez abonado volvera a este menu.")
                alert ("Su pago ha sido completado, ha adquirido 144 creditos.")
                creditosdisponibles = creditosdisponibles + 144
                totalcreditos = creditosdisponibles
            }
            else if (planes =="4"){
                alert ("Esta siendo dirigido a la plataforma de pago, una vez abonado volvera a este menu.")
                alert ("Su pago ha sido completado, ha adquirido 288 creditos.")
                creditosdisponibles = creditosdisponibles + 288
                totalcreditos = creditosdisponibles
            }
            else{
                alert ("La opcion elegida es incorrecta, vuelva a intertarlo")
            }
            planes = prompt ("Elija un plan de abono? \n1- Plan mensual ($5.000); \n2- Plan trimestral ($13.000); \n3- Plan semestral ($22.000); \n4- Plan anual ($38.000); \n5- Volver al menu anterior.")
        }
    }

    //                           OPCION 6 - CERRAR SESION
    else if (lista =="6"){
        alert ("Ha cerrado su sesión con exito")
    }
    else{
        alert ("La opcion elegida es incorrecta, vuelva a intertarlo") 
    }
    }
    lista = prompt ("Bienvenido atleta, que desea realizar? \n1- Reservar turnos; \n2- Ver creditos disponibles; \n3- Vencimiento de Abono; \n4- Anular Reserva; \n5- Renovar abono; \n6- Cerrar sesión")
    }
    alert ("Ha cerrado su sesión con exito")
}

//               FUNCION DE LOGIN CON INGRESO DE USUARIOS MANUALES HASTA 3 INTENTOS
function signup(){{
    let identificar = true
    let intentos = 2
    do{
        let dni = prompt("Ingrese su DNI")
        let contrasena =prompt("Ingrese su contraseña")
        identificar=false
        if (dni === " " || contrasena === " " || isNaN(dni)){
        }
        else if (dni === "35095329" && contrasena === "12345"){
        alert ("El DNI y contraseña ingresada son correctas")
        identificar=false    
        menugym()    
        }
        else if (dni === "45005333" && contrasena === "123456"){
        alert ("El DNI y contraseña ingresada son correctas")
        identificar=false    
        menugym()    
        }
        else if (dni === "40637322" && contrasena === "1234567"){
        alert ("El DNI y contraseña ingresada son correctas")
        identificar=false    
        menugym()    
        }
        else if (dni === "34783169" && contrasena === "1234"){
        alert ("El DNI y contraseña ingresada son correctas")
        identificar=false
        menugym()    
        }
        else {
        alert ("El DNI y/o contraseña ingresada son incorrectos, le quedan "+ intentos +" intentos.")
        intentos--
        if(intentos<0)
        break     
        }       
    }
    while(identificar)
    if(intentos<0)
    alert("Ha superado los intentos permitidos, comuniquese con el administrador")
    }
return  
}

//               MENSAJE DE BIENVENIDA A LA PAGINA
alert("Bienvenido a Force GYM")

//               CONFIRMACION DE ATLETA REGISTRADO
let registro = confirm("Atleta si se encuentra registrado aprete Aceptar, de lo contrario ingrese Cancelar")
debugger
//                PROCESO DE APLICACION WEB   
if (registro){
    let identificar = true
    let intentos = 2
    do{
        let dni = prompt("Ingrese su DNI")
        let contrasena =prompt("Ingrese su contraseña")
        identificar=false
        if (dni === " " || contrasena === " " || isNaN(dni)){
        }
        else if (dni === "35095329" && contrasena === "12345"){
        alert ("El DNI y contraseña ingresada son correctas")
        identificar=false    
        menugym()    
        }
        else if (dni === "45005333" && contrasena === "123456"){
        alert ("El DNI y contraseña ingresada son correctas")
        identificar=false    
        menugym()    
        }
        else if (dni === "40637322" && contrasena === "1234567"){
        alert ("El DNI y contraseña ingresada son correctas")
        identificar=false    
        menugym()    
        }
        else if (dni === "34783169" && contrasena === "1234"){
        alert ("El DNI y contraseña ingresada son correctas")
        identificar=false
        menugym()    
        }
        else {
        alert ("El DNI y/o contraseña ingresada son incorrectos, le quedan "+ intentos +" intentos.")
        intentos--
        /*if(intentos<0)
        break */    
        }       
    }
    while(identificar)
    if(intentos<0)
    alert("Ha superado los intentos permitidos, comuniquese con el administrador")
    }

else{
    alert("Atleta primero debe registrarse para continuar")
    agregarAtletas()
    alert("Felicitaciones su cuenta a sido creada exitosamente")    
    console.table(registroAtletas)
    signup() 
}