<template>
	<MenuComponent/>
	<div class="content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-8 offset-md-2">
					<div class="account-content">
						<div class="row align-items-center justify-content-center">
							<div class="col-md-7 col-lg-6 login-left">
								<img src="assets/img/login-banner.png" class="img-fluid" alt="Dreampa Register">
							</div>
							<div class="col-md-12 col-lg-6 login-right">
								<div class="login-header">
									<h3>Customer Register
										<router-link :to="{ name: 'BusinessRegister'}">
										Are you a Braider?
										</router-link>
									</h3>
								</div>
								<form action="https://pathivu.dreamguystech.com/dreamspa/theraphist-dashboard.html">
									<div class="form-group form-focus">
										<input type="text" class="form-control floating">
										<label class="focus-label">Name</label>
									</div>
									<div class="form-group form-focus">
										<input type="text" class="form-control floating">
										<label class="focus-label">Mobile Number</label>
									</div>
									<div class="form-group form-focus">
										<input type="password" class="form-control floating">
										<label class="focus-label">Create Password</label>
									</div>
									<div class="text-right">
										<router-link class="forgot-link" :to="{ name: 'Login'}">
											Already have an account?
										</router-link>
									</div>
									<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
									
								</form>
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
		name:'Register',
		components:{MenuComponent},
	}
</script>