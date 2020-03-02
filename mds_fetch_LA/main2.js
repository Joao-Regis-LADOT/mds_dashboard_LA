//https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
//https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9


async function provider_apis()
{
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    const api_url_birdLA = 'https://mds.bird.co/gbfs/los-angeles/free_bikes';
    const response_bird = await fetch(proxyUrl + api_url_birdLA);
    const data_bird = await response_bird.json();
    console.log(data_bird);
    document.getElementById("bird_LA_qty").innerHTML = data_bird.data.bikes.length;

    
    const api_url_lime = 'https://data.lime.bike/api/partners/v1/gbfs/los_angeles/free_bike_status';
    const response_lime = await fetch(proxyUrl + api_url_lime);
    const data_lime = await response_lime.json();
    console.log(data_lime);
    document.getElementById("lime_LA_qty").innerHTML = data_lime.data.bikes.length;


    const api_url_spin = 'https://web.spin.pm/api/gbfs/v1/los_angeles/free_bike_status.json';
    const response_spin = await fetch(api_url_spin);
    const data_spin = await response_spin.json();
    console.log(data_bird);
    document.getElementById("spin_LA_qty").innerHTML = data_spin.data.bikes.length;


}

provider_apis();
setInterval(provider_apis, 30000)
