let rides = JSON.parse(localStorage.getItem('rides') || '[]');

function requestRide() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const ride = { from, to };
  rides.push(ride);
  localStorage.setItem('rides', JSON.stringify(rides));
  document.getElementById("statusMsg").textContent = "✅ Ride requested successfully!";
}

function loadRides() {
  const list = document.getElementById("ridesList");
  if (!list) return;
  list.innerHTML = "";
  rides.forEach((ride, i) => {
    const li = document.createElement("li");
    li.innerText = From: ${ride.from} → To: ${ride.to};
    const btn = document.createElement("button");
    btn.textContent = "Accept / قبول";
    btn.onclick = () => {
      alert("🚗 Ride accepted!");
      rides.splice(i, 1);
      localStorage.setItem('rides', JSON.stringify(rides));
      loadRides();
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

window.onload = loadRides;
