myTimer();

var myVar = setInterval(myTimer, 5000);

function myTimer() 
{
    var xhr_bird_LA = new XMLHttpRequest();
    xhr_bird_LA.responseType = 'text';
    xhr_bird_LA.open('GET', 'https://mds.bird.co/gbfs/los-angeles/free_bikes', true );
    xhr_bird_LA.send();

    xhr_bird_LA.onload = function() 
    {
        if(xhr_bird_LA.status===200) 
        {
            var bird_string = JSON.parse(xhr_bird_LA.responseText);
            //console.log(bird_string);
            document.getElementById("bird_LA_qty").innerHTML = bird_string.data.bikes.length;
        }
    }

    
    var xhr_spin_LA = new XMLHttpRequest();
    xhr_spin_LA.responseType = 'text';
    xhr_spin_LA.open('GET', 'https://web.spin.pm/api/gbfs/v1/los_angeles/free_bike_status.json', true );
    xhr_spin_LA.send();

    xhr_spin_LA.onload = function() 
    {
        if(xhr_spin_LA.status===200) 
        {
            var spin_string = JSON.parse(xhr_spin_LA.responseText);
            //console.log(spin_string);
            document.getElementById("spin_LA_qty").innerHTML = spin_string.data.bikes.length;
        }
    }


    var xhr_lime_LA = new XMLHttpRequest();
    xhr_lime_LA.responseType = 'text';
    xhr_lime_LA.open('GET', 'https://data.lime.bike/api/partners/v1/gbfs/los_angeles/free_bike_status', true );
    xhr_lime_LA.send();

    xhr_lime_LA.onload = function() 
    {
        if(xhr_lime_LA.status===200) 
        {
            var lime_string = JSON.parse(xhr_lime_LA.responseText);
            //console.log(lime_string);
            document.getElementById("lime_LA_qty").innerHTML = lime_string.data.bikes.length;
        }
    }
    

    

}
