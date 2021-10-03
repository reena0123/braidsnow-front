<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-12 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
					<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="">Home</a></li>
					<li class="breadcrumb-item active" aria-current="page">Invoices</li>
					</ol>
					</nav>
					<h2 class="breadcrumb-title">Invoices</h2>
				</div>
			</div> 
		</div>
	</div>


	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="card card-table">
						<div class="card-body">

							<div class="table-responsive">
								<table class="table table-hover table-center mb-0">
									<thead>
										<tr>
										<th>Invoice No</th>
										<th>customer</th>
										<th>Amount</th>
										<th>Paid On</th>
										<th></th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="i in 10" :key="i">
											<td>
												<router-link :to="{name:'Invoice'}">
												#INV-0010
												</router-link>
											</td>
											<td>
											<h2 class="table-avatar">
												<a href="customer-profile.html" class="avatar avatar-sm mr-2">
												<img class="avatar-img rounded-circle" src="assets/img/customers/customer.jpg" alt="User Image">
												</a>
												<a href="customer-profile.html">Richard Wilson 
												<span>#PT0016</span>
												</a>
											</h2>
											</td>
											<td>$450</td>
											<td>14 Apr 2021</td>
											<td class="text-right">
											<div class="table-action">
												<router-link :to="{name:'Invoice'}" class="btn btn-sm bg-info-light">
												
												<i class="far fa-eye"></i> View
												</router-link>
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
</template>
<script>
	import MenuComponent from '../../components/Layout/Menu'
	import Sidebar from './Sidebar'
	export default{
		name:'InvoiceList',
		components:{MenuComponent,Sidebar},
	}
</script>