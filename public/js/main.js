const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const temp_real_val = document.getElementById('temp_real_val')
const datahide = document.querySelector('.middle_layer');
const getInfo = async(e)=>{
    e.preventDefault() ;
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = "Plz Enter city name before you search";
        datahide.classList.add('data_hide');
    }

    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ce4b61e8846b0b5ee55d3b5d862a3e37`;
            const response  = await fetch(url);
            const data = await response.json();
            const arrData =[data];
            console.log(data);
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp_real_val.innerText =((arrData[0].main.temp)/10).toFixed(2);
            const tempMod = arrData[0].weather[0].main;
            // const tempMod = "Clear";
            console.log ( tempMod)
            if(tempMod == "Clear"){
                temp_status.innerHTML = "<i class='fa-regular fa-sun style = 'color:#eccc68;'></i>"
            }
            else if(tempMod == "Clouds"){
                temp_status.innerHTML = '<i class="fa-solid fa-cloud"></i>'
            }
            else if(tempMod == "Rain"){
                temp_status.innerHTML = '<i class="fa-light fa-cloud-rain"></i>'
            }
            else{
                temp_status.innerHTML = "<i class= fa-regular fa-sun></i>"
            }
            
            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = "Plz Enter city name properly"
            datahide.classList.add('data_hide');
        }

        


    }
}

submitBtn.addEventListener('click', getInfo);