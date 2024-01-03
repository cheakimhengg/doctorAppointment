import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "../ui/topBar";
import NavBar from "../ui/navBar";
import Footer from "../ui/footer";
import "./bookingappointment.css";

const AppointmentsBooking = () => {
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
	const [isBooked, setIsBooked] = useState(false);
	const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const renderTimeSlots = () => {
		return timeSlots.map((timeSlot, index) => (
			<div
				key={index}
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
		setIsBooked(isBooked);
		setIsBookingModalOpen(true);
	};

	const openEditModal = () => {
		setIsEditModalOpen(true);
	};

	const closeModal = () => {
		setIsBookingModalOpen(false);
		setIsEditModalOpen(false);
	};

	const confirmBooking = () => {
		setBookedAppointments([...bookedAppointments, selectedTime]);
		closeModal();
		alert(`Appointment booked for ${selectedTime}`);
	};

	const cancelBooking = () => {
		const index = bookedAppointments.indexOf(selectedTime);

		if (index !== -1) {
			bookedAppointments.splice(index, 1);
			setBookedAppointments([...bookedAppointments]);
			closeModal();
			alert(`Booking canceled for ${selectedTime}`);
		}
	};

	return (
		<>
			{/* <TopBar /> */}
			{/* <NavBar /> */}
			<div id="app">
				{renderTimeSlots()}
				{renderButtons()}
			</div>
			<div
				id="bookingModal"
				className={`modal ${
					isBookingModalOpen ? "display-flex" : "display-none"
				}`}
			>
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
					<button
						className={`button cancel-button ${isBooked ? "" : "display-none"}`}
						onClick={cancelBooking}
					>
						Cancel Booking
					</button>
				</div>
			</div>
			<div
				id="editModal"
				className={`modal ${isEditModalOpen ? "display-flex" : "display-none"}`}
			>
				<div className="modal-content">
					<span className="close-button" onClick={closeModal}>
						&times;
					</span>
					<h2>Edit Appointments</h2>
					<p>Edit functionality goes here.</p>
				</div>
			</div>
		</>
	);
};

export default AppointmentsBooking;
