<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Social Media</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> Social Media</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="card">
						<div class="card-body">

							<form>
								<div class="row">
									<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label>Facebook URL</label>
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label>Twitter URL</label>
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label>Instagram URL</label>
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label>Pinterest URL</label>
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label>Linkedin URL</label>
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label>Youtube URL</label>
											<input type="text" class="form-control">
										</div>
									</div>
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
	
</template>
<script>
	import MenuComponent from '../../components/Layout/Menu'
	import Sidebar from './Sidebar'
	export default{
		name:'SocialMedia',
		components:{MenuComponent,Sidebar},
	}
</script>