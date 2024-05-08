const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  // Put your code here
  return `<p>${pregunta.titulo}</p>`;
}

function imprimeTodasLasRespuestas(pregunta) {
  // Put your code here
  let respuestas = "";
  for (let i = 0; i < pregunta.respuestas.length; i++) {
    respuestas += imprimeUnaRespuesta(pregunta.respuestas[i]);
  }
  return respuestas;
}

function imprimeUnaRespuesta(respuesta) {
  // Put your code here
  return imprimeLabel(respuesta) + imprimeInput(respuesta);
}

function imprimeLabel(respuesta) {
  // Put your code here
  return `<label for="${respuesta.id}">"${respuesta.label}"</label>`;
}

function imprimeInput(respuesta) {
  return `<input id="${respuesta.id}" name="${respuesta.name}" type="radio" value="${respuesta.value}">`;
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);
