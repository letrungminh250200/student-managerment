<script>
	import {
		Card,
		CardBody,
		Col,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Input,
		Modal,
		Row,
		Dropdown,
		ModalBody,
		ModalHeader,
		Button
	} from 'sveltestrap';
	import Link from 'svelte-link';
    let open = false;
  const toggle = () => (open = !open);

	import avatar2 from '../../../assets/images/users/avatar-2.jpg';
	import avatar3 from '../../../assets/images/users/avatar-3.jpg';
	import avatar4 from '../../../assets/images/users/avatar-4.jpg';
	import avatar5 from '../../../assets/images/users/avatar-5.jpg';
	import avatar7 from '../../../assets/images/users/avatar-7.jpg';
	import avatar8 from '../../../assets/images/users/avatar-8.jpg';
</script>

<Row class="g-4 mb-3">
	<div class="col-sm">
		<div class="d-flex">
			<div class="search-box me-2">
				<input type="text" class="form-control" placeholder="Search member..." />
				<i class="ri-search-line search-icon" />
			</div>
		</div>
	</div>
	<div class="col-sm-auto">
		<div>
			<Button color="danger" on:click={toggle}><i class="ri-share-line me-1 align-bottom" /> Invite Member</Button>
		</div>
	</div>
</Row>
<!-- end row -->

