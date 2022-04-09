var js_contador = 1;
var js_resposta = true;

while (js_resposta == true) {
    document.write('<p>Isso apareceu pela ' +js_contador+ "°")
    js_contador += 1
    js_resposta = window.confirm('Deseja continuar?')
}

