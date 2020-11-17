var jsonSenadores = [
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2169.jpg','Senador':'Ahumada, Aldana Julieta','Bloque':'JUNTOS POR EL CAMBIO','Correo':'aldana.ahumada@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2092.jpg','Senador':'Allan, Juan Pablo','Bloque':'JUNTOS POR EL CAMBIO','Correo':'juanpabloallan@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2180.jpg','Senador':'Bagnato, Francisco Jorge','Bloque':'JUNTOS POR EL CAMBIO','Correo':'francisco.bagnato@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2024.jpg','Senador':'Bozzano, Gervasio','Bloque':'FRENTE DE TODOS ','Correo':'gbozzano@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2289.jpg','Senador':'Barcia , María Florencia','Bloque':'JUNTOS POR EL CAMBIO','Correo':'florencia.barcia@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2176.jpg','Senador':'Beccar Varela, Felicitas','Bloque':'JUNTOS POR EL CAMBIO','Correo':'felicitas.beccar.varela@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2175.jpg','Senador':'Blanco, Leandro Eduardo','Bloque':'JUNTOS POR EL CAMBIO','Correo':'leandro.blanco@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2272.jpg','Senador':'Devalle, Ana Gladis','Bloque':'FRENTE DE TODOS ','Correo':'ana.devalle@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2293.jpg','Senador':'Durán, Ayelén','Bloque':'FRENTE DE TODOS ','Correo':'ayelen.duran@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/nofoto.png','Senador':'Feliú, Marcelo Enrique','Bloque':'FRENTE DE TODOS ','Correo':'marcelo.feliu@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/1707.jpg','Senador':'Carca, Elisa Beatriz','Bloque':'JUNTOS POR EL CAMBIO','Correo':'ecarca@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2185.jpg','Senador':'Cellillo, Luis Alejandro','Bloque':'JUNTOS POR EL CAMBIO','Correo':'luis.cellillo@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/156.jpg','Senador':'Costa, Roberto Raúl','Bloque':'JUNTOS POR EL CAMBIO','Correo':'rcosta@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2268.jpg','Senador':'González Santalla, Emmanuel Severo','Bloque':'FRENTE DE TODOS ','Correo':'emmanuel.g.santalla@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2101.jpg','Senador':'De Leo, José Andrés','Bloque':'JUNTOS POR EL CAMBIO','Correo':'andresdeleo@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/472.jpg','Senador':'Pallares, José Luis','Bloque':'FRENTE DE TODOS ','Correo':'jpallares@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2181.jpg','Senador':'Delmonte, Flavia','Bloque':'JUNTOS POR EL CAMBIO','Correo':'flavia.delmonte@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2306.jpg','Senador':'Egger, Lucrecia Elisa','Bloque':'JUNTOS POR EL CAMBIO','Correo':'lucrecia.egger@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2171.jpg','Senador':'Soos, Gustavo','Bloque':'FRENTE DE TODOS ','Correo':'gustavo.soos@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2302.jpg','Senador':'Fernández, Owen','Bloque':'JUNTOS POR EL CAMBIO','Correo':'owen.fernandez@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2182.jpg','Senador':'Fiorini, Juan Carlos','Bloque':'JUNTOS POR EL CAMBIO','Correo':'juan.fiorini@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2236.jpg','Senador':'Traverso, Gustavo Tomás','Bloque':'FRENTE DE TODOS ','Correo':'gustavo.traverso@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2183.jpg','Senador':'Fiorini, Lucas','Bloque':'JUNTOS POR EL CAMBIO','Correo':'lucas.fiorini@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2174.jpg','Senador':'Geloso, Ana Laura','Bloque':'JUNTOS POR EL CAMBIO','Correo':'ana.geloso@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2105.jpg','Senador':'Lanaro, Walter Daniel','Bloque':'JUNTOS POR EL CAMBIO','Correo':'walterlanaro@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2170.jpg','Senador':'Lasala Reparaz, Emiliano','Bloque':'JUNTOS POR EL CAMBIO','Correo':'emiliano.reparaz@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2177.jpg','Senador':'Maspoli, Agustín','Bloque':'JUNTOS POR EL CAMBIO','Correo':'agustin.maspoli@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/1530.jpg','Senador':'Moirano, Nidia Alicia','Bloque':'JUNTOS POR EL CAMBIO','Correo':'nmoirano@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2095.jpg','Senador':'Petrovich, Maria Lorena','Bloque':'JUNTOS POR EL CAMBIO','Correo':'lorenapetrovich@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2168.jpg','Senador':'Reich, Daniela Elizabeth','Bloque':'JUNTOS POR EL CAMBIO','Correo':'daniela.reich@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/nofoto.png','Senador':'Rucci, Claudia Mónica','Bloque':'JUNTOS POR EL CAMBIO','Correo':'claudia.rucci@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2167.jpg','Senador':'Tapia, Gabino Mario','Bloque':'JUNTOS POR EL CAMBIO','Correo':'gabino.tapia@senado-ba.gov.ar '},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2186.jpg','Senador':'Tironi, Carolina Isabel','Bloque':'JUNTOS POR EL CAMBIO','Correo':'carolina.tironi@senado-ba.gov.ar'},
    {'Foto':'https://www.senado-ba.gov.ar/imagenes/Senadores/2269.jpg','Senador':'Hirtz, David Abel','Bloque':'JUNTOS POR EL CAMBIO','Correo':'david.hirtz@senado-ba.gov.ar'}
];

