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
													<img src="ssets/img/download.jpeg" alt="User Image">
												</div>
												<div class="upload-img">
													<div class="change-photo-btn">
														<span><i class="fa fa-upload"></i> Upload shop image</span>
														<input type="file" class="upload">
													</div>
													<small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Full Name <span class="text-danger">*</span></label>
											<input type="text" class="form-control" placeholder="Enter Your Name">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>State <span class="text-danger">*</span></label>
											<input type="text" class="form-control" placeholder="Enter Your State">
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>City <span class="text-danger">*</span></label>
											<input type="text" class="form-control" placeholder="Enter Your City">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Zip Code <span class="text-danger">*</span></label>
											<input type="text" class="form-control" placeholder="Enter Your Zip Code">
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Email <span class="text-danger">*</span></label>
											<input type="text" class="form-control" placeholder="Enter Your Email">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Business Name </label>
											<input type="text" class="form-control" placeholder="Enter Your Business Name">
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Add Website Link </label>
											<input type="text" class="form-control" placeholder="Enter Your URL">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Business Phone Number <span class="text-danger">*</span></label>
											<input type="text" class="form-control" placeholder="Enter Your Phone Number">
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Introduction </label>
											<textarea name="" class="form-control" placeholder="Tell Us About Yourself"></textarea>
										</div>
									</div>
									
								</div>
								<div class="row form-row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Special Instruction for new clients <span class="text-danger">*</span></label>
											<textarea name="" class="form-control" placeholder="Instruction"></textarea>
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Policy/Procedure <span class="text-danger">*</span></label>
											<textarea name="" class="form-control" placeholder="Enter Your Policy/Procedure"></textarea>
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-4">
										<label>Do you braid out of a shop? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" name="rating_option" class="custom-control-input"  checked="">
													<label class="custom-control-label">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" name="rating_option"  class="custom-control-input">
													<label class="custom-control-label" >No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<label>Do you braid from home? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" name="rating_option" class="custom-control-input"  checked="">
													<label class="custom-control-label">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" name="rating_option"  class="custom-control-input">
													<label class="custom-control-label" >No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<label>Are you a mobile / traveling braider? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" name="rating_option" class="custom-control-input"  checked="">
													<label class="custom-control-label">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" name="rating_option"  class="custom-control-input">
													<label class="custom-control-label" >No</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br>
								<div class="row form-row">
									<div class="col-md-4">
										<label>Are you licensed? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" name="rating_option" class="custom-control-input"  checked="">
													<label class="custom-control-label">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" name="rating_option"  class="custom-control-input">
													<label class="custom-control-label" >No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<label>Can you provide hair? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" name="rating_option" class="custom-control-input"  checked="">
													<label class="custom-control-label">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" name="rating_option"  class="custom-control-input">
													<label class="custom-control-label" >No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<label>Do you wash hair? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" name="rating_option" class="custom-control-input"  checked="">
													<label class="custom-control-label">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" name="rating_option"  class="custom-control-input">
													<label class="custom-control-label" >No</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br>
								<div class="row form-row">
									<div class="col-md-4">
										<label>Hair texture (currently have or interested in)</label>
									</div>
								</div>
								<div class="row form-row">

									<div class="col-md-2">
										<img src="assets/img/straight.png" width="60px">
										<p></p>
										<div class="form-group mb-0">
											<div>
												<div class="custom-control custom-radio">
													<input type="radio" name="rating_option" class="custom-control-input"  checked="">
													<label class="custom-control-label">Straight</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-2">
										<img src="assets/img/wavy.png" width="60px">
										<p></p>
										<div class="form-group mb-0">
											<div>
												<div class="custom-control custom-radio">
													<input type="radio" name="rating_option" class="custom-control-input"  checked="">
													<label class="custom-control-label">Wavy</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-2">
										<img src="assets/img/curly.png" width="60px">
										<p></p>
										<div class="form-group mb-0">
											<div>
												<div class="custom-control custom-radio">
													<input type="radio" name="rating_option" class="custom-control-input"  checked="">
													<label class="custom-control-label">Curly</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-2">
										<img src="assets/img/very_curly.png" width="60px">
										<p></p>
										<div class="form-group mb-0">
											<div>
												<div class="custom-control custom-radio">
													<input type="radio" name="rating_option" class="custom-control-input"  checked="">
													<label class="custom-control-label">Very Curly</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-2">
										<img src="assets/img/kinky.png" width="60px">
										<p></p>
										<div class="form-group mb-0">
											<div>
												<div class="custom-control custom-radio">
													<input type="radio" name="rating_option" class="custom-control-input"  checked="">
													<label class="custom-control-label">Kinky</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-2">
										<img src="assets/img/coily.png" width="60px">
										<p></p>
										<div class="form-group mb-0">
											<div>
												<div class="custom-control custom-radio">
													<input type="radio" name="rating_option" class="custom-control-input"  checked="">
													<label class="custom-control-label">Coily</label>
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
															<select class="form-control select">
																<option>Enter Your Service</option>
																<option  value="Box Braids">Box Braids</option>
																<option  value="Braided up do">Braided up do</option>
																<option  value="Braided Bob"  >Braided Bob</option>
																<option  value="Jumbo Braids"  >Jumbo Braids</option>
																<option  value="Knotless Braids"  >Knotless Braids</option>
																<option  value="Lemonade Braids"  >Lemonade Braids </option>
																<option  value="Micro Braids"  >Micro Braids</option>
																<option  value="Medium Braids"  >Medium Braids</option>
																<option  value="Mens Braids"  >Mens Braids</option>
																<option  value="Small Braids"  >Small Braids</option>
																<option  value="Stitch Braids"  >Stitch Braids</option>
																<option  value="Tribal Braids"  >Tribal Braids</option>
																<option  value="Bohemian"  >Bohemian</option>
																<option  value="Bob Cut"  >Bob Cut</option>
																<option  value="Cornrows">Cornrows </option>
																<option  value="Custom Units">Custom Units</option>
																<option  value="Crochet">Crochet </option>
																<option  value="Color Treatment">Color Treatment</option>
																<option  value="Faux Locs">Faux Locs</option>
																<option  value="Goddess">Goddess </option>
																<option  value="LocsLocs">LocsLocs</option>
																<option  value="Marley Twists">Marley Twists</option>
																<option  value="Mens Dreads">Mens Dreads</option>
																<option  value="Natural Styles">Natural Styles</option>
																<option  value="Passion Twists">Passion Twists</option>
																<option  value="Pony Tails">Pony Tails</option>
																<option  value="Pixie Cut">Pixie Cut</option>
																<option  value="Senegalese Twists">Senegalese Twists </option>
																<option  value="Sew-ins">Sew-ins</option>
																<option  value="Sisterlocs">Sisterlocs </option>
																<option  value="Silk Press">Silk Press </option>
																<option  value="TriMS">TriMS</option>
																<option  value="Unit Install">Unit Install </option>
															</select>
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Hour</label>
															<input type="text" class="form-control" placeholder="Hour">
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Minutes</label>
															<input type="text" class="form-control" placeholder="Minutes">
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Price</label>
															<input type="text" class="form-control" placeholder="Price">
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
															<select class="form-control select">
																<option>Enter Your Service</option>
																<option  value="Box Braids">Box Braids</option>
																<option  value="Braided up do">Braided up do</option>
																<option  value="Braided Bob"  >Braided Bob</option>
																<option  value="Jumbo Braids"  >Jumbo Braids</option>
																<option  value="Knotless Braids"  >Knotless Braids</option>
																<option  value="Lemonade Braids"  >Lemonade Braids </option>
																<option  value="Micro Braids"  >Micro Braids</option>
																<option  value="Medium Braids"  >Medium Braids</option>
																<option  value="Mens Braids"  >Mens Braids</option>
																<option  value="Small Braids"  >Small Braids</option>
																<option  value="Stitch Braids"  >Stitch Braids</option>
																<option  value="Tribal Braids"  >Tribal Braids</option>
																<option  value="Bohemian"  >Bohemian</option>
																<option  value="Bob Cut"  >Bob Cut</option>
																<option  value="Cornrows">Cornrows </option>
																<option  value="Custom Units">Custom Units</option>
																<option  value="Crochet">Crochet </option>
																<option  value="Color Treatment">Color Treatment</option>
																<option  value="Faux Locs">Faux Locs</option>
																<option  value="Goddess">Goddess </option>
																<option  value="LocsLocs">LocsLocs</option>
																<option  value="Marley Twists">Marley Twists</option>
																<option  value="Mens Dreads">Mens Dreads</option>
																<option  value="Natural Styles">Natural Styles</option>
																<option  value="Passion Twists">Passion Twists</option>
																<option  value="Pony Tails">Pony Tails</option>
																<option  value="Pixie Cut">Pixie Cut</option>
																<option  value="Senegalese Twists">Senegalese Twists </option>
																<option  value="Sew-ins">Sew-ins</option>
																<option  value="Sisterlocs">Sisterlocs </option>
																<option  value="Silk Press">Silk Press </option>
																<option  value="TriMS">TriMS</option>
																<option  value="Unit Install">Unit Install </option>
															</select>
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Hour</label>
															<input type="text" class="form-control" placeholder="Hour">
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Minutes</label>
															<input type="text" class="form-control" placeholder="Minutes">
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Price</label>
															<input type="text" class="form-control" placeholder="Price">
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
											<label>Booking Deposit amount percentage <span class="text-danger">*</span></label>
											<input type="text" class="form-control" placeholder="Booking Deposit amount percentage">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Coupon Code <span class="text-danger">*</span></label>
											<input type="text" class="form-control" placeholder="Coupon Code">
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Password <span class="text-danger">*</span></label>
											<input type="password" class="form-control" placeholder="Password">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Repeat Password <span class="text-danger">*</span></label>
											<input type="password" class="form-control" placeholder="Re-Enter Password">
										</div>
									</div>
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
	import MenuComponent from '../../components/Layout/Menu'
	export default {
		name: 'BusinessRegister',
		components:{MenuComponent},
		data(){
			return {
				services: [],
			}
		},
		methods:{
			addServices(){
				this.services.push({
					services:'abc',
					hours:'12',
					minute:'25',
					price:'30'
				});
			},
			removeService(index){
				//console.log(index,this.services[index]);

				const data = this.services.filter((service,key) => key != index);

				this.services = data;
				//this.services.splice(index, 1);
			}
		}
	}
</script>