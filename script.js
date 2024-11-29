const h1 = document.getElementById("h1")
        const h11 = document.getElementById("h11")
        const h12 = document.getElementById("h12")
        const h13 = document.getElementById("h13")
        const h14 = document.getElementById("h14")

        function showTime(){
            const currentTime = new Date()
            const day = `${currentTime.getDay()}`
            const date = `${currentTime.getDate()}`
            const month = `${currentTime.getMonth()}`
            const year = `${currentTime.getFullYear()}`

            const days = ["Sunday","Mon","Tue","Wed","Thur","Fri","Sat"]
            
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

            h1.innerText = time = `Time: ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()},`
            h11.innerText = ` Date: ${days[day]}, ${date} ${months[month]} ${year}`
        }

        let interval = setInterval(showTime, 1000)
        showTime()