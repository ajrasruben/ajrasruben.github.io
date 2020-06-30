var jsonPreguntas = [
        {
            "titulo":"Economía",
            "pregunta":"Qué opinás acerca del tamaño del estado, y las funciones que opcupa?",
            "opciones":[
                {
                    "respuesta":"El estado debe achicarse, y hacerse mas eficiente en las tareas.",
                    "esLiberal":true
                },
                {
                    "respuesta":"El estado debe hacerce más grande, sin importar el costo que conlleve.",
                    "esLiberal":false
                },
                {
                    "respuesta":"Hay que quitarle los planes sociales a todos.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Un Estado eficiente",
                "descripcion":"Modernización del sector público por funciones partiendo de un presupuesto base cero. La reducción del personal estatal resultante se hará en el marco de un plan progresivo de empalme con el sector privado que incluya capacitación y tiempo de adaptación. Tercerización de tareas no prioritarias."
            }
        },
        {
            "titulo":"Economía",
            "pregunta":"Respecto a la economía, en relación al resto de los paises, que medida te parece mas adecuada?",
            "opciones":[
                {
                    "respuesta":"Hay que fomentar el comercio internacional e intercambio tecnológico.",
                    "esLiberal":true
                },
                {
                    "respuesta":"La economía debe cerrarse, cerrar fronteras y que no entren productos.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Una economía abierta",
                "descripcion":"Que los productos de calidad lleguen a tu bolsillo a un menor costo. Impulsar tratados de paz, amistad y libre comercio, así como de intercambio tecnológico con todos los países de la Tierra."
            }
        },
        {
            "titulo":"Economía",
            "pregunta":"Qué opinás acerca de los impuestos que hoy en dia se pagan?",
            "opciones":[
                {
                    "respuesta":"Se deben disminuir los impuestos para empresas y personas.",
                    "esLiberal":true
                },
                {
                    "respuesta":"Hay que incrementar los impuestos para que el estado pueda distribuir mas dinero.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Reducción y simplificación de impuestos",
                "descripcion":"Realizar una reforma impositiva para reemplazar los más de 160 impuestos y tasas existentes, por un sistema racional de pocos impuestos, pensados para simplificar la vida de los ciudadanos y de las empresas."
            }
        },
        {
            "titulo":"Economía",
            "pregunta":"Qué opinás de la coparticipación federal?",
            "opciones":[
                {
                    "respuesta":"Cada jurisdicción debe ser responsable de recaudar lo que gasta.",
                    "esLiberal":true
                },
                {
                    "respuesta":"El estado debe incrementar la coparticipación a las provincias.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Reforma de la coparticipación federal",
                "descripcion":"Que cada jurisdicción sea responsable de recaudar lo que gasta, cuidando el desarrollo de las provincias y municipios más retrasados en proyectos específicos de educación, salud e infraestructura."
            }
        },
        {
            "titulo":"Economía",
            "pregunta":"Respecto de la edad Jubilatoria, cual es tu apreciación?",
            "opciones":[
                {
                    "respuesta":"Debe haber igualdad en la edad jubilatoria entre hombres y mujeres.",
                    "esLiberal":true
                },
                {
                    "respuesta":"No veo necesario generar cambios al respecto de las edades.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Reforma previsional",
                "descripcion":"Debe ser una verdadera protección para los aportes que hiciste toda tu vida. Igualdad en la edad jubilatoria de hombres y mujeres."
            }
        },
        {
            "titulo":"Economía",
            "pregunta":"Qué opinás acerca de la asistencia del estado a la gente?",
            "opciones":[
                {
                    "respuesta":"Se deben reducir los montos que el estado gasta en asistencia social, de forma gradual.",
                    "esLiberal":true
                },
                {
                    "respuesta":"El estado debe garantizar los ingresos de aquellos que no tienen, durante el tiempo que sea necesario.",
                    "esLiberal":false
                },
                {
                    "respuesta":"Solo se debería brindar asistencia a los argentinos.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Reducción gradual del asistencialismo",
                "descripcion":"A partir de un plan conjunto con el sector privado, a través de la capacitación en oficios y creación de nuevos empleos."
            }
        },
        {
            "titulo":"Economía",
            "pregunta":"Cómo debería actuar el estado sobre empresas, pymes y emprendedores?",
            "opciones":[
                {
                    "respuesta":"El estado debe fomentar a los emprendedores y reducir la exesiva cantidad de regulaciones que afectan a las pymes.",
                    "esLiberal":true
                },
                {
                    "respuesta":"El estado debe exijir a las empresas que paguen más. Las que no pueden deberían ser dirigidas por los trabajadores.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Fomento al emprendedorismo y desregulación",
                "descripcion":"Se debe facilitar la inserción laboral de tantos de jóvenes que se incorporan en el mercado laboral año a año en nuestro país y legislar urgente para liberar el espíritu emprendedor de las más de 69.000 regulaciones que están ahogando a la actividad empresarial de PyMEs y micropymes."
            }
        },
        {
            "titulo":"Servicios del estado",
            "pregunta":"Cómo se debe manejar el estado en materia de salud?",
            "opciones":[
                {
                    "respuesta":"El estado debe garantizar la salud y la prevención de enfermedades a los ciudadanos.",
                    "esLiberal":true
                },
                {
                    "respuesta":"La salud debería ser privada, y que cada uno se haga cargo de su costo.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Salud integral",
                "descripcion":"El estado debe asegurar el alcance a todos los ciudadanos y hacer foco en la prevención y maximización del uso de la tecnología."
            }
        },
        {
            "titulo":"Servicios del estado",
            "pregunta":"Cómo debe avanzar el estado en materia de defensa y seguridad?",
            "opciones":[
                {
                    "respuesta":"Se debe proveer orden y tranquilidad.",
                    "esLiberal":true
                },
                {
                    "respuesta":"El estado debe reducir los gastos en  las fuerzas de seguridad.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Defensa y seguridad",
                "descripcion":"Se debe mantener tranquilidad y orden, con transparencia y profesionalismo."
            }
        },
        {
            "titulo":"Educación",
            "pregunta":"Respecto a la educación, que debe fomentar el estado?",
            "opciones":[
                {
                    "respuesta":"Se debe promover que cada uno pueda enseñar o aprender lo que quiera.",
                    "esLiberal":true
                },
                {
                    "respuesta":"Se debe controlar más los contenidos que se enseñan.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Educación libre",
                "descripcion":"Promoción de la “libertad de enseñar y aprender” tal como marca nuestra Constitución."
            }
        },
        {
            "titulo":"Educación",
            "pregunta":"Respecto de la asignación de centro educativos, cómo debe proceder el estado?",
            "opciones":[
                {
                    "respuesta":"Los padres deben poder elegir la institución a la que asistirán cada uno de sus hijos.",
                    "esLiberal":true
                },
                {
                    "respuesta":"La institución escolar debería ser asignada por ubicación.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Libre elección del establecimiento educativo",
                "descripcion":"Implementación de un sistema mediante el cual el Estado financie el costo de la educación y los padres conserven el derecho de elegir la institución a la que asistirá cada uno de sus hijos, sea estatal o privada."
            }
        },
        {
            "titulo":"Educación",
            "pregunta":"Qué opina acerca de los contenidos educativos?",
            "opciones":[
                {
                    "respuesta":"El estado debe preparar a los docentes para que puedan brindar la educación del futuro.",
                    "esLiberal":true
                },
                {
                    "respuesta":"Hay que volver a las bases de la educación, con contenidos que probadamente funcionan.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Enseñanza dinámica",
                "descripcion":"Se tiene que preparar a los docentes para poder afrontar los desafíos futuros."
            }
        },
        {
            "titulo":"Educación",
            "pregunta":"Como deberían manejarse las diferentes instituciones educativas?",
            "opciones":[
                {
                    "respuesta":"Se debe generar un modelo descentralizado, donde cada escuela tenga una mayor toma de decisiones.",
                    "esLiberal":true
                },
                {
                    "respuesta":"Los contenidos y desiciones deben tomarse en el gobierno nacional, para que todas las escuelas sean iguales.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Autonomía y competencia",
                "descripcion":"Un modelo descentralizado donde cada escuela pueda ampliar su autonomía, a través de testeos y programas personalizados y donde los institutos compitan en calidad."
            }
        },
        {
            "titulo":"Justicia y derechos humanos",
            "pregunta":"Respecto de la justicia, que acción deberia tomar el estado?",
            "opciones":[
                {
                    "respuesta":"El concejo de la magistratura debe ser independiente, para garantizar transparencia",
                    "esLiberal":true
                },
                {
                    "respuesta":"Los jueces deben rendir cuentas acerca de las resoluciones en sus causas.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Reforma de la Justicia",
                "descripcion":"Un Consejo de la Magistratura independiente del poder político, que garantice idoneidad y transparencia en el sistema de selección y remoción de jueces."
            }
        },
        {
            "titulo":"Justicia y derechos humanos",
            "pregunta":"Cree usted que se debe realizar una reforma del codigo procesal?",
            "opciones":[
                {
                    "respuesta":"Si, se debe reformar el codigo procesal para agilizar los procesos y sentencias.",
                    "esLiberal":true
                },
                {
                    "respuesta":"No, el código procesal está cumpliendo correctamente su función.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Fin de la ”puerta giratoria”",
                "descripcion":"Reducción de la discrecionalidad en torno a sentencias judiciales del fuero penal. Reforma del Código Procesal para agilizar los procesos y las sentencias."
            }
        },
        {
            "titulo":"Justicia y derechos humanos",
            "pregunta":"Opina usted que se debe condicionar a los que se postulan a cargos públicos ?",
            "opciones":[
                {
                    "respuesta":"Si, se debe asegurar el no tener causas de corrupción.",
                    "esLiberal":true
                },
                {
                    "respuesta":"No, cada uno es libre de postularse a cualquier cargo.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Ficha limpia",
                "descripcion":"Prohibición legal de ejercer o postularse a cargos públicos a quienes enfrenten condenas por corrupción confirmadas en segunda instancia."
            }
        },
        {
            "titulo":"Justicia y derechos humanos",
            "pregunta":"Como debe actuar el estado en aspectos de discriminación?",
            "opciones":[
                {
                    "respuesta":"Se debe garantizar la no discriminación y la igualdad entre la ley.",
                    "esLiberal":true
                },
                {
                    "respuesta":"El estado no debe involucrarse, cada persona debe ser responsable.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Respeto irrestricto por los derechos humanos",
                "descripcion":"Garantía de la no discriminación por género, religión, etnia o pertenencia a una minoría, con primacía de la igualdad ante la ley por sobre cualquier criterio discrecional."
            }
        },
        {
            "titulo":"Leyes laborales",
            "pregunta":"Que debe fomentar el estado en materia de leyes laborales?",
            "opciones":[
                {
                    "respuesta":"Debe simplificar y disminuir trabas para quienes desean trabajar o emplear.",
                    "esLiberal":true
                },
                {
                    "respuesta":"Debe darle mayor poder a los sindicatos y fomentar las federaciones.",
                    "esLiberal":false
                }
            ],
            "propuesta":{
                "titulo":"Reforma de la Ley de Contratos de Trabajo",
                "descripcion":"Desregulación y simplificación, menos costos y trabas para quien desea emplear y trabajar. Negociación de salarios a nivel de empresa."
            }
        }
    ]
;

function agregarPreguntas(){
    var template = $("#questionTemplate .questionBox");
    var item = undefined;
    jsonPreguntas.forEach(function (value,index){
        item = template.clone();
        item.css("display","none");
        item.find(".title").html(value["titulo"]);
        item.find(".question").html(value["pregunta"]);
        var arr= shuffle(value["opciones"]);
        arr.forEach(function(opt){
            var li =    "<li><label><input name='q" + index + "' type='radio' class='option ";
            if(opt.hasOwnProperty("esLiberal") && opt.esLiberal){
                li = li + "true";
            }
            li = li + "'>   " + opt["respuesta"]+"</label></li>";

            item.find(".answerList").append(li);
        });
        item.find(".nextquestion").click(onNextQuestionClick);
        $(".contenedorCuestionario").append(item);
    });
    $(".contenedorCuestionario .questionBox").first().show();

}

function updateQuestionNumberOfQuestions(){
    $(".contenedorCuestionario .questionNumber").each(function( index, element ) {
         element.innerHTML = (index + 1) + " de " +  $(".contenedorCuestionario .questionBox").length;
    });
}

function isQuestionComplete(item){
    return $(item).parents(".questionBox").find("input:radio:checked").length > 0;
}

function onNextQuestionClick(){
    if(!isQuestionComplete(this)){
        $(this).parent().find(".mustComplete").removeClass("invisible");
    }else{
        $(this).parent().find(".mustComplete").addClass("invisible");
        var quest = $(this).parents(".questionBox");
        quest.hide();
        if($(".contenedorCuestionario .questionBox").length == quest.prevAll().length + 1 )
        {
            mostrarResultado();
        }else{
            $(".contenedorCuestionario .questionBox").eq(quest.prevAll().length + 1).show();
        }

    }
}

function mostrarResultado(){
    var template = $("#respuestaTemplate .answer");
    $(".contenedorCuestionario").hide();
    var resp = $(".respuestasCuestionario");
    resp.empty();
    var verdaderas = $(".contenedorCuestionario .questionBox").find("input:radio:checked.true").length;
    var total = $(".contenedorCuestionario .questionBox").length;
    var percentage = Math.round( verdaderas/total * 100) ;
    resp.append("<div class='respuestaResultado' > Sos un "+ percentage +"% liberal</div>");
//badge-success
    jsonPreguntas.forEach(function (value,index) {
        item = template.clone();
        item.find(".pregunta").html(value["pregunta"]);
        var rta = $(".contenedorCuestionario .questionBox input:radio[name='q" + index + "']:checked").parent().text().trim();

        if($(".contenedorCuestionario .questionBox input:radio[name='q" + index + "']:checked").hasClass("true")){
            item.find(".badge").addClass("badge-success");
            item.find(".badge").html("Pensamiento Liberal");
        }else{
            item.find(".badge").addClass("badge-danger");
            item.find(".badge").html("Pensamiento No Liberal");
        }
        item.find(".userResponse").html(rta);
        item.find(".propuesta").html(value["propuesta"]["titulo"] + " ");
        item.find(".uni2Response").html(value["propuesta"]["descripcion"]);
        resp.append(item);
    });
    resp.show();
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}