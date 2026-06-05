```javascript
function updateProfile(){

document.getElementById("name").innerText =
document.getElementById("nameInput").value;

document.getElementById("usn").innerText =
document.getElementById("usnInput").value;

document.getElementById("dept").innerText =
document.getElementById("deptInput").value;

document.getElementById("sem").innerText =
document.getElementById("semInput").value;

document.getElementById("dob").innerText =
document.getElementById("dobInput").value;

document.getElementById("phone").innerText =
document.getElementById("phoneInput").value;

document.getElementById("email").innerText =
document.getElementById("emailInput").value;

document.getElementById("address").innerText =
document.getElementById("addressInput").value;

document.getElementById("attendance").innerText =
document.getElementById("attendanceInput").value + "%";

document.getElementById("cgpa").innerText =
document.getElementById("cgpaInput").value;

let achievements =
document.getElementById("achievementInput")
.value
.split(",");

let list =
document.getElementById("achievementList");

list.innerHTML = "";

achievements.forEach(function(item){

let li = document.createElement("li");

li.textContent = item.trim();

list.appendChild(li);

});

}
```
