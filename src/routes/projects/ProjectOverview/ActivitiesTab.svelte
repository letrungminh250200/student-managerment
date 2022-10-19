<script>
	import { Card, CardBody, Col, Row, Tooltip } from 'sveltestrap';
	import Link from 'svelte-link';
	import avatar1 from '../../../assets/images/users/avatar-1.jpg';
	import avatar2 from '../../../assets/images/users/avatar-2.jpg';
	import avatar3 from '../../../assets/images/users/avatar-3.jpg';
	import avatar4 from '../../../assets/images/users/avatar-4.jpg';
	import avatar6 from '../../../assets/images/users/avatar-6.jpg';
	import avatar7 from '../../../assets/images/users/avatar-7.jpg';
	import avatar8 from '../../../assets/images/users/avatar-8.jpg';
	import img2 from '../../../assets/images/small/img-2.jpg';
	import img3 from '../../../assets/images/small/img-3.jpg';
	import img4 from '../../../assets/images/small/img-4.jpg';
</script>

<Card>
	<CardBody>
		<h5 class="card-title">Activities</h5>
		<div class="acitivity-timeline py-3">
			<div class="acitivity-item d-flex">
				<div class="flex-shrink-0">
					<img
						src={avatar1}
						alt=""
						class="avatar-xs rounded-circle acitivity-avatar"
					/>
				</div>
				<div class="flex-grow-1 ms-3">
					<h6 class="mb-1">
						Oliver Phillips <span class="badge bg-soft-primary text-primary align-middle">New</span>
					</h6>
					<p class="text-muted mb-2">We talked about a project on linkedin.</p>
					<small class="mb-0 text-muted">Today</small>
				</div>
			</div>
			<div class="acitivity-item py-3 d-flex">
				<div class="flex-shrink-0 avatar-xs acitivity-avatar">
					<div class="avatar-title bg-soft-success text-success rounded-circle">N</div>
				</div>
				<div class="flex-grow-1 ms-3">
					<h6 class="mb-1">
						Nancy Martino <span class="badge bg-soft-secondary text-secondary align-middle">In Progress</span
						>
					</h6>
					<p class="text-muted mb-2">
						<i class="ri-file-text-line align-middle ms-2" /> Create new project Buildng product
					</p>
					<div class="avatar-group mb-2">
						<Link
							href="{null}"
							class="avatar-group-item"
							id="tooltip-1"
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							title=""
							data-bs-original-title="Christi"
						>
							<img
								src={avatar4}
								alt=""
								class="rounded-circle avatar-xs"
							/>
						</Link>
						<Tooltip target="tooltip-1" placement="top">Christi</Tooltip>

						<Link
							href="{null}"
							class="avatar-group-item"
							id="tooltip-2"
							data-bs-original-title="Frank Hook"
						>
							<img
								src={avatar3}
								alt=""
								class="rounded-circle avatar-xs"
							/>
						</Link>
						<Tooltip target="tooltip-2" placement="top">Frank Hook</Tooltip>

						<Link
							href="{null}"
							class="avatar-group-item"
							id="tooltip-3"
						>
							<div class="avatar-xs">
								<div class="avatar-title rounded-circle bg-light text-primary">R</div>
							</div>
						</Link>
						<Tooltip target="tooltip-3" placement="top">Ruby</Tooltip>

						<Link
							href="{null}"
							class="avatar-group-item"
							id="tooltip-4"
						>
							<div class="avatar-xs">
								<div class="avatar-title rounded-circle">2+</div>
							</div>
						</Link>
						<Tooltip target="tooltip-4" placement="top">More</Tooltip>

					</div>
					<small class="mb-0 text-muted">Yesterday</small>
				</div>
			</div>
			<div class="acitivity-item py-3 d-flex">
				<div class="flex-shrink-0">
					<img
						src={avatar2}
						alt=""
						class="avatar-xs rounded-circle acitivity-avatar"
					/>
				</div>
				<div class="flex-grow-1 ms-3">
					<h6 class="mb-1">
						Natasha Carey <span class="badge bg-soft-success text-success align-middle">Completed</span
						>
					</h6>
					<p class="text-muted mb-2">Adding a new event with attachments</p>
					<Row>
						<Col xxl={4}>
							<div class="row border border-dashed gx-2 p-2 mb-2">
								<Col xs={4}>
									<img src={img2} alt="" class="img-fluid rounded" />
								</Col><!--end col-->
								<Col xs={4}>
									<img src={img3} alt="" class="img-fluid rounded" />
								</Col><!--end col-->
								<Col xs={4}>
									<img src={img4} alt="" class="img-fluid rounded" />
								</Col><!--end col-->
							</div>
							<!--end row-->
						</Col>
					</Row>
					<small class="mb-0 text-muted">25 Nov</small>
				</div>
			</div>
			<div class="acitivity-item py-3 d-flex">
				<div class="flex-shrink-0">
					<img
						src={avatar6}
						alt=""
						class="avatar-xs rounded-circle acitivity-avatar"
					/>
				</div>
				<div class="flex-grow-1 ms-3">
					<h6 class="mb-1">Bethany Johnson</h6>
					<p class="text-muted mb-2">added a new member to velzon dashboard</p>
					<small class="mb-0 text-muted">19 Nov</small>
				</div>
			</div>
			<div class="acitivity-item py-3 d-flex">
				<div class="flex-shrink-0">
					<div class="avatar-xs acitivity-avatar">
						<div class="avatar-title rounded-circle bg-soft-danger text-danger">
							<i class="ri-shopping-bag-line" />
						</div>
					</div>
				</div>
				<div class="flex-grow-1 ms-3">
					<h6 class="mb-1">
						Your order is placed <span class="badge bg-soft-danger text-danger align-middle ms-1">Out of Delivery</span
						>
					</h6>
					<p class="text-muted mb-2">
						These customers can rest assured their order has been placed.
					</p>
					<small class="mb-0 text-muted">16 Nov</small>
				</div>
			</div>
			<div class="acitivity-item py-3 d-flex">
				<div class="flex-shrink-0">
					<img
						src={avatar7}
						alt=""
						class="avatar-xs rounded-circle acitivity-avatar"
					/>
				</div>
				<div class="flex-grow-1 ms-3">
					<h6 class="mb-1">Lewis Pratt</h6>
					<p class="text-muted mb-2">
						They all have something to say beyond the words on the page. They can come across as
						casual or neutral, exotic or graphic.
					</p>
					<small class="mb-0 text-muted">22 Oct</small>
				</div>
			</div>
			<div class="acitivity-item py-3 d-flex">
				<div class="flex-shrink-0">
					<div class="avatar-xs acitivity-avatar">
						<div class="avatar-title rounded-circle bg-soft-info text-info">
							<i class="ri-line-chart-line" />
						</div>
					</div>
				</div>
				<div class="flex-grow-1 ms-3">
					<h6 class="mb-1">Monthly sales report</h6>
					<p class="text-muted mb-2">
						<span class="text-danger">2 days left</span> notification to submit the monthly sales
						report.
						<a href="{null}" class="link-warning text-decoration-underline">Reports Builder</a
						>
					</p>
					<small class="mb-0 text-muted">15 Oct</small>
				</div>
			</div>
			<div class="acitivity-item d-flex">
				<div class="flex-shrink-0">
					<img
						src={avatar8}
						alt=""
						class="avatar-xs rounded-circle acitivity-avatar"
					/>
				</div>
				<div class="flex-grow-1 ms-3">
					<h6 class="mb-1">
						New ticket received <span class="badge bg-soft-success text-success align-middle">Completed</span
						>
					</h6>
					<p class="text-muted mb-2">
						User <span class="text-secondary">Erica245</span> submitted a ticket.
					</p>
					<small class="mb-0 text-muted">26 Aug</small>
				</div>
			</div>
		</div>
	</CardBody><!--end card-body-->
</Card>
