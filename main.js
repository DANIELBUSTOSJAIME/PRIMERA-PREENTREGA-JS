alert("Bienvenido a Force GYM")

//LOGIN DE USUARIO
let identificar = true
do{
    let dni = prompt("Ingrese su DNI")
    let contrasena =prompt("Ingrese su contraseña")
    if (dni === "" || contrasena === ""){
        break
    }
    else if (dni == "34783169" && contrasena == "1234"){
    alert ("El DNI y contraseña ingresada son correctas")
identificar=false    
}
    else {
    alert ("El DNI y/o contraseña ingresada son incorrectos, ingreselos nuevamente")
    }    
}
while(identificar)
//MENU CON CONDICIONAL Y CICLO
let lista = prompt ("Bienvenido atleta, que desea realizar? \n1- Reservar turnos; \n2- Ver creditos disponibles; \n3- Vencimiento de Abono; \n4- Cerrar sesión")
let vencimientocreditos = "2023/04/12"
let creditosdisponibles = 24

while (lista != "4"){
    {
if (lista =="1"){
    let diareserva = prompt ("Ingrese el dia y que quiere asistir (AAAA/MM/DD)");
    while(diareserva > vencimientocreditos || diareserva === null){
    diareserva = prompt("La fecha de reserva supera el vencimiento del abono, ingrese una fecha valida")
    }
    let horareserva = prompt ("Ingrese la hora que desea asistir (DE 8 A 20)")
    while (horareserva < 8 || horareserva > 20 || horareserva === null){
    horareserva = prompt("Ha ingresado un horario fuera del establecido, ingrese nuevamente")
    }
    alert ("Se ha confirmado su turno el " + diareserva + " a las " + horareserva + " hs")
    creditosdisponibles = (creditosdisponibles - 1)
}
else if (lista ==="2"){
    alert ("Usted cuenta con " + creditosdisponibles + " creditos")
}
else if (lista =="3"){
    alert ("Su abono vence el " + vencimientocreditos)
}
else if (lista =="4"){
    alert ("Ha cerrado su sesión con exito")
}
else{
    alert ("La opcion elegida es incorrecta, vuelva a intertarlo") 
}
}
lista = prompt ("Bienvenido atleta, que desea realizar? \n1- Reservar turnos; \n2- Ver creditos disponibles; \n3- Vencimiento de Abono; \n4- Cerrar sesión")
}
alert ("Ha cerrado su sesión con exito")