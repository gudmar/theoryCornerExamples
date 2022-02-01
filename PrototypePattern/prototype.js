var tab = {
    headline: 
        ['col1', 'col2', 'col3']
    ,
    body: 
        [
            ['data1','data2','data3'],
            ['data4','data5','data6'],
            ['data7','data8','data9'],
        ]
    
}

    class TableComponent extends HTMLElement{
        constructor(){
            super();
            this.attachShadow({mode:'open'});
            this.data = JSON.parse(this.getAttribute('table-data'));
            if (this.data !== null){
                this.recreateTable();
            }
            console.log('Table component constructed')
        }
        attributeChangedCallback(attrName, oldVal, newVal){
            if (attrName==='table-data'){
                this.data = JSON.parse(newVal);
                this.recreateTable();
            }
        }
        static get observedAttributes(){
            return ['table-data']
        }
        recreateTable(){
            this.shadowRoot.innerHTML = ''; // delete previous table content
            this.shadowRoot.appendChild(this.createTable())
        }
        createTable(){
            let head = this.createHead(this.data.head);
            let body = this.createBody(this.data.body);
            let table = document.createElement('table');
            table.appendChild(head); table.appendChild(body);
            return table;
        }
        createHead(headData){
            let row = document.createElement('tr');
            for(let item of headData){
                let th = document.createElement('th');
                th.innerHTML = item;
                row.appendChild(th)
            }
            return row;
        }
        createBody(bodyData){
            let body = document.createElement('tbody');
            for (let r of bodyData){
                let row = this.createTRow(r);
                body.appendChild(row);
            }
            return body
        }
        createTRow(rowDataAsArr){
            let row = document.createElement('tr');
            for(let d of rowDataAsArr){
                let td = document.createElement('td');
                td.innerHTML = d;
                row.appendChild(td)
            }
            return row;
        }
    }
    window.customElements.define('custom-table', TableComponent)

    TableComponent.prototype.registerAttribute = function(attr){
        if (this.attributesToClone === undefined){
            this.attributesToClone = [];
        }
        this.attributesToClone.push(attr)
    }

    TableComponent.prototype.attachEventListener = function(eventType, cbFunction){
        this.addEventListener(eventType, cbFunction);
        if (this.eventListenresRegister === undefined){
            this.eventListenersRegister = [];
        }
        this.eventListenersRegister.push({eventType: eventType, cb: cbFunction})
        console.log('attach Event Listener added')
    }


    TableComponent.prototype.cloneObject = function(obj){
        let str = JSON.stringify(obj);
        return JSON.parse(str);
    }

    TableComponent.prototype.clone = function(){
        let outputElement = document.createElement('custom-table');
        outputElement.setAttribute('table-data', JSON.stringify(this.cloneObject(this.data)));
        if (this.attributesToClone) {
            outputElement.attributesToClone = this.cloneObject(this.attributesToClone);
            this.setAttributesToClone(outputElement);
        }
        if (this.eventListenersRegister) {
            this.attachEventsToClone(outputElement);
        }
        return outputElement;
    }
    TableComponent.prototype.setAttributesToClone = function(targetElement){
        for (let attr of this.attributesToClone){
            let attrVal = this.getAttribute(attr);
            targetElement.setAttribute(attr, attrVal);
        }
    }
    TableComponent.prototype.attachEventsToClone = function(targetElement){
        console.log(targetElement.eventListenersRegister);
        for (let event of this.eventListenersRegister){
            targetElement.attachEventListener(event.eventType, event.cb)
        }
    }