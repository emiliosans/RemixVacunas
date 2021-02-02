///lo que hay que añadir a parseaGraficosCSVMadrid
muestraDatosVacunaMadridDosPuntoCero(array_datos_parseado);

muestraDatosVacunaEspañaDosPuntoCero(array_datos_parseado);

dibujarGraficoDosisEntregadasEspaña(array_datos_parseado);

dibujarGraficoDosisAdministradasEspaña(array_datos_parseado);

dibujarGraficoInmunesEspaña(array_datos_parseado);

///////////////////////////////////////////////////////////////////////////////////////////////////

function muestraDatosVacunaMadridDosPuntoCero(datos) {



    let poblacionMadrid = 6779888;

    let longitudDosisEntregadas = datos.length;
    //el primer dato de madrid aparece en la posicion 7 empezando desde el final
    longitudDosisEntregadas = longitudDosisEntregadas - 7;
    let dosis = datos[longitudDosisEntregadas];



    //dosis entregadas esta en la posicion 4 empezando desde el principio
    let numeroFormateado = dosis[4];

    let porcentajeEntregadas = trunc((dosis[4].replace('.', "") * 100) / poblacionMadrid, 3);

    //la cifra con las dosis administradas esta en la posicion 5 del array resultante
    let dosisAdministradas = dosis[5];

    let porcentPoblacionMadridAdministradas = trunc((dosis[5].replace('.', "") * 100) / poblacionMadrid, 3);

    let porcentajeAdministradasSobreTotal = (dosis[5].replace('.', "") * 100) / dosis[4].replace('.', "");
    porcentajeAdministradasSobreTotal = trunc(porcentajeAdministradasSobreTotal, 2);

    //el dato de personas con pauta completa aparece en la posicion 7 del array resultante
    let dosDosis = dosis[7];

    let porcentajeCompletTotal = trunc(((dosis[7].replace('.', "") * 100) / poblacionMadrid), 3);

    let dosisDistribuidas = document.getElementById("dosisDistribuidas");
    let porcentajeDosisEntregadas = document.getElementById("porcentajeDosisEntregadas");
    let dosisAdministradasTotal = document.getElementById("dosisAdministradas");
    let porcentajeMadridAdministradas = document.getElementById("porcentajePoblacionAdministradas");
    let porcentajeAdministradasTotal = document.getElementById("porcentajeAdministradasTotal");
    let pautaCompleta = document.getElementById("pautaCompleta");
    let porcenSobreTotalCompletas = document.getElementById("porcenSobreTotalCompletas");
    let fecha = document.getElementById("fechaAct");
    let fechaSlideTres = document.getElementById("fechaActua");
    
    porcentajeDosisEntregadas.innerHTML = porcentajeEntregadas
    dosisAdministradasTotal.innerHTML = dosisAdministradas;
    porcentajeMadridAdministradas.innerHTML = porcentPoblacionMadridAdministradas;
    dosisDistribuidas.innerHTML = numeroFormateado;
    porcentajeAdministradasTotal.innerHTML = porcentajeAdministradasSobreTotal;
    pautaCompleta.innerHTML = dosDosis;
    porcenSobreTotalCompletas.innerHTML = porcentajeCompletTotal;
    //alert("fecha " + dosis[0]);
    fecha.innerHTML = dosis[0];
    fechaSlideTres.innerHTML = dosis[0];


}



