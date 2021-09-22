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
									<li>
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
									<li class="active">
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
			<div class="card-body">
			<div class="row">
			<div class="col-md-12 col-lg-6">

			<form>
			<div class="form-group">
			<label>Old Password</label>
			<input type="password" class="form-control">
			</div>
			<div class="form-group">
			<label>New Password</label>
			<input type="password" class="form-control">
			</div>
			<div class="form-group">
			<label>Confirm Password</label>
			<input type="password" class="form-control">
			</div>
			<div class="submit-section">
			<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
			</div>
			</form>

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
		name:'ChangePassword',
		components:{MenuComponent},
		methods:{
			onLogout(){
				localStorage.setItem('user','');
				this.$router.push({ name: 'Home'});
			}
		}
	}
</script>