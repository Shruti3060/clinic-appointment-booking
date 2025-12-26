document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    let appointment = {
        name,
        age,
        doctor,
        date
    };

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    document.getElementById("message").innerText = "Appointment Booked Successfully!";
    document.getElementById("appointmentForm").reset();
});
