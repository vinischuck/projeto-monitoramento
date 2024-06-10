function addButton() {
    let container = document.querySelector('.container');
    container.addEventListener('click', function(event) {
        // Verifica se o elemento clicado é um botão 'add-button'
        if (event.target.matches('.add-button')) {
            // Obtém o próximo elemento irmão com a classe "add-menu"
            let menu = event.target.nextElementSibling;
            
            // Alterna a exibição do menu
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        }
    });
}

window.onload = addButton;

clearInput = () => {

let input = document.getElementById("insert-link");

    input.value = "";

}


addVideoYt = (e, videoInput, videoIframe) => {
    let input = e.target.parentNode.querySelector("." + videoInput);
    let link = input.value;
    let iframe = e.target.parentNode.parentNode.querySelector("." + videoIframe);
    
    if(e.keyCode === 13){
        var video_id = link.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }

        var iframe_url = "https://www.youtube.com/embed/" + video_id;
        iframe.src = iframe_url;
    }
    clearInput();
}

addVideoSpalla = (e,videoInput,videoIframe) => {
    let input = e.target.parentNode.querySelector("." + videoInput);
    let link = input.value;
    let iframe = e.target.parentNode.parentNode.querySelector("." + videoIframe);
    
    if(e.keyCode === 13){
        var video_id = link.split('?live=')[1];
        var iframe_url = "https://ead.ceisc.com.br/admin/video_interno/aovivo/" + video_id;
        iframe.src = iframe_url;
    }
    console.log("teste")
    
    clearInput();
}

addVideo = (e, videoInput, videoIframe) => {
    let inputElement = e.target.parentNode.querySelector("." + videoInput);
    
    if (inputElement) {
        let input = inputElement.value;

        if(input.includes("spalla")){
            return addVideoSpalla(e, videoInput, videoIframe);
        }
        else if (input.includes("youtube")){
            return addVideoYt(e, videoInput, videoIframe);
        }
    } else {
        console.error('Elemento de entrada não encontrado');
    }

}


// Função para adicionar a tela
function addScreen() {
    // Seleciona o elemento div com a classe 'container'
    let container = document.querySelector('.container');

    // Cria o elemento div com a classe 'tela'
    let tela = document.createElement('div');
    tela.className = 'tela';

    // Cria o elemento iframe com a classe 'videoIframe'
    let iframe = document.createElement('iframe');
    iframe.className = 'videoIframe';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.title = 'YouTube video player';
    iframe.frameborder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerpolicy = 'strict-origin-when-cross-origin';
    iframe.allowfullscreen = true;

    // Cria o elemento button com a classe 'add-button'
    let button = document.createElement('button');
    button.className = 'add-button';
    button.onclick = function() { addButton(this); };
    button.textContent = '+';

    // Cria o elemento span com a classe 'add-menu'
    let span = document.createElement('span');
    span.className = 'add-menu';

    // Cria o elemento input com a classe 'videoInput'
    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Digite o link';
    input.className = 'videoInput';
    input.onkeydown = function(event) { addVideo(event, 'videoInput', 'videoIframe'); };


   // Cria o elemento button com a classe 'remove-button'
  let removeButton = document.createElement('button');
  removeButton.className = "remove-button";
  removeButton.onclick = function() { removeScreen(this); }
  removeButton.textContent = "x";


    // Adiciona os elementos criados ao span
    span.appendChild(input);

    // Adiciona os elementos criados à div 'tela'
    tela.appendChild(iframe);
    tela.appendChild(button);
    tela.appendChild(span);
    tela.appendChild(removeButton);

    // Adiciona a div 'tela' ao elemento 'container'
    container.appendChild(tela);
}

// Seleciona o botão
let createPlayerButton = document.querySelector('.createPlayer')

// Adiciona o ouvinte de eventos
createPlayerButton.addEventListener("click", addScreen);

//Remove a tela

removeScreen = (buttonElement) => {
    // Obtém a tela associada ao botão de remover
    let tela = buttonElement.parentNode;

    // Remove a tela
    tela.parentNode.removeChild(tela);
}








