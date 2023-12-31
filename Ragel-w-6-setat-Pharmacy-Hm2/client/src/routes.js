/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import AdminDashboard from "views/AdminDashboard.js";
import PatientAdmin from "views/AdminViews/Patient.js";
import PharmacistAdmin from "views/AdminViews/Pharmacists.js";
import PatientDashboard from "views/PatientDashboard.js";
import PharmacistDashboard from "views/PharmacistDashboard.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import PatientRegister from "views/Authentication/PatientRegister.js";
import PharmacistRegister from "views/Authentication/PharmacistRegister.js";
import Login from "views/examples/Login.js";
import ForgotPassword from "views/examples/ForgotPassword.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import HandlePharmReq from "views/AdminViews/HandlePharmReq";
import UploadDocuments from "views/PharmacistViews/UploadDocuments";
import Admins from "views/AdminViews/Admins";

import Cart from "views/PatientViews/Cart";
import Checkout from "views/PatientViews/Checkout";
import Orders from "views/PatientViews/Orders";
import ViewAllMedicinePatient from "views/PatientViews/ViewAllMedicine";

import AddMedicine from "views/PharmacistViews/AddMedicine";
import EditMedicine from "views/PharmacistViews/EditMedicine";
import ViewAllMedicinePharmacist from "views/PharmacistViews/ViewAllMedicine";
import ViewMedSales from "views/PharmacistViews/ViewMedSales";


//TODO fix this with the respective layout
//TODO add menu levewls
var routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <AdminDashboard />,
    layout: "/admin",
  },
  {
    path: "/patients",
    name: "Patients",
    icon: "ni ni-tv-2 text-primary",
    component: <PatientAdmin />,
    layout: "/admin",
  },
  {
    path: "/pharmacists",
    name: "Pharmacists",
    icon: "ni ni-tv-2 text-primary",
    component: <PharmacistAdmin />,
    layout: "/admin",
  },
  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <PatientDashboard />,
    layout: "/patient",
  },
  {
    path: "/cart",
    name: "Cart",
    icon: "ni ni-tv-2 text-primary",
    component: <Cart />,
    layout: "/patient",
  },
  {
    path: "/checkout",
    name: "Checkout",
    icon: "ni ni-tv-2 text-primary",
    component: <Checkout />,
    layout: "/patient",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "ni ni-tv-2 text-primary",
    component: <Orders />,
    layout: "/patient",
  },
  {
    path: "/viewallmedicinepatient",
    name: "View All Medicine - Patient",
    icon: "ni ni-tv-2 text-primary",
    component: <ViewAllMedicinePatient />,
    layout: "/patient",
  },

  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <PharmacistDashboard />,
    layout: "/pharmacist",
  },
  {
    path: "/addmedicine",
    name: "Add Medicine",
    icon: "ni ni-tv-2 text-primary",
    component: <AddMedicine />,
    layout: "/pharmacist",
  },
  {
    path: "/editMedicine",
    name: "Edit Medicine",
    icon: "ni ni-tv-2 text-primary",
    component: <EditMedicine />,
    layout: "/pharmacist",
  },
  
  {
    path: "/viewallmedicine",
    name: "View All Medicine - Pharmacist",
    icon: "ni ni-tv-2 text-primary",
    component: <ViewAllMedicinePharmacist />,
    layout: "/pharmacist",
  },
  {
    path: "/viewmedsales",
    name: "View Med Sales",
    icon: "ni ni-tv-2 text-primary",
    component: <ViewMedSales />,
    layout: "/pharmacist",
  },

  {
    path: "/admins",
    name: "Admins",
    icon: "ni ni-tv-2 text-primary",
    component: <Admins />,
    layout: "/admin",
  },
  
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/forgotPassword",
    name: "Forgot Password",
    icon: "ni ni-key-25 text-info",
    component: <ForgotPassword />,
    layout: "/auth",
  },
  {
    path: "/patientRegister",
    name: "PatientRegister",
    icon: "ni ni-circle-08 text-pink",
    component: <PatientRegister />,
    layout: "/auth",
  },
  {
    path: "/pharmacistRegister",
    name: "PharmacistRegister",
    icon: "ni ni-circle-08 text-pink",
    component: <PharmacistRegister />,
    layout: "/auth",
  },
  { //Handle Pharm Req in the layout Admin (will make a layout for every role)
    path: "/HandlePharmReq",
    name: "HandlePharmReq",
    icon: "ni ni-circle-08 text-pink",
    component: <HandlePharmReq />,
    layout: "/admin",
  },
//FIXME change layout to /pharmacist 
//FIXME how to render profile info of that specific pharmacist
  { //Handle Pharm Req in the layout Admin (will make a layout for every role)
    path: "/UploadDocuments",
    name: "Upload documents",
    icon: "ni ni-circle-08 text-pink",
    component: <UploadDocuments />,
    layout: "/pharmacist",
  }
  
];
export default routes;
