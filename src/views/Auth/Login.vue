<template>
	<MenuComponent/>
	<div class="content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-8 offset-md-2">
					<div class="account-content">
						<div class="row align-items-center justify-content-center">
							<div class="col-md-7 col-lg-6 login-left">
								<img src="assets/img/login-banner.png" class="img-fluid" alt="Dreamspa Login">
							</div>
							<div class="col-md-12 col-lg-6 login-right">
								<div class="login-header">
									<h3>Login <span>Braidsnow</span></h3>
								<span class="text-danger">
									{{this.errorMessage}}
								</span>
								</div>
								
								<form action="https://pathivu.dreamguystech.com/dreamspa/index.html">
									<div class="form-group form-focus">
										<input type="email" class="form-control floating" v-model="email">
										<label class="focus-label">Email</label>
									</div>
									<div class="form-group form-focus">
										<input type="password" class="form-control floating" v-model="password">
										
										<label class="focus-label">Password</label>
									</div>
									<div class="text-right">
										<router-link class="forgot-link" :to="{name:'ForgotPassword'}">Forgot Password ?</router-link>
									</div>
									<button class="btn btn-primary btn-block btn-lg login-btn" type="button" @click="onLogin">Login</button>
									<div class="login-or">
										<span class="or-line"></span>
										<span class="span-or">or</span>
									</div>
									<div class="text-center dont-have">Don’t have an account? 
										<router-link :to="{name:'Register'}">Register</router-link>
									</div>
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
		name:'Login',
		components:{MenuComponent},
		data:() => {
			return {
				customerEmail:'customer@gmail.com',
				customerPassword:'12345678',
				braiderEmail:'braider@gmail.com',
				braiderPassword:'12345678',
				email:'',
				password:'',
				errorMessage:''
			}
		},
		methods:{
			async onLogin(){

				this.errorMessage = "";
				if (this.email == this.customerEmail && this.password == this.customerPassword) {
					
					await localStorage.setItem('user','customer');

					this.$router.push({ name: 'Home'});

				}else if(this.email == this.braiderEmail && this.password == this.braiderPassword){

					await localStorage.setItem('user','braider');

					this.$router.push({ name: 'Home'});
				}
				else{
					this.errorMessage = "These credentials do not match our records."
				}
			}	
		}
	}
</script>