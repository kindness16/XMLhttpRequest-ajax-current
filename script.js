let kg = document.getElementById('kg'),
    en = document.getElementById('en'),
    eu = document.getElementById('eu'),
    ru = document.getElementById('ru'),
    kz = document.getElementById('kz')

kg.addEventListener('input', () =>{
    const request = new XMLHttpRequest()
    
    request.open('GET', '/current.json')
    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8')
    request.send()

    request.addEventListener('load', () =>{
        if(request.status === 200){
            console.log(request.response)
            const data = JSON.parse(request.response)
            en.value = (+kg.value / data.current.usd).toFixed(2)
            eu.value = (+kg.value / data.current.euro).toFixed(2)
            ru.value = (+kg.value / data.current.ru).toFixed(2)
            kz.value = (+kg.value / data.current.kzt).toFixed(3)
        }else{
            us.value = 'Что то пошло не так'
        }
    })
})
