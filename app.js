function simpanOrder(jarak, harga, titik1, titik2) {
    db.collection("orders").add({
      jarak: jarak,
      harga: harga,
      pickup: titik1,
      tujuan: titik2,
      status: "pending",
      waktu: new Date()
    }).then(() => {
      alert("Order berhasil!");
    });
  }
  function toggleTheme(){
    document.body.classList.toggle("dark");
}
function getCurrentLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(pos => {
            let lat = pos.coords.latitude;
            let lng = pos.coords.longitude;

            map.setView([lat, lng], 15);

            pickupPoint = [lat, lng];
            L.marker(pickupPoint).addTo(map);

            getAddress(lat, lng, "pickupText");
        });
    } else {
        alert("GPS tidak didukung");
    }
}function getCurrentLocation(){
    alert("Klik OK untuk ambil lokasi");

    if(!navigator.geolocation){
        alert("Browser tidak support GPS");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        pos => {
            alert("Berhasil ambil lokasi");

            let lat = pos.coords.latitude;
            let lng = pos.coords.longitude;

            map.setView([lat, lng], 15);

            pickupPoint = [lat, lng];
            L.marker(pickupPoint).addTo(map);

            getAddress(lat, lng, "pickupText");
        },
        err => {
            alert("ERROR: " + err.message);
        }
    );
}
    }
}
let driverMarkers = [];

function loadDrivers(){
    drivers.forEach(driver => {
        let marker = L.marker([driver.lat, driver.lng], {
            icon: L.icon({
                iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854894.png",
                iconSize: [35,35]
            })
        }).addTo(map)
        .bindPopup(`🚗 ${driver.nama} <br>Status: ${driver.status}`);

        driverMarkers.push(marker);
    });
}
function applyDarkRouting(){
    setTimeout(() => {
        let panel = document.querySelector('.leaflet-routing-container');
        if(!panel) return;

        if(document.body.classList.contains("dark")){
            panel.style.background = "rgba(30,30,30,0.95)";
            panel.style.color = "white";

            panel.querySelectorAll('*').forEach(el=>{
                el.style.color = "white";
            });
        } else {
            panel.style.background = "white";
            panel.style.color = "black";

            panel.querySelectorAll('*').forEach(el=>{
                el.style.color = "black";
            });
        }
    }, 200);
}