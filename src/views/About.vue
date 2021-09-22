<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">About Us</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">About Us</h2>
				</div>
				
			</div>
		</div>
	</div>
	<div class="content">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-lg-12 col-xl-12">
					<p>BraidsNow.com is a simple and very user friendly appoinment booking system created specfically for Braiders and Stylists who specialize in Black hair textures. Our mission is to build a one stop shop for all things Braids and Black Hair including a large national regstry of stylists and to also provide valuable tools to stylists seeking to organize, grow, or maintain their business. BraidsNow.com is a centralized go-to site for anyone seeking a skilled braider/stylist in their area along with a hair community where we can share thoughts, ideas and inspiration. The Black community has often used word of mouth to find a braider or they have a braider in their family. Long gone are the days of having to stop a sis in the grocery store and ask, “who did your braids” or search endlessly online. BraidsNow.com is the place! </p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import MenuComponent from '../components/Layout/Menu'
	export default{
		name:'About',
		components:{MenuComponent},
	}
</script>