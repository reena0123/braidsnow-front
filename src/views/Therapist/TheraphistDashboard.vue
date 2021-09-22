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
													<h3>1500</h3>
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
													<h3>160</h3>
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
													<h3>85</h3>
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
														<th>Purpose</th>
														<th>Type</th>
														<th class="text-center">Paid Amount</th>
														<th></th>
														</tr>
														</thead>
														<tbody>
															<tr v-for="i in 10" :key="i">
																<td>
																<h2 class="table-avatar">
																<router-link :to="{name:'Dashboard'}" class="avatar avatar-sm mr-2">
																<img class="avatar-img rounded-circle" src="assets/img/customers/customer.jpg">
																</router-link>
																
																<router-link :to="{name:'Dashboard'}">
																	Richard Wilson <span>#PT0016</span>
																</router-link>
																
																</h2>
																</td>
																<td>11 Apr 2021 <span class="d-block text-info">10.00 AM</span></td>
																<td>General</td>
																<td>New Customer</td>
																<td class="text-center">$150</td>
																<td class="text-right">
																	<div class="table-action">
																		<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																		<i class="far fa-eye"></i> View
																		</a>
																		<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																		<i class="fas fa-check"></i> Accept
																		</a>
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
															<th>Purpose</th>
															<th>Type</th>
															<th class="text-center">Paid Amount</th>
															<th></th>
															</tr>
														</thead>
														<tbody>
														
															<tr v-for="i in 10" :key="i">
																<td>
																<h2 class="table-avatar">
																<router-link :to="{name:'Dashboard'}" class="avatar avatar-sm mr-2">
																<img class="avatar-img rounded-circle" src="assets/img/customers/customer7.jpg">
																</router-link>
																
																<router-link :to="{name:'Dashboard'}">
																	Joan Gardner <span>#PT0006</span>
																</router-link>
																
																
																</h2>
																</td>
																<td>14 Apr 2021 <span class="d-block text-info">5.00 PM</span></td>
																<td>General</td>
																<td>Old Customer</td>
																<td class="text-center">$100</td>
																<td class="text-right">
																<div class="table-action">
																	<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																	<i class="far fa-eye"></i> View
																	</a>
																	<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																	<i class="fas fa-check"></i> Accept
																	</a>
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
	export default {
		name:'TheraphistDashboard',
		components:{MenuComponent,Sidebar},
		methods:{
			onLogout(){
				localStorage.setItem('user','');
				this.$router.push({ name: 'Home'});
			}
		}
	}
</script>