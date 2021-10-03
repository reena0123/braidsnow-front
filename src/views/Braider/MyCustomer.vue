<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">My Customer</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> My Customer</h2>
				</div>
				
			</div>
		</div>
	</div>
	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="row row-grid">
						<div class="col-md-6 col-lg-4 col-xl-3" v-for="customers in customer" :key="customers.id" >
							<div class="card widget-profile pat-widget-profile">
								<div class="card-body">
									<div class="pro-widget-content">
										<div class="profile-info-widget">
											<a href="customer-profile.html" class="booking-pro-img">
											<img :src="customers.avatar?assetsUrl+customers.avatar:previewImage" alt="User Image">
											</a>
											<div class="profile-det-info">
												<h3><a href="">{{ customers.name }}</a></h3>
												<div class="customer-details">
													<h5><b>Customer ID :</b> P00{{ customers.id }}</h5>
													<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> {{ customers.address }}</h5>
												</div>
											</div>
										</div>
									</div>
									<div class="customer-info">
										<ul>
										<li>Phone <span>{{ customers.phone_number }}</span></li>
										<li>Age <span>{{ getBirthdayYear(customers.dob) }}</span></li>
										<li>Gender <span>{{ customers.gender }}</span></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						
						
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import MenuComponent from '../../components/Layout/Menu'
	import Sidebar from './Sidebar'
	import { customer } from '@/services/myCustomer'
	import moment from 'moment'
	import AssetsPath from '@/utils/AssetsPath'
	import Customer from '@/models/Customer'
	import User from '@/models/User'
	export default{
		name:'MyCustomer',
		components:{MenuComponent,Sidebar},

		data(){
		return {
			customer:[],			
			assetsUrl:'',
			previewImage: 'assets/img/theraphist/theraphist-thumb-01.png'
		}

		},
		computed:{
			token(){
				const user = User.query().first();
				return user.api_token;
			}
		},

		mounted(){
			
			this.assetsUrl = AssetsPath;
			
			if(Customer.exists()){
				this.customer = Customer.query().all();

				customer(this.token).then(res =>{
					this.customer = res.data.data
					
					Customer.insert({data:res.data.data})
				})
				.catch(err => console.log(err))

			}else{
				
				customer(this.token).then(async res => {
					this.customer = await res.data.data
					Customer.insert({data:res.data.data})
				})
				.catch(err => console.log(err))
			}
			
		},
		methods:{
			getBirthdayYear(dob){
				return moment(dob, "DD/MM/YYYY").month(0).from(moment().month(0))
			}
		}
	}
</script>