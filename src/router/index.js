import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("@/views/Home");
const Login = () => import("@/views/Auth/Login");
const Register = () => import("@/views/Auth/Register");
const ForgotPassword = () => import("@/views/Auth/ForgetPassword");
const BusinessRegister = () => import("@/views/Auth/BusinessRegister");
const PrivacyPolicy = () => import("@/views/PrivacyPolicy");
const About = () => import("@/views/About");
const TermAndCondition = () => import("@/views/TermAndCondition");
const RefundPolicy = () => import("@/views/RefundPolicy");
const FAQ = () => import("@/views/FAQ");
const BraiderList = () => import("@/views/Customer/List");
const Profile = () => import("@/views/Customer/Profile");
const Booking = () => import("@/views/Customer/Booking");
const Checkout = () => import("@/views/Customer/Checkout");
const BookingSuccess = () => import("@/views/Customer/BookingSuccess");
const Invoice = () => import("@/views/Customer/Invoice");
const Dashboard = () => import("@/views/Customer/CustomerDashboard");
const Favourite = () => import("@/views/Customer/Favourite");
const ProfileSetting = () => import("@/views/Customer/ProfileSetting");
const ChangePassword = () => import("@/views/Customer/ChangePassword");
const TheraphistDashboard = () => import("@/views/Therapist/TheraphistDashboard");
const Appointments = () => import("@/views/Therapist/Appointments");
const MyCustomer = () => import("@/views/Therapist/MyCustomer");
const ScheduleTiming = () => import("@/views/Therapist/ScheduleTiming");
const InvoiceList = () => import("@/views/Therapist/InvoiceList");
const Reviews = () => import("@/views/Therapist/Reviews");
const TheraphistProfileSetting = () => import("@/views/Therapist/TheraphistProfileSetting");
const SocialMedia = () => import("@/views/Therapist/SocialMedia");
const TheraphistChangePassword = () => import("@/views/Therapist/TheraphistChangePassword");

const routes = [{
	path: "/",
	name: "Home",
	component: Home,
},
{
	path: "/login",
	name: "Login",
	component: Login,
},
{
	path: "/register",
	name: "Register",
	component: Register,
},
{
	path: "/forgot-password",
	name: "ForgotPassword",
	component: ForgotPassword,
},
{
	path: "/privacy-policy",
	name: "PrivacyPolicy",
	component: PrivacyPolicy,
},
{
	path: "/about",
	name: "About",
	component: About,
},
{
	path: "/term-and-condition",
	name: "TermAndCondition",
	component: TermAndCondition,
},
{
	path: "/refund-policy",
	name: "RefundPolicy",
	component: RefundPolicy,
},
{
	path: "/faq",
	name: "FAQ",
	component: FAQ,
},
{
	path: "/business-register",
	name: "BusinessRegister",
	component: BusinessRegister,
},
{
	path: "/braider-list",
	name: "BraiderList",
	component: BraiderList,
},

{
	path: "/profile",
	name: "Profile",
	component: Profile,
},
{
	path: "/booking",
	name: "Booking",
	component: Booking,
},
{
	path: "/checkout",
	name: "Checkout",
	component: Checkout,
},
{
	path: "/booking-success",
	name: "BookingSuccess",
	component: BookingSuccess,
},
{
	path: "/invoice",
	name: "Invoice",
	component: Invoice,
},
{
	path: "/customer-dashboard",
	name: "Dashboard",
	component: Dashboard,
},
{
	path: "/favourite",
	name: "Favourite",
	component: Favourite,
},
{
	path: "/profile-setting",
	name: "ProfileSetting",
	component: ProfileSetting,
},
{
	path: "/change-password",
	name: "ChangePassword",
	component: ChangePassword,
},
{
	path: "/braider-dashboard",
	name: "TheraphistDashboard",
	component: TheraphistDashboard,
},
{
	path: "/appointments",
	name: "Appointments",
	component: Appointments,
},
{
	path: "/my-customer",
	name: "MyCustomer",
	component: MyCustomer,
},
{
	path: "/schedule-timing",
	name: "ScheduleTiming",
	component: ScheduleTiming,
},
{
	path: "/invoice-list",
	name: "InvoiceList",
	component: InvoiceList,
},
{
	path: "/reviews",
	name: "Reviews",
	component: Reviews,
},
{
	path: "/theraphist-profile-setting",
	name: "TheraphistProfileSetting",
	component: TheraphistProfileSetting,
},
{
	path: "/social-media",
	name: "SocialMedia",
	component: SocialMedia,
},
{
	path: "/theraphist-change-password",
	name: "TheraphistChangePassword",
	component: TheraphistChangePassword,
},

];


const router = createRouter({
	mode: 'history',
	history: createWebHistory(),
	routes,
});

router.beforeEach(() => {
  window.scrollTo({
  top:0,
  behavior: 'smooth',
})
  // ...
});

export default router;