const cols = document.querySelectorAll('.col')
const headers = document.querySelectorAll('h2')
const buttons = document.querySelectorAll('button')
document.addEventListener('keydown', event => {
    event.preventDefault()
    if (event.code.toLowerCase() === 'space') {
        changeColor()
    }
})
// let timerId = setInterval(() => changeColor(), 1000);




// for (but of buttons) {
//     but.addEventListener('click', even =>{
//         // console.log(even);
        
//     })
// }
document.addEventListener('click', event => {
    const type = event.target.dataset.type
    if (type === 'lock') {
        const node = 
            event.target.tagName.toLowerCase() === 'i'
            ? event.target
            : event.target.children[0]
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    }
})

function generateRandomColor() {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i=0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)] 
    }
    return '#' + color
}



function changeColor() {
    cols.forEach((col) => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const color = chroma.random()
        const text = col.querySelector('h2')
        const button = col.querySelector('button')

        if (isLocked) {
            return
        }


        col.style.background = color
        text.textContent = color
        setTextColor(text, color)
        setTextColor(button, color)
    } )
}

function setTextColor (text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}
changeColor()