var htmlTemplate = "<div class='col-md-4 col-12'>" +
                        "<div class='box-part shadow-sm text-center'>" +
                            "<img src='#FOTO#' style='width: 100px; height: 100px'/>" +
                            "<h4 style='font-size: 1rem;'>#NOMBRE#</h4>" +
                            "<h4 style='color: lightslategray; font-size: 1rem;'>#BLOQUE#</h4>" +
                            "<a target='_blank' href='#LINK#' alt='Enviar mail'>" +
                                "<i class='fa fa-envelope' aria-hidden='true' style='font-size: 2rem;color: var(--primary-color);'></i>" +
                            "</a>" +
                        "</div>" +
                    "</div>";
var mailSubject = "NO A LA CARCEL EN LA RIBERA DE QUILMES";

var mailBody= "Estimado(a) Senador(a): "+
"Me dirijo a Ud. para manifestarle mi preocupación y mi opinión negativa para la construcción de una alcaidia (cárcel) en la ribera Quilmes. "+
"Particularmente, la zona elegida es el único espacio verde que le queda al municipio, además de que se trata de una zona inundable. "+
"El partido de Quilmes en su totalidad es una zona urbanizada, no contamos con terrenos libres ya que estamos rodeados de otros municipios igual de poblados como el nuestro y solo nos limita avenidas o vías del tren. "+
"Por esta razón es la que le solicito  a Ud, como representante de los intereses de los quilmeños, que revean el proyecto y que NO se vote a las apuradas sin analizar un informe detallado sobre aspectos técnicos y ambientales. "+
"Desde ya, muchas gracias por su tiempo.";


function getLinkMailtoAll(){
	var mailto = 'mailto:contacto@senado-ba.gov.ar?bcc=aldana.ahumada@senado-ba.gov.ar,juanpabloallan@senado-ba.gov.ar,francisco.bagnato@senado-ba.gov.ar,gbozzano@senado-ba.gov.ar,florencia.barcia@senado-ba.gov.ar,felicitas.beccar.varela@senado-ba.gov.ar,leandro.blanco@senado-ba.gov.ar,ana.devalle@senado-ba.gov.ar,ayelen.duran@senado-ba.gov.ar,marcelo.feliu@senado-ba.gov.ar,ecarca@senado-ba.gov.ar,luis.cellillo@senado-ba.gov.ar,rcosta@senado-ba.gov.ar,emmanuel.g.santalla@senado-ba.gov.ar,andresdeleo@senado-ba.gov.ar,jpallares@senado-ba.gov.ar,flavia.delmonte@senado-ba.gov.ar,lucrecia.egger@senado-ba.gov.ar,gustavo.soos@senado-ba.gov.ar,owen.fernandez@senado-ba.gov.ar,juan.fiorini@senado-ba.gov.ar,gustavo.traverso@senado-ba.gov.ar,lucas.fiorini@senado-ba.gov.ar,ana.geloso@senado-ba.gov.ar,walterlanaro@senado-ba.gov.ar,emiliano.reparaz@senado-ba.gov.ar,agustin.maspoli@senado-ba.gov.ar,nmoirano@senado-ba.gov.ar,lorenapetrovich@senado-ba.gov.ar,daniela.reich@senado-ba.gov.ar,claudia.rucci@senado-ba.gov.ar,gabino.tapia@senado-ba.gov.ar,carolina.tironi@senado-ba.gov.ar,david.hirtz@senado-ba.gov.ar&subject='+ encodeURIComponent(mailSubject) + '&body=' + encodeURIComponent(mailBody);
	document.getElementById("mailTodos").href = mailto;
}	

function getlinkMailto(i){
    return 'mailto:' + jsonSenadores[i].Correo +'?subject='+ encodeURIComponent(mailSubject) + '&body=' + encodeURIComponent(mailBody);
}
function getHtmlWithIndex(i) {
    var temp = htmlTemplate;
    temp = temp.replace("#FOTO#",jsonSenadores[i].Foto);
    temp = temp.replace("#BLOQUE#",jsonSenadores[i].Bloque);
    temp = temp.replace("#NOMBRE#",jsonSenadores[i].Senador);
    temp = temp.replace("#LINK#",getlinkMailto(i));

    return temp;
}

