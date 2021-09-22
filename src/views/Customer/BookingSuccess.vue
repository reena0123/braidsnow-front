<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Booking</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Booking</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content success-page-cont">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6">

					<div class="card success-card">
						<div class="card-body">
							<div class="success-cont">
								<i class="fas fa-check"></i>
								<h3>Appointment booked Successfully!</h3>
								<p>Appointment booked with <strong>Dr. Darren Elder</strong><br> on <strong>12 Apr 2021 5:00PM to 6:00PM</strong></p>
								<router-link :to="{name:'Invoice'}" class="btn btn-primary view-inv-btn">View Invoice
								</router-link>	
								
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
		name:'BookingSuccess',
		components:{MenuComponent},
	}
</script>