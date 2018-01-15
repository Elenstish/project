function initMap() {
        var uluru = {lat: 47.816261, lng: 35.17};
        var uluru2 = {lat: 47.81065, lng: 35.1697};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: "img/map.png"
        });
       var marker = new google.maps.Marker({
          position: uluru2,
          map: map
        });
   }
