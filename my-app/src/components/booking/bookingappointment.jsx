import React, { useState } from "react";
import "./booking.css";

const BookingAppointment = () => {
	const [timeSlots, setTimeSlots] = useState([
		"09:00 AM",
		"10:00 AM",
		"11:00 AM",
		"01:00 PM",
		"02:00 PM",
		"03:00 PM",
		"04:00 PM",
		"05:00 PM",
	]);
	const [bookedAppointments, setBookedAppointments] = useState([]);
	const [selectedTime, setSelectedTime] = useState("");

	const renderTimeSlots = () => {
		return timeSlots.map((timeSlot) => (
			<div
				key={timeSlot}
				className={`time-slot ${
					bookedAppointments.includes(timeSlot) ? "booked" : ""
				}`}
				onClick={() =>
					openBookingModal(timeSlot, bookedAppointments.includes(timeSlot))
				}
			>
				{timeSlot}
			</div>
		));
	};

	const renderButtons = () => {
		return (
			<div className="button-container">
				<button className="button button-edit" onClick={openEditModal}>
					Edit Appointments
				</button>
			</div>
		);
	};

	const openBookingModal = (timeSlot, isBooked) => {
		setSelectedTime(timeSlot);

		if (isBooked) {
			document.querySelector(".cancel-button").style.display = "inline-block";
		} else {
			document.querySelector(".cancel-button").style.display = "none";
		}

		document.getElementById("bookingModal").style.display = "flex";
	};

	const openEditModal = () => {
		document.getElementById("editModal").style.display = "flex";
	};

	const closeModal = () => {
		document.getElementById("bookingModal").style.display = "none";
		document.getElementById("editModal").style.display = "none";
	};

	const confirmBooking = () => {
		setBookedAppointments([...bookedAppointments, selectedTime]);
		closeModal();
		alert(`Appointment booked for ${selectedTime}`);
	};

	const cancelBooking = () => {
		const index = bookedAppointments.indexOf(selectedTime);

		if (index !== -1) {
			setBookedAppointments([
				...bookedAppointments.slice(0, index),
				...bookedAppointments.slice(index + 1),
			]);
			closeModal();
			alert(`Booking canceled for ${selectedTime}`);
		}
	};

	return (
		<div>
			<div id="app">
				{renderTimeSlots()}
				{renderButtons()}
			</div>

			<div id="bookingModal" className="modal">
				<div className="modal-content">
					<span className="close-button" onClick={closeModal}>
						&times;
					</span>
					<h2>Book Appointment</h2>
					<p>
						Selected Time: <span id="selectedTime">{selectedTime}</span>
					</p>
					<button className="button" onClick={confirmBooking}>
						Confirm Booking
					</button>
					<button className="button cancel-button" onClick={cancelBooking}>
						Cancel Booking
					</button>
				</div>
			</div>

			<div id="editModal" className="modal">
				<div className="modal-content">
					<span className="close-button" onClick={closeModal}>
						&times;
					</span>
					<h2>Edit Appointments</h2>
					<p>Edit functionality goes here.</p>
				</div>
			</div>
		</div>
	);
};

export default BookingAppointment;
