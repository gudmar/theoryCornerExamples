
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
                background-color: rgba(50,50,50,0.5);
                left:0; top:0;
            }
            .cuntent-outlet{
                position:relative;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                height: 200px;
                overflow: auto;
            }
        </style>
        <div class="shutter">
            <div class="content">
                <slot name="content-outlet">Default slot content</slot>
            </div>
        </div>
        `
    }
}

window.customElements.define('element-wrapper', Modal);