const list = ['MAGI','MAGICAL','MAGI','MAGICAL']
const headline = document.querySelector('.headline')
const listLength = list.length-1
let currentItem = 0

headline.addEventListener('animationiteration',()=>{
    if(currentItem<listLength){
        headline.innerHTML=list[currentItem]
        console.log(currentItem)
        currentItem+=1   
    }
    else{
        currentItem = 0
    }
}
)