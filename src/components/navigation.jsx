import Login from "./pages/login";
// import config from "config";
import Addblog from "./pages/Blog/Addblog";
import Editblog from "./pages/Blog/Editblog";
import BlogView from "./pages/Blog/BlogView";
import Blogdetails from "./pages/Blog/Blogdetails";
//Doctor
import DoctorList from "./doctor/DoctorList";
import AddDoctor from "./doctor/AddDoctor";
import EditDoctor from "./doctor/EditDoctor";
import DoctorProfile from "./doctor/DoctorProfile";
//Patients...
import PatientsList from "./patients/PatientsList";
import AddPatients from "./patients/AddPatients";
import EditPatients from "./patients/EditPatients";
import PatientsProfile from "./patients/PatientsProfile";
import AppoinmentList from "./appoinments/AppoinmentList";
import AddAppoinments from "./appoinments/AddAppoinments";
import AddFirstAppoinments from "./appoinments/AddFirstAppoinment";
import EditAppoinments from "./appoinments/EditAppoinments";
//DoctorSchedule
import ScheduleList from "./doctorschedule/ScheduleList";

import AddSchedule from "./doctorschedule/AddSchedule";
import EditSchedule from "./doctorschedule/EditSchedule";
import ForgotPassword from "./pages/login/ForgotPassword";
import Signup from "./pages/login/Signup";
import ChangePassword from "./pages/login/ChangePassword";
import Error from "./pages/login/Error";
import Calender from "./calender/Calender";
import Profile from "./pages/login/Profile";
import Doctor_Dashboard from "./Dashboard/Doctor_Dashboard/Doctor_Dashboard";
import Admin_Dashboard from "./Dashboard/Admin_Dashboard/Admin_Dashboard";
import Patient_Dashboard from "./Dashboard/Patient_Dashboard/Patient_Dashboard";
import Doctor_Settings from "./Dashboard/Doctor_Dashboard/Doctor_Settings";
import Patient_Settings from "./patients/Patient_Settings";
import HomePage from "./pages/login/HomePage";
import FormIngreso from "./pages/login/FormIngreso";

export const nav = [
  { path: "/", name: "Home", element: <HomePage />, isPrivate: false, type: 'public' },
  { path: "/login", name: "Login", element: <Login />, isPrivate: false, type: 'public' },
  { path: "/form", name: "FormIngreso", element: <FormIngreso />, isPrivate: false, type: 'public' },
  { path: "/signup", name: "Signup", element: <Signup />, isPrivate: false, type: 'public' },
  { path: "/profile", name: "Profile", element: <Profile />, isPrivate: true, type: 'alumno' },
  { path: "/doctorlist", name: "DoctorList", element: <DoctorList />, isPrivate: true, type: 'admin' },
  { path: "/add-doctor", name: "AddDoctor", element: <AddDoctor />, isPrivate: true, type: 'admin' },
  { path: "/editdoctor/:id", name: "EditDoctor", element: <EditDoctor />, isPrivate: true, type: 'admin' },
  { path: "/doctorprofile", name: "DoctorProfile", element: <DoctorProfile />, isPrivate: true, type: 'profesional' },
  { path: "/doctor-setting", name: "Doctor_Settings", element: <Doctor_Settings />, isPrivate: true, type: 'admin' },
  { path: "/patientslist", name: "PatientsList", element: <PatientsList />, isPrivate: true, type: 'admin' },
  { path: "/addpatients", name: "AddPatients", element: <AddPatients />, isPrivate: true, type: 'profesional' },
  { path: "/editpatients/:id", name: "EditPatients", element: <EditPatients />, isPrivate: true, type: 'profesional' },
  { path: "/patientsprofile", name: "PatientsProfile", element: <PatientsProfile />, isPrivate: true, type: 'profesional' },
  { path: "/patient-settings", name: "Patient_Settings", element: <Patient_Settings />, isPrivate: true, type: 'profesional' },
  { path: "/appoinmentlist", name: "AppoinmentList", element: <AppoinmentList />, isPrivate: true, type: 'profesional' },
  { path: "/addappoinments", name: "AddAppoinments", element: <AddAppoinments />, isPrivate: true, type: 'profesional' },
  { path: "/addfirstappoinment", name: "AddFirstAppoinments", element: <AddFirstAppoinments />, isPrivate: true, type: 'alumno' },
  { path: "/editappoinments/:id", name: "EditAppoinments", element: <EditAppoinments />, isPrivate: true, type: 'profesional' },
  { path: "/schedulelist", name: "ScheduleList", element: <ScheduleList />, isPrivate: true, type: 'profesional' },
  { path: "/addschedule", name: "AddSchedule", element: <AddSchedule />, isPrivate: true, type: 'profesional' },
  { path: "/editschedule/:id", name: "EditSchedule", element: <EditSchedule />, isPrivate:true, type: 'profesional' },
  { path: "/calender", name: "Calender", element: <Calender />, isPrivate: true, type: 'profesional' },
  { path: "/admin-dashboard", name: "Admin_Dashboard", element: <Admin_Dashboard />, isPrivate: true, type: 'admin' },
  { path: "/doctor-dashboard", name: "Doctor_Dashboard", element: <Doctor_Dashboard />, isPrivate: true, type: 'admin' },
  { path: "/patient-dashboard", name: "Patient_Dashboard", element: <Patient_Dashboard />, isPrivate: true, type: 'admin' },
  { path: "/blog/:id", name: "Blogdetails", element: <Blogdetails />, isPrivate: false, type: 'public' },
  { path: "/addblog", name: "Addblog", element: <Addblog />, isPrivate: true, type: 'admin' },
  { path: "/editblog", name: "Editblog", element: <Editblog />, isPrivate: true, type: 'admin' },
  { path: "/blogview", name: "BlogView", element: <BlogView />, isPrivate: false, type: 'public' },
  { path: "/forgotpassword", name: "ForgotPassword", element: <ForgotPassword />, isPrivate: false, type: 'alumno' },
  { path: "/changepassword", name: "ChangePassword", element: <ChangePassword />, isPrivate: false, type: 'alumno' },
  { path: "/error", name: "Error", element: <Error />, isPrivate: false, type: 'public' },
]

