console.log(eval((2 + 2)- (3+4)))

console.log(Math.sqrt(4))
console.log(Math.pow(4,2))

console.log(typeof(Math))
console.log(Math.abs(-1))

console.log(Math.round(3.54))
console.log(Math.ceil(4.4))
console.log(Math.floor(3.6))
console.log(Math.trunc(3.6))
console.log(Math.sign(-8))
console.log(Math.min(3,4,6,1))
console.log(Math.log10(10))
console.log(Math.sin(30 * Math.PI/180))
console.log(Math.PI)
console.log(Math.sin(30* 0.017))



function seven(){
    document.getElementById('span1').innerHTML += 7
}
function eight(){
    document.getElementById('span1').innerHTML += 8
}
function nine(){
    document.getElementById('span1').innerHTML += 9
}
function four(){
    document.getElementById('span1').innerHTML += 4
}
function five(){
    document.getElementById('span1').innerHTML += 5
}
function six(){
    document.getElementById('span1').innerHTML += 6
}
function one(){
    document.getElementById('span1').innerHTML += 1
}
function two(){
    document.getElementById('span1').innerHTML += 2
}
function three(){
    document.getElementById('span1').innerHTML += 3
}
function zero(){
    document.getElementById('span1').innerHTML += 0
}
function plus(){
    document.getElementById('span1').innerHTML += '+'
}
function minus(){
    document.getElementById('span1').innerHTML += '-'
}
function equal(){
    document.getElementById('span2').innerHTML = eval(document.getElementById('span1').innerHTML)
}
function divide(){
    document.getElementById('span1').innerHTML += '/'
}
function multi(){
    document.getElementById('span1').innerHTML += '*'
}

function reset(){
    
    document.getElementById('span2').innerHTML = ''
    document.getElementById('span1').innerHTML = ''
}




function dlete(){
    document.getElementById('span1').innerHTML  = document.getElementById('span1').innerHTML.slice(0,-1)
}


