function criarBarra(var_nome, var_avatar) {
  const botBody = document.querySelector("typebot-standard").shadowRoot.querySelector(".typebot-container");
  let mensagesLength = 0;

  // Criar a barra informativa no topo
  function createInfoMessage() {
    const message = "Esta é uma conta comercial e não recebe ligações";
    const div = document.createElement("div");
    const infoHTML = `<div style="display: flex; align-items: center; gap: 15px; background-color: #d5f4f0; border-radius: 10px; padding: 10px; width: fit-content; max-width: 450px; margin: 2rem auto .5rem; margin-top: 45px;" class="info-container">
      <div>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4b5e63" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"></path>
        </svg>
      </div>
      <p style="color: #53676b;">${message}</p>
    </div>`; 
    div.innerHTML = infoHTML;
    const messagesContainer = botBody.querySelector(".typebot-chat-view");
    messagesContainer.insertBefore(div, messagesContainer.firstChild);
  }

  // Adicionar o comportamento de status e confirmação de leitura de mensagens
  const audioNot = document.createElement('audio');
  audioNot.src = 'https://igorlemoes.com.br/files/whatsapp/audio_whatsapp.mp3';

  setInterval(() => {
    const status = botBody.querySelector('.status');
    const isTyping = botBody.querySelector('.bubble1');
    const sibling = isTyping?.parentElement?.parentElement?.nextSibling;
    
    if (isTyping && sibling && sibling.src) {
      status.innerText = "gravando audio...";
    } else if (isTyping) {
      status.innerText = "digitando...";
    } else {
      status.innerText = "Online";
    }
    
    const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');
    if (allMessages.length > mensagesLength) {
      if (!isTyping) {
        for (let i = mensagesLength; i < allMessages.length; i++) {
          const iconContainer = document.createElement('div');
          iconContainer.innerHTML = `<svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute;bottom: 0;right: 5px;" height="20" width="18">
            <g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
              <path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>
              <path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>
            </g>
          </svg>`;
          const currentMsg = allMessages[i];
          currentMsg.append(iconContainer);
        }
        mensagesLength = allMessages.length;
        audioNot.play();
      }
    }
  }, 400);

  createInfoMessage();
}

criarBarra(var_nome, var_avatar);
