import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import ServicePage from "./components/servicePage";
import DoctorInfo from "./components/doctorInfo";
import CardiologistPage from "./components/cardiologistPage";
import FamilyDoctorPage from "./components/familyDoctorPage";
import BloodTest from "./components/bloodTest";
import MentalHealth from "./components/mentalHealth";
import HealthCheckUp from "./components/healthCheckUp";
import Vaccination from "./components/vaccination";
import Pediatrician from "./components/pediatrician";
import Neurologist from "./components/neurologist";
import Psychiatrist from "./components/psychiatrist";
import Dentist from "./components/dentist";
import HealthArticles from "./components/healthArticles";
import Bookingappointment from "./components/booking/bookingappointment";
import Login from "./components/account/login";
import Signup from "./components/account/signUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "service",
		element: <ServicePage />,
	},
	{
		path: "doctorInfo",
		element: <DoctorInfo />,
	},
	{
		path: "cardiologist",
		element: <CardiologistPage />,
	},
	{
		path: "familyDoctor",
		element: <FamilyDoctorPage />,
	},
	{
		path: "bloodTest",
		element: <BloodTest />,
	},
	{
		path: "mentalHealth",
		element: <MentalHealth />,
	},
	{
		path: "healthCheckUp",
		element: <HealthCheckUp />,
	},
	{
		path: "vaccination",
		element: <Vaccination />,
	},
	{
		path: "pediatrician",
		element: <Pediatrician />,
	},
	{
		path: "neurologist",
		element: <Neurologist />,
	},
	{
		path: "psychiatrist",
		element: <Psychiatrist />,
	},
	{
		path: "dentist",
		element: <Dentist />,
	},
	{
		path: "healthArticles",
		element: <HealthArticles />,
	},
	{
		path: "bookingappointment",
		element: <Bookingappointment />,
	},
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "Signup",
		element: <Signup />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
