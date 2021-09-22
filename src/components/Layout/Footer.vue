<template>
	<footer class="footer">
		<div class="footer-mail text-center">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12">
						<!-- <div class="footer-logo">
							<img src="assets/img/logospa.png" alt="logo">
						</div> -->
						<h2 class="footer-title">Sign Up To Get Latest Updates</h2>
						<form>
							<div class="col-md-6 mx-auto">
								<div class="input-group mb-3">
									<input type="email" class="form-control" placeholder="Your Email Address">
									<div class="input-group-append">
										<button class="btn btn-success" type="submit">
											<i class="fa fa-paper-plane" aria-hidden="true"></i>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-top">
			<div class="container">
				<div class="row">
					<!-- <div class="col-lg-3 col-md-6">
						<div class="footer-widget footer-about">
							<h2 class="footer-title">About us</h2>
							<div class="footer-about-content">
								<p>
									
This platform is an appointment booking and marketing tool for braiders and other stylists who specialize in Black Hair. This is also a place for clients to find new stylists who meet their needs all across the USA. Its about time for us to have one place where we can conveniently find stylists who specilize in our unique hair texture. We will be promoting the site to people in search of the perfect braider/stylist in their area. We will also provide style ideas as well as blogs, news articles and other resources. 

								</p>
							</div>
						</div>
					</div> -->
					<div class="col-lg-3 col-md-6">
						<div class="footer-widget footer-menu">
							<h2 class="footer-title">Quick Links</h2>
							<ul>
								<li>
									<router-link :to="{name:'BraiderList'}">
									Find A Stylish
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'BusinessRegister'}">
									Register My Business</router-link>
								</li>
								<li>
									<router-link :to="{name:'Login'}">
									Login
									</router-link>
								</li>
								<li><a href="">BraidsNow Blog</a></li>
								
							</ul>
						</div>
					</div>
					
					<div class="col-lg-3 col-md-6">
						<div class="footer-widget footer-menu">
							<h2 class="footer-title">Useful links</h2>
							<ul>
								<li>
									<router-link :to="{name:'PrivacyPolicy'}">
										Privacy Policy
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'TermAndCondition'}">Term & Condition
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'RefundPolicy'}">Refuns Policy
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'About'}">About Us
									</router-link></li>
								<li>
									<router-link :to="{name:'FAQ'}">FAQ
									</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-6">
						<div class="footer-widget footer-contact">
							<h2 class="footer-title">Get in touch</h2>
							<div class="footer-contact-info">
								<p> Ask us a Question </p>
								<p>info@braidsnowdotcom.com</p>
								<p class="mb-0">
									Connect with us
								</p>
								<div class="social-icon">
									<ul>
									<li><a href="https://www.facebook.com/braidsnowdotcom/" class="icon" target="_blank"><i class="fab fa-facebook-f"></i> </a></li>
									
									<li><a href="https://www.instagram.com/braidsnowdotcom/?hl=en" class="icon" target="_blank"><i class="fab fa-instagram"></i> </a></li>
									
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-md-6">
						<div class="footer-widget footer-menu">
							<h2 class="footer-title">Our Services</h2>
							<ul>
								<li>
									<router-link :to="{name:'BraiderList'}">
									Skincare & Facials
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'BraiderList'}">
									Body Treatments
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'BraiderList'}">
									Couples Treatments
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'BraiderList'}">
									Cryoskin Therapy
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'BraiderList'}">
									Manicure & Pedicure
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="container-fluid">
				<div class="copyright">
					<div class="row">
						<div class="col-md-12 col-lg-12">
							<div class="copyright-text text-center">
								<p class="mb-0">
									© 2021 BraidsNow. All Rights Reserved | 
									<a class="text-white" href="">Terms and Conditions</a> - 
									<a class="text-white" href="">Privacy Policy</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
<script>
export default {
	name: 'Footer'
}
</script>