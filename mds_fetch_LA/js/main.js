//https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors

const api_url_birdLA = 'https://mds.bird.co/gbfs/los-angeles/free_bikes';

async function get_BirdLA_qty()
{
    const response_bird = await fetch(api_url_birdLA);
    const data_bird = await response_bird.json();
    console.log(data_bird);

    document.getElementById("bird_LA_qty").innerHTML = data_bird.data.bikes.length;
}

get_BirdLA_qty();
setInterval(get_BirdLA_qty, 20000)



var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const api_url_lime = 'https://data.lime.bike/api/partners/v1/gbfs/los_angeles/free_bike_status';

async function get_lime_qty()
{
    const response_lime = await fetch(proxyUrl + api_url_lime);
    const data_lime = await response_lime.json();
    console.log(data_lime);

    document.getElementById("lime_LA_qty").innerHTML = data_lime.data.bikes.length;
}

get_lime_qty();
setInterval(get_lime_qty, 20000)