<div class="team-list list-view-filter">
	<Card class="team-box">
		<CardBody class="px-4">
			<Row class="align-items-center team-row">
				<div class="col team-settings">
					<Row class="align-items-center">
						<div class="col">
							<div class="flex-shrink-0 me-2">
								<Button color="" class="btn fs-16 p-0 favourite-btn">
									<i class="ri-star-fill" />
								</Button>
							</div>
						</div>
						<Dropdown class="col text-end">
							<DropdownToggle color="" href="{null}" class="p-0">
								<i class="ri-more-fill fs-17" />
							</DropdownToggle>
							<DropdownMenu class="dropdown-menu-end">
								<DropdownItem href="{null}"
									><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
								>
								<DropdownItem href="{null}"
									><i class="ri-star-fill text-muted me-2 align-bottom" />Favourite</DropdownItem
								>
								<DropdownItem href="{null}"
									><i
										class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
									/>Delete</DropdownItem
								>
							</DropdownMenu>
						</Dropdown>
					</Row>
				</div>
				<Col lg={4} class="col">
					<div class="team-profile-img">
						<div class="avatar-lg img-thumbnail rounded-circle">
							<img
								src={avatar2}
								alt=""
								class="img-fluid d-block rounded-circle"
							/>
						</div>
						<div class="team-content">
							<Link href="{null}" class="d-block"><h5 class="fs-16 mb-1">Nancy Martino</h5></Link>
							<p class="text-muted mb-0">Team Leader & HR</p>
						</div>
					</div>
				</Col>
				<Col lg={4} class="col">
					<Row class="text-muted text-center">
						<div class="col-6 border-end border-end-dashed">
							<h5 class="mb-1">225</h5>
							<p class="text-muted mb-0">Projects</p>
						</div>
						<div class="col-6">
							<h5 class="mb-1">197</h5>
							<p class="text-muted mb-0">Tasks</p>
						</div>
					</Row>
				</Col>
				<div class="col-lg-2 col">
					<div class="text-end">
						<Link href= "/pages/profile/simple/simplepage" class="btn btn-light view-btn">View Profile</Link>
					</div>
				</div>
			</Row>
		</CardBody>
	</Card><!--end card-->
	<Card class="team-box">
		<CardBody class="px-4">
			<Row class="align-items-center team-row">
				<div class="col team-settings">
					<Row class="align-items-center">
						<div class="col">
							<div class="flex-shrink-0 me-2">
								<Button color="" class="btn fs-16 p-0 favourite-btn active">
									<i class="ri-star-fill" />
								</Button>
							</div>
						</div>
						<Dropdown class="col text-end">
							<DropdownToggle color="" href="{null}" class="p-0">
								<i class="ri-more-fill fs-17" />
							</DropdownToggle>
							<DropdownMenu class="dropdown-menu-end">
								<DropdownItem href="{null}"
									><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
								>
								<DropdownItem href="{null}"
									><i class="ri-star-fill text-muted me-2 align-bottom" />Favourite</DropdownItem
								>
								<DropdownItem href="{null}"
									><i
										class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
									/>Delete</DropdownItem
								>
							</DropdownMenu>
						</Dropdown>
					</Row>
				</div>
				<Col lg={4} class="col">
					<div class="team-profile-img">
						<div class="avatar-lg img-thumbnail rounded-circle">
							<div class="avatar-title bg-soft-danger text-danger rounded-circle">HB</div>
						</div>
						<div class="team-content">
							<Link href="{null}" class="d-block"><h5 class="fs-16 mb-1">Henry Baird</h5></Link>
							<p class="text-muted mb-0">Full Stack Developer</p>
						</div>
					</div>
				</Col>
				<Col lg={4} class="col">
					<Row class="text-muted text-center">
						<div class="col-6 border-end border-end-dashed">
							<h5 class="mb-1">352</h5>
							<p class="text-muted mb-0">Projects</p>
						</div>
						<div class="col-6">
							<h5 class="mb-1">376</h5>
							<p class="text-muted mb-0">Tasks</p>
						</div>
					</Row>
				</Col>
				<div class="col-lg-2 col">
					<div class="text-end">
						<Link href= "/pages/profile/simple/simplepage" class="btn btn-light view-btn">View Profile</Link>
					</div>
				</div>
			</Row>
		</CardBody>
	</Card><!--end card-->
	<Card class="team-box">
		<CardBody class="px-4">
			<Row class="align-items-center team-row">
				<div class="col team-settings">
					<Row class="align-items-center">
						<div class="col">
							<div class="flex-shrink-0 me-2">
								<Button color="" class="btn fs-16 p-0 favourite-btn active">
									<i class="ri-star-fill" />
								</Button>
							</div>
						</div>
						<Dropdown class="col text-end">
							<DropdownToggle color="" href="{null}" class="p-0">
								<i class="ri-more-fill fs-17" />
							</DropdownToggle>
							<DropdownMenu class="dropdown-menu-end">
								<DropdownItem href="{null}"
									><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
								>
								<DropdownItem href="{null}"
									><i class="ri-star-fill text-muted me-2 align-bottom" />Favourite</DropdownItem
								>
								<DropdownItem href="{null}"
									><i
										class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
									/>Delete</DropdownItem
								>
							</DropdownMenu>
						</Dropdown>
					</Row>
				</div>
				<Col lg={4} class="col">
					<div class="team-profile-img">
						<div class="avatar-lg img-thumbnail rounded-circle">
							<img
								src={avatar3}
								alt=""
								class="img-fluid d-block rounded-circle"
							/>
						</div>
						<div class="team-content">
							<Link href="{null}" class="d-block"><h5 class="fs-16 mb-1">Frank Hook</h5></Link>
							<p class="text-muted mb-0">Project Manager</p>
						</div>
					</div>
				</Col>
				<Col lg={4} class="col">
					<Row class="text-muted text-center">
						<div class="col-6 border-end border-end-dashed">
							<h5 class="mb-1">164</h5>
							<p class="text-muted mb-0">Projects</p>
						</div>
						<div class="col-6">
							<h5 class="mb-1">182</h5>
							<p class="text-muted mb-0">Tasks</p>
						</div>
					</Row>
				</Col>
				<div class="col-lg-2 col">
					<div class="text-end">
						<Link href= "/pages/profile/simple/simplepage" class="btn btn-light view-btn">View Profile</Link>
					</div>
				</div>
			</Row>
		</CardBody>
	</Card><!--end card-->
	<Card class="team-box">
		<CardBody class="px-4">
			<Row class="align-items-center team-row">
				<div class="col team-settings">
					<Row class="align-items-center">
						<div class="col">
							<div class="flex-shrink-0 me-2">
								<Button color="" class="btn fs-16 p-0 favourite-btn">
									<i class="ri-star-fill" />
								</Button>
							</div>
						</div>
						<Dropdown class="col text-end">
							<DropdownToggle color="" href="{null}" class="p-0">
								<i class="ri-more-fill fs-17" />
							</DropdownToggle>
							<DropdownMenu class="dropdown-menu-end">
								<DropdownItem href="{null}"
									><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
								>
								<DropdownItem href="{null}"
									><i class="ri-star-fill text-muted me-2 align-bottom" />Favourite</DropdownItem
								>
								<DropdownItem href="{null}"
									><i
										class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
									/>Delete</DropdownItem
								>
							</DropdownMenu>
						</Dropdown>
					</Row>
				</div>
				<Col lg={4} class="col">
					<div class="team-profile-img">
						<div class="avatar-lg img-thumbnail rounded-circle">
							<img
								src={avatar8}
								alt=""
								class="img-fluid d-block rounded-circle"
							/>
						</div>
						<div class="team-content">
							<Link href="{null}" class="d-block"><h5 class="fs-16 mb-1">Jennifer Carter</h5></Link>
							<p class="text-muted mb-0">UI/UX Designer</p>
						</div>
					</div>
				</Col>
				<Col lg={4} class="col">
					<Row class="text-muted text-center">
						<div class="col-6 border-end border-end-dashed">
							<h5 class="mb-1">225</h5>
							<p class="text-muted mb-0">Projects</p>
						</div>
						<div class="col-6">
							<h5 class="mb-1">197</h5>
							<p class="text-muted mb-0">Tasks</p>
						</div>
					</Row>
				</Col>
				<div class="col-lg-2 col">
					<div class="text-end">
						<Link href= "/pages/profile/simple/simplepage" class="btn btn-light view-btn">View Profile</Link>
					</div>
				</div>
			</Row>
		</CardBody>
	</Card><!--end card-->
	<Card class="team-box">
		<CardBody class="px-4">
			<Row class="align-items-center team-row">
				<div class="col team-settings">
					<Row class="align-items-center">
						<div class="col">
							<div class="flex-shrink-0 me-2">
								<Button color="" class="btn fs-16 p-0 favourite-btn">
									<i class="ri-star-fill" />
								</Button>
							</div>
						</div>
						<Dropdown class="col text-end">
							<DropdownToggle color="" href="{null}" class="p-0">
								<i class="ri-more-fill fs-17" />
							</DropdownToggle>
							<DropdownMenu class="dropdown-menu-end">
								<DropdownItem href="{null}"
									><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
								>
								<DropdownItem href="{null}"
									><i class="ri-star-fill text-muted me-2 align-bottom" />Favourite</DropdownItem
								>
								<DropdownItem href="{null}"
									><i
										class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
									/>Delete</DropdownItem
								>
							</DropdownMenu>
						</Dropdown>
					</Row>
				</div>
				<Col lg={4} class="col">
					<div class="team-profile-img">
						<div class="avatar-lg img-thumbnail rounded-circle">
							<div class="avatar-title bg-soft-success text-success rounded-circle">ME</div>
						</div>
						<div class="team-content">
							<Link href="{null}" class="d-block"><h5 class="fs-16 mb-1">Megan Elmore</h5></Link>
							<p class="text-muted mb-0">Team Leader & Web Developer</p>
						</div>
					</div>
				</Col>
				<Col lg={4} class="col">
					<Row class="text-muted text-center">
						<div class="col-6 border-end border-end-dashed">
							<h5 class="mb-1">201</h5>
							<p class="text-muted mb-0">Projects</p>
						</div>
						<div class="col-6">
							<h5 class="mb-1">263</h5>
							<p class="text-muted mb-0">Tasks</p>
						</div>
					</Row>
				</Col>
				<div class="col-lg-2 col">
					<div class="text-end">
						<Link href= "/pages/profile/simple/simplepage" class="btn btn-light view-btn">View Profile</Link>
					</div>
				</div>
			</Row>
		</CardBody>
	</Card><!--end card-->
	<Card class="team-box">
		<CardBody class="px-4">
			<Row class="align-items-center team-row">
				<div class="col team-settings">
					<Row class="align-items-center">
						<div class="col">
							<div class="flex-shrink-0 me-2">
								<Button color="" class="btn fs-16 p-0 favourite-btn">
									<i class="ri-star-fill" />
								</Button>
							</div>
						</div>
						<Dropdown class="col text-end">
							<DropdownToggle color="" href="{null}" class="p-0">
								<i class="ri-more-fill fs-17" />
							</DropdownToggle>
							<DropdownMenu class="dropdown-menu-end">
								<DropdownItem href="{null}"
									><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
								>
								<DropdownItem href="{null}"
									><i class="ri-star-fill text-muted me-2 align-bottom" />Favourite</DropdownItem
								>
								<DropdownItem href="{null}"
									><i
										class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
									/>Delete</DropdownItem
								>
							</DropdownMenu>
						</Dropdown>
					</Row>
				</div>
				<Col lg={4} class="col">
					<div class="team-profile-img">
						<div class="avatar-lg img-thumbnail rounded-circle">
							<img
								src={avatar4}
								alt=""
								class="img-fluid d-block rounded-circle"
							/>
						</div>
						<div class="team-content">
							<Link href="{null}" class="d-block"><h5 class="fs-16 mb-1">Alexis Clarke</h5></Link>
							<p class="text-muted mb-0">Backend Developer</p>
						</div>
					</div>
				</Col>
				<Col lg={4} class="col">
					<Row class="text-muted text-center">
						<div class="col-6 border-end border-end-dashed">
							<h5 class="mb-1">132</h5>
							<p class="text-muted mb-0">Projects</p>
						</div>
						<div class="col-6">
							<h5 class="mb-1">147</h5>
							<p class="text-muted mb-0">Tasks</p>
						</div>
					</Row>
				</Col>
				<div class="col-lg-2 col">
					<div class="text-end">
						<Link href= "/pages/profile/simple/simplepage" class="btn btn-light view-btn">View Profile</Link>
					</div>
				</div>
			</Row>
		</CardBody>
	</Card><!--end card-->
	<Card class="team-box">
		<CardBody class="px-4">
			<Row class="align-items-center team-row">
				<div class="col team-settings">
					<Row class="align-items-center">
						<div class="col">
							<div class="flex-shrink-0 me-2">
								<Button color="" class="btn fs-16 p-0 favourite-btn">
									<i class="ri-star-fill" />
								</Button>
							</div>
						</div>
						<Dropdown class="col text-end">
							<DropdownToggle color="" href="{null}" class="p-0">
								<i class="ri-more-fill fs-17" />
							</DropdownToggle>
							<DropdownMenu class="dropdown-menu-end">
								<DropdownItem href="{null}"
									><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
								>
								<DropdownItem href="{null}"
									><i class="ri-star-fill text-muted me-2 align-bottom" />Favourite</DropdownItem
								>
								<DropdownItem href="{null}"
									><i
										class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
									/>Delete</DropdownItem
								>
							</DropdownMenu>
						</Dropdown>
					</Row>
				</div>
				<Col lg={4} class="col">
					<div class="team-profile-img">
						<div class="avatar-lg img-thumbnail rounded-circle">
							<div class="avatar-title bg-soft-info text-info rounded-circle">NC</div>
						</div>
						<div class="team-content">
							<Link href="{null}" class="d-block"><h5 class="fs-16 mb-1">Nathan Cole</h5></Link>
							<p class="text-muted mb-0">Front-End Developer</p>
						</div>
					</div>
				</Col>
				<Col lg={4} class="col">
					<Row class="text-muted text-center">
						<div class="col-6 border-end border-end-dashed">
							<h5 class="mb-1">352</h5>
							<p class="text-muted mb-0">Projects</p>
						</div>
						<div class="col-6">
							<h5 class="mb-1">376</h5>
							<p class="text-muted mb-0">Tasks</p>
						</div>
					</Row>
				</Col>
				<div class="col-lg-2 col">
					<div class="text-end">
						<Link href= "/pages/profile/simple/simplepage" class="btn btn-light view-btn">View Profile</Link>
					</div>
				</div>
			</Row>
		</CardBody>
	</Card><!--end card-->
	<Card class="team-box">
		<CardBody class="px-4">
			<Row class="align-items-center team-row">
				<div class="col team-settings">
					<Row class="align-items-center">
						<div class="col">
							<div class="flex-shrink-0 me-2">
								<Button color="" class="btn fs-16 p-0 favourite-btn">
									<i class="ri-star-fill" />
								</Button>
							</div>
						</div>
						<Dropdown class="col text-end">
							<DropdownToggle color="" href="{null}" class="p-0">
								<i class="ri-more-fill fs-17" />
							</DropdownToggle>
							<DropdownMenu class="dropdown-menu-end">
								<DropdownItem href="{null}"
									><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
								>
								<DropdownItem href="{null}"
									><i class="ri-star-fill text-muted me-2 align-bottom" />Favourite</DropdownItem
								>
								<DropdownItem href="{null}"
									><i
										class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
									/>Delete</DropdownItem
								>
							</DropdownMenu>
						</Dropdown>
					</Row>
				</div>
				<Col lg={4} class="col">
					<div class="team-profile-img">
						<div class="avatar-lg img-thumbnail rounded-circle">
							<img
								src={avatar7}
								alt=""
								class="img-fluid d-block rounded-circle"
							/>
						</div>
						<div class="team-content">
							<Link href="{null}" class="d-block"><h5 class="fs-16 mb-1">Joseph Parker</h5></Link>
							<p class="text-muted mb-0">Team Leader & HR</p>
						</div>
					</div>
				</Col>
				<Col lg={4} class="col">
					<Row class="text-muted text-center">
						<div class="col-6 border-end border-end-dashed">
							<h5 class="mb-1">64</h5>
							<p class="text-muted mb-0">Projects</p>
						</div>
						<div class="col-6">
							<h5 class="mb-1">93</h5>
							<p class="text-muted mb-0">Tasks</p>
						</div>
					</Row>
				</Col>
				<div class="col-lg-2 col">
					<div class="text-end">
						<Link href= "/pages/profile/simple/simplepage" class="btn btn-light view-btn">View Profile</Link>
					</div>
				</div>
			</Row>
		</CardBody>
	</Card><!--end card-->
	<Card class="team-box">
		<CardBody class="px-4">
			<Row class="align-items-center team-row">
				<div class="col team-settings">
					<Row class="align-items-center">
						<div class="col">
							<div class="flex-shrink-0 me-2">
								<Button color="" class="btn fs-16 p-0 favourite-btn">
									<i class="ri-star-fill" />
								</Button>
							</div>
						</div>
						<Dropdown class="col text-end">
							<DropdownToggle color="" href="{null}" class="p-0">
								<i class="ri-more-fill fs-17" />
							</DropdownToggle>
							<DropdownMenu class="dropdown-menu-end">
								<DropdownItem href="{null}"
									><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
								>
								<DropdownItem href="{null}"
									><i class="ri-star-fill text-muted me-2 align-bottom" />Favourite</DropdownItem
								>
								<DropdownItem href="{null}"
									><i
										class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
									/>Delete</DropdownItem
								>
							</DropdownMenu>
						</Dropdown>
					</Row>
				</div>
				<Col lg={4} class="col">
					<div class="team-profile-img">
						<div class="avatar-lg img-thumbnail rounded-circle">
							<img
								src={avatar5}
								alt=""
								class="img-fluid d-block rounded-circle"
							/>
						</div>
						<div class="team-content">
							<Link href="{null}" class="d-block"><h5 class="fs-16 mb-1">Erica Kernan</h5></Link>
							<p class="text-muted mb-0">Web Designer</p>
						</div>
					</div>
				</Col>
				<Col lg={4} class="col">
					<Row class="text-muted text-center">
						<div class="col-6 border-end border-end-dashed">
							<h5 class="mb-1">345</h5>
							<p class="text-muted mb-0">Projects</p>
						</div>
						<div class="col-6">
							<h5 class="mb-1">298</h5>
							<p class="text-muted mb-0">Tasks</p>
						</div>
					</Row>
				</Col>
				<div class="col-lg-2 col">
					<div class="text-end">
						<Link href= "/pages/profile/simple/simplepage" class="btn btn-light view-btn">View Profile</Link>
					</div>
				</div>
			</Row>
		</CardBody>
	</Card><!--end card-->
	<Card class="team-box">
		<CardBody class="px-4">
			<Row class="align-items-center team-row">
				<div class="col team-settings">
					<Row class="align-items-center">
						<div class="col">
							<div class="flex-shrink-0 me-2">
								<Button color="" class="btn fs-16 p-0 favourite-btn">
									<i class="ri-star-fill" />
								</Button>
							</div>
						</div>
						<Dropdown class="col text-end">
							<DropdownToggle color="" href="{null}" class="p-0">
								<i class="ri-more-fill fs-17" />
							</DropdownToggle>
							<DropdownMenu class="dropdown-menu-end">
								<DropdownItem href="{null}"
									><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
								>
								<DropdownItem href="{null}"
									><i class="ri-star-fill text-muted me-2 align-bottom" />Favourite</DropdownItem
								>
								<DropdownItem href="{null}"
									><i
										class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
									/>Delete</DropdownItem
								>
							</DropdownMenu>
						</Dropdown>
					</Row>
				</div>
				<Col lg={4} class="col">
					<div class="team-profile-img">
						<div class="avatar-lg img-thumbnail rounded-circle">
							<div class="avatar-title border bg-light text-primary rounded-circle">DP</div>
						</div>
						<div class="team-content">
							<Link href="{null}" class="d-block"><h5 class="fs-16 mb-1">Donald Palmer</h5></Link>
							<p class="text-muted mb-0">Wed Developer</p>
						</div>
					</div>
				</Col>
				<Col lg={4} class="col">
					<Row class="text-muted text-center">
						<div class="col-6 border-end border-end-dashed">
							<h5 class="mb-1">97</h5>
							<p class="text-muted mb-0">Projects</p>
						</div>
						<div class="col-6">
							<h5 class="mb-1">135</h5>
							<p class="text-muted mb-0">Tasks</p>
						</div>
					</Row>
				</Col>
				<div class="col-lg-2 col">
					<div class="text-end">
						<Link href= "/pages/profile/simple/simplepage" class="btn btn-light view-btn">View Profile</Link>
					</div>
				</div>
			</Row>
		</CardBody>
	</Card><!--end card-->
