<template>
	<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

					<div class="profile-sidebar">
						<div class="widget-profile pro-widget-content">
							<div class="profile-info-widget">
								<a href="#" class="booking-pro-img">
								<img src="assets/img/theraphist/theraphist-thumb-01.jpg" alt="User Image">
								</a>
								<div class="profile-det-info">
									<h3>Ashley Willes</h3>
									<div class="customer-details">
									<h5 class="mb-0">Hair Stylist, Theraphist</h5>
									</div>
								</div>
							</div>
						</div>
						<div class="dashboard-widget">
							<nav class="dashboard-menu">
								<ul>
									<li>
										<router-link :to="{name:'TheraphistDashboard'}">
											<i class="fas fa-columns"></i>
											<span>Dashboard</span>
										</router-link>
										
									</li>
									<li>
										<router-link :to="{name:'Appointments'}">
											<i class="fas fa-calendar-check"></i>
											<span>Appointments</span>
										</router-link>
									</li>
									<li>
										<router-link :to="{name:'MyCustomer'}">
										<i class="fas fa-user-injured"></i>
										<span>My customers</span>
										</router-link>
									</li>
									<li>
										<router-link :to="{name:'ScheduleTiming'}">
										<i class="fas fa-hourglass-start"></i>
										<span>Schedule Timings</span>
										</router-link>
									</li>
									<li>
										<router-link :to="{name:'InvoiceList'}">
										<i class="fas fa-file-invoice"></i>
										<span>Invoices</span>
										</router-link>
									</li>
									<li>
										<router-link :to="{name:'Reviews'}">
										<i class="fas fa-star"></i>
										<span>Reviews</span>
										</router-link>
									</li>
									
									<li>
										<router-link :to="{name:'TheraphistProfileSetting'}">
										<i class="fas fa-user-cog"></i>
										<span>Profile Settings</span>
										</router-link>
									</li>
									<li>
										<router-link :to="{name:'SocialMedia'}">
										<i class="fas fa-share-alt"></i>
										<span>Social Media</span>
										</router-link>
									</li>
									<li>
										<router-link :to="{name:'TheraphistChangePassword'}">
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
</template>
<script>
	export default{

		name:'Sidebar'
	}
</script>