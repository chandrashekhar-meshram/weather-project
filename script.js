// input
// on click of button bgrab the input from user
    // ask the internate to give me weather details of that city
    // display that data in result block
    
    const city = document.getElementById("city")
    const search = document.getElementById("search")


    // async function for fetchiing weather

    async function fetchWeather(cityName) {
        let apiKey = "befcba4d60088b5cafc3212c70252a14"
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

    try{
        let response = await fetch(api)
        let result = await response.json()

        document.getElementById("temp").innerText = result.main.temp

    document.getElementById("max_temp").innerText = result.main.temp_max

    document.getElementById("min_temp").innerText = result.main.temp_min

    document.getElementById("humidity").innerText = result.main.humidity

    // document.getElementById("rain").innerText = result.main.rain
    } catch (error) {
        console.log(error)
    }       

    }



    //  on click of search button (adding event listner)
    search.addEventListener("click", (e) => {
        // grab input from city input feild
        let cityName = city.value

    fetchWeather(cityName)    


        // ask openweatherapi to give me weathether data of that city
    //     let apiKey = "befcba4d60088b5cafc3212c70252a14"
    //     let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`


    //     fetch(api).then((response) =>{
    //         return response.json()
    //     })
    //     .then((response) =>{
    //         console.log(response)
    //         console.log(response.main.temp)
    //         document.getElementById("temp").innerText = response.main.temp

    //         document.getElementById("max_temp").innerText = response.main.temp_max

    //         document.getElementById("min_temp").innerText = response.main.temp_min

    //         document.getElementById("humidity").innerText = response.main.humidity

    //     })
    //     .catch((error) =>{
    //         console.log(error)
    //     })



    //     // display data of that city
     })



