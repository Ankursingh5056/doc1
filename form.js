
let form = document.querySelector("form");
let nameInput = document.getElementById("name");
let doctorIdInput = document.getElementById("doctor_id");
let specializationInput = document.getElementById("specialization");
let experienceInput = document.getElementById("experience");
let emailInput = document.getElementById("email");
let mobileInput = document.getElementById("mobile"); 
let tbody = document.querySelector("tbody");

let array = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let obj = {
        nam: nameInput.value,
        did: doctorIdInput.value,
        sp: specializationInput.value,
        exp: experienceInput.value,
        eml: emailInput.value,
        mbl: mobileInput.value,
    };

    array.push(obj);

    tbody.innerHTML = null;

    array.forEach((el) => {
        let row = document.createElement("tr");

        let tNam = document.createElement("td");
        tNam.textContent = el.nam;
        row.appendChild(tNam);

        let tDocId = document.createElement("td");
        tDocId.textContent = el.did;
        row.appendChild(tDocId);

        let tSpecialization = document.createElement("td");
        tSpecialization.textContent = el.sp;
        row.appendChild(tSpecialization);

        let tExperience = document.createElement("td");
        tExperience.textContent = el.exp;
        row.appendChild(tExperience);

        let tEmail = document.createElement("td");
        tEmail.textContent = el.eml;
        row.appendChild(tEmail);

        let tMobile = document.createElement("td");
        tMobile.textContent = el.mbl; 
        row.appendChild(tMobile);

        let tRole = document.createElement("td");
        if (el.exp > 5) {
            tRole.textContent = "Senior";
        } else if (el.exp >= 2 && el.exp <= 5) {
            tRole.textContent = "Junior";
        } else if (el.exp <= 1) {
            tRole.textContent = "Fresher";
        }
        row.appendChild(tRole);

        let tDelete = document.createElement("td");
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "DELETE";
        deleteBtn.addEventListener("click", function () {
            row.remove();
            deleteBtn.style.backgroundColor = "red";
        });
        tDelete.appendChild(deleteBtn);
        row.appendChild(tDelete);

        tbody.appendChild(row);
    });
});