function muestraDatosVacunaEspañaDosPuntoCero(datos) {

    let longitudDosisEntregadas = datos.length - 1;
    //el primer dato de madrid aparece en la posicion 7 empezando desde el final

    let dosis = datos[longitudDosisEntregadas];

    let poblacionEs = 47329000
    let entregadas_total = dosis[4].replace('.', "");
    //indice 2 pfizer
    let total_Pfizer = dosis[2].replace('.', "");
    //indice 3 moderna
    let total_Moderna = dosis[3].replace('.', "");


    let num_entregadas = document.getElementById("dosis_totales");
    let chart1_texto = document.getElementById("chart1_text");

    num_entregadas.innerHTML = dosis[4];
    chart1_texto.innerHTML = "En España se han entregado un total de <b>" + dosis[4] +
        "</b> dosis de las cuales el <b>" + (total_Pfizer * 100 / entregadas_total).toFixed(2) + "%</b> son de Pfizer y el <b>" +
        trunc((((total_Moderna * 100) / entregadas_total) * 0.001), 2) + "% </b> son de Moderna.";


    let admin_total = dosis[5];
    let admin_por_total = trunc((dosis[5].replace('.', "") * 100) / poblacionEs, 3);
    let num_admin = document.getElementById("dosis_admin");
    let chart2_texto = document.getElementById("chart2_text");

    num_admin.innerHTML = admin_total;
    chart2_texto.innerHTML = "En España se han administrado <b>" + admin_total +
        "</b> dosis que son el <b>" + (admin_total.replace('.', "") * 100 / entregadas_total).toFixed(2) + "%</b> de las dosis entregadas y el <b>" +
        admin_por_total + "%</b> de la población."


    let adminx2_total = dosis[7];
    let adminx2_por_total = trunc((dosis[7].replace('.', "") * 100) / poblacionEs, 3);;
    let num_adminx2 = document.getElementById("pauta_comp");
    let chart3_texto = document.getElementById("chart3_text");

    num_adminx2.innerHTML = adminx2_total;
    chart3_texto.innerHTML = "En España ya hay <b>" + adminx2_total +
        "</b> personas con la pauta completa administrada. Esto es el <b>" + adminx2_por_total + "%</b> de la población."
    let fecha = document.getElementById("fechaActu");
    fecha.innerHTML = dosis[0];
}



//grafico de dosis administradas Madrid
function dibujarGraficoDosisEntregadasEspaña(datos) {

    let fechas = [];
    let indiceMadridDesdeElFinal = datos.length;
    //el primer dato de madrid empieza en el array de arrays en la posicion 7 empezando por el final
    indiceMadridDesdeElFinal = indiceMadridDesdeElFinal - 1;
    //console.log("longitud datos " + indiceMadridDesdeElFinal);
    let i = 0;

    while (i < 7) {
        //agregamos las fechas cada 20 posiciones
        let formatFecha = datos[indiceMadridDesdeElFinal];
        //en el array resultante la fecha esta en la posicion 0
        fechas.push(formatFecha[0]);
        //el dato de madrid esta cada 20 posiciones empezando por el final
        indiceMadridDesdeElFinal = indiceMadridDesdeElFinal - 20;
        i++;
    }
    //se le da la vuelta al array para que salga en orden cronologico
    fechas = fechas.reverse();

    i = 0;
    let longitudDosisEntregadas = datos.length;
    //el primer dato de madrid empieza en el array de arrays en la posicion 7 empezando por el final

    longitudDosisEntregadas = longitudDosisEntregadas - 1;
    //el array es de dosis administradas, aunque en el nombre figure 'entregadas'
    let dosisEntregadas = [];

    while (i < 7) {

        let dosis = datos[longitudDosisEntregadas];
        //la cifra con las dosis administradas esta en la posicion 5 del array resultante
        dosisEntregadas.push(dosis[4].replace(/[$.]/g,''));
        //el dato de madrid esta cada 20 posiciones empezando por el final
        longitudDosisEntregadas = longitudDosisEntregadas - 20;
        i++;
    }
    //se le da la vuelta al array para que salga en orden cronologico
    dosisEntregadas.reverse();

    var ctx = document.getElementById('myChart').getContext('2d');

    dibujarGraficaLinea(ctx, fechas, dosisEntregadas, 'rgb(16, 26, 214)', 'Vacunas administradas Madrid');

}

