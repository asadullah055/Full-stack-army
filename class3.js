let foll = ['Mango', 'Jackfrout', 'Banana', 'Plam', 'Pinaple', 'Black Bary']
let index = -1
let frout = foll[++index]
setInterval(() => {
    frout = foll[index++]
    console.log(frout, frout.length);
    if (index === foll.length ) {
        index= 0
    }
}, 1000)