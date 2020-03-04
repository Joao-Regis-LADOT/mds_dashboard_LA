//https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
//https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9


async function provider_apis()
{
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    const api_url_birdLA = 'https://mds.bird.co/gbfs/los-angeles/free_bikes';
    const response_bird = await fetch(api_url_birdLA);
    const data_bird = await response_bird.json();
    console.log(data_bird);
    var birdLA_avl = parseInt(data_bird.data.bikes.length);
    //document.getElementById("bird_LA_qty").innerHTML = data_bird.data.bikes.length;
    document.getElementById("bird_LA_qty_tbl").innerHTML = data_bird.data.bikes.length;
    
    const api_url_lime = 'https://data.lime.bike/api/partners/v1/gbfs/los_angeles/free_bike_status';
    const response_lime = await fetch(api_url_lime);
    //const response_lime = await fetch(proxyUrl + api_url_lime);
    const data_lime = await response_lime.json();
    var lime_avl = parseInt(data_lime.data.bikes.length);
    console.log(data_lime);
    //document.getElementById("lime_LA_qty").innerHTML = data_lime.data.bikes.length;
    document.getElementById("lime_LA_qty_tbl").innerHTML = data_lime.data.bikes.length;


    const api_url_spin = 'https://web.spin.pm/api/gbfs/v1/los_angeles/free_bike_status.json';
    const response_spin = await fetch(api_url_spin);
    const data_spin = await response_spin.json();
    var spin_avl = parseInt(data_spin.data.bikes.length);
    console.log(data_spin);
    //document.getElementById("spin_LA_qty").innerHTML = data_spin.data.bikes.length;
    document.getElementById("spin_LA_qty_tbl").innerHTML = data_spin.data.bikes.length;

    const api_url_uber_jump_S = 'https://gbfs.uber.com/v1/laxs/free_bike_status.json';
    const response_uber_jump_S = await fetch(api_url_uber_jump_S);
    const data_uber_jump_S = await response_uber_jump_S.json();
    var uber_jump_S_avl = parseInt(data_uber_jump_S.data.bikes.length);
    console.log(data_uber_jump_S);
    //document.getElementById("uber_jump_S_LA_qty").innerHTML = data_uber_jump_S.data.bikes.length;
    document.getElementById("uber_jump_S_LA_qty_tbl").innerHTML = data_uber_jump_S.data.bikes.length;

    const api_url_uber_jump_B = 'https://gbfs.uber.com/v1/laxb/free_bike_status.json';
    const response_uber_jump_B = await fetch(api_url_uber_jump_B);
    const data_uber_jump_B = await response_uber_jump_B.json();
    var uber_jump_B_avl = parseInt(data_uber_jump_B.data.bikes.length);
    console.log(data_uber_jump_B);
    //document.getElementById("uber_jump_B_LA_qty").innerHTML = data_uber_jump_B.data.bikes.length;
    document.getElementById("uber_jump_B_LA_qty_tbl").innerHTML = data_uber_jump_B.data.bikes.length;

    const api_url_lyft = 'https://s3.amazonaws.com/lyft-lastmile-production-iad/lbs/lax/free_bike_status.json';
    const response_lyft = await fetch(api_url_lyft);
    const data_lyft = await response_lyft.json();
    var lyft_avl = parseInt(data_lyft.data.bikes.length);
    console.log(data_lyft);
    //document.getElementById("lyft_LA_qty").innerHTML = data_lyft.data.bikes.length;
    document.getElementById("lyft_LA_qty_tbl").innerHTML = data_lyft.data.bikes.length;

    const api_url_wheels = 'https://la-gbfs.getwheelsapp.com/free_bike_status.json';
    const response_wheels = await fetch(api_url_wheels);
    const data_wheels = await response_wheels.json();
    var wheels_avl = parseInt(data_wheels.data.bikes.length);
    console.log(data_wheels);
    //document.getElementById("wheels_LA_qty").innerHTML = data_wheels.data.bikes.length;
    document.getElementById("wheels_LA_qty_tbl").innerHTML = data_wheels.data.bikes.length;

    //var hundPercent = data_bird.data.bikes.length + data_bird.data.bikes.length + data_spin.data.bikes.length;
    //console.log("100% = " + hundPercent);

    var hundredPerct = birdLA_avl + lime_avl + spin_avl + uber_jump_S_avl + uber_jump_B_avl + lyft_avl + wheels_avl;
    console.log("100% of fleet = " + hundredPerct);
    
    
    var ctx = document.getElementById('bar_chart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Bird', 'Lime', 'Spin', 'Uber Jump S', 'Uber Jump B', 'Lyft', 'Wheels'],
        datasets: [{
            label: '# of deveices available',
            data: [birdLA_avl, lime_avl, spin_avl, uber_jump_S_avl, uber_jump_B_avl, lyft_avl, wheels_avl],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 0, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });



    var cty = document.getElementById('pie_chart').getContext('2d');
    var myChart = new Chart(cty, {
    type: 'pie',
    data: {
        labels: ['Bird', 'Lime', 'Spin', 'Uber Jump S', 'Uber Jump B', 'Lyft', 'Wheels'],
        datasets: [{
            label: '# of deveices available',
            data: [birdLA_avl, lime_avl, spin_avl, uber_jump_S_avl, uber_jump_B_avl, lyft_avl, wheels_avl],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 0, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });



    

}

provider_apis();
setInterval(provider_apis, 60000)


