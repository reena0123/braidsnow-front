<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Favourite</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Favourite</h2>
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
									<li>
										<router-link :to="{name:'Dashboard'}">
											<i class="fas fa-columns"></i>
											<span>Dashboard</span>
										</router-link>
									</li>
									<li class="active">
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
					<div class="row row-grid">
						<div class="col-md-6 col-lg-4">
							<div class="profile-widget">
								<div class="pro-img">
									<a href="theraphist-profile.html">
									<img class="img-fluid" alt="User Image" src="assets/img/theraphist/theraphist-01.jpg">
									</a>
									<a href="javascript:void(0)" class="fav-btn">
									<i class="far fa-bookmark"></i>
									</a>
								</div>
								<div class="pro-content">
									<h3 class="title">
									<a href="theraphist-profile.html">Ashley Willes</a>
									<i class="fas fa-check-circle verified"></i>
									</h3>
									<p class="speciality">Facial, Face Massage Theraphist</p>
									<div class="rating">
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<span class="d-inline-block average-rating">(17)</span>
									</div>
									<ul class="available-info">
										<li>
										<i class="fas fa-map-marker-alt"></i> Florida, USA
										</li>
										<li>
										<i class="far fa-clock"></i> Available on Fri, 22 Mar
										</li>
										<li>
										<i class="far fa-money-bill-alt"></i> $300 - $1000 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
										</li>
									</ul>
									<div class="row row-sm">
										<div class="col-6">
										<router-link :to="{name:'Profile'}" class="btn view-btn">
											View Profile
										</router-link>
										
										</div>
										<div class="col-6">
										<router-link :to="{name:'Booking'}" class="btn book-btn">
											Book Now
										</router-link>
										
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="profile-widget">
								<div class="pro-img">
									<a href="theraphist-profile.html">
									<img class="img-fluid" alt="User Image" src="assets/img/theraphist/theraphist-02.jpg">
									</a>
									<a href="javascript:void(0)" class="fav-btn">
									<i class="far fa-bookmark"></i>
									</a>
								</div>
								<div class="pro-content">
									<h3 class="title">
									<a href="theraphist-profile.html">Ruby Perrin</a>
									<i class="fas fa-check-circle verified"></i>
									</h3>
									<p class="speciality">Theraphist</p>
									<div class="rating">
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star"></i>
										<span class="d-inline-block average-rating">(35)</span>
									</div>
									<ul class="available-info">
										<li>
										<i class="fas fa-map-marker-alt"></i> Newyork, USA
										</li>
										<li>
										<i class="far fa-clock"></i> Available on Fri, 22 Mar
										</li>
										<li>
										<i class="far fa-money-bill-alt"></i> $50 - $300 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
										</li>
									</ul>
									<div class="row row-sm">
										<div class="col-6">
										<router-link :to="{name:'Profile'}" class="btn view-btn">
											View Profile
										</router-link>
										
										</div>
										<div class="col-6">
										<router-link :to="{name:'Booking'}" class="btn book-btn">
											Book Now
										</router-link>
										
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="profile-widget">
								<div class="pro-img">
									<a href="theraphist-profile.html">
									<img class="img-fluid" alt="User Image" src="assets/img/theraphist/theraphist-03.jpg">
									</a>
									<a href="javascript:void(0)" class="fav-btn">
									<i class="far fa-bookmark"></i>
									</a>
								</div>
								<div class="pro-content">
									<h3 class="title">
									<a href="theraphist-profile.html">Sofia Brient</a>
									<i class="fas fa-check-circle verified"></i>
									</h3>
									<p class="speciality">Theraphist</p>
									<div class="rating">
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star"></i>
										<span class="d-inline-block average-rating">(27)</span>
									</div>
									<ul class="available-info">
										<li>
										<i class="fas fa-map-marker-alt"></i> Georgia, USA
										</li>
										<li>
										<i class="far fa-clock"></i> Available on Fri, 22 Mar
										</li>
										<li>
										<i class="far fa-money-bill-alt"></i> $100 - $400 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
										</li>
									</ul>
									<div class="row row-sm">
										<div class="col-6">
										<router-link :to="{name:'Profile'}" class="btn view-btn">
											View Profile
										</router-link>
										
										</div>
										<div class="col-6">
										<router-link :to="{name:'Booking'}" class="btn book-btn">
											Book Now
										</router-link>
										
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
		name:'Favourite',
		components:{MenuComponent},
		methods:{
			onLogout(){
				localStorage.setItem('user','');
				this.$router.push({ name: 'Home'});
			}
		}
	}
</script>