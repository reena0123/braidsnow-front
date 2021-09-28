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
								</div>
								
								<form action="https://pathivu.dreamguystech.com/dreamspa/index.html">
									<div class="form-group form-focus">
										<input type="email" class="form-control floating" v-model="email">
										<label class="focus-label">Email</label>
										<span class="text-danger">
											{{errorEmail}}
										</span>
									</div>
									<div class="form-group form-focus">
										<input type="password" class="form-control floating" v-model="password">
										
										<label class="focus-label">Password</label>
										<span class="text-danger">
											{{errorPassword}}
										</span>
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
	import { braiderLogin } from '@/services/auth'
	import User from '@/models/User'

	export default {
		name:'Login',
		components:{MenuComponent},
		data:() => {
			return {
				email:'',
				password:'',
				errorEmail:'',
				errorPassword:''
			}
		},
		methods:{
			async onLogin(){

				braiderLogin({
					email: this.email,
					password: this.password
				}).then(async res => {

					console.log(res.data);
					await User.insert({data: res.data.user});
					
					await localStorage.setItem('api_token',res.data.token);
					
					this.$router.push({name:'BraiderDashboard'});

				}).catch(err => {

					if(err.response.data.errors && err.response.data.errors.email){

						this.errorEmail = err.response.data.errors.email[0];

					}else{
						this.errorEmail = "";
					}

					if (err.response.data.errors && err.response.data.errors.password) {
						
						this.errorPassword = err.response.data.errors.password[0];

					}else{
						this.errorPassword  = "";
					}
				})
				
			}	
		}
	}
</script>