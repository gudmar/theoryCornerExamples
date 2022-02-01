        //****** LOGGER
        let lastRowId = 0;
        function getLastRowFromSection(sectionTitle){
            if (sectionTitle) {
                let section = document.querySelector(`[data-title = "${sectionTitle.replace(/ /g,'')}"]`);
                let allRows = section.querySelectorAll('.row');
                if (allRows.length === 0) throw new Error('No rows in section ' + sectionTitle);
                return allRows[allRows.length - 1];
            }
            return document.getElementById(lastRowId + '');
        }
        function log(content, color, sectionTitle){
            // let outlet = document.querySelector(`[data-attr = ${sectionTitle}]`) ?? document.getElementById(lastRowId + '');
            let outlet = getLastRowFromSection(sectionTitle);
            let span = document.createElement('span');
            span.innerText = content;
            if (color) span.style.color = color;
            outlet.appendChild(span);
        }
        function newLogSection(sectionTitle){
            let outlet = document.getElementById('outlet');
            let newSection = document.createElement('div');
            newSection.classList.add('section');
            newSection.setAttribute('data-title', sectionTitle.replace(/ /g,''));
            newSection.innerHTML = `<h3>${sectionTitle}</h3>`;
            outlet.appendChild(newSection);
        }
        
        function newLogRow(sectionTitle){
            lastRowId += 1;
            sectionTitle = sectionTitle == undefined ? undefined : sectionTitle.replace(/ /g,'')
            let outlet = document.querySelector(`[data-title = "${sectionTitle}"]`) ?? document.getElementById('outlet');
            let newRow = document.createElement('div');
            newRow.classList.add('row');
            newRow.setAttribute('id', lastRowId + '');
            outlet.appendChild(newRow);
        }
        function endSection(){
            let outlet = document.getElementById('outlet');
            let hr = document.createElement('div');
            hr.classList.add('sectionSeparator')
            hr.innerHTML = '<hr>'
            outlet.appendChild(hr);
            newLogRow();
        }
        
        newLogRow();
        
        
        
        // ************* TIMER **************
        
        class Timer{
            constructor(){
                this.currentTime = 0;
                this.timer = null;
            }
            startTimer(){
                this.timer = setInterval(()=>{
                    this.currentTime += 10;
                },10)
            }
            stopTimer(){
                clearInterval(this.timer);
            }
            resetTimer(){
                this.currentTime = 0;
            }
            getCurrentTime(){
                return this.currentTime;
            }
        }
        