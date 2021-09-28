import { createWebHistory, createRouter } from "vue-router";
import User from '@/models/User';
import {UserInfo} from '@/services/userService';

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
const BraiderDashboard = () => import("@/views/Therapist/BraiderDashboard");
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
	meta: {
		guest: true
	}
},
{
	path: "/register",
	name: "Register",
	component: Register,
	meta: {
		guest: true
	}
},
{
	path: "/forgot-password",
	name: "ForgotPassword",
	component: ForgotPassword,
	meta: {
		guest: true
	}
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
	meta: {
		guest: true
	}
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
	meta: {
		requiresAuth: true,
		is_customer : true
	}
},
{
	path: "/booking",
	name: "Booking",
	component: Booking,
	meta: {
		requiresAuth: true,
		is_customer : true
	}
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
	meta: {
		requiresAuth: true,
		is_customer : true
	}
},
{
	path: "/favourite",
	name: "Favourite",
	component: Favourite,
	meta: {
		requiresAuth: true,
		is_customer : true
	}
},
{
	path: "/profile-setting",
	name: "ProfileSetting",
	component: ProfileSetting,
	meta: {
		requiresAuth: true,
		is_customer : true
	}
},
{
	path: "/change-password",
	name: "ChangePassword",
	component: ChangePassword,
	meta: {
		requiresAuth: true,
		is_customer : true
	}
},
{
	path: "/braider-dashboard",
	name: "BraiderDashboard",
	component: BraiderDashboard,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/appointments",
	name: "Appointments",
	component: Appointments,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/my-customer",
	name: "MyCustomer",
	component: MyCustomer,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/schedule-timing",
	name: "ScheduleTiming",
	component: ScheduleTiming,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/invoice-list",
	name: "InvoiceList",
	component: InvoiceList,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/reviews",
	name: "Reviews",
	component: Reviews,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/theraphist-profile-setting",
	name: "TheraphistProfileSetting",
	component: TheraphistProfileSetting,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/social-media",
	name: "SocialMedia",
	component: SocialMedia,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/braider/change-password",
	name: "TheraphistChangePassword",
	component: TheraphistChangePassword,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},

];


const router = createRouter({
	mode: 'history',
	history: createWebHistory(),
	routes,
});

router.beforeEach(async (to, from, next) => {
	
	const user = User.query().first();
	if (user == null && localStorage.getItem('api_token') != null) {

		await UserInfo()
			.then(async res => {

				await User.insert({data:res.data.data});
				
			}).catch(async () => {
				
				await User.deleteAll();
			});
	}
	if (to.matched.some(record => record.meta.requiresAuth)) {

		const user = User.query().first();
	
		if (user == null) {
			next({
				path: '/login',
				params: { nextUrl: to.fullPath }
			})
		}else {
			
			if (to.matched.some(record => record.meta.is_braider)) {
				if (user.role_id == 2) {
					next()
				} else  {
					next({ name: 'Home' })
				}
			} else if(to.matched.some(record => record.meta.is_customer)) {
				if (user.role_id == 1) {
					next()
				} else  {
					next({ name: 'Home' })
				}
			}else{
				return false;
			}
		}
	}else if (to.matched.some(record => record.meta.guest)) {
			
		const user = User.query().first();
		if (user == null) {
			next()
		} else {
			next({ name: 'Home' })
		}

	} else {
		next()
	}
})

router.beforeEach(() => {
	window.scrollTo({
		top:0,
		behavior: 'smooth',
	})
});

export default router;