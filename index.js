function getTime(){
    setInterval(function(){
        getHours()
        getMinutes()
    }, 1000)
}

function getHours(){
    let jam = new Date().getHours()
    let hour = document.getElementById('hour')
    if (jam < 10){
        jam = '0' + jam
    }
    hour.innerHTML = jam
}

function getMinutes(){
    let menit = new Date().getMinutes()
    let minute = document.getElementById('minute')
    if (menit < 10){
        menit = '0' + menit
    }
    minute.innerHTML = menit
}
