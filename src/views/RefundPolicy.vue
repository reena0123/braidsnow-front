<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Refund Policy</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Refund Policy</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-lg-12 col-xl-12">
					<p>BraidsNow.com LLC is not obligated to provide credits or refunds to Stylists, but may grant them in justifiable situations, or to correct any oversights made by BraidsNow.com LLC in each case at BraidsNow.com LLC’s sole discretion. BraidsNow.com LLC is not responsible for mediating any disputes that result from using the services. In the event that legal action is taken against the Company, Users agree to arbitration in lieu of court hearings.</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import MenuComponent from '../components/Layout/Menu'
	export default{
		name:'RefundPolicy',
		components:{MenuComponent},
	}
</script>