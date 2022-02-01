
class Modal extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        let template = document.createElement('template');
        template.innerHTML = this.getHTMLAsString();
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    getHTMLAsString(){
        return `
        <style>
            .shutter{
                position:absolute;
                width: 100vw;
                height: 100vh;
                background-color: rgba(50,100,50,0.5);
                left:0; top:0;
            }
            .content-outlet{
                position:relative;
                display: inline-block;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                height: 200px;
                overflow: auto;
            }
        </style>
        <div class="shutter">
            <div class="content-outlet">
                
            </div>
        </div>
        `
    }
    addWrappedContent(htmlElement, uniqueId = null){
        let outlet = this.shadowRoot.querySelector('.content-outlet');
        if (uniqueId !== null) htmlElement.id = uniqueId;
        outlet.appendChild(htmlElement);
    }
    removeWrappedContent(uniqueId){
        let element = this.shadowRoot.querySelector('#' + uniqueId);
        this.shadowRoot.removeChild(element);
    }
}

window.customElements.define('element-wrapper', Modal);


function getElementInModal(itemToWrap){
    
    let modal = document.createElement('element-wrapper');
    modal.addWrappedContent(itemToWrap);
    return modal;
}

function placeWrappedElement(){
    let wrappedElement = document.createElement(`wrapped-element`);
    let outlet = document.querySelector('.outlet');
    let modal = getElementInModal(wrappedElement);
    outlet.appendChild(modal);
    outlet.appendChild
}
placeWrappedElement();