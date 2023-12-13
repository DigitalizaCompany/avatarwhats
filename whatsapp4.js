function criarBarra(var_nome, var_avatar) {
  var varStatus = document.createElement("span");
  varStatus.className = "status";
  var elementoPai = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');

  var userBar = document.createElement("div");
  userBar.className = "user-bar";

  var avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.innerHTML = '<img src="' + var_avatar + '">';

  var name = document.createElement("div");
  name.className = "name";
  name.innerHTML = '<span>' + var_nome + '</span>&nbsp<span style="float: right" data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span>';
  
  name.appendChild(varStatus);

  userBar.appendChild(avatar);
  userBar.appendChild(name);

  if (elementoPai) {
    elementoPai.prepend(userBar);
  }

  const botBody = elementoPai;
  const audioNot = document.createElement('audio');
  audioNot.src = 'https://igorlemoes.com.br/files/whatsapp/audio_whatsapp.mp3';
  let mensagesLength = 0;

  setInterval(() => {
    const isTyping = botBody.querySelector('.bubble1');
    const sibling = isTyping?.parentElement?.parentElement?.nextSibling;

    if(isTyping && sibling.src) {
      varStatus.innerText = 'gravando audio...';
    } else if(isTyping) {      
      varStatus.innerText = 'digitando...';
    } else {
      varStatus.innerText = 'Online';
    }

    const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');    
  
    if(allMessages.length > mensagesLength) {        
      if(!isTyping) {
        for (let i = mensagesLength; i < allMessages.length; i++) {
          const iconContainer = document.createElement('div');
          const checkIcon = /* seu código SVG para checkIcon aqui */;
          iconContainer.innerHTML = checkIcon;
          
          const currentMsg = allMessages[i];
          currentMsg.append(iconContainer);
        }
        
        mensagesLength = allMessages.length;
        audioNot.play();        
      }
    }
  }, 400);

  var cssId = 'myCss';
  if (!document.getElementById(cssId)) {
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://igorlemoes.com.br/files/whatsapp/style_whatsapp_091020_v_001.css';
    link.media = 'all';
    elementoPai.appendChild(link);
  }
}
