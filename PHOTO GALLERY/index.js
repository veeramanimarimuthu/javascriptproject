const modal = document.createElement('div');
modal.id = 'modal';
document.body.appendChild(modal);
//modal.classList.add('active');
const images = document.querySelectorAll('.img');

images.forEach(image=>{
    image.addEventListener('click',()=>{
        modal.classList.add('active');
        const img=document.createElement('img');
        //console.log(image.src);
        img.src=image.src;
        img.id='img';
        while(modal.firstChild){
            modal.removeChild(modal.firstChild)
        }
        modal.append(img);
    });
});

modal.addEventListener('click',()=>{
    modal.classList.remove('active');
});