var jsonPreguntas = [
    {
        "titulo": "Economía",
        "pregunta": "Que opinás acerca del tamaño del estado, y las funciones que opcupa?",
        "opciones": [
            {
                "respuesta": "El estado debe achicarse, y hacerse mas eficiente en las tareas.",
                "esLiberal": true
            },
            {
                "respuesta": "El estado debe hacerce más grande, sin importar el costo que conlleve.",
                "esLiberal": false
            },
            {
                "respuesta": "Hay que quitarle los planes sociales a todos.",
                "esLiberal": false
            }
        ],
        "propuesta": {
            "titulo": "Un Estado eficiente",
            "descripcion": "Modernización del sector público por funciones partiendo de un presupuesto base cero. La reducción del personal estatal resultante se hará en el marco de un plan progresivo de empalme con el sector privado que incluya capacitación y tiempo de adaptación. Tercerización de tareas no prioritarias."
        }
    },
    {
        "titulo": "Economía",
        "pregunta": "Respecto a la economía, en relación al resto de los paises, que medida te parece mas adecuada?",
        "opciones": [
            {
                "respuesta": "La economía debe cerrarse, cerrar fronteras y que no entren productos.",
                "esLiberal": false
            },
            {
                "respuesta": "Tenemos que fomentar el comercio internacional e intercambio tecnológico.",
                "esLiberal": true
            }
        ],
        "propuesta": {
            "titulo": "Una economía abierta",
            "descripcion": "que los productos de calidad lleguen a tu bolsillo a un menor costo. Impulsar tratados de paz, amistad y libre comercio, así como de intercambio tecnológico con todos los países de la Tierra."
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
        value["opciones"].forEach(function(opt){
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