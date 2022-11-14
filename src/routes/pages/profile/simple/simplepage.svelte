<svelte:head>
  <title>Profile | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
	import Link from 'svelte-link';
	import {
		Container,
		Row,
		Col,
		Nav,
		NavItem,
		NavLink,
		TabContent,
		CardBody,
		Card,
		TabPane,
		CardHeader,
		Collapse,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Label
	} from 'sveltestrap';

	import img2 from '../../../../assets/images/small/img-2.jpg';
	import img3 from '../../../../assets/images/small/img-3.jpg';
	import img4 from '../../../../assets/images/small/img-4.jpg';
	import img5 from '../../../../assets/images/small/img-5.jpg';
	import img6 from '../../../../assets/images/small/img-6.jpg';
	import img7 from '../../../../assets/images/small/img-7.jpg';
	import img9 from '../../../../assets/images/small/img-9.jpg';

	import avatar1 from '../../../../assets/images/users/avatar-1.jpg';
	import avatar2 from '../../../../assets/images/users/avatar-2.jpg';
	import avatar3 from '../../../../assets/images/users/avatar-3.jpg';
	import avatar4 from '../../../../assets/images/users/avatar-4.jpg';
	import avatar5 from '../../../../assets/images/users/avatar-5.jpg';
	import avatar6 from '../../../../assets/images/users/avatar-6.jpg';
	import avatar7 from '../../../../assets/images/users/avatar-7.jpg';
	import avatar8 from '../../../../assets/images/users/avatar-8.jpg';
	import profilebg from '../../../../assets/images/profile-bg.jpg';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import {getProfile} from '../../../../lib/service/userService';
	import {userDataStore} from '../../../../lib/store/userStore'
	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/pagination';

	let activeTab = 1;
	let activeTimelineTab = 1;
	let info;
	const loadInfoUser = async () =>{
		let {data, error} = await getProfile($userDataStore.id);
		if(data){
			localStorage.setItem('profileData', JSON.stringify(data[0]))
		}else{
			console.log(error)
		}
	}
	loadInfoUser()
	const profileData = JSON.parse(localStorage.getItem('profileData'))
</script>

