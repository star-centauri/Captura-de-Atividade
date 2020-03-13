window.addEventListener('load', function() {
    const elementEvent = document.getElementsByTagName("html")[0];
    let mouseMoveCount = 0,
        clickCount = 0,
        scrollCount = 0,
        keypressCount = 0,
        focusCount = 0,
        blurCount = 0,
        tempoAtividade = null;

    function updateTextCountId(elementById, text) {
        let elementText = document.getElementById(elementById);
        elementText.innerHTML = text;
    }
    
    elementEvent.addEventListener('mousemove', e => {
        mouseMoveCount++;
        tempoAtividade = new Date();
        updateTextCountId("mouseMove", mouseMoveCount);
    });

    elementEvent.addEventListener('click', e => {
        clickCount++;
        tempoAtividade = new Date();
        updateTextCountId("mouseClick", clickCount);
    });

    elementEvent.addEventListener('keypress', e => {
        keypressCount++;
        tempoAtividade = new Date();
        updateTextCountId("keyPress", keypressCount);
    });

    document.addEventListener('scroll', e => {
        scrollCount++;
        tempoAtividade = new Date();
        updateTextCountId("mouseScroll", scrollCount);
    }, true);

    window.addEventListener('focus', e => {
        focusCount++;
        tempoAtividade = new Date();
        updateTextCountId("focusPage", focusCount);
    });

    window.addEventListener('blur', e => {
        blurCount++;
        tempoAtividade = new Date();
        updateTextCountId("blurPage", blurCount);
    });

    setInterval(() => {
        let atual = new Date();
        let timeDiff = atual - tempoAtividade;
        
        if(timeDiff >= 3000) this.alert("Mais de 30 segundos sem atividade."); 
    }, 3000)
}, false )