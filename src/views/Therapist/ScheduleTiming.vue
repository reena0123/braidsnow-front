<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Schedule Timing</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Schedule Timing</h2>
				</div>
				
			</div>
		</div>
	</div>
	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">Schedule Timings</h4>
									<div class="profile-box">
										<div class="row">
											<div class="col-lg-4">
												<div class="form-group">
													<label>Timing Slot Duration</label>
													<select class="select form-control">
													<option>-</option>
													<option>15 mins</option>
													<option selected="selected">30 mins</option>
													<option>45 mins</option>
													<option>1 Hour</option>
													</select>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<div class="card schedule-widget mb-0">

													<div class="schedule-header">

														<div class="schedule-nav">
															<ul class="nav nav-tabs nav-justified">
																<li class="nav-item">
																<a class="nav-link" data-toggle="tab" href="#slot_sunday">Sunday</a>
																</li>
																<li class="nav-item">
																<a class="nav-link active" data-toggle="tab" href="#slot_monday">Monday</a>
																</li>
																<li class="nav-item">
																<a class="nav-link" data-toggle="tab" href="#slot_tuesday">Tuesday</a>
																</li>
																<li class="nav-item">
																<a class="nav-link" data-toggle="tab" href="#slot_wednesday">Wednesday</a>
																</li>
																<li class="nav-item">
																<a class="nav-link" data-toggle="tab" href="#slot_thursday">Thursday</a>
																</li>
																<li class="nav-item">
																<a class="nav-link" data-toggle="tab" href="#slot_friday">Friday</a>
																</li>
																<li class="nav-item">
																<a class="nav-link" data-toggle="tab" href="#slot_saturday">Saturday</a>
																</li>
															</ul>
														</div>

													</div>


													<div class="tab-content schedule-cont">

														<div id="slot_sunday" class="tab-pane fade">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
															</h4>
															<p class="text-muted mb-0">Not Available</p>
														</div>


														<div id="slot_monday" class="tab-pane fade show active">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" data-toggle="modal" href="#edit_time_slot"><i class="fa fa-edit mr-1"></i>Edit</a>
															</h4>

															<div class="pro-times">
																<div class="pro-slot-list">
																	8:00 pm - 11:30 pm
																	<a href="javascript:void(0)" class="delete_schedule">
																	<i class="fa fa-times"></i>
																	</a>
																</div>
																<div class="pro-slot-list">
																	11:30 pm - 1:30 pm
																	<a href="javascript:void(0)" class="delete_schedule">
																	<i class="fa fa-times"></i>
																	</a>
																</div>
																<div class="pro-slot-list">
																	3:00 pm - 5:00 pm
																	<a href="javascript:void(0)" class="delete_schedule">
																	<i class="fa fa-times"></i>
																	</a>
																</div>
																<div class="pro-slot-list">
																	6:00 pm - 11:00 pm
																	<a href="javascript:void(0)" class="delete_schedule">
																	<i class="fa fa-times"></i>
																	</a>
																</div>
															</div>

														</div>


														<div id="slot_tuesday" class="tab-pane fade">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
															</h4>
															<p class="text-muted mb-0">Not Available</p>
														</div>


														<div id="slot_wednesday" class="tab-pane fade">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
															</h4>
															<p class="text-muted mb-0">Not Available</p>
														</div>


														<div id="slot_thursday" class="tab-pane fade">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
															</h4>
															<p class="text-muted mb-0">Not Available</p>
														</div>


														<div id="slot_friday" class="tab-pane fade">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
															</h4>
															<p class="text-muted mb-0">Not Available</p>
														</div>


														<div id="slot_saturday" class="tab-pane fade">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
															</h4>
															<p class="text-muted mb-0">Not Available</p>
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
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import MenuComponent from '../../components/Layout/Menu'
	import Sidebar from './Sidebar'
	export default{
		name:'ScheduleTiming',
		components:{MenuComponent,Sidebar},
		methods:{
			onLogout(){
				localStorage.setItem('user','');
				this.$router.push({ name: 'Home'});
			}
		}
	}
</script>