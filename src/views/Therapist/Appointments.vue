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
					<div class="appointments">

						<div class="appointment-list" v-for="i in 5" :key="i">
							<div class="profile-info-widget">
								<a href="customer-profile.html" class="booking-pro-img">
								<img src="assets/img/customers/customer.jpg" alt="User Image">
								</a>
								<div class="profile-det-info">
									<h3><a href="customer-profile.html">Richard Wilson</a></h3>
									<div class="customer-details">
										<h5><i class="far fa-clock"></i> 14 Apr 2021, 10.00 AM</h5>
										<h5><i class="fas fa-map-marker-alt"></i> Newyork, United States</h5>
										<h5><i class="fas fa-envelope"></i> <a href="https://pathivu.dreamguystech.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="86f4efe5eee7f4e2c6e3fee7ebf6eae3a8e5e9eb">[email&#160;protected]</a></h5>
										<h5 class="mb-0"><i class="fas fa-phone"></i> +1 923 782 4575</h5>
									</div>
								</div>
							</div>
							<div class="appointment-action">
								<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
								<i class="far fa-eye"></i> View
								</a>
								<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
								<i class="fas fa-check"></i> Accept
								</a>
								<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
								<i class="fas fa-times"></i> Cancel
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<!-- model -->
	<div class="modal fade custom-modal" id="appt_details">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Appointment Details</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<ul class="info-details">
						<li>
							<div class="details-header">
							<div class="row">
							<div class="col-md-6">
							<span class="title">#APT0001</span>
							<span class="text">21 Mar 2021 10:00 AM</span>
							</div>
							<div class="col-md-6">
							<div class="text-right">
							<button type="button" class="btn bg-success-light btn-sm" id="topup_status">Completed</button>
							</div>
							</div>
							</div>
							</div>
						</li>
						<li>
							<span class="title">Status:</span>
							<span class="text">Completed</span>
						</li>
						<li>
							<span class="title">Confirm Date:</span>
							<span class="text">29 May 2021</span>
						</li>
						<li>
							<span class="title">Paid Amount</span>
							<span class="text">$450</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import MenuComponent from '../../components/Layout/Menu'
	import Sidebar from './Sidebar'
	export default{
		name:'Appointments',
		components:{MenuComponent,Sidebar},
	}
</script>