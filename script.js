// ===== EDIT ONLY THIS SECTION =====

const student = {
    name: "Anoop Kumar",
    usn: "1BI25EC001",
    department: "ECE",
    semester: "2nd Semester",
    dob: "15-08-2007",
    phone: "9876543210",
    email: "anoop@email.com",
    address: "Bangalore, Karnataka",
    cgpa: "8.8",
    attendance: "93%",

    achievements: [
        "Python Certification",
        "Web Development Workshop",
        "IoT Bootcamp",
        "Hackathon Participant"
    ]
};

// ===== DON'T TOUCH BELOW =====

window.onload = function() {

    document.getElementById("name").innerText = student.name;
    document.getElementById("usn").innerText = student.usn;
    document.getElementById("department").innerText = student.department;
    document.getElementById("semester").innerText = student.semester;
    document.getElementById("dob").innerText = student.dob;
    document.getElementById("phone").innerText = student.phone;
    document.getElementById("email").innerText = student.email;
    document.getElementById("address").innerText = student.address;
    document.getElementById("cgpa").innerText = student.cgpa;

    let achievementList = document.getElementById("achievementsList");

    student.achievements.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        achievementList.appendChild(li);
    });
};

function showAttendance() {
    document.getElementById("attendanceResult").innerHTML =
        "Overall Attendance: " + student.attendance;
}
