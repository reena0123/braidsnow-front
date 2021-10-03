<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Dashboard</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> Dashboard</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="row">
						<div class="col-md-12">
							<div class="card dash-card">
								<div class="card-body">
									<div class="row">
										<div class="col-md-12 col-lg-4">
											<div class="dash-widget dct-border-rht">
												<div class="circle-bar">
													<img src="assets/img/icon-01.png" class="img-fluid" alt="customer">
												</div>
												<div class="dash-widget-info">
													<h6>Total Customers</h6>
													<h3>{{ totalCustomers.length }} </h3>
													<p class="text-muted">Till Today</p>
												</div>
											</div>
										</div>
										<div class="col-md-12 col-lg-4">
											<div class="dash-widget dct-border-rht">
												<div class="circle-bar">
													<img src="assets/img/icon-02.png" class="img-fluid" alt="Customer">
												</div>
												<div class="dash-widget-info">
													<h6>Today Customers</h6>
													<h3>{{ newCustomer.length }} </h3>
													<p class="text-muted">06, Apr 2021</p>
												</div>
											</div>
										</div>
										<div class="col-md-12 col-lg-4">
											<div class="dash-widget">
												<div class="circle-bar">
													<img src="assets/img/icon-03.png" class="img-fluid" alt="Customer">
												</div>
												<div class="dash-widget-info">
													<h6>Appoinments</h6>
													<h3>{{ totalAppointments }} </h3>
													<p class="text-muted">06, Apr 2021</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<h4 class="mb-4">Customer Appoinment</h4>
							<div class="appointment-tab">

								<ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
									<li class="nav-item">
										<a class="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
									</li>
								</ul>

								<div class="tab-content">

									<div class="tab-pane show active" id="upcoming-appointments">
										<div class="card card-table mb-0">
											<div class="card-body">
												<div class="table-responsive">
													<table class="table table-hover table-center mb-0">
														<thead>
														<tr>
														<th>Customer Name</th>
														<th>Appt Date</th>
														<th>Services</th>
													<!-- 	<th>Type</th> -->
														<th class="text-center">Paid Amount</th>
														<th></th>
														</tr>
														</thead>
														<tbody>
															<tr v-for="todayAppointment in upcomingAppointments" :key="todayAppointment.id">
																<td>
																<h2 class="table-avatar">
																<router-link :to="{name:'Dashboard'}" class="avatar avatar-sm mr-2">

																<img 
																class="avatar-img rounded-circle"
																:src="basePath+todayAppointment.user.avatar"
																>
																</router-link>
																
																<router-link :to="{name:'Dashboard'}">
																	{{ todayAppointment.user.name || todayAppointment.full_name }} <span>#PT000{{todayAppointment.id}} </span>
																</router-link>
																
																
																</h2>
																</td>
																<td>{{todayAppointment.schedule_date}} <span class="d-block text-info"> {{todayAppointment.schedule_time}}</span></td>
																<td>Box Braids</td>
															<!-- 	<td>Old Customer</td> -->
																<td class="text-center">
																	{{todayAppointment.paid_paid}}
																</td>
																<td class="text-right">
																<div class="table-action">
																<!-- 	<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																	<i class="far fa-eye"></i> View
																	</a>
																	<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																	<i class="fas fa-check"></i> Accept
																	</a> -->
																	<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																	<i class="fas fa-times"></i> Cancel
																	</a>
																</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>


									<div class="tab-pane" id="today-appointments">
										<div class="card card-table mb-0">
											<div class="card-body">
												<div class="table-responsive">
													<table class="table table-hover table-center mb-0">
														<thead>
															<tr>
															<th>Customer Name</th>
															<th>Appt Date</th>
															<th>Services</th>
														<!-- 	<th>Type</th> -->
															<th class="text-center">Paid Amount</th>
															<th></th>
															</tr>
														</thead>
														<tbody>
														
															<tr v-for="appointment in todayAppointments" :key="appointment.id">
																<td>
																<h2 class="table-avatar">
																<router-link :to="{name:'Dashboard'}" class="avatar avatar-sm mr-2">

																<img 
																class="avatar-img rounded-circle"
																:src="basePath+appointment.user.avatar"
																>
																</router-link>
																
																<router-link :to="{name:'Dashboard'}">
																	{{ appointment.user.name || appointment.full_name }} <span>#PT000{{appointment.id}} </span>
																</router-link>
																
																
																</h2>
																</td>
																<td>{{appointment.schedule_date}} <span class="d-block text-info"> {{appointment.schedule_time}}</span></td>
																<td>Box Braids</td>
															<!-- 	<td>Old Customer</td> -->
																<td class="text-center">
																	{{appointment.paid_paid}}
																</td>
																<td class="text-right">
																<div class="table-action">
																<!-- 	<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																	<i class="far fa-eye"></i> View
																	</a>
																	<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																	<i class="fas fa-check"></i> Accept
																	</a> -->
																	<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																	<i class="fas fa-times"></i> Cancel
																	</a>
																</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
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
	import User from '@/models/User'
	import AssetsPath from '@/utils/AssetsPath'
	import { 
		getAllAppointment, 
		todayAppointment, 
		upcomingAppointment, 
		totalCustomer, 
		newCustomer, 
		totalAppointment 
	} from '@/services/dashboardService'

	export default {
		name:'BraiderDashboard',
		components:{MenuComponent,Sidebar},
		data(){
			return {
				appointments:[],
				todayAppointments:[],
				upcomingAppointments:[],
				totalCustomers:0,
				newCustomer:0,
				totalAppointments:0
			}
		},
		computed:{
			user(){
				return User.query().first();
			},
			token(){
				const user = User.query().first();
				return user.api_token;
			},
			basePath(){
				return AssetsPath;
			}
		},
		async mounted(){
			
			await this.allAppointment();
			await this.getTotalCustomer();
			await this.getTodayAppointment();
			await this.upcomingAppointment();
			await this.getNewCustomer();
			await this.getTotalAppointment();
			
		},
		methods:{

			async allAppointment(){

				await getAllAppointment(this.token)
				.then(async res => {
					this.appointments = await res.data.data
				})
			},
			async getTotalCustomer(){
				
				await totalCustomer(this.token)
				.then(async res => {

					this.totalCustomers = await res.data.data
				})
				.catch(() => {
					this.$router.push({name:'home'});
				});
			},
			async getTodayAppointment(){

				await todayAppointment(this.token)
				.then(async res => {
					this.todayAppointments = await res.data.data
				})
				.catch(() => {
					this.$router.push({name:'home'});
				});
			},
			async upcomingAppointment(){

				await upcomingAppointment(this.token)
				.then(async res => {
					this.upcomingAppointments = await res.data.data
				})
				.catch(() => {
					this.$router.push({name:'home'});
				});
			},
			async getNewCustomer(){
				
				await newCustomer(this.token)
				.then(async res => {
					this.newCustomer = await res.data.data
				})
				.catch(() => {
					this.$router.push({name:'home'});
				});
			},
			async getTotalAppointment(){
				
				await totalAppointment(this.token)
				.then(async res => {
					this.totalAppointments = await res.data.data
				})
				.catch(() => {
					this.$router.push({name:'home'});
				});
			}
		}
	}
</script>