function dibujarGraficoDosisAdministradasEspaña(datos) {

    let fechas = [];
    let indiceMadridDesdeElFinal = datos.length;
    //el primer dato de madrid empieza en el array de arrays en la posicion 7 empezando por el final
    indiceMadridDesdeElFinal = indiceMadridDesdeElFinal - 1;
    //console.log("longitud datos " + indiceMadridDesdeElFinal);
    let i = 0;

    while (i < 7) {
        //agregamos las fechas cada 20 posiciones
        let formatFecha = datos[indiceMadridDesdeElFinal];
        //en el array resultante la fecha esta en la posicion 0
        fechas.push(formatFecha[0]);
        //el dato de madrid esta cada 20 posiciones empezando por el final
        indiceMadridDesdeElFinal = indiceMadridDesdeElFinal - 20;
        i++;
    }
    //se le da la vuelta al array para que salga en orden cronologico
    fechas = fechas.reverse();

    i = 0;
    let longitudDosisEntregadas = datos.length;
    //el primer dato de madrid empieza en el array de arrays en la posicion 7 empezando por el final

    longitudDosisEntregadas = longitudDosisEntregadas - 1;
    //el array es de dosis administradas, aunque en el nombre figure 'entregadas'
    let dosisEntregadas = [];

    while (i < 7) {

        let dosis = datos[longitudDosisEntregadas];
        //la cifra con las dosis administradas esta en la posicion 5 del array resultante
        dosisEntregadas.push(dosis[5].replace(/[$.]/g,''));
        //el dato de madrid esta cada 20 posiciones empezando por el final
        longitudDosisEntregadas = longitudDosisEntregadas - 20;
        i++;
    }
    //se le da la vuelta al array para que salga en orden cronologico
    dosisEntregadas.reverse();

    var ctx = document.getElementById('myChartAdministradas').getContext('2d');

    dibujarGraficaLinea(ctx, fechas, dosisEntregadas, 'rgb(226, 83, 3)', 'Vacunas administradas Madrid');

}

function dibujarGraficoInmunesEspaña(datos) {

    let fechas = [];
    let indiceMadridDesdeElFinal = datos.length;
    //el primer dato de madrid empieza en el array de arrays en la posicion 7 empezando por el final
    indiceMadridDesdeElFinal = indiceMadridDesdeElFinal - 1;
    //console.log("longitud datos " + indiceMadridDesdeElFinal);
    let i = 0;

    while (i < 7) {
        //agregamos las fechas cada 20 posiciones
        let formatFecha = datos[indiceMadridDesdeElFinal];
        //en el array resultante la fecha esta en la posicion 0
        fechas.push(formatFecha[0]);
        //el dato de madrid esta cada 20 posiciones empezando por el final
        indiceMadridDesdeElFinal = indiceMadridDesdeElFinal - 20;
        i++;
    }
    //se le da la vuelta al array para que salga en orden cronologico
    fechas = fechas.reverse();

    i = 0;
    let longitudDosisEntregadas = datos.length;
    //el primer dato de madrid empieza en el array de arrays en la posicion 7 empezando por el final

    longitudDosisEntregadas = longitudDosisEntregadas - 1;
    //el array es de dosis administradas, aunque en el nombre figure 'entregadas'
    let dosisEntregadas = [];

    while (i < 7) {

        let dosis = datos[longitudDosisEntregadas];
        //la cifra con las dosis administradas esta en la posicion 5 del array resultante
        dosisEntregadas.push(dosis[7].replace(/[$.]/g,''));
        //el dato de madrid esta cada 20 posiciones empezando por el final
        longitudDosisEntregadas = longitudDosisEntregadas - 20;
        i++;
    }
    //se le da la vuelta al array para que salga en orden cronologico
    dosisEntregadas.reverse();

    var ctx = document.getElementById('myChartCompletada').getContext('2d');

    dibujarGraficaLinea(ctx, fechas, dosisEntregadas, 'rgb(83, 225, 162)', 'Vacunas administradas Madrid');

}


