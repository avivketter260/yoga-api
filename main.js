// https://zivuch.github.io/yogaapi.json
let main = document.querySelector('main')

const getData = async () => {
    try {
        let url = await fetch('https://zivuch.github.io/yogaapi.json')
        let res = await url.json()
        return res
    }
    catch (err) {
        console.log(err)
    }

}


const addAllOption = (async () => {
    try {
        let engSelect = document.querySelector('#eng')
        let hindSelect = document.querySelector('#hindu')
        let getInfo = await getData()
        getInfo.forEach(item => {

            // this is append all the english names 
            let optionEng = document.createElement('option')
            optionEng.innerHTML = `${item.english_name}`
            engSelect.appendChild(optionEng)


            // this is append all the hindu names 
            let optionHind = document.createElement('option')
            optionHind.innerHTML = `${item.sanskrit_name}`
            hindSelect.appendChild(optionHind)
        })
    }
    catch (err) {
        console.log(err)
    }

})()

const allStuff = async () => {
    try {

        const allItems = document.querySelectorAll('.box')
        if (allItems.length > 0) deleteAll()


        let getInfo = await getData()
        getInfo.forEach(item => {
            createALl(item.img_url, item.english_name, item.sanskrit_name)
        })
    }
    catch (err) {

    }
}

allStuff()


const filter = async () => {
    try {
        deleteAll()

        const selecetEng = document.querySelector('#eng').value.toLowerCase()
        const selecethin = document.querySelector('#hindu').value.toLowerCase()
        const data = await getData()

        data.forEach(item => {
            if (selecetEng === item.english_name.toLowerCase() || selecethin === item.sanskrit_name.toLowerCase()) {
                createALl(item.img_url, item.english_name, item.sanskrit_name)
            }
        })
    }
    catch (err) {

    }
}

const deleteAll = () => {
    const allItems = document.querySelectorAll('.box')

    allItems.forEach(item => {
        item.remove()
    })
}


                
const createALl = (img, eng, hindu) => {
    const div = document.createElement('div')
    div.innerHTML = `<img src="${img}" >`
    div.innerHTML += `<p>${eng}</p>`
    div.innerHTML += `<p>${hindu}</p>`
    div.classList.add('box')
    main.appendChild(div)
}



const selectStateEng = document.querySelector('#eng')
const selectStateHin = document.querySelector('#hindu')

selectStateEng.addEventListener('change', filter)
selectStateHin.addEventListener('change', filter)