</div>
<!-- end team list -->

<Row class="g-0 text-center text-sm-start align-items-center mb-3">
	<div class="col-sm-6">
		<div>
			<p class="mb-sm-0">Showing 1 to 10 of 12 entries</p>
		</div>
	</div>
	<!-- end col -->
	<div class="col-sm-6">
		<ul
			class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"
		>
			<li class="page-item disabled">
				<Link href="{null}" class="page-link"><i class="mdi mdi-chevron-left" /></Link>
			</li>
			<li class="page-item"><Link href="{null}" class="page-link">1</Link></li>
			<li class="page-item active"><Link href="{null}" class="page-link">2</Link></li>
			<li class="page-item"><Link href="{null}" class="page-link">3</Link></li>
			<li class="page-item"><Link href="{null}" class="page-link">4</Link></li>
			<li class="page-item"><Link href="{null}" class="page-link">5</Link></li>
			<li class="page-item">
				<Link href="{null}" class="page-link"><i class="mdi mdi-chevron-right" /></Link>
			</li>
		</ul>
	</div>
	<!-- end col -->
</Row><!-- end row -->
<Modal isOpen={open} {toggle} centered class="border-0">
    <ModalHeader {toggle} class="p-3 ps-4 bg-soft-success">
        Members
    </ModalHeader>
    <ModalBody class="p-4">
        <div class="search-box mb-3">
            <Input type="text" class="form-control bg-light border-light" placeholder="Search here..." />
            <i class="ri-search-line search-icon"></i>
        </div>

        <div class="mb-4 d-flex align-items-center">
            <div class="me-2">
                <h5 class="mb-0 fs-13">Members :</h5>
            </div>
            <div class="avatar-group justify-content-center">
                <Link href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="Brent Gonzalez">
                    <div class="avatar-xs">
                        <img src={avatar3} alt="" class="rounded-circle img-fluid" />
                    </div>
                </Link>
                <Link href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="Sylvia Wright">
                    <div class="avatar-xs">
                        <div class="avatar-title rounded-circle bg-secondary">
                            S
                        </div>
                    </div>
                </Link>
                <Link href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="Ellen Smith">
                    <div class="avatar-xs">
                        <img src={avatar4} alt="" class="rounded-circle img-fluid" />
                    </div>
                </Link>
            </div>
        </div>
        <div class="mx-n4 px-4" data-simplebar="init" style="max-height : 225px">
            <div class="vstack gap-3">
                <div class="d-flex align-items-center">
                    <div class="avatar-xs flex-shrink-0 me-3">
                        <img src={avatar2} alt="" class="img-fluid rounded-circle" />
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-13 mb-0"><Link href="#" class="text-body d-block">Nancy Martino</Link></h5>
                    </div>
                    <div class="flex-shrink-0">
                        <button type="button" class="btn btn-light btn-sm">Add</button>
                    </div>
                </div>

                <div class="d-flex align-items-center">
                    <div class="avatar-xs flex-shrink-0 me-3">
                        <div class="avatar-title bg-soft-danger text-danger rounded-circle">
                            HB
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-13 mb-0"><Link href="#" class="text-body d-block">Henry Baird</Link></h5>
                    </div>
                    <div class="flex-shrink-0">
                        <button type="button" class="btn btn-light btn-sm">Add</button>
                    </div>
                </div>

                <div class="d-flex align-items-center">
                    <div class="avatar-xs flex-shrink-0 me-3">
                        <img src={avatar3} alt="" class="img-fluid rounded-circle" />
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-13 mb-0"><Link href="#" class="text-body d-block">Frank Hook</Link></h5>
                    </div>
                    <div class="flex-shrink-0">
                        <button type="button" class="btn btn-light btn-sm">Add</button>
                    </div>
                </div>

                <div class="d-flex align-items-center">
                    <div class="avatar-xs flex-shrink-0 me-3">
                        <img src={avatar4} alt="" class="img-fluid rounded-circle" />
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-13 mb-0"><Link href="#" class="text-body d-block">Jennifer Carter</Link></h5>
                    </div>
                    <div class="flex-shrink-0">
                        <button type="button" class="btn btn-light btn-sm">Add</button>
                    </div>
                </div>

                <div class="d-flex align-items-center">
                    <div class="avatar-xs flex-shrink-0 me-3">
                        <div class="avatar-title bg-soft-success text-success rounded-circle">
                            AC
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-13 mb-0"><Link href="#" class="text-body d-block">Alexis Clarke</Link></h5>
                    </div>
                    <div class="flex-shrink-0">
                        <button type="button" class="btn btn-light btn-sm">Add</button>
                    </div>
                </div>

                <div class="d-flex align-items-center">
                    <div class="avatar-xs flex-shrink-0 me-3">
                        <img src={avatar7} alt="" class="img-fluid rounded-circle" />
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-13 mb-0"><Link href="#" class="text-body d-block">Joseph Parker</Link></h5>
                    </div>
                    <div class="flex-shrink-0">
                        <button type="button" class="btn btn-light btn-sm">Add</button>
                    </div>
                </div>
            </div>

        </div>
    </ModalBody>
    <div class="modal-footer">
        <button type="button" class="btn btn-light w-xs" on:click={toggle}>Cancel</button>
        <button type="button" class="btn btn-success w-xs" on:click={toggle}>Invite</button>
    </div>

</Modal>