<div class="page-content">
	<Container fluid>
		<div class="profile-foreground position-relative mx-n4 mt-n4">
			<div class="profile-wid-bg">
				<img src={profilebg} alt="" class="profile-wid-img" />
			</div>
		</div>
		<div class="pt-4 mb-4 mb-lg-3 pb-lg-4">
			<Row class="g-4">
				<div class="col-auto">
					<div class="avatar-lg">
						<img
							src={avatar1}
							alt="user-img"
							class="img-thumbnail rounded-circle"
						/>
					</div>
				</div>

				<div class="col">
					<div class="p-2">
						<h3 class="text-white mb-1" id='fullName'>{profileData.full_name}</h3>
						<p class="text-white-75">Owner & Founder</p>
						<div class="hstack text-white-50 gap-1">
							<div class="me-2">
								<i class="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle" />{profileData.address}
							</div>
							<!-- <div>
								<i class="ri-building-line me-1 text-white-75 fs-16 align-middle" />Themesbrand
							</div> -->
						</div>
					</div>
				</div>
			</Row>
		</div>

		<Row>
			<Col lg={12}>
				<div>
					<div class="d-flex">
						<Nav pills class="animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1">
							<NavItem>
								<NavLink class="fs-14" on:click={() => (activeTab = 1)} active={activeTab == 1}>
									<i class="ri-airplay-fill d-inline-block d-md-none" />
									<span class="d-none d-md-inline-block">Overview</span>
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink class="fs-14" on:click={() => (activeTab = 2)} active={activeTab == 2}>
									<i class="ri-list-unordered d-inline-block d-md-none" />
									<span class="d-none d-md-inline-block">Activities</span>
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink class="fs-14" on:click={() => (activeTab = 3)} active={activeTab == 3}>
									<i class="ri-price-tag-line d-inline-block d-md-none" />
									<span class="d-none d-md-inline-block">Projects</span>
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink class="fs-14" on:click={() => (activeTab = 4)} active={activeTab == 4}>
									<i class="ri-folder-4-line d-inline-block d-md-none" />
									<span class="d-none d-md-inline-block">Documents</span>
								</NavLink>
							</NavItem>
						</Nav>
						<div class="flex-shrink-0">
							<Link href="/pages/profile/settings/pages-profile-settings" class="btn btn-success">
								<i class="ri-edit-box-line align-bottom" /> Edit Profile</Link>
						</div>
					</div>

					<TabContent class="pt-4 text-muted">
						<TabPane
							id="overview-tab"
							tabId={1}
							class={activeTab == 1 ? 'active' : ''}
							role="tabpanel"
						>
							<Row>
								<Col xxl={3}>
									<Card>
										<CardBody>
											<h5 class="card-title mb-5">Complete Your Profile</h5>

											<div class="progress animated-progress custom-progress progress-label">
												<div class="progress-bar bg-danger"
													role="progressbar"
													style="width: 30%"
												>
													<div class="label">30%</div>
												</div>
											</div>
										</CardBody>
									</Card>

									<Card>
										<CardBody>
											<h5 class="card-title mb-3">Info</h5>
											<div class="table-responsive">
												<table class="table table-borderless mb-0">
													<tbody>
														<tr>
															<th class="ps-0" scope="row">Full Name :</th>
															<td class="text-muted">{profileData.full_name}</td>
														</tr>
														<tr>
															<th class="ps-0" scope="row">Mobile :</th>
															<td class="text-muted">{profileData.phone}</td>
														</tr>
														<tr>
															<th class="ps-0" scope="row">E-mail :</th>
															<td class="text-muted">{profileData.email}</td>
														</tr>
														<tr>
															<th class="ps-0" scope="row">Location :</th>
															<td class="text-muted">{profileData.address} </td>
														</tr>
														<tr>
															<th class="ps-0" scope="row">Birthday</th>
															<td class="text-muted">{profileData.birthday}</td>
														</tr>
													</tbody>
												</table>
											</div>
										</CardBody>
									</Card>

									<Card>
										<CardBody>
											<h5 class="card-title mb-4">Portfolio</h5>
											<div class="d-flex flex-wrap gap-2">
												<div>
													<Link href="{null}" class="avatar-xs d-block">
														<span
															class="avatar-title rounded-circle fs-16 bg-dark text-light"
														>
															<i class="ri-github-fill" />
														</span>
													</Link>
												</div>
												<div>
													<Link href="{null}" class="avatar-xs d-block">
														<span
															class="avatar-title rounded-circle fs-16 bg-primary"
														>
															<i class="ri-global-fill" />
														</span>
													</Link>
												</div>
												<div>
													<Link href="{null}" class="avatar-xs d-block">
														<span
															class="avatar-title rounded-circle fs-16 bg-success"
														>
															<i class="ri-dribbble-fill" />
														</span>
													</Link>
												</div>
												<div>
													<Link href="{null}" class="avatar-xs d-block">
														<span
															class="avatar-title rounded-circle fs-16 bg-danger"
														>
															<i class="ri-pinterest-fill" />
														</span>
													</Link>
												</div>
											</div>
										</CardBody>
									</Card>

									<Card>
										<CardBody>
											<h5 class="card-title mb-4">Skills</h5>
											<div class="d-flex flex-wrap gap-2 fs-16">
												<Link href="{null}" class="badge badge-soft-secondary">Photoshop</Link>
												<Link href="{null}" class="badge badge-soft-secondary">illustrator</Link>
												<Link href="{null}" class="badge badge-soft-secondary">HTML</Link>
												<Link href="{null}" class="badge badge-soft-secondary">CSS</Link>
												<Link href="{null}" class="badge badge-soft-secondary">Javascript</Link>
												<Link href="{null}" class="badge badge-soft-secondary">Php</Link>
												<Link href="{null}" class="badge badge-soft-secondary">Python</Link>
											</div>
										</CardBody>
									</Card>

									<Card>
										<CardBody>
											<div class="d-flex align-items-center mb-4">
												<div class="flex-grow-1">
													<h5 class="card-title mb-0">Suggestions</h5>
												</div>
												<div class="flex-shrink-0">
													<Dropdown>
														<DropdownToggle color="" href="{null}">
															<i class="ri-more-2-fill fs-14" />
														</DropdownToggle>

														<DropdownMenu
															class="dropdown-menu-end"
															aria-labelledby="dropdownMenuLink2"
														>
															<DropdownItem href="{null}">View</DropdownItem>
															<DropdownItem href="{null}">Edit</DropdownItem>
															<DropdownItem href="{null}">Delete</DropdownItem>
														</DropdownMenu>
													</Dropdown>
												</div>
											</div>
											<div>
												<div class="d-flex align-items-center py-3">
													<div class="avatar-xs flex-shrink-0 me-3">
														<img
															src={avatar3}
															alt=""
															class="img-fluid rounded-circle"
														/>
													</div>
													<div class="flex-grow-1">
														<div>
															<h5 class="fs-15 mb-1">Esther James</h5>
															<p class="text-muted mb-0">Frontend Developer</p>
														</div>
													</div>
													<div class="flex-shrink-0 ms-2">
														<button type="button" class="btn btn-sm btn-outline-secondary"
															><i class="ri-user-add-line align-middle" /></button
														>
													</div>
												</div>
												<div class="d-flex align-items-center py-3">
													<div class="avatar-xs flex-shrink-0 me-3">
														<img
															src={avatar4}
															alt=""
															class="img-fluid rounded-circle"
														/>
													</div>
													<div class="flex-grow-1">
														<div>
															<h5 class="fs-15 mb-1">Jacqueline Steve</h5>
															<p class="text-muted mb-0">UI/UX Designer</p>
														</div>
													</div>
													<div class="flex-shrink-0 ms-2">
														<button type="button" class="btn btn-sm btn-outline-secondary"
															><i class="ri-user-add-line align-middle" /></button
														>
													</div>
												</div>
												<div class="d-flex align-items-center py-3">
													<div class="avatar-xs flex-shrink-0 me-3">
														<img
															src={avatar5}
															alt=""
															class="img-fluid rounded-circle"
														/>
													</div>
													<div class="flex-grow-1">
														<div>
															<h5 class="fs-15 mb-1">George Whalen</h5>
															<p class="text-muted mb-0">Backend Developer</p>
														</div>
													</div>
													<div class="flex-shrink-0 ms-2">
														<button type="button" class="btn btn-sm btn-outline-secondary"
															><i class="ri-user-add-line align-middle" /></button
														>
													</div>
												</div>
											</div>
										</CardBody>
									</Card>

									<Card>
										<CardBody>
											<div class="d-flex align-items-center mb-4">
												<div class="flex-grow-1">
													<h5 class="card-title mb-0">Popular Posts</h5>
												</div>
												<div class="flex-shrink-0">
													<Dropdown>
														<DropdownToggle color="" href="{null}">
															<i class="ri-more-2-fill fs-14" />
														</DropdownToggle>

														<DropdownMenu class="dropdown-menu-end">
															<DropdownItem href="{null}">View</DropdownItem>
															<DropdownItem href="{null}">Edit</DropdownItem>
															<DropdownItem href="{null}">Delete</DropdownItem>
														</DropdownMenu>
													</Dropdown>
												</div>
											</div>
											<div class="d-flex mb-4">
												<div class="flex-shrink-0">
													<img
														src={img4}
														alt=""
														height="50"
														class="rounded"
													/>
												</div>
												<div class="flex-grow-1 ms-3 overflow-hidden">
													<Link href="{null}">
														<h6 class="text-truncate fs-15">Design your apps in your own way</h6>
													</Link>
													<p class="text-muted mb-0">15 Dec 2021</p>
												</div>
											</div>
											<div class="d-flex mb-4">
												<div class="flex-shrink-0">
													<img
														src={img5}
														alt=""
														height="50"
														class="rounded"
													/>
												</div>
												<div class="flex-grow-1 ms-3 overflow-hidden">
													<Link href="{null}">
														<h6 class="text-truncate fs-15">Smartest Applications for Business</h6>
													</Link>
													<p class="text-muted mb-0">28 Nov 2021</p>
												</div>
											</div>
											<div class="d-flex">
												<div class="flex-shrink-0">
													<img
														src={img6}
														alt=""
														height="50"
														class="rounded"
													/>
												</div>
												<div class="flex-grow-1 ms-3 overflow-hidden">
													<Link href="{null}">
														<h6 class="text-truncate fs-15">How to get creative in your work</h6>
													</Link>
													<p class="text-muted mb-0">21 Nov 2021</p>
												</div>
											</div>
										</CardBody>
									</Card>
								</Col>

								<div class="col-xxl-9">
									<Card>
										<CardBody>
											<h5 class="card-title mb-3">About</h5>
											<p>
												Hi I'm Anna Adame, It will be as simple as Occidental; in fact, it will be
												Occidental. To an English person, it will seem like simplified English, as a
												skeptical Cambridge friend of mine told me what Occidental is European
												languages are members of the same family.
											</p>
											<p>
												You always want to make sure that your fonts work well together and try to
												limit the number of fonts you use to three or less. Experiment and play
												around with the fonts that you already have in the software you’re working
												with reputable font websites. This may be the most commonly encountered tip
												I received from the designers I spoke with. They highly encourage that you
												use different fonts in one design, but do not over-exaggerate and go
												overboard.
											</p>
											<Row>
												<Col xs={6} md={4}>
													<div class="d-flex mt-4">
														<div class="flex-shrink-0 avatar-xs align-self-center me-3">
															<div class="avatar-title bg-light rounded-circle fs-16 text-primary">
																<i class="ri-user-2-fill" />
															</div>
														</div>
														<div class="flex-grow-1 overflow-hidden">
															<p class="mb-1">Designation :</p>
															<h6 class="text-truncate mb-0">Lead Designer / Developer</h6>
														</div>
													</div>
												</Col>

												<Col xs={6} md={4}>
													<div class="d-flex mt-4">
														<div class="flex-shrink-0 avatar-xs align-self-center me-3">
															<div class="avatar-title bg-light rounded-circle fs-16 text-primary">
																<i class="ri-global-line" />
															</div>
														</div>
														<div class="flex-grow-1 overflow-hidden">
															<p class="mb-1">Website :</p>
															<Link href="{null}" class="fw-semibold fs-15">www.velzon.com</Link>
														</div>
													</div>
												</Col>
											</Row>
										</CardBody>
									</Card>

									<Row>
										<Col lg={12}>
											<Card>
												<CardHeader class="align-items-center d-flex">
													<h4 class="card-title mb-0  me-2">Recent Activity</h4>
													<div class="flex-shrink-0 ms-auto">
														<Nav
															class="justify-content-end nav-tabs-custom rounded card-header-tabs border-bottom-0"
															role="tablist"
														>
															<NavItem>
																<NavLink
																	on:click={() => (activeTimelineTab = 1)}
																	active={activeTimelineTab == 1}
																>
																	Today
																</NavLink>
															</NavItem>
															<NavItem>
																<NavLink
																	on:click={() => (activeTimelineTab = 2)}
																	active={activeTimelineTab == 2}
																>
																	Weekly
																</NavLink>
															</NavItem>
															<NavItem>
																<NavLink
																	on:click={() => (activeTimelineTab = 3)}
																	active={activeTimelineTab == 3}
																>
																	Monthly
																</NavLink>
															</NavItem>
														</Nav>
													</div>
												</CardHeader>
												<CardBody>
													<TabContent class="text-muted">
														<TabPane
															tabId={1}
															class={activeTimelineTab == 1 ? 'active' : ''}
															id="today"
															role="tabpanel"
														>
															<div class="profile-timeline">
																<div class="accordion accordion-flush" id="todayExample">
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="headingOne">
																			<Link
																				id="collapseOne"
																				class="accordion-button p-2 shadow-none"
																			>
																				<div class="d-flex">
																					<div class="flex-shrink-0">
																						<img
																							src={avatar2}
																							alt=""
																							class="avatar-xs rounded-circle"
																						/>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">Jacqueline Steve</h6>
																						<small class="text-muted"
																							>We has changed 2 attributes on 05:16PM</small
																						>
																					</div>
																				</div>
																			</Link>
																		</div>
																		<Collapse
																			toggler="collapseOne"
																			class="accordion-collapse"
																			isOpen
																		>
																			<div class="accordion-body ms-2 ps-5">
																				In an awareness campaign, it is vital for people to begin
																				put 2 and 2 together and begin to recognize your cause. Too
																				much or too little spacing, as in the example below, can
																				make things unpleasant for the reader. The goal is to make
																				your text as comfortable to read as possible. A wonderful
																				serenity has taken possession of my entire soul, like these
																				sweet mornings of spring which I enjoy with my whole heart.
																			</div>
																		</Collapse>
																	</div>
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="headingTwo">
																			<Link
																				class="accordion-button p-2 shadow-none"
																				id="collapseTwo"
																			>
																				<div class="d-flex">
																					<div class="flex-shrink-0 avatar-xs">
																						<div 													class="avatar-title bg-light text-success rounded-circle"
																						>
																							M
																						</div>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">Megan Elmore</h6>
																						<small class="text-muted"
																							>Adding a new event with attachments - 04:45PM</small
																						>
																					</div>
																				</div>
																			</Link>
																		</div>
																		<Collapse
																			toggler="collapseTwo"
																			class="accordion-collapse"
																			isOpen
																		>
																			<div class="accordion-body ms-2 ps-5">
																				<div class="row g-2">
																					<div class="col-auto">
																						<div 													class="d-flex border border-dashed p-2 rounded position-relative"
																						>
																							<div class="flex-shrink-0">
																								<i class="ri-image-2-line fs-17 text-secondary" />
																							</div>
																							<div class="flex-grow-1 ms-2">
																								<h6>
																									<Link href="{null}" class="stretched-link"
																										>Business Template - UI/UX design</Link
																									>
																								</h6>
																								<small>685 KB</small>
																							</div>
																						</div>
																					</div>
																					<div class="col-auto">
																						<div 													class="d-flex border border-dashed p-2 rounded position-relative"
																						>
																							<div class="flex-shrink-0">
																								<i class="ri-file-zip-line fs-17 text-secondary" />
																							</div>
																							<div class="flex-grow-1 ms-2">
																								<h6>
																									<Link href="{null}" class="stretched-link"
																										>Bank Management System - PSD</Link
																									>
																								</h6>
																								<small>8.78 MB</small>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</Collapse>
																	</div>
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="headingThree">
																			<Link
																				class="accordion-button p-2 shadow-none"
																				id="collapsethree"
																			>
																				<div class="d-flex">
																					<div class="flex-shrink-0">
																						<img
																							src={avatar5}
																							alt=""
																							class="avatar-xs rounded-circle"
																						/>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">New ticket received</h6>
																						<small class="text-muted mb-2"
																							>User
																							<span class="text-secondary">Erica245</span>
																							submitted a ticket - 02:33PM</small
																						>
																					</div>
																				</div>
																			</Link>
																		</div>
																	</div>
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="headingFour">
																			<Link
																				class="accordion-button p-2 shadow-none"
																				id="collapseFour"
																			>
																				<div class="d-flex">
																					<div class="flex-shrink-0 avatar-xs">
																						<div 													class="avatar-title bg-light text-muted rounded-circle"
																						>
																							<i class="ri-user-3-fill" />
																						</div>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">Nancy Martino</h6>
																						<small class="text-muted">Commented on 12:57PM</small>
																					</div>
																				</div>
																			</Link>
																		</div>
																		<Collapse
																			toggler="collapseFour"
																			class="accordion-collapse"
																			aria-labelledby="headingFour"
																			data-bs-parent="#accordionExample"
																			isOpen
																		>
																			<div class="accordion-body ms-2 ps-5 fst-italic">
																				" A wonderful serenity has taken possession of my entire
																				soul, like these sweet mornings of spring which I enjoy with
																				my whole heart. Each design is a new, unique piece of art
																				birthed into this world, and while you have the opportunity
																				to be creative and make your own style choices. "
																			</div>
																		</Collapse>
																	</div>
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="headingFive">
																			<Link
																				class="accordion-button p-2 shadow-none"
																				id="collapseFive"
																			>
																				<div class="d-flex">
																					<div class="flex-shrink-0">
																						<img
																							src={avatar7}
																							alt=""
																							class="avatar-xs rounded-circle"
																						/>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">Lewis Arnold</h6>
																						<small class="text-muted"
																							>Create new project buildng product - 10:05AM</small
																						>
																					</div>
																				</div>
																			</Link>
																		</div>
																		<Collapse
																			toggler="collapseFive"
																			class="accordion-collapse"
																			aria-labelledby="headingFive"
																			data-bs-parent="#accordionExample"
																			isOpen
																		>
																			<div class="accordion-body ms-2 ps-5">
																				<p class="text-muted mb-2">
																					Every team project can have a velzon. Use the velzon to
																					share information with your team to understand and
																					contribute to your project.
																				</p>
																				<div class="avatar-group">
																					<Link
																						href="javascript: void(0);"
																						class="avatar-group-item"
																						data-bs-toggle="tooltip"
																						data-bs-trigger="hover"
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
																					<Link
																						href="javascript: void(0);"
																						class="avatar-group-item"
																						data-bs-toggle="tooltip"
																						data-bs-trigger="hover"
																						data-bs-placement="top"
																						title=""
																						data-bs-original-title="Frank Hook"
																					>
																						<img
																							src={avatar3}
																							alt=""
																							class="rounded-circle avatar-xs"
																						/>
																					</Link>
																					<Link
																						href="javascript: void(0);"
																						class="avatar-group-item"
																						data-bs-toggle="tooltip"
																						data-bs-trigger="hover"
																						data-bs-placement="top"
																						title=""
																						data-bs-original-title=" Ruby"
																					>
																						<div class="avatar-xs">
																							<div 														class="avatar-title rounded-circle bg-light text-primary"
																							>
																								R
																							</div>
																						</div>
																					</Link>
																					<Link
																						href="javascript: void(0);"
																						class="avatar-group-item"
																						data-bs-toggle="tooltip"
																						data-bs-trigger="hover"
																						data-bs-placement="top"
																						title=""
																						data-bs-original-title="more"
																					>
																						<div class="avatar-xs">
																							<div class="avatar-title rounded-circle">2+</div>
																						</div>
																					</Link>
																				</div>
																			</div>
																		</Collapse>
																	</div>
																</div>
															</div>
														</TabPane>
														<TabPane tabId={2} class={activeTimelineTab == 2 ? 'active' : ''}>
															<div class="profile-timeline">
																<div class="accordion accordion-flush" id="weeklyExample">
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="heading6">
																			<a
																				class="accordion-button p-2 shadow-none"
																				data-bs-toggle="collapse"
																				id="collapse6"
																				aria-expanded="true"
																			>
																				<div class="d-flex">
																					<div class="flex-shrink-0">
																						<img
																							src={avatar3}
																							alt=""
																							class="avatar-xs rounded-circle"
																						/>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">Joseph Parker</h6>
																						<small class="text-muted"
																							>New people joined with our company - Yesterday</small
																						>
																					</div>
																				</div>
																			</a>
																		</div>
																		<Collapse
																			toggler="#collapse6"
																			class="accordion-collapse"
																			isOpen
																		>
																			<div class="accordion-body ms-2 ps-5">
																				It makes a statement, it’s impressive graphic design.
																				Increase or decrease the letter spacing depending on the
																				situation and try, try again until it looks right, and each
																				letter has the perfect spot of its own.
																			</div>
																		</Collapse>
																	</div>
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="heading7">
																			<a
																				class="accordion-button p-2 shadow-none"
																				data-bs-toggle="collapse"
																				id="collapse7"
																				aria-expanded="false"
																			>
																				<div class="d-flex">
																					<div class="avatar-xs">
																						<div 													class="avatar-title rounded-circle bg-light text-danger"
																						>
																							<i class="ri-shopping-bag-line" />
																						</div>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">
																							Your order is placed <span
																								class="badge bg-soft-success text-success align-middle"
																								>Completed</span
																							>
																						</h6>
																						<small class="text-muted"
																							>These customers can rest assured their order has been
																							placed - 1 week Ago</small
																						>
																					</div>
																				</div>
																			</a>
																		</div>
																	</div>
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="heading8">
																			<a
																				class="accordion-button p-2 shadow-none"
																				data-bs-toggle="collapse"
																				id="collapse8"
																				aria-expanded="true"
																			>
																				<div class="d-flex">
																					<div class="flex-shrink-0 avatar-xs">
																						<div 													class="avatar-title bg-light text-success rounded-circle"
																						>
																							<i class="ri-home-3-line" />
																						</div>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">
																							Velzon admin dashboard templates layout upload
																						</h6>
																						<small class="text-muted"
																							>We talked about a project on linkedin - 1 week Ago</small
																						>
																					</div>
																				</div>
																			</a>
																		</div>
																		<Collapse
																			toggler="#collapse8"
																			class="accordion-collapse"
																			isOpen
																		>
																			<div class="accordion-body ms-2 ps-5 fst-italic">
																				Powerful, clean & modern responsive bootstrap 5 admin
																				template. The maximum file size for uploads in this demo :
																				<div class="row mt-2">
																					<div class="col-xxl-6">
																						<div class="row border border-dashed gx-2 p-2">
																							<div class="col-3">
																								<img
																									src={img3}
																									alt=""
																									class="img-fluid rounded"
																								/>
																							</div>

																							<div class="col-3">
																								<img
																									src={img5}
																									alt=""
																									class="img-fluid rounded"
																								/>
																							</div>

																							<div class="col-3">
																								<img
																									src={img7}
																									alt=""
																									class="img-fluid rounded"
																								/>
																							</div>

																							<div class="col-3">
																								<img
																									src={img9}
																									alt=""
																									class="img-fluid rounded"
																								/>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</Collapse>
																	</div>
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="heading9">
																			<a
																				class="accordion-button p-2 shadow-none"
																				data-bs-toggle="collapse"
																				id="collapse9"
																				aria-expanded="false"
																			>
																				<div class="d-flex">
																					<div class="flex-shrink-0">
																						<img
																							src={avatar6}
																							alt=""
																							class="avatar-xs rounded-circle"
																						/>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">
																							New ticket created <span
																								class="badge bg-soft-info text-info align-middle"
																								>Inprogress</span
																							>
																						</h6>
																						<small class="text-muted mb-2"
																							>User
																							<span class="text-secondary">Jack365</span>
																							submitted a ticket - 2 week Ago</small
																						>
																					</div>
																				</div>
																			</a>
																		</div>
																	</div>
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="heading10">
																			<a
																				class="accordion-button p-2 shadow-none"
																				data-bs-toggle="collapse"
																				id="collapse10"
																				aria-expanded="true"
																			>
																				<div class="d-flex">
																					<div class="flex-shrink-0">
																						<img
																							src={avatar5}
																							alt=""
																							class="avatar-xs rounded-circle"
																						/>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">Jennifer Carter</h6>
																						<small class="text-muted">Commented - 4 week Ago</small>
																					</div>
																				</div>
																			</a>
																		</div>
																		<Collapse
																			toggler="#collapse10"
																			class="accordion-collapse"
																			isOpen
																		>
																			<div class="accordion-body ms-2 ps-5">
																				<p class="text-muted fst-italic mb-2">
																					" This is an awesome admin dashboard template. It is
																					extremely well structured and uses state of the art
																					components (e.g. one of the only templates using boostrap
																					5.1.3 so far). I integrated it into a Rails 6 project.
																					Needs manual integration work of course but the template
																					structure made it easy. "
																				</p>
																			</div>
																		</Collapse>
																	</div>
																</div>
															</div>
														</TabPane>
														<TabPane tabId={3} class={activeTimelineTab == 3 ? 'active' : ''}>
															<div class="profile-timeline">
																<div class="accordion accordion-flush" id="monthlyExample">
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="heading11">
																			<a
																				class="accordion-button p-2 shadow-none"
																				data-bs-toggle="collapse"
																				id="collapse11"
																				aria-expanded="false"
																			>
																				<div class="d-flex">
																					<div class="flex-shrink-0 avatar-xs">
																						<div 													class="avatar-title bg-light text-success rounded-circle"
																						>
																							M
																						</div>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">Megan Elmore</h6>
																						<small class="text-muted"
																							>Adding a new event with attachments - 1 month Ago.</small
																						>
																					</div>
																				</div>
																			</a>
																		</div>
																		<Collapse
																			toggler="#collapse11"
																			class="accordion-collapse"
																			isOpen
																		>
																			<div class="accordion-body ms-2 ps-5">
																				<div class="row g-2">
																					<div class="col-auto">
																						<div 													class="d-flex border border-dashed p-2 rounded position-relative"
																						>
																							<div class="flex-shrink-0">
																								<i class="ri-image-2-line fs-17 text-secondary" />
																							</div>
																							<div class="flex-grow-1 ms-2">
																								<h6>
																									<Link href="{null}" class="stretched-link"
																										>Business Template - UI/UX design</Link
																									>
																								</h6>
																								<small>685 KB</small>
																							</div>
																						</div>
																					</div>
																					<div class="col-auto">
																						<div 													class="d-flex border border-dashed p-2 rounded position-relative"
																						>
																							<div class="flex-shrink-0">
																								<i class="ri-file-zip-line fs-17 text-secondary" />
																							</div>
																							<div class="flex-grow-1 ms-2">
																								<h6>
																									<Link href="{null}" class="stretched-link"
																										>Bank Management System - PSD</Link
																									>
																								</h6>
																								<small>8.78 MB</small>
																							</div>
																						</div>
																					</div>
																					<div class="col-auto">
																						<div 													class="d-flex border border-dashed p-2 rounded position-relative"
																						>
																							<div class="flex-shrink-0">
																								<i class="ri-file-zip-line fs-17 text-secondary" />
																							</div>
																							<div class="flex-grow-1 ms-2">
																								<h6>
																									<Link href="{null}" class="stretched-link"
																										>Bank Management System - PSD</Link
																									>
																								</h6>
																								<small>8.78 MB</small>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</Collapse>
																	</div>
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="heading12">
																			<a
																				class="accordion-button p-2 shadow-none"
																				data-bs-toggle="collapse"
																				id="collapse12"
																				aria-expanded="true"
																			>
																				<div class="d-flex">
																					<div class="flex-shrink-0">
																						<img
																							src={avatar2}
																							alt=""
																							class="avatar-xs rounded-circle"
																						/>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">Jacqueline Steve</h6>
																						<small class="text-muted"
																							>We has changed 2 attributes on 3 month Ago</small
																						>
																					</div>
																				</div>
																			</a>
																		</div>
																		<Collapse
																			toggler="#collapse12"
																			class="accordion-collapse"
																			isOpen
																		>
																			<div class="accordion-body ms-2 ps-5">
																				In an awareness campaign, it is vital for people to begin
																				put 2 and 2 together and begin to recognize your cause. Too
																				much or too little spacing, as in the example below, can
																				make things unpleasant for the reader. The goal is to make
																				your text as comfortable to read as possible. A wonderful
																				serenity has taken possession of my entire soul, like these
																				sweet mornings of spring which I enjoy with my whole heart.
																			</div>
																		</Collapse>
																	</div>
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="heading13">
																			<a class="accordion-button p-2 shadow-none" id="collapse13">
																				<div class="d-flex">
																					<div class="flex-shrink-0">
																						<img
																							src={avatar5}
																							alt=""
																							class="avatar-xs rounded-circle"
																						/>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">New ticket received</h6>
																						<small class="text-muted mb-2"
																							>User
																							<span class="text-secondary">Erica245</span>
																							submitted a ticket - 5 month Ago</small
																						>
																					</div>
																				</div>
																			</a>
																		</div>
																	</div>
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="heading14">
																			<a class="accordion-button p-2 shadow-none" id="collapse14">
																				<div class="d-flex">
																					<div class="flex-shrink-0 avatar-xs">
																						<div 													class="avatar-title bg-light text-muted rounded-circle"
																						>
																							<i class="ri-user-3-fill" />
																						</div>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">Nancy Martino</h6>
																						<small class="text-muted"
																							>Commented on 24 Nov, 2021.</small
																						>
																					</div>
																				</div>
																			</a>
																		</div>
																		<Collapse
																			toggler="#collapse14"
																			class="accordion-collapse"
																			isOpen
																		>
																			<div class="accordion-body ms-2 ps-5 fst-italic">
																				" A wonderful serenity has taken possession of my entire
																				soul, like these sweet mornings of spring which I enjoy with
																				my whole heart. Each design is a new, unique piece of art
																				birthed into this world, and while you have the opportunity
																				to be creative and make your own style choices. "
																			</div>
																		</Collapse>
																	</div>
																	<div class="accordion-item border-0">
																		<div class="accordion-header" id="heading15">
																			<a class="accordion-button p-2 shadow-none" id="collapse15">
																				<div class="d-flex">
																					<div class="flex-shrink-0">
																						<img
																							src={avatar7}
																							alt=""
																							class="avatar-xs rounded-circle"
																						/>
																					</div>
																					<div class="flex-grow-1 ms-3">
																						<h6 class="fs-14 mb-1">Lewis Arnold</h6>
																						<small class="text-muted"
																							>Create new project buildng product - 8 month Ago</small
																						>
																					</div>
																				</div>
																			</a>
																		</div>
																		<Collapse
																			toggler="#collapse15"
																			class="accordion-collapse"
																			isOpen
																		>
																			<div class="accordion-body ms-2 ps-5">
																				<p class="text-muted mb-2">
																					Every team project can have a velzon. Use the velzon to
																					share information with your team to understand and
																					contribute to your project.
																				</p>
																				<div class="avatar-group">
																					<Link
																						href="javascript: void(0);"
																						class="avatar-group-item"
																						data-bs-toggle="tooltip"
																						data-bs-trigger="hover"
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
																					<Link
																						href="javascript: void(0);"
																						class="avatar-group-item"
																						data-bs-toggle="tooltip"
																						data-bs-trigger="hover"
																						data-bs-placement="top"
																						title=""
																						data-bs-original-title="Frank Hook"
																					>
																						<img
																							src={avatar3}
																							alt=""
																							class="rounded-circle avatar-xs"
																						/>
																					</Link>
																					<Link
																						href="javascript: void(0);"
																						class="avatar-group-item"
																						data-bs-toggle="tooltip"
																						data-bs-trigger="hover"
																						data-bs-placement="top"
																						title=""
																						data-bs-original-title=" Ruby"
																					>
																						<div class="avatar-xs">
																							<div 														class="avatar-title rounded-circle bg-light text-primary"
																							>
																								R
																							</div>
																						</div>
																					</Link>
																					<Link
																						href="javascript: void(0);"
																						class="avatar-group-item"
																						data-bs-toggle="tooltip"
																						data-bs-trigger="hover"
																						data-bs-placement="top"
																						title=""
																						data-bs-original-title="more"
																					>
																						<div class="avatar-xs">
																							<div class="avatar-title rounded-circle">2+</div>
																						</div>
																					</Link>
																				</div>
																			</div>
																		</Collapse>
																	</div>
																</div>
															</div>
														</TabPane>
													</TabContent>
												</CardBody>
											</Card>
										</Col>
									</Row>

									<Card>
										<CardBody>
											<h5 class="card-title">Projects</h5>
											<div class="d-flex justify-content-end gap-2 mb-2">
												<div class="slider-button-prev swiper-button-disabled"
													tabindex="-1"
													role="button"
													aria-label="Previous slide"
													aria-controls="swiper-wrapper-d9c950ed1019f4a72"
													aria-disabled="true"
												>
													<div class="avatar-title fs-18 rounded px-1">
														<i class="ri-arrow-left-s-line" />
													</div>
												</div>
												<div class="slider-button-next"
													tabindex="0"
													role="button"
													aria-label="Next slide"
													aria-controls="swiper-wrapper-d9c950ed1019f4a72"
													aria-disabled="false"
												>
													<div class="avatar-title fs-18 rounded px-1">
														<i class="ri-arrow-right-s-line" />
													</div>
												</div>
											</div>
											<Swiper
												class="project-swiper"
												slidesPerView={3}
												spaceBetween={25}
												autoplay={{ delay: 3000, disableOnInteraction: false }}
												pagination={{ clickable: true }}
											>
												<SwiperSlide>
													<Card
														class="profile-project-card shadow-none profile-project-success mb-0"
													>
														<CardBody class="p-4">
															<div class="d-flex">
																<div class="flex-grow-1 text-muted overflow-hidden">
																	<h5 class="fs-15 text-truncate mb-1">
																		<Link href="#" class="text-dark">ABC Project Customization</Link>
																	</h5>
																	<p class="text-muted text-truncate mb-0">
																		Last Update : <span class="fw-semibold text-dark">4 hr Ago</span
																		>
																	</p>
																</div>
																<div class="flex-shrink-0 ms-2">
																	<div class="badge badge-soft-warning fs-12">Inprogress</div>
																</div>
															</div>
															<div class="d-flex mt-4">
																<div class="flex-grow-1">
																	<div class="d-flex align-items-center gap-2">
																		<div>
																			<h5 class="fs-13 text-muted mb-0">Members :</h5>
																		</div>
																		<div class="avatar-group">
																			<div class="avatar-group-item">
																				<div class="avatar-xs">
																					<img
																						src={avatar4}
																						alt=""
																						class="rounded-circle img-fluid"
																					/>
																				</div>
																			</div>
																			<div class="avatar-group-item">
																				<div class="avatar-xs">
																					<img
																						src={avatar5}
																						alt=""
																						class="rounded-circle img-fluid"
																					/>
																				</div>
																			</div>
																			<div class="avatar-group-item">
																				<div class="avatar-xs">
																					<div 												class="avatar-title rounded-circle bg-light text-primary"
																					>
																						A
																					</div>
																				</div>
																			</div>
																			<div class="avatar-group-item">
																				<div class="avatar-xs">
																					<img
																						src={avatar2}
																						alt=""
																						class="rounded-circle img-fluid"
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</CardBody>
													</Card>
												</SwiperSlide>

												<SwiperSlide>
													<Card
														class="profile-project-card shadow-none profile-project-danger mb-0"
													>
														<CardBody class="p-4">
															<div class="d-flex">
																<div class="flex-grow-1 text-muted overflow-hidden">
																	<h5 class="fs-15 text-truncate mb-1">
																		<Link href="#" class="text-dark">Client - John</Link>
																	</h5>
																	<p class="text-muted text-truncate mb-0">
																		Last Update : <span class="fw-semibold text-dark">1 hr Ago</span
																		>
																	</p>
																</div>
																<div class="flex-shrink-0 ms-2">
																	<div class="badge badge-soft-success fs-12">Completed</div>
																</div>
															</div>
															<div class="d-flex mt-4">
																<div class="flex-grow-1">
																	<div class="d-flex align-items-center gap-2">
																		<div>
																			<h5 class="fs-13 text-muted mb-0">Members :</h5>
																		</div>
																		<div class="avatar-group">
																			<div class="avatar-group-item">
																				<div class="avatar-xs">
																					<img
																						src={avatar2}
																						alt=""
																						class="rounded-circle img-fluid"
																					/>
																				</div>
																			</div>
																			<div class="avatar-group-item">
																				<div class="avatar-xs">
																					<div 												class="avatar-title rounded-circle bg-light text-primary"
																					>
																						C
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</CardBody>
													</Card>
												</SwiperSlide>
												<SwiperSlide>
													<Card class="profile-project-card shadow-none profile-project-info mb-0">
														<CardBody class="p-4">
															<div class="d-flex">
																<div class="flex-grow-1 text-muted overflow-hidden">
																	<h5 class="fs-15 text-truncate mb-1">
																		<Link href="#" class="text-dark">Brand logo Design</Link>
																	</h5>
																	<p class="text-muted text-truncate mb-0">
																		Last Update : <span class="fw-semibold text-dark">2 hr Ago</span
																		>
																	</p>
																</div>
																<div class="flex-shrink-0 ms-2">
																	<div class="badge badge-soft-warning fs-12">Inprogress</div>
																</div>
															</div>
															<div class="d-flex mt-4">
																<div class="flex-grow-1">
																	<div class="d-flex align-items-center gap-2">
																		<div>
																			<h5 class="fs-12 text-muted mb-0">Members :</h5>
																		</div>
																		<div class="avatar-group">
																			<div class="avatar-group-item">
																				<div class="avatar-xs">
																					<img
																						src={avatar5}
																						alt=""
																						class="rounded-circle img-fluid"
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</CardBody>
													</Card>
												</SwiperSlide>
												<SwiperSlide>
													<Card
														class="profile-project-card shadow-none profile-project-danger mb-0"
													>
														<CardBody class="p-4">
															<div class="d-flex">
																<div class="flex-grow-1 text-muted overflow-hidden">
																	<h5 class="fs-14 text-truncate mb-1">
																		<Link href="#" class="text-dark">Project update</Link>
																	</h5>
																	<p class="text-muted text-truncate mb-0">
																		Last Update : <span class="fw-semibold text-dark">4 hr Ago</span
																		>
																	</p>
																</div>
																<div class="flex-shrink-0 ms-2">
																	<div class="badge badge-soft-success fs-10">Completed</div>
																</div>
															</div>

															<div class="d-flex mt-4">
																<div class="flex-grow-1">
																	<div class="d-flex align-items-center gap-2">
																		<div>
																			<h5 class="fs-12 text-muted mb-0">Members :</h5>
																		</div>
																		<div class="avatar-group">
																			<div class="avatar-group-item">
																				<div class="avatar-xs">
																					<img
																						src={avatar4}
																						alt=""
																						class="rounded-circle img-fluid"
																					/>
																				</div>
																			</div>
																			<div class="avatar-group-item">
																				<div class="avatar-xs">
																					<img
																						src={avatar5}
																						alt=""
																						class="rounded-circle img-fluid"
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</CardBody>
													</Card>
												</SwiperSlide>

												<SwiperSlide>
													<Card
														class="profile-project-card shadow-none profile-project-warning mb-0"
													>
														<CardBody class="p-4">
															<div class="d-flex">
																<div class="flex-grow-1 text-muted overflow-hidden">
																	<h5 class="fs-14 text-truncate mb-1">
																		<Link href="#" class="text-dark">Chat App</Link>
																	</h5>
																	<p class="text-muted text-truncate mb-0">
																		Last Update : <span class="fw-semibold text-dark">1 hr Ago</span
																		>
																	</p>
																</div>
																<div class="flex-shrink-0 ms-2">
																	<div class="badge badge-soft-warning fs-10">Inprogress</div>
																</div>
															</div>

															<div class="d-flex mt-4">
																<div class="flex-grow-1">
																	<div class="d-flex align-items-center gap-2">
																		<div>
																			<h5 class="fs-12 text-muted mb-0">Members :</h5>
																		</div>
																		<div class="avatar-group">
																			<div class="avatar-group-item">
																				<div class="avatar-xs">
																					<img
																						src={avatar4}
																						alt=""
																						class="rounded-circle img-fluid"
																					/>
																				</div>
																			</div>
																			<div class="avatar-group-item">
																				<div class="avatar-xs">
																					<img
																						src={avatar5}
																						alt=""
																						class="rounded-circle img-fluid"
																					/>
																				</div>
																			</div>
																			<div class="avatar-group-item">
																				<div class="avatar-xs">
																					<div 												class="avatar-title rounded-circle bg-light text-primary"
																					>
																						A
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</CardBody>
													</Card>
												</SwiperSlide>
											</Swiper>
										</CardBody>
									</Card>
								</div>
							</Row>
						</TabPane>
						<TabPane
							id="activities"
							tabId={2}
							class={activeTab == 2 ? 'active' : ''}
							role="tabpanel"
						>
							<Card>
								<CardBody>
									<h5 class="card-title mb-3">Activities</h5>
									<div class="acitivity-timeline">
										<div class="acitivity-item d-flex">
											<div class="flex-shrink-0">
												<img
													src={avatar1}
													alt=""
													class="avatar-xs rounded-circle acitivity-avatar"
												/>
											</div>
											<div class="flex-grow-1 ms-3">
												<h6 class="mb-1">Oliver Phillips <span class="badge badge-soft-primary align-middle">New</span></h6>
												<p class="text-muted mb-2">We talked about a project on linkedin.</p>
												<small class="mb-0 text-muted">Today</small>
											</div>
										</div>
										<div class="acitivity-item py-3 d-flex">
											<div class="flex-shrink-0 avatar-xs acitivity-avatar">
												<div class="avatar-title bg-soft-success text-success rounded-circle">
													N
												</div>
											</div>
											<div class="flex-grow-1 ms-3">
												<h6 class="mb-1">Nancy Martino <span class="badge badge-soft-secondary align-middle">In Progress</span></h6>
												<p class="text-muted mb-2">
													<i class="ri-file-text-line align-middle ms-2" />
													Create new project Buildng product
												</p>
												<div class="avatar-group mb-2">
													<Link
														href="javascript: void(0);"
														class="avatar-group-item"
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
													<Link
														href="javascript: void(0);"
														class="avatar-group-item"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														title=""
														data-bs-original-title="Frank Hook"
													>
														<img
															src={avatar3}
															alt=""
															class="rounded-circle avatar-xs"
														/>
													</Link>
													<Link
														href="javascript: void(0);"
														class="avatar-group-item"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														title=""
														data-bs-original-title=" Ruby"
													>
														<div class="avatar-xs">
															<div class="avatar-title rounded-circle bg-light text-primary">R</div>
														</div>
													</Link>
													<Link
														href="javascript: void(0);"
														class="avatar-group-item"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														title=""
														data-bs-original-title="more"
													>
														<div class="avatar-xs">
															<div class="avatar-title rounded-circle">2+</div>
														</div>
													</Link>
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
												<h6 class="mb-1">Natasha Carey <span class="badge badge-soft-success align-middle">Completed</span></h6>
												
												<p class="text-muted mb-2">Adding a new event with attachments</p>
												<Row>
													<div class="col-xxl-4">
														<div class="row border border-dashed gx-2 p-2 mb-2">
															<div class="col-4">
																<img
																	src={img2}
																	alt=""
																	class="img-fluid rounded"
																/>
															</div>

															<div class="col-4">
																<img
																	src={img3}
																	alt=""
																	class="img-fluid rounded"
																/>
															</div>

															<div class="col-4">
																<img
																	src={img4}
																	alt=""
																	class="img-fluid rounded"
																/>
															</div>
														</div>
													</div>
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
													<div class="avatar-title rounded-circle bg-soft-primary text-primary">
														<i class="ri-shopping-bag-line" />
													</div>
												</div>
											</div>
											<div class="flex-grow-1 ms-3">
												<h6 class="mb-1">Your order is placed <span class="badge badge-soft-danger align-middle ms-1">Out of Delivery</span></h6>
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
													They all have something to say beyond the words on the page. They can come
													across as casual or neutral, exotic or graphic.
												</p>
												<small class="mb-0 text-muted">22 Oct</small>
											</div>
										</div>
										<div class="acitivity-item py-3 d-flex">
											<div class="flex-shrink-0">
												<div class="avatar-xs acitivity-avatar">
													<div class="avatar-title rounded-circle bg-soft-primary text-primary">
														<i class="ri-line-chart-line" />
													</div>
												</div>
											</div>
											<div class="flex-grow-1 ms-3">
												<h6 class="mb-1">Monthly sales report</h6>
												<p class="text-muted mb-2">
													<span class="text-danger">2 days left</span> notification to submit the
													monthly sales report. <Link
														href="{null}"
														class="link-primary text-decoration-underline">Reports Builder</Link
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
												<h6 class="mb-1">New ticket received <span class="badge badge-soft-success align-middle">Completed</span></h6>
												<p class="text-muted mb-2">
													User <span class="text-secondary">Erica245</span> submitted a ticket.
												</p>
												<small class="mb-0 text-muted">26 Aug</small>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</TabPane>

						<TabPane id="projects" tabId={3} class={activeTab == 3 ? 'active' : ''} role="tabpanel">
							<Card>
								<CardBody>
									<Row>
										<Col xxl={3} sm={6}>
											<div class="card profile-project-card shadow-none profile-project-primary">
												<CardBody class="p-4">
													<div class="d-flex">
														<div class="flex-grow-1 text-muted overflow-hidden">
															<h5 class="fs-14 text-truncate">
																<Link href="{null}" class="text-dark">Chat App Update</Link>
															</h5>
															<p class="text-muted text-truncate mb-0">
																Last Update : <span class="fw-semibold text-dark">2 year Ago</span>
															</p>
														</div>
														<div class="flex-shrink-0 ms-2">
															<div class="badge badge-soft-warning fs-10">Inprogress</div>
														</div>
													</div>

													<div class="d-flex mt-4">
														<div class="flex-grow-1">
															<div class="d-flex align-items-center gap-2">
																<div>
																	<h5 class="fs-12 text-muted mb-0">Members :</h5>
																</div>
																<div class="avatar-group">
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar1}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar3}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<div 										class="avatar-title rounded-circle bg-light text-primary"
																			>
																				J
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</CardBody>
											</div>
										</Col>

										<Col xxl={3} sm={6}>
											<div class="card profile-project-card shadow-none profile-project-success">
												<CardBody class="p-4">
													<div class="d-flex">
														<div class="flex-grow-1 text-muted overflow-hidden">
															<h5 class="fs-15 text-truncate">
																<Link href="{null}" class="text-dark">ABC Project Customization</Link>
															</h5>
															<p class="text-muted text-truncate mb-0">
																Last Update : <span class="fw-semibold text-dark">2 month Ago</span>
															</p>
														</div>
														<div class="flex-shrink-0 ms-2">
															<div class="badge badge-soft-primary fs-12">Progress</div>
														</div>
													</div>

													<div class="d-flex mt-4">
														<div class="flex-grow-1">
															<div class="d-flex align-items-center gap-2">
																<div>
																	<h5 class="fs-13 text-muted mb-0">Members :</h5>
																</div>
																<div class="avatar-group">
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar8}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar7}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar6}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<div class="avatar-title rounded-circle bg-primary">2+</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</CardBody>
											</div>
										</Col>

										<Col xxl={3} sm={6}>
											<div class="card profile-project-card shadow-none profile-project-info">
												<CardBody class="p-4">
													<div class="d-flex">
														<div class="flex-grow-1 text-muted overflow-hidden">
															<h5 class="fs-15 text-truncate">
																<Link href="{null}" class="text-dark">Client - Frank Hook</Link>
															</h5>
															<p class="text-muted text-truncate mb-0">
																Last Update : <span class="fw-semibold text-dark">1 hr Ago</span>
															</p>
														</div>
														<div class="flex-shrink-0 ms-2">
															<div class="badge badge-soft-info fs-12">New</div>
														</div>
													</div>

													<div class="d-flex mt-4">
														<div class="flex-grow-1">
															<div class="d-flex align-items-center gap-2">
																<div>
																	<h5 class="fs-13 text-muted mb-0">Members :</h5>
																</div>
																<div class="avatar-group">
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar4}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<div 										class="avatar-title rounded-circle bg-light text-primary"
																			>
																				M
																			</div>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar3}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</CardBody>
											</div>
										</Col>

										<Col xxl={3} sm={6}>
											<div class="card profile-project-card shadow-none profile-project-primary">
												<CardBody class="p-4">
													<div class="d-flex">
														<div class="flex-grow-1 text-muted overflow-hidden">
															<h5 class="fs-15 text-truncate">
																<Link href="{null}" class="text-dark">Velzon Project</Link>
															</h5>
															<p class="text-muted text-truncate mb-0">
																Last Update : <span class="fw-semibold text-dark">11 hr Ago</span>
															</p>
														</div>
														<div class="flex-shrink-0 ms-2">
															<div class="badge badge-soft-success fs-10">Completed</div>
														</div>
													</div>

													<div class="d-flex mt-4">
														<div class="flex-grow-1">
															<div class="d-flex align-items-center gap-2">
																<div>
																	<h5 class="fs-12 text-muted mb-0">Members :</h5>
																</div>
																<div class="avatar-group">
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar7}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar5}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</CardBody>
											</div>
										</Col>

										<Col xxl={3} sm={6}>
											<div class="card profile-project-card shadow-none profile-project-success">
												<CardBody class="p-4">
													<div class="d-flex">
														<div class="flex-grow-1 text-muted overflow-hidden">
															<h5 class="fs-15 text-truncate">
																<Link href="{null}" class="text-dark">Brand Logo Design</Link>
															</h5>
															<p class="text-muted text-truncate mb-0">
																Last Update : <span class="fw-semibold text-dark">10 min Ago</span>
															</p>
														</div>
														<div class="flex-shrink-0 ms-2">
															<div class="badge badge-soft-info fs-12">New</div>
														</div>
													</div>

													<div class="d-flex mt-4">
														<div class="flex-grow-1">
															<div class="d-flex align-items-center gap-2">
																<div>
																	<h5 class="fs-13 text-muted mb-0">Members :</h5>
																</div>
																<div class="avatar-group">
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar7}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar6}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<div 										class="avatar-title rounded-circle bg-light text-primary"
																			>
																				E
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</CardBody>
											</div>
										</Col>

										<Col xxl={3} sm={6}>
											<div class="card profile-project-card shadow-none profile-project-info">
												<CardBody class="p-4">
													<div class="d-flex">
														<div class="flex-grow-1 text-muted overflow-hidden">
															<h5 class="fs-15 text-truncate">
																<Link href="{null}" class="text-dark">Chat App</Link>
															</h5>
															<p class="text-muted text-truncate mb-0">
																Last Update : <span class="fw-semibold text-dark">8 hr Ago</span>
															</p>
														</div>
														<div class="flex-shrink-0 ms-2">
															<div class="badge badge-soft-warning fs-12">Inprogress</div>
														</div>
													</div>

													<div class="d-flex mt-4">
														<div class="flex-grow-1">
															<div class="d-flex align-items-center gap-2">
																<div>
																	<h5 class="fs-13 text-muted mb-0">Members :</h5>
																</div>
																<div class="avatar-group">
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<div 										class="avatar-title rounded-circle bg-light text-primary"
																			>
																				R
																			</div>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar3}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar8}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</CardBody>
											</div>
										</Col>

										<Col xxl={3} sm={6}>
											<div class="card profile-project-card shadow-none profile-project-warning">
												<CardBody class="p-4">
													<div class="d-flex">
														<div class="flex-grow-1 text-muted overflow-hidden">
															<h5 class="fs-15 text-truncate">
																<Link href="{null}" class="text-dark">Project Update</Link>
															</h5>
															<p class="text-muted text-truncate mb-0">
																Last Update : <span class="fw-semibold text-dark">48 min Ago</span>
															</p>
														</div>
														<div class="flex-shrink-0 ms-2">
															<div class="badge badge-soft-warning fs-12">Inprogress</div>
														</div>
													</div>

													<div class="d-flex mt-4">
														<div class="flex-grow-1">
															<div class="d-flex align-items-center gap-2">
																<div>
																	<h5 class="fs-13 text-muted mb-0">Members :</h5>
																</div>
																<div class="avatar-group">
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar6}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar5}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar4}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</CardBody>
											</div>
										</Col>

										<Col xxl={3} sm={6}>
											<div class="card profile-project-card shadow-none profile-project-success">
												<CardBody class="p-4">
													<div class="d-flex">
														<div class="flex-grow-1 text-muted overflow-hidden">
															<h5 class="fs-15 text-truncate">
																<Link href="{null}" class="text-dark">Client - Jennifer</Link>
															</h5>
															<p class="text-muted text-truncate mb-0">
																Last Update : <span class="fw-semibold text-dark">30 min Ago</span>
															</p>
														</div>
														<div class="flex-shrink-0 ms-2">
															<div class="badge badge-soft-primary fs-12">Process</div>
														</div>
													</div>

													<div class="d-flex mt-4">
														<div class="flex-grow-1">
															<div class="d-flex align-items-center gap-2">
																<div>
																	<h5 class="fs-13 text-muted mb-0">Members :</h5>
																</div>
																<div class="avatar-group">
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar1}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</CardBody>
											</div>
										</Col>

										<Col xxl={3} sm={6}>
											<Card
												class="profile-project-card shadow-none mb-xxl-0  profile-project-info"
											>
												<CardBody class="p-4">
													<div class="d-flex">
														<div class="flex-grow-1 text-muted overflow-hidden">
															<h5 class="fs-15 text-truncate">
																<Link href="{null}" class="text-dark"
																	>Bsuiness Template - UI/UX design</Link
																>
															</h5>
															<p class="text-muted text-truncate mb-0">
																Last Update : <span class="fw-semibold text-dark">7 month Ago</span>
															</p>
														</div>
														<div class="flex-shrink-0 ms-2">
															<div class="badge badge-soft-success fs-12">Completed</div>
														</div>
													</div>
													<div class="d-flex mt-4">
														<div class="flex-grow-1">
															<div class="d-flex align-items-center gap-2">
																<div>
																	<h5 class="fs-13 text-muted mb-0">Members :</h5>
																</div>
																<div class="avatar-group">
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar2}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar3}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar4}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<div class="avatar-title rounded-circle bg-primary">2+</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</CardBody>
											</Card>
										</Col>

										<Col xxl={3} sm={6}>
											<Card
												class="profile-project-card shadow-none mb-xxl-0  profile-project-success"
											>
												<CardBody class="p-4">
													<div class="d-flex">
														<div class="flex-grow-1 text-muted overflow-hidden">
															<h5 class="fs-15 text-truncate">
																<Link href="{null}" class="text-dark">Update Project</Link>
															</h5>
															<p class="text-muted text-truncate mb-0">
																Last Update : <span class="fw-semibold text-dark">1 month Ago</span>
															</p>
														</div>
														<div class="flex-shrink-0 ms-2">
															<div class="badge badge-soft-info fs-12">New</div>
														</div>
													</div>
													<div class="d-flex mt-4">
														<div class="flex-grow-1">
															<div class="d-flex align-items-center gap-2">
																<div>
																	<h5 class="fs-13 text-muted mb-0">Members :</h5>
																</div>
																<div class="avatar-group">
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar7}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<div 										class="avatar-title rounded-circle bg-light text-primary"
																			>
																				A
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</CardBody>
											</Card>
										</Col>

										<Col xxl={3} sm={6}>
											<Card
												class="profile-project-card shadow-none mb-sm-0  profile-project-secondary"
											>
												<CardBody class="p-4">
													<div class="d-flex">
														<div class="flex-grow-1 text-muted overflow-hidden">
															<h5 class="fs-14 text-truncate">
																<Link href="{null}" class="text-dark">Bank Management System</Link>
															</h5>
															<p class="text-muted text-truncate mb-0">
																Last Update : <span class="fw-semibold text-dark">10 month Ago</span
																>
															</p>
														</div>
														<div class="flex-shrink-0 ms-2">
															<div class="badge badge-soft-success fs-10">Completed</div>
														</div>
													</div>
													<div class="d-flex mt-4">
														<div class="flex-grow-1">
															<div class="d-flex align-items-center gap-2">
																<div>
																	<h5 class="fs-12 text-muted mb-0">Members :</h5>
																</div>
																<div class="avatar-group">
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar7}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar6}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar5}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<div class="avatar-title rounded-circle bg-primary">2+</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</CardBody>
											</Card>
										</Col>

										<Col xxl={3} sm={6}>
											<Card class="profile-project-card shadow-none mb-0  profile-project-primary">
												<CardBody class="p-4">
													<div class="d-flex">
														<div class="flex-grow-1 text-muted overflow-hidden">
															<h5 class="fs-14 text-truncate">
																<Link href="{null}" class="text-dark">PSD to HTML Convert</Link>
															</h5>
															<p class="text-muted text-truncate mb-0">
																Last Update : <span class="fw-semibold text-dark">29 min Ago</span>
															</p>
														</div>
														<div class="flex-shrink-0 ms-2">
															<div class="badge badge-soft-info fs-10">New</div>
														</div>
													</div>
													<div class="d-flex mt-4">
														<div class="flex-grow-1">
															<div class="d-flex align-items-center gap-2">
																<div>
																	<h5 class="fs-12 text-muted mb-0">Members :</h5>
																</div>
																<div class="avatar-group">
																	<div class="avatar-group-item">
																		<div class="avatar-xs">
																			<img
																				src={avatar7}
																				alt=""
																				class="rounded-circle img-fluid"
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</CardBody>
											</Card>
										</Col>

										<Col lg={12}>
											<div class="mt-4">
												<ul class="pagination pagination-separated justify-content-center mb-0">
													<li class="page-item disabled">
														<Link href="{null}" class="page-link"
															><i class="mdi mdi-chevron-left" /></Link
														>
													</li>
													<li class="page-item active">
														<Link href="{null}" class="page-link">1</Link>
													</li>
													<li class="page-item">
														<Link href="{null}" class="page-link">2</Link>
													</li>
													<li class="page-item">
														<Link href="{null}" class="page-link">3</Link>
													</li>
													<li class="page-item">
														<Link href="{null}" class="page-link">4</Link>
													</li>
													<li class="page-item">
														<Link href="{null}" class="page-link">5</Link>
													</li>
													<li class="page-item">
														<Link href="{null}" class="page-link"
															><i class="mdi mdi-chevron-right" /></Link
														>
													</li>
												</ul>
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</TabPane>

						<TabPane
							id="documents"
							tabId={4}
							class={activeTab == 4 ? 'active' : ''}
							role="tabpanel"
						>
							<Card>
								<CardBody>
									<div class="d-flex align-items-center mb-4">
										<h5 class="card-title flex-grow-1 mb-0">Documents</h5>
										<div class="flex-shrink-0">
											<input class="form-control d-none" type="file" id="formFile" />
											<Label for="formFile" class="btn btn-danger"
												><i class="ri-upload-2-fill me-1 align-bottom" /> Upload File</Label
											>
										</div>
									</div>
									<Row>
										<Col lg={12}>
											<div class="table-responsive">
												<table class="table table-borderless align-middle mb-0">
													<thead class="table-light">
														<tr>
															<th scope="col">File Name</th>
															<th scope="col">Type</th>
															<th scope="col">Size</th>
															<th scope="col">Upload Date</th>
															<th scope="col">Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<div class="d-flex align-items-center">
																	<div class="avatar-sm">
																		<div 									class="avatar-title bg-soft-primary text-primary rounded fs-20">
																			<i class="ri-file-zip-fill"></i>
																		</div>
																	</div>
																	<div class="ms-3 flex-grow-1">
																		<h6 class="fs-16 mb-0"><a
																				href="{null}">Artboard-documents.zip</a>
																		</h6>
																	</div>
																</div>
															</td>
															<td>Zip File</td>
															<td>4.57 MB</td>
															<td>12 Dec 2021</td>
															<td>
																<div class="dropdown">
																	<a href="/dashboard"
																		class="btn btn-light btn-icon"
																		id="dropdownMenuLink15"
																		data-bs-toggle="dropdown"
																		aria-expanded="true">
																		<i class="ri-equalizer-fill"></i>
																	</a>
																	<ul class="dropdown-menu dropdown-menu-end"
																		aria-labelledby="dropdownMenuLink15">
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-eye-fill me-2 align-middle text-muted"></i>View</a>
																		</li>
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-download-2-fill me-2 align-middle text-muted"></i>Download</a>
																		</li>
																		<li class="dropdown-divider"></li>
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete</a>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="d-flex align-items-center">
																	<div class="avatar-sm">
																		<div 									class="avatar-title bg-soft-danger text-danger rounded fs-20">
																			<i class="ri-file-pdf-fill"></i>
																		</div>
																	</div>
																	<div class="ms-3 flex-grow-1">
																		<h6 class="fs-16 mb-0"><a
																				href="{null}">Bank
																				Management System</a></h6>
																	</div>
																</div>
															</td>
															<td>PDF File</td>
															<td>8.89 MB</td>
															<td>24 Nov 2021</td>
															<td>
																<div class="dropdown">
																	<a href="/dashboard"
																		class="btn btn-light btn-icon"
																		id="dropdownMenuLink3"
																		data-bs-toggle="dropdown"
																		aria-expanded="true">
																		<i class="ri-equalizer-fill"></i>
																	</a>
																	<ul class="dropdown-menu dropdown-menu-end"
																		aria-labelledby="dropdownMenuLink3">
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-eye-fill me-2 align-middle text-muted"></i>View</a>
																		</li>
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-download-2-fill me-2 align-middle text-muted"></i>Download</a>
																		</li>
																		<li class="dropdown-divider"></li>
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete</a>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="d-flex align-items-center">
																	<div class="avatar-sm">
																		<div 									class="avatar-title bg-soft-secondary text-secondary rounded fs-20">
																			<i class="ri-video-line"></i>
																		</div>
																	</div>
																	<div class="ms-3 flex-grow-1">
																		<h6 class="fs-16 mb-0"><a
																				href="{null}">Tour-video.mp4</a>
																		</h6>
																	</div>
																</div>
															</td>
															<td>MP4 File</td>
															<td>14.62 MB</td>
															<td>19 Nov 2021</td>
															<td>
																<div class="dropdown">
																	<a href="/dashboard"
																		class="btn btn-light btn-icon"
																		id="dropdownMenuLink4"
																		data-bs-toggle="dropdown"
																		aria-expanded="true">
																		<i class="ri-equalizer-fill"></i>
																	</a>
																	<ul class="dropdown-menu dropdown-menu-end"
																		aria-labelledby="dropdownMenuLink4">
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-eye-fill me-2 align-middle text-muted"></i>View</a>
																		</li>
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-download-2-fill me-2 align-middle text-muted"></i>Download</a>
																		</li>
																		<li class="dropdown-divider"></li>
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete</a>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="d-flex align-items-center">
																	<div class="avatar-sm">
																		<div 									class="avatar-title bg-soft-success text-success rounded fs-20">
																			<i
																				class="ri-file-excel-fill"></i>
																		</div>
																	</div>
																	<div class="ms-3 flex-grow-1">
																		<h6 class="fs-16 mb-0"><a
																				href="{null}">Account-statement.xsl</a>
																		</h6>
																	</div>
																</div>
															</td>
															<td>XSL File</td>
															<td>2.38 KB</td>
															<td>14 Nov 2021</td>
															<td>
																<div class="dropdown">
																	<a href="/dashboard"
																		class="btn btn-light btn-icon"
																		id="dropdownMenuLink5"
																		data-bs-toggle="dropdown"
																		aria-expanded="true">
																		<i class="ri-equalizer-fill"></i>
																	</a>
																	<ul class="dropdown-menu dropdown-menu-end"
																		aria-labelledby="dropdownMenuLink5">
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-eye-fill me-2 align-middle text-muted"></i>View</a>
																		</li>
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-download-2-fill me-2 align-middle text-muted"></i>Download</a>
																		</li>
																		<li class="dropdown-divider"></li>
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete</a>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="d-flex align-items-center">
																	<div class="avatar-sm">
																		<div 									class="avatar-title bg-soft-info text-info rounded fs-20">
																			<i class="ri-folder-line"></i>
																		</div>
																	</div>
																	<div class="ms-3 flex-grow-1">
																		<h6 class="fs-16 mb-0"><a
																				href="{null}">Project
																				Screenshots Collection</a>
																		</h6>
																	</div>
																</div>
															</td>
															<td>Floder File</td>
															<td>87.24 MB</td>
															<td>08 Nov 2021</td>
															<td>
																<div class="dropdown">
																	<a href="/dashboard"
																		class="btn btn-light btn-icon"
																		id="dropdownMenuLink6"
																		data-bs-toggle="dropdown"
																		aria-expanded="true">
																		<i class="ri-equalizer-fill"></i>
																	</a>
																	<ul class="dropdown-menu dropdown-menu-end"
																		aria-labelledby="dropdownMenuLink6">
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-eye-fill me-2 align-middle"></i>View</a>
																		</li>
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-download-2-fill me-2 align-middle"></i>Download</a>
																		</li>
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="d-flex align-items-center">
																	<div class="avatar-sm">
																		<div 									class="avatar-title bg-soft-danger text-danger rounded fs-20">
																			<i class="ri-image-2-fill"></i>
																		</div>
																	</div>
																	<div class="ms-3 flex-grow-1">
																		<h6 class="fs-16 mb-0"><a
																				href="{null}">Velzon-logo.png</a>
																		</h6>
																	</div>
																</div>
															</td>
															<td>PNG File</td>
															<td>879 KB</td>
															<td>02 Nov 2021</td>
															<td>
																<div class="dropdown">
																	<a href="/dashboard"
																		class="btn btn-light btn-icon"
																		id="dropdownMenuLink7"
																		data-bs-toggle="dropdown"
																		aria-expanded="true">
																		<i class="ri-equalizer-fill"></i>
																	</a>
																	<ul class="dropdown-menu dropdown-menu-end"
																		aria-labelledby="dropdownMenuLink7">
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-eye-fill me-2 align-middle"></i>View</a>
																		</li>
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-download-2-fill me-2 align-middle"></i>Download</a>
																		</li>
																		<li><a class="dropdown-item"
																				href="{null}"><i
																					class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div class="text-center mt-3">
												<Link href="{null}" class="text-success"
													><i class="mdi mdi-loading mdi-spin fs-20 align-middle me-2" />
													Load more
												</Link>
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</TabPane>
					</TabContent>
				</div>
			</Col>
		</Row>
	</Container>
</div>
