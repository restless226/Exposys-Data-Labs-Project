let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let txt=document.getElementById('addTxt')
    let notes=localStorage.getItem('notes');
    if(notes==null){
        obj=[]
    }else{
        obj=JSON.parse(notes)
    }
    obj.push(txt.value)
    localStorage.setItem('notes',JSON.stringify(obj));
    txt.value=" ";
    console.log(obj)
})

