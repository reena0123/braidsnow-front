<template>
	<MenuComponent/>
	<section class="section home-banner row-middle">
		<div class="inner-bg"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-7 col-md-7"></div>
				<div class="col-lg-5 col-md-5">
					<div class="banner-content">
					<!-- 	<img src="assets/img/logospa.png" class="img-fluid" alt="Dream spa"> -->
						<h1 style="margin-top: 70px; font-family:Arial,sans-serif !important;">Welcome to BraidsNow.com!</h1>
						<p>Finally an appoinment booking site made just with you in mind.</p>
						<router-link :to="{name:'BraiderList'}" class="btn btn-primary book-btn">Book now</router-link>
						
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="section services">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-7 mx-auto">
					<div class="section-header text-center">
					<img width="59" height="44" alt="Logo" src="assets/img/icon.png">
					<h2 class="header-title" style="font-family:Arial,sans-serif !important;s">OUR BEST SERVICES</h2>
					<p class="header-subtitle">Being the pampering connoisseurs that we are, we have discovered some wonderful spa services</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-right">
					<div class="owl-nav mynav"></div>
				</div>
				<div class="col-md-4" v-for="service in service" :key="service.id">
					
						
							<div class="item">
								<div class="services-item">
									<div class="img-part">
										<img :src="assetsUrl+service.image" class="img-fluid" 
										:alt="service.title">
									</div>
									<div class="content-part">
										<div class="content-text">
											<h3>{{ service.title }}</h3>
											<h4 class="title">{{ service.user_services_count}} Braiders</h4>
										</div>
									</div>
									<div class="hover">
										<div class="text booking-btn">
											<router-link :to="{name:'BraiderList'}">Book Now</router-link>
										</div>
									</div>
								</div>
							</div>
						
					
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<div class="see-all  text-center">
						<router-link :to="{name:'BraiderList'}" class="btn btn-primary book-btn">View All</router-link>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="section theraphist">
		<div class="container">
			<div class="row">
				<div class="col-md-7 col-sm-12 col-12 mx-auto">
					<div class="section-header text-center">
						<img width="59" height="44" alt="Logo" src="assets/img/icon.png">
							<h2 class="header-title" style="font-family:Arial,sans-serif !important;">TOP RATED BRAIDER</h2>
<p class="header-subtitle">You can choose the various type of massage you want from kinds of massages our team has expertise in!</p>
</div>
</div>
</div>

<div class="row">
	<div class="col-md-3" v-for="braider in topBraiders" :key="braider.id">
					
						
							<div class="item">
<div class="theraphist-item">
<div class="img-part">
<a href="theraphist-profile.html">
	<img :src="assetsUrl+braider.avatar" class="img-fluid" :alt="braider.name"></a>
</div>
<div class="profile-info">
<h3><a href="">{{ braider.name }}</a></h3>
<h4 class="title">{{ (braider.user_services.map(service => service.service)) }}</h4>
<div class="rating">
	<i class="fa fa-star checked" v-for="i in braider.ratting" :key="i"></i>
	<i class="fa fa-star non-checked" v-for="j in 5 - braider.ratting" :key="j"></i>
</div>
</div>
<div class="profile-detail">

</div>
<div class="see-all  text-center">
	<router-link :to="{name:'Profile'}" class="btn btn-primary booking-btn">BOOK NOW</router-link>
</div>
</div>
</div>
						
					
				</div>
			
				
				
<div class="col-12" style="margin-top: 20px;">
<div class="see-all  text-center">
	<router-link :to="{name:'BraiderList'}" class="btn btn-primary book-btn">View All</router-link>
</div>
</div>
</div>
</div>
</section>
<section class="section treatments">
<div class="container">
<div class="row">
<div class="col-md-12">
<h3>Why Join BraidsNow.com</h3>
	
		<p style="font-size: 18px;">1. Time Management: Easy Booking System for You and Your Clients</p>
		<p  style="font-size: 18px;">2. Community: Join An Elite Network Of Professional Braiders</p>
		<p  style="font-size: 18px;">3. Compensation: Increase Clientele By Receiving Extra Promo</p>
		<p  style="font-size: 18px;">4. Freedom: Make Your Own Schedule</p>
	
</div>
</div>
</div>
</section>
<section class="section experience">
<div class="container">
<div class="row">

<div class="col-md-3 col-sm-6 col-xs-6 bg-right text-center">
<div class="img-part">
<img src="assets/img/towel-set-bathing-therapy.png" alt="towel set">
</div>
<div class="count-list">
<h2 class="count1">5000 +</h2>
</div>
<h4>THERAPHIES DONE</h4>
</div>


<div class="col-md-3 col-sm-6 col-xs-6 bg-right text-center">
<div class="img-part">
<img src="assets/img/beauty-care-therapy.png" alt="beauty care therapy">
</div>
<div class="count-list">
<h2 class="count2">10000 +</h2>
</div>
<h4>CUSTOMERS</h4>
</div>


<div class="col-md-3 col-sm-6 col-xs-6 bg-right text-center">
<div class="img-part">
<img src="assets/img/sss1.png" alt="treatment">
</div>
<div class="count-list">
<h2 class="count3">2500 +</h2>
</div>
<h4>TREATMENTS</h4>
</div>


<div class="col-md-3 col-sm-6 col-xs-6 text-center">
<div class="img-part">
<img src="assets/img/tri-color-leaves.png" alt="Braiders">
</div>
<div class="count-list">
<h2 class="count4">1500 +</h2>
</div>
<h4>Braiders</h4>
</div>

</div>
</div>
</section>
</template>

<script>
import MenuComponent from '../components/Layout/Menu'
import { getTopBraider, getService } from '@/services/homepage'

import AssetsPath from '@/utils/AssetsPath'
export default {
	name: 'Home',
	components:{MenuComponent},
	data(){
		return {
			topBraiders:[],
			assetsUrl:'',
			service:[],
		}
	},
	mounted(){
		
		this.assetsUrl = AssetsPath;

		getTopBraider().then(res => this.topBraiders = res.data.data)
		.catch(err => console.log(err))

		getService().then(res => this.service = res.data.data)
		.catch(err => console.log(err))

	},
}
</script>
<style scoped>
	
</style>
