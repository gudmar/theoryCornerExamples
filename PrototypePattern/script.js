let table = document.querySelector('custom-table');
table.attachEventListener('click',(e)=>{
    let copy = e.target.clone();
    document.body.appendChild(copy);
})