document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("infoModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalDescription = document.getElementById("modalDescription");
    var span = document.getElementsByClassName("close")[0];
    var eventPlace = document.getElementById("eventPlace");
    var map;
    var geocoder;

    document.querySelectorAll('.category').forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            modalTitle.textContent = event.target.textContent;
            modalDescription.textContent = event.target.getAttribute('data-info');
            modal.style.display = "block";
        });
    });

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Initialize and add the map
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
        geocoder = new google.maps.Geocoder();

        document.getElementById('eventPlace').addEventListener('change', function () {
            geocodeAddress(geocoder, map);
        });
    }

    function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('eventPlace').value;
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    window.initMap = initMap; // Make initMap available globally
});
