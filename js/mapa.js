function initialize() {
    setPosition(-23.545320, -46.639534);
}

function setPosition(x, y) {
    // Exibir mapa;
    var myLatlng = new google.maps.LatLng(x, y);
    var mapOptions = {
        zoom: 18
        , center: myLatlng
        , panControl: false
        , scrollwheel: false
        , mapTypeId: google.maps.MapTypeId.ROADMAP
        , mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    }

    //Parâmetros do texto que será exibido no clique;
    var contentString = '<h2>Alpha Estratégias Contábeis</h2>' + '<p>Rua Barão de Itapetininga nº 50 Conj. 802, sala 2</p>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
        , maxWidth: 700
    });

    // Exibir o mapa na div #mapa;
    var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);

    // Marcador personalizado;
    // var image = '~/images/icons/location.png';
    var image = 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-location-128.png';
    var marcadorPersonalizado = new google.maps.Marker({
        position: myLatlng
        , map: map
        , height: 64
        , width: 64
        , icon: image
        , title: 'Aplha estrategias contabeis'
        , animation: google.maps.Animation.DROP
    });
    //Exibir texto ao clicar no ícone;
    google.maps.event.addListener(marcadorPersonalizado, 'click', function () {
        infowindow.open(map, marcadorPersonalizado);
    });
}

// // Função para carregamento assíncrono
// function loadScript() {
//      var script = document.createElement("script");
//      script.type = "text/javascript";
//      script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDeHb17So0QupSGO_d6b8X-OyvJ32UQehs&callback=initialize";
//      document.body.appendChild(script);
// }

// window.onload = loadScript;