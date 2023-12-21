let tuttialbum=document.querySelectorAll('div.card');
console.log(tuttialbum);
for (const iterator of document.querySelectorAll('div.card')) {
    iterator.addEventListener('click',(event)=>{
        console.log(event.toElement.innerText);
    })
}