
class WrappedComponent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        let template = document.createElement('template');
        template.innerHTML = this.getWrappedContent(this.getText());
        let content = template.content.cloneNode(true);
        this.shadowRoot.appendChild(content);
    }
    getWrappedContent(text){
        return `
        <style>
            .wrapped-wrapper{
                position:relative;
                width:200px;
                padding: 10px;
                background-color:#999;
                color:white;
            }
        </style>
        <div class="wrapped-wrapper">
            ${text}
        </div>
        `
    }
    getText(nrOfRepetitions = 100){
        let output = ``;
        for (let i = 0; i < nrOfRepetitions; i++){
            output += 'Lorem ipsum'
        }
        return output;
    }
}

window.customElements.define('wrapped-element', WrappedComponent);