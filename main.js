let main = document.querySelector('.main')
let pos = document.documentElement;

function createHeart(x, y){
    let a = Math.floor(Math.random()*(230-73)+73);
    let b = Math.floor(Math.random()*(190));
    let c = Math.floor(Math.random()*(255-128)+128);

    let newEle = document.createElement('div')

    newEle.style.height = '20px';
    newEle.style.width = '20px';
    newEle.style.background = 'rgb('+a+','+b+','+c+')'
    newEle.style.left = x;
    newEle.style.top = y;

    main.appendChild(newEle)
    setTimeout(()=>{
        newEle.remove()
    },1000)
}

pos.addEventListener('mousemove',e=>{
    let x = e.clientX+'px';
    let y = e.clientY+'px';
    setInterval(createHeart(x,y),1000)
})