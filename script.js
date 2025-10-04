/* ==== Dark Mode ==== */
function toggleMode() {
  document.body.classList.toggle("dark");
}

/* ==== Embedded JSON ==== */
const terminalsData = [
  { "id": 1, "name": "High Court", "location": "Near High Court Junction" },
  { "id": 2, "name": "Vypin", "location": "Vypin Ferry Terminal" },
  { "id": 3, "name": "South Chittoor", "location": "Chittoor Road" },
  { "id": 4, "name": "Bolgatty", "location": "Bolgatty Palace Road" }
];

const newsData = [
  { "id": 1, "title": "New Routes Launched", "content": "WaterMetro introduces 2 new routes connecting key city hubs.", "date": "2025-09-28" },
  { "id": 2, "title": "Digital Payments Upgrade", "content": "Now enjoy UPI & card payments directly at terminals.", "date": "2025-09-22" },
  { "id": 3, "title": "Eco-Friendly Fleet", "content": "All ferries upgraded to electric for zero emissions.", "date": "2025-09-15" }
];

/* ==== Populate Terminals ==== */
const terminalList = document.getElementById("terminalList");
terminalsData.forEach((t, i) => {
  const div = document.createElement("div");
  div.className = "terminal-card";
  div.style.animationDelay = `${i * 0.2}s`;
  div.innerHTML = `<i class="fa-solid fa-ship"></i><h4>${t.name}</h4><p>${t.location}</p>`;
  terminalList.appendChild(div);
});

/* ==== Populate News ==== */
const newsList = document.getElementById("newsList");
newsData.forEach((n, i) => {
  const div = document.createElement("div");
  div.className = "news-item";
  div.style.animationDelay = `${i * 0.2}s`;
  div.innerHTML = `<h4>${n.title}</h4><p>${n.content}</p><small>${n.date}</small>`;
  newsList.appendChild(div);
});

/* ==== Populate Booking Dropdowns ==== */
const source = document.getElementById("source");
const destination = document.getElementById("destination");
terminalsData.forEach(t => {
  const opt1 = document.createElement("option");
  opt1.value = t.name;
  opt1.textContent = t.name;
  source.appendChild(opt1);

  const opt2 = document.createElement("option");
  opt2.value = t.name;
  opt2.textContent = t.name;
  destination.appendChild(opt2);
});

/* ==== Booking Form ==== */
function submitBooking(e) {
  e.preventDefault();
  const s = source.value;
  const d = destination.value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const p = document.getElementById("passengers").value;
  if (s === d) {
    alert("Source and destination cannot be the same.");
    return;
  }
  alert(`✅ Booking Confirmed!\n\nFrom: ${s}\nTo: ${d}\nDate: ${date}\nTime: ${time}\nPassengers: ${p}\n\nProceeding to payment...`);
}
