document.getElementById("travelForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const data = {
    destination: document.getElementById("destination").value,
    days: document.getElementById("days").value,
    budget: document.getElementById("budget").value,
    modeoftravel: document.getElementById("modeoftravel").value,
    numberofpeople: document.getElementById("numberofpeople").value,
    email: document.getElementById("email").value,
    preferences: document.getElementById("preferences").value
  };

  const webhookURL = "https://aswinr005.app.n8n.cloud/webhook/641a2706-7a00-4579-b0ae-6fb211dd3edb"; 

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("message").style.color = "green";
      document.getElementById("message").innerText =
        "✅ Itinerary request sent! Check your email soon.";
      document.getElementById("travelForm").reset();
    } else {
      throw new Error("Failed");
    }
  })
  .catch(error => {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerText =
      "❌ Error sending request. Please try again.";
  });
});
