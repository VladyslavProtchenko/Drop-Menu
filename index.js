
let body = document.querySelector('body');
let arr = document.querySelectorAll('.arr');
let menuItem = document.querySelectorAll('.menu__item span');
let submenu = document.querySelectorAll('.submenu');
let menu = document.querySelector('.menu');



if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    body.classList.add('touch');
    
    menuItem.forEach(item=>{
       
            item.addEventListener('click',(event)=>{
                clear(item.parentNode.childNodes[5]);
                
                if(item.classList.contains('about__label')) {
                    item.parentElement.classList.toggle('active')
                    item.parentNode.childNodes[1].classList.toggle('open');
                    item.parentNode.childNodes[5].classList.toggle('sub__open');
                    return;
                }
                    item.parentElement.classList.toggle('active')
                    item.parentNode.childNodes[3].classList.toggle('open');
                    item.parentNode.childNodes[5].classList.toggle('sub__open');  
            })
        
    })
    
    arr.forEach(item =>{
        item.style.display = 'block';
        
    })

const clear = (current) => {
    submenu.forEach(item=> {
        if(current == item ) {return}
        item.classList.remove('sub__open');
        item.parentNode.classList.remove('active');
    })
}

document.addEventListener('click', (event)=>{
        const clickMenu = event.composedPath().includes(menu);
        
        if(!clickMenu) {
            submenu.forEach(i=>{
                i.classList.remove('sub__open');
            })
            menuItem.forEach(i=>{
                i.parentNode.classList.remove('active');
            })
        }
})


} else {
    
    body.classList.add('mouse');

}

