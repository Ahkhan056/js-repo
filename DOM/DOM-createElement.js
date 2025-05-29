const arr1 = ['ashish','bhanu','naveen','gautam']
    const arr2 = ['blue','green','yellow','red']
    arr1.forEach( ( text,index ) => multipleButtons(text,arr2[index]))
   

    function multipleButtons(text,bgColor)
    {
     const button = document.createElement('button')
     console.log(button)
     button.setAttribute('className','firstbutton')
     button.setAttribute('type','submit')
     button.style.backgroundColor = `${bgColor}`
     button.style.cursor = 'pointer'
     button.style.padding = "12px"
     button.style.borderRadius = "10px"
     const textnode = document.createTextNode(`${text}`)
     button.appendChild(textnode)
     document.body.appendChild(button)
    }