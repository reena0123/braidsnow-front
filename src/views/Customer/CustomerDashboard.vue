<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Customer Dashboard</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Customer Dashboard</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">

				<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
					<div class="profile-sidebar">
						<div class="widget-profile pro-widget-content">
							<div class="profile-info-widget">
								<a href="#" class="booking-pro-img">
								<img src="assets/img/customers/customer.jpg" alt="User Image">
								</a>
								<div class="profile-det-info">
									<h3>Richard Wilson</h3>
									<div class="customer-details">
										<h5><i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
										<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</h5>
									</div>
								</div>
							</div>
						</div>
						<div class="dashboard-widget">
							<nav class="dashboard-menu">
								<ul>
									<li class="active">
										<router-link :to="{name:'Dashboard'}">
											<i class="fas fa-columns"></i>
											<span>Dashboard</span>
										</router-link>
										
									</li>
									<li>
										<router-link :to="{name:'Favourite'}">
											<i class="fas fa-bookmark"></i>
											<span>Favourites</span>
										</router-link>
										
									</li>
									
									<li>
										<router-link :to="{name:'ProfileSetting'}">
											<i class="fas fa-user-cog"></i>
											<span>Profile Settings</span>
										</router-link>
										
									</li>
									<li>
										<router-link :to="{name:'ChangePassword'}">
											<i class="fas fa-lock"></i>
											<span>Change Password</span>
										</router-link>
										
									</li>
									<li>
										<a href="javascript:;" @click="onLogout">
											<i class="fas fa-sign-out-alt"></i>
											<span>Logout</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="card">
						<div class="card-body pt-0">

							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<a class="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#pat_medical_records" data-toggle="tab"><span class="med-records">Theraphy</span></a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#pat_billing" data-toggle="tab">Billing</a>
									</li>
								</ul>
							</nav>


							<div class="tab-content pt-0">

								<div id="pat_appointments" class="tab-pane fade show active">
									<div class="card card-table mb-0">
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-hover table-center mb-0">
													<thead>
													<tr>
													<th>Theraphist</th>
													<th>Appt Date</th>
													<th>Booking Date</th>
													<th>Amount</th>
													<th>Follow Up</th>
													<th>Status</th>
													<th></th>
													</tr>
													</thead>
													<tbody>
														<tr  v-for="i in 20" :key="i">
															<td>
															<h2 class="table-avatar">
															<a href="theraphist-profile.html" class="avatar avatar-sm mr-2">
															<img class="avatar-img rounded-circle" src="assets/img/theraphist/theraphist-thumb-01.jpg" alt="User Image">
															</a>
															<a href="theraphist-profile.html">Ruby Perrin <span>Theraphist</span></a>
															</h2>
															</td>
															<td>14 Apr 2021 <span class="d-block text-info">10.00 AM</span></td>
															<td>12 Apr 2021</td>
															<td>$160</td>
															<td>16 Apr 2021</td>
															<td><span class="badge badge-pill bg-success-light">Confirm</span></td>
															<td class="text-right">
															<div class="table-action">
															<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
															<i class="fas fa-print"></i> Print
															</a>
															<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
															<i class="far fa-eye"></i> View
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


								<div id="pat_medical_records" class="tab-pane fade">
									<div class="card card-table mb-0">
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-hover table-center mb-0">
													<thead>
													<tr>
													<th>ID</th>
													<th>Date </th>
													<th>Description</th>
													<th>Attachment</th>
													<th>Created</th>
													<th></th>
													</tr>
													</thead>
													<tbody>
														<tr  v-for="i in 10" :key="i">
															<td><a href="javascript:void(0);">#MR-0010</a></td>
															<td>14 Apr 2021</td>
															<td>Theraphist Filling</td>
															<td><a href="#">Theraphist-test.pdf</a></td>
															<td>
															<h2 class="table-avatar">
															<a href="theraphist-profile.html" class="avatar avatar-sm mr-2">
															<img class="avatar-img rounded-circle" src="assets/img/theraphist/theraphist.jpg" alt="User Image">
															</a>
															<a href="theraphist-profile.html">Ashley Willes <span>Theraphist</span></a>
															</h2>
															</td>
															<td class="text-right">
															<div class="table-action">
															<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
															<i class="far fa-eye"></i> View
															</a>
															<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
															<i class="fas fa-print"></i> Print
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


								<div id="pat_billing" class="tab-pane fade">
									<div class="card card-table mb-0">
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-hover table-center mb-0">
													<thead>
													<tr>
													<th>Invoice No</th>
													<th>Doctor</th>
													<th>Amount</th>
													<th>Paid On</th>
													<th></th>
													</tr>
													</thead>
													<tbody>
														<tr  v-for="i in 10" :key="i">
															<td>
															<router-link :to="{name:'Invoice'}">
															#INV-0010</router-link>
															
															</td>
															<td>
															<h2 class="table-avatar">
															<a href="theraphist-profile.html" class="avatar avatar-sm mr-2">
															<img class="avatar-img rounded-circle" src="assets/img/theraphist/theraphist.jpg" alt="User Image">
															</a>
															<a href="theraphist-profile.html">Ruby Perrin <span>Theraphist</span></a>
															</h2>
															</td>
															<td>$450</td>
															<td>14 Apr 2021</td>
															<td class="text-right">
															<div class="table-action">
															<router-link :to="{name:'Invoice'}" class="btn btn-sm bg-info-light"><i class="far fa-eye"></i>
															View</router-link>
															
															<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
															<i class="fas fa-print"></i> Print
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
	
</template>
<script>
	import MenuComponent from '../../components/Layout/Menu'
	export default {
		name:'Dashboard',
		components:{MenuComponent},
		methods:{
			onLogout(){
				localStorage.setItem('user','');
				this.$router.push({ name: 'Home'});
			}
		}
	}
</script>