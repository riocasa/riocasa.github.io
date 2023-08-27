function sendData() {
  var pageloader = document.getElementById("loader");
  pageloader.style.display = "block";
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://script.google.com/macros/s/AKfycbxkrSqtiOmZ9VAJBeUm2jitGsPBBwYDeLOPetsFhcxiZU6lACJgqlRuS9Q1h87HSA5G6g/exec", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request was successful
      console.log(xhr.responseText);
      // Handle the response here
    
      alert('Data successfully stored');
  const redirectUrl = "./rio_casa.html";
  var queryParameters = "?";
  queryParameters += "name=" + encodeURIComponent(formData.get("Name")) + "&";
  queryParameters += "contact=" + encodeURIComponent(formData.get("Contact")) + "&";
  queryParameters += "amount=" + encodeURIComponent(formData.get("Advance")) + "&";
  queryParameters += "balance=" + encodeURIComponent(formData.get("Balance")) + "&";
  queryParameters += "checkin=" + encodeURIComponent(new Date(formData.get("Check in")).toLocaleDateString('en-GB')) + "&";
  queryParameters += "checkout=" + encodeURIComponent(new Date(formData.get("Check out")).toLocaleDateString('en-GB'));
  window.location.href = redirectUrl + queryParameters;
    }
  };
  xhr.send(formData);
  
}