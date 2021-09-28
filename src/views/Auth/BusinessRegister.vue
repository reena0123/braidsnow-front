<template>
	<MenuComponent/>
	<div class="content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-8 offset-md-2">
					<div class="account-content">
						<div class="row align-items-center justify-content-center">
							
							<div class="col-md-12 col-lg-10 login-right">
								<div class="login-header">
									<h3>Braider Register 
										<router-link :to="{name:'Register'}">Not a Braider?</router-link>
									</h3>
								</div>
								<div class="row form-row">
									<div class="col-md-12">
									<div class="form-group">
										<div class="change-avatar">
											<div class="profile-img">
												<img 
												:src="previewAvatar" 
												alt="User Image">
											</div>
											<div class="upload-img">
												<div class="change-photo-btn">
													<span><i class="fa fa-upload"></i> Upload Photo</span>
													<input 
													type="file" 
													class="upload"
													@change="onUploadAvatar" 
													accept="image/*">
												</div>
												<small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 500KB</small>
												<small v-if="errors.avatar" class="form-text text-danger">
													{{errors.avatar}}
												</small>
											</div>
										</div>
									</div>
								</div>
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Full Name <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control" 
											v-model="data.name"
											:class="{'is-invalid':errors.name}"
											placeholder="Enter Your Name">
											<small v-if="errors.name" class="form-text text-danger">
												{{errors.name}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>State <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control" 
											v-model="data.state"
											:class="{'is-invalid':errors.state}"
											placeholder="Enter Your State">
											<small v-if="errors.state" class="form-text text-danger">
												{{errors.state}}
											</small>
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>City <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control"
											v-model="data.city" 
											:class="{'is-invalid':errors.city}"
											placeholder="Enter Your City">
											<small v-if="errors.city" class="form-text text-danger">
												{{errors.city}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Zip Code <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control" 
											v-model="data.zipcode"
											:class="{'is-invalid':errors.zipcode}"
											placeholder="Enter Your Zip Code">
											<small v-if="errors.zipcode" class="form-text text-danger">
												{{errors.zipcode}}
											</small>
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Email <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control" 
											v-model="data.email"
											:class="{'is-invalid':errors.email}"
											placeholder="Enter Your Email">
											<small v-if="errors.email" class="form-text text-danger">
												{{errors.email}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Business Name </label>
											<input 
											type="text" 
											class="form-control"
											v-model="data.businessName" 
											:class="{'is-invalid':errors.businessName}"
											placeholder="Enter Your Business Name">
											<small v-if="errors.businessName" class="form-text text-danger">
												{{errors.businessName}}
											</small>
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Add Website Link </label>
											<input 
											type="text" 
											class="form-control" 
											v-model="data.websiteLink"
											:class="{'is-invalid':errors.websiteLink}"
											placeholder="Enter Your URL">
											<small v-if="errors.websiteLink" class="form-text text-danger">
												{{errors.websiteLink}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Business Phone Number <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control" 
											v-model="data.business_phone_number"
											:class="{'is-invalid':errors.business_phone_number}"
											placeholder="Enter Your Phone Number">
											<small v-if="errors.business_phone_number" class="form-text text-danger">
												{{errors.business_phone_number}}
											</small>
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Introduction </label>
											<textarea 
											class="form-control" 
											v-model="data.introduction"
											:class="{'is-invalid':errors.introduction}"
											placeholder="Tell Us About Yourself"></textarea>
											<small v-if="errors.introduction" class="form-text text-danger">
												{{errors.introduction}}
											</small>
										</div>
									</div>
									
								</div>
								<div class="row form-row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Special Instruction for new clients <span class="text-danger">*</span></label>
											<textarea 
											class="form-control" 
											v-model="data.special_introduction"
											:class="{'is-invalid':errors.special_introduction}"
											placeholder="Instruction"></textarea>
											<small v-if="errors.special_introduction" class="form-text text-danger">
												{{errors.special_introduction}}
											</small>
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Policy/Procedure <span class="text-danger">*</span></label>
											<textarea 
											v-model="data.policy_procedure"
											class="form-control" 
											:class="{'is-invalid':errors.policy_procedure}"
											placeholder="Enter Your policy_procedure/Procedure"></textarea>
											<small v-if="errors.policy_procedure" class="form-text text-danger">
												{{errors.policy_procedure}}
											</small>
										</div>
									</div>
								</div>
								<div class="row form-row">

									<div class="col-md-4">
										<label>Do you braid out of a shop? <span class="text-danger">*</span></label>
										
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="outOfShopYes"
													class="custom-control-input"
													v-model="data.outOfShop"
													value="1"
													checked="" 
													name="outOfShop"
													>
													<label class="custom-control-label" for="outOfShopYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="outOfShopNo"
													v-model="data.outOfShop"
													value="0"
													name="outOfShop"
													class="custom-control-input">
													<label class="custom-control-label" for="outOfShopNo">No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<label>Do you braid from home? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													class="custom-control-input"  
													id="fromHomeYes"
													v-model="data.fromHome"
													value="1"
													checked="">
													<label class="custom-control-label" for="fromHomeYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="fromHomeNo"
													v-model="data.fromHome"
													value="0"
													class="custom-control-input">
													<label class="custom-control-label" for="fromHomeNo">No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<label>Are you a mobile / traveling braider? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="travelingBraiderYes"
													v-model="data.travelingBraider"
													value="1" 
													name="travelingBraider" 
													class="custom-control-input"  
													checked="">
													<label class="custom-control-label" for="travelingBraiderYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio"
													id="travelingBraiderNo"
													v-model="data.travelingBraider"
													value="0"  
													name="travelingBraider"  
													class="custom-control-input">
													<label class="custom-control-label" for="travelingBraiderNo">No</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br>
								<div class="row form-row">
									
									<div class="col-md-6">
										<label>Can you provide hair? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="provideHairYes"
													v-model="data.provideHair"
													name="provideHair" 
													class="custom-control-input"  
													value="1" 
													checked="">
													<label class="custom-control-label" for="provideHairYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="provideHairNo"
													v-model="data.provideHair"
													name="provideHair"  
													value="0" 
													class="custom-control-input">
													<label class="custom-control-label" for="provideHairNo">No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<label>Do you wash hair? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="washHairYes"
													name="washHair"
													v-model="data.washHair" 
													value="1" 
													class="custom-control-input"  
													checked="">
													<label class="custom-control-label" for="washHairYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													name="washHair"  
													id="washHairNo"
													v-model="data.washHair"
													value="0" 
													class="custom-control-input">
													<label class="custom-control-label" for="washHairNo">No</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br>
								<div>

									<div class="education-info">
										<div class="row form-row education-cont">
											<div class="col-12 col-md-10 col-lg-11">
												<div class="row form-row">
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Service</label>
															<select class="form-control select" v-model="data.service">
																<option value="">Enter Your Service</option>
																<option 
																	v-for="list in serviceList" 
																	:key="list.uuid"
																	:value="list.title"
																>
																	{{list.title}} 
																</option>
															</select>
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Hour</label>
															<select class="form-control" v-model="data.hour">
																<option v-for="i in 10" :key="i" :value="i">{{i}} </option>

															</select>
															
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Minutes</label>
															<select class="form-control" v-model="data.minute">
																<option v-for="i in 60" :key="i" :value="i">{{i}} </option>

															</select>
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Price</label>
															<input 
															type="text" 
															class="form-control" 
															v-model="data.price"
															placeholder="Price">
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="education-info"  v-for="(service,index) in this.services" :key="index">
										<div class="row form-row education-cont">
											<div class="col-12 col-md-10 col-lg-11">
												<div class="row form-row">
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Service</label>
															<select class="form-control select" disabled="" v-model='service.services'>
																<option>Enter Your Service</option>
																<option 
																	v-for="list in serviceList" 
																	:key="list.uuid"
																	:value="list.uuid"
																>
																	{{list.title}} 
																</option>
																
															</select>
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Hour</label>
															<input 
															type="text" 
															class="form-control" 
															v-model="service.hours"
															readonly="" 
															placeholder="Hour">
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Minutes</label>
															<input 
															type="text" 
															class="form-control" 
															v-model="service.minute"
															readonly="" 
															placeholder="Minutes">
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Price</label>
															<input 
															type="text" 
															v-model="service.price"
															class="form-control" 
															readonly="" 
															placeholder="Price">
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-2 col-lg-1" @click="removeService(index)">
												<label class="d-md-block d-sm-none d-none">&nbsp;</label>
												<a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>
											</div>
										</div>
									</div>

								</div>
								<div class="add-more">
									<a href="javascript:void(0);" @click="addServices()" class="add-education"><i class="fa fa-plus-circle"></i> Add More</a>
								</div>
								<br>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Booking Deposit amount <span class="text-danger">*</span></label>
											<input 
											type="text" 
											v-model="data.booking_deposit_amount"
											class="form-control" 
											:class="{'is-invalid':errors.booking_deposit_amount}"
											placeholder="Booking Deposit amount percentage">
											<small v-if="errors.booking_deposit_amount" class="form-text text-danger">
												{{errors.booking_deposit_amount}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Coupon Code</label>
											<input 
											type="text" 
											v-model="data.couponCode"
											class="form-control" 
											:class="{'is-invalid':errors.couponCode}"
											placeholder="Coupon Code">
											<small v-if="errors.couponCode" class="form-text text-danger">
												{{errors.couponCode}}
											</small>
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Password <span class="text-danger">*</span></label>
											<input 
											type="password" 
											class="form-control" 
											v-model="data.password"
											:class="{'is-invalid':errors.password}"
											placeholder="Password">
											<small v-if="errors.password" class="form-text text-danger">
												{{errors.password}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Repeat Password <span class="text-danger">*</span></label>
											<input 
											type="password" 
											class="form-control" 
											v-model="data.password_confirmation"
											:class="{'is-invalid':errors.password_confirmation}"
											placeholder="Re-Enter Password">
											<small v-if="errors.password_confirmation" class="form-text text-danger">
												{{errors.password_confirmation}}
											</small>
										</div>
									</div>
								</div>
								<div class="submit-section submit-btn-bottom">
									<button 
									type="button" 
									@click="onsubmit" 
									class="btn btn-primary submit-btn">
										Save Changes
									</button>
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
	import MenuComponent from '@/components/Layout/Menu'
	import {services,braiderRegister} from  '@/services/auth'
	import {errObj, dataObj} from './interfaces/RegisterBraiderInterface'
	import Swal from 'sweetalert2'
	import User from '@/models/User'

	export default {
		name: 'BusinessRegister',
		components:{MenuComponent},
		data(){
			return {
				services: [],
				serviceList:[],
				errors:errObj,
				data:dataObj,
				previewAvatar: 'assets/img/theraphist/theraphist-thumb-01.png'
			}
		},
		mounted(){
			
			services()
			.then(async res => this.serviceList = await res.data.data)
			.catch(err => {
				console.log(err);
			})
		},
		methods:{
			addServices(){
				
				if (
					this.data.service &&
					this.data.hour &&
					this.data.minute && 
					this.data.price) {

					this.services.push({
						services: this.data.service,
						hours: this.data.hour,
						minute: this.data.minute,
						price: this.data.price
					});

					this.data.service = "";
					this.data.hour = 1;
					this.data.minute = 1;
					this.data.price = 0;
				}else{

					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Please fill all fields!',
					});
				}
				return;
			},
			removeService(index){
				
				const data = this.services.filter((service,key) => key != index);

				this.services = data;
			},
			onUploadAvatar(event){

				this.data.avatar = event.target.files[0];
				let size = Math.round(this.data.avatar.size/1024);
				
				if (size > 500) {
					event.preventDefault();
					this.errors.avatar = 'File too big (> 500KB)';
					return;
				}

				this.previewAvatar = URL.createObjectURL(this.data.avatar)
			},
			serializeFormData(){

				let formData = new FormData();
				formData.set('avatar',this.data.avatar);
				formData.set('name',this.data.name);
				formData.set('state',this.data.state);
				formData.set('city',this.data.city);
				formData.set('zipcode',this.data.zipcode);
				formData.set('email',this.data.email);
				formData.set('business_name',this.data.businessName);
				formData.set('website_link',this.data.websiteLink);
				formData.set('business_phone_number',this.data.business_phone_number);
				formData.set('introduction',this.data.introduction);
				formData.set('special_introduction',this.data.special_introduction);
				formData.set('policy_procedure',this.data.policy_procedure);
				formData.set('booking_deposit_amount',this.data.booking_deposit_amount);
				formData.set('policy_procedure',this.data.policy_procedure);
				formData.set('coupon_code',this.data.couponCode);
				formData.set('password',this.data.password);
				formData.set('password_confirmation',this.data.password_confirmation);
				formData.set('do_you_braid_out_of_a_shop',this.data.outOfShop);
				formData.set('do_you_braid_from_home',this.data.fromHome);
				formData.set('are_you_a_mobile',this.data.travelingBraider);
				formData.set('can_you_provide_hair',this.data.provideHair);
				formData.set('do_you_wash_hair',this.data.washHair);
				formData.set('services',JSON.stringify(this.services));
				return formData;
			},
			async onsubmit(){
				
				await this.clear();

				braiderRegister(this.serializeFormData())
				.then(async res => {

					await User.insert({data: res.data.user});
					
					await localStorage.setItem('api_token',res.data.token);
					
					this.$router.push({name:'BraiderDashboard'});


				}).catch(err => {

					Object.keys(err?.response?.data?.errors).map(name => {
						this.errors[name] = err?.response?.data?.errors[name][0];
					});

					window.scrollTo({
						top:0,
						behavior: 'smooth'
					});
				});
			},
			clear(){

				this.errors = {
					avatar:'',
					name:'',
					state:'',
					city:'',
					zipcode:'',
					email:'',
					businessName:'',
					websiteLink:'',
					business_phone_number:'',
					special_introduction:'',
					specialIntro:'',
					policy_procedure:'',
					booking_deposit_amount:'',
					couponCode:'',
					password:'',
					password_confirmation:'',
					outOfShop:'',
					fromHome:'',
					travelingBraider:'',
					provideHair:'',
					washHair:'',
					service:'',
					minute:'',
					hour:'',
					price:''
				};
			},
			onSubmitTesting(){

				User.insert({
					data: {
						id: 1,
						name: 'Aditya Kumar',
						email: 'aditya@gmail.com',
						state: 'bihar'
					}
				});
			},
			showSavedData(){

				const user = User.query().where('id',2).first();
				console.log(user);
			}
		}
	}
</script>