/*

let num = 5

for (i = 0; i <= 10; i++) {
     res = num + i 
     console.log(`${num} + ${i} = ${res}`)
}

*/




let num = window.document.querySelector('#TEXTnum') 
let radOp = window.document.getElementsByName('radOP') 

function generate() {
    
    let radio = false

    for (i = 0; i < radOp.length; i++) { 
        if (radOp[i].checked) {
            radio = true
        }
    }

    if (num.value.length == 0 || radio === false) { 
        window.alert('ERROR')
    }

    else {
        window.alert('lets go')
    }

}
