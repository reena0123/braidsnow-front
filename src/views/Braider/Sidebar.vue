<template>
	<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

					<div class="profile-sidebar">
						<div class="widget-profile pro-widget-content">
							<div class="profile-info-widget">
								<a href="#" class="booking-pro-img">
								<img :src="user.avatar?basePath+user.avatar:previewImage" :alt="user.name">
								
								</a>
								<div class="profile-det-info">
									<h3>{{ user.name}} </h3>
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
										<router-link :to="{name:'BraiderDashboard'}">
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
										<router-link :to="{name:'Portfolio'}">						
										<i class="fas fa-blog"></i>
										<span>PortFolio</span>
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
										<router-link :to="{name:'BraiderProfile'}">
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
										<router-link :to="{name:'BraiderChangePassword'}">
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
	import User from '@/models/User'
	import AssetsPath from '@/utils/AssetsPath'

	export default{

		name:'Sidebar',
		data(){
			return {
				
				previewImage: 'assets/img/theraphist/theraphist-thumb-01.png'
			}
		},
		computed:{
			user(){
				const user = User.query().first();
				
				return user;
			},
			basePath(){
				return AssetsPath;
			}
		},
		methods:{
			onLogout(){
				
				localStorage.removeItem('api_token');
				User.deleteAll();
				this.$router.push({ name: 'Home'});
			}
		}
	}
</script>