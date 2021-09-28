<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-12 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
					<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="">Home</a></li>
					<li class="breadcrumb-item active" aria-current="page">Reviews</li>
					</ol>
					</nav>
					<h2 class="breadcrumb-title">Reviews</h2>
				</div>
			</div> 
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
										<div class="pro-review review-listing">

						<ul class="comments-list">

							<li>
								<div class="comment">
									<img class="avatar rounded-circle" alt="User Image" src="assets/img/customers/customer.jpg">
									<div class="comment-body">
										<div class="meta-data">
											<span class="comment-author">Richard Wilson</span>
											<span class="comment-date">Reviewed 2 Days ago</span>
											<div class="review-count rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
											</div>
										</div>
										<p class="recommended"><i class="far fa-thumbs-up"></i> I recommend the theraphist</p>
										<p class="comment-content">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
										Ut enim ad minim veniam, quis nostrud exercitation.
										Curabitur non nulla sit amet nisl tempus
										</p>
										<div class="comment-reply">
											<a class="comment-btn" href="#">
											<i class="fas fa-reply"></i> Reply
											</a>
											<p class="recommend-btn">
											<span>Recommend?</span>
											<a href="#" class="like-btn">
											<i class="far fa-thumbs-up"></i> Yes
											</a>
											<a href="#" class="dislike-btn">
											<i class="far fa-thumbs-down"></i> No
											</a>
											</p>
										</div>
									</div>
								</div>

								<ul class="comments-reply">

									<li>
										<div class="comment">
											<img class="avatar rounded-circle" alt="User Image" src="assets/img/theraphist/theraphist.jpg">
											<div class="comment-body">
												<div class="meta-data">
													<span class="comment-author">Ashley Willes</span>
													<span class="comment-date">Reviewed 3 Days ago</span>
												</div>
												<p class="comment-content">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit,
												sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
												Ut enim ad minim veniam.
												Curabitur non nulla sit amet nisl tempus
												</p>
												<div class="comment-reply">
													<a class="comment-btn" href="#">
													<i class="fas fa-reply"></i> Reply
													</a>
												</div>
											</div>
										</div>
									</li>

								</ul>

							</li>


							<li>
								<div class="comment">
									<img class="avatar rounded-circle" alt="User Image" src="assets/img/customers/customer2.jpg">
									<div class="comment-body">
										<div class="meta-data">
											<span class="comment-author">Travis Trimble</span>
											<span class="comment-date">Reviewed 4 Days ago</span>
											<div class="review-count rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
											</div>
										</div>
										<p class="comment-content">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
										Ut enim ad minim veniam, quis nostrud exercitation.
										Curabitur non nulla sit amet nisl tempus
										</p>
										<div class="comment-reply">
											<a class="comment-btn" href="#">
											<i class="fas fa-reply"></i> Reply
											</a>
											<p class="recommend-btn">
											<span>Recommend?</span>
											<a href="#" class="like-btn">
											<i class="far fa-thumbs-up"></i> Yes
											</a>
											<a href="#" class="dislike-btn">
											<i class="far fa-thumbs-down"></i> No
											</a>
											</p>
										</div>
									</div>
								</div>
							</li>
						</ul>

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
		name:'Reviews',
		components:{MenuComponent,Sidebar},
	}
</script>