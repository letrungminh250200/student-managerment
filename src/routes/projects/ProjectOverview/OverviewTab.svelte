<script>
	import {
		Card,
		CardBody,
		Col,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Row,
		Dropdown,
		Button,
		Label
	} from 'sveltestrap';
	import Link from 'svelte-link';
	import avatar2 from '../../../assets/images/users/avatar-2.jpg';
	import avatar3 from '../../../assets/images/users/avatar-3.jpg';
	import avatar4 from '../../../assets/images/users/avatar-4.jpg';
	import avatar6 from '../../../assets/images/users/avatar-6.jpg';
	import avatar7 from '../../../assets/images/users/avatar-7.jpg';
	import avatar8 from '../../../assets/images/users/avatar-8.jpg';
	import avatar10 from '../../../assets/images/users/avatar-10.jpg';

	import img4 from '../../../assets/images/small/img-4.jpg';
	import img5 from '../../../assets/images/small/img-5.jpg';

</script>

<Row>
	<Col xl={9} lg={8}>
		<Card>
			<CardBody>
				<div class="text-muted">
					<h6 class="mb-3 fw-bold text-uppercase">Summary</h6>
					<p>
						It will be as simple as occidental in fact, it will be Occidental. To an English person,
						it will seem like simplified English, as a skeptical Cambridge friend of mine told me
						what Occidental is. The European languages are members of the same family. Their
						separate existence is a myth. For science, music, sport, etc, Europe uses the same
						vocabulary. The languages only differ in their grammar, their pronunciation and their
						most common words.
					</p>

					<ul class="ps-4 vstack gap-2">
						<li>Product Design, Figma (Software), Prototype</li>
						<li>Four Dashboards : Ecommerce, Analytics, Project,etc.</li>
						<li>Create calendar, chat and email app pages.</li>
						<li>Add authentication pages.</li>
						<li>Content listing.</li>
					</ul>

					<div>
						<Button color="" class="btn btn-link link-success p-0">Read more</Button>
					</div>

					<div class="pt-3 border-top border-top-dashed mt-4">
						<Row>
							<Col lg={3} sm={6}>
								<div>
									<p class="mb-2 text-uppercase fw-medium fs-13">Create Date :</p>
									<h5 class="fs-15 mb-0">15 Sep, 2021</h5>
								</div>
							</Col>
							<Col lg={3} sm={6}>
								<div>
									<p class="mb-2 text-uppercase fw-medium fs-13">Due Date :</p>
									<h5 class="fs-15 mb-0">29 Dec, 2021</h5>
								</div>
							</Col>
							<Col lg={3} sm={6}>
								<div>
									<p class="mb-2 text-uppercase fw-medium fs-13">Priority :</p>
									<div class="badge bg-danger fs-12">High</div>
								</div>
							</Col>
							<Col lg={3} sm={6}>
								<div>
									<p class="mb-2 text-uppercase fw-medium fs-13">Status :</p>
									<div class="badge bg-warning fs-12">Inprogess</div>
								</div>
							</Col>
						</Row>
					</div>

					<div class="pt-3 border-top border-top-dashed mt-4">
						<h6 class="mb-3 fw-bold text-uppercase">Resources</h6>
						<Row class="g-3">
							<Col lg={6} class="col-xxl-4">
								<div class="border rounded border-dashed p-2">
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 me-3">
											<div class="avatar-sm">
												<div class="avatar-title bg-light text-primary rounded fs-24">
													<i class="ri-folder-zip-line" />
												</div>
											</div>
										</div>
										<div class="flex-grow-1 overflow-hidden">
											<h5 class="fs-15 mb-1">
												<Link href="{null}" class="text-body text-truncate d-block">App pages.zip</Link>
											</h5>
											<div>2.2MB</div>
										</div>
										<div class="flex-shrink-0 ms-2">
											<div class="d-flex gap-1">
												<Button class="btn btn-icon text-muted btn-sm fs-18" color=""
													><i class="ri-download-2-line" /></Button
												>
												<Dropdown>
													<DropdownToggle
														class="btn btn-icon text-muted btn-sm fs-18 dropdown"
														color=""
													>
														<i class="ri-more-fill" />
													</DropdownToggle>
													<DropdownMenu>
														<li>
															<DropdownItem href="{null}"
																><i class="ri-pencil-fill align-bottom me-2 text-muted" /> Rename</DropdownItem
															>
														</li>
														<li>
															<DropdownItem href="{null}"
																><i class="ri-delete-bin-fill align-bottom me-2 text-muted" /> Delete</DropdownItem
															>
														</li>
													</DropdownMenu>
												</Dropdown>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<!-- end col -->
							<Col lg={6} class="col-xxl-4">
								<div class="border rounded border-dashed p-2">
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 me-3">
											<div class="avatar-sm">
												<div class="avatar-title bg-light text-primary rounded fs-24">
													<i class="ri-file-ppt-2-line" />
												</div>
											</div>
										</div>
										<div class="flex-grow-1 overflow-hidden">
											<h5 class="fs-15 mb-1">
												<Link href="{null}" class="text-body text-truncate d-block"
													>Velzon admin.ppt</Link
												>
											</h5>
											<div>2.4MB</div>
										</div>
										<div class="flex-shrink-0 ms-2">
											<div class="d-flex gap-1">
												<Button class="btn btn-icon text-muted btn-sm fs-18" color=""
													><i class="ri-download-2-line" /></Button
												>
												<Dropdown>
													<DropdownToggle
														class="btn btn-icon text-muted btn-sm fs-18 dropdown"
														color=""
													>
														<i class="ri-more-fill" />
													</DropdownToggle>
													<DropdownMenu>
														<li>
															<DropdownItem href="{null}"
																><i class="ri-pencil-fill align-bottom me-2 text-muted" /> Rename</DropdownItem
															>
														</li>
														<li>
															<DropdownItem href="{null}"
																><i class="ri-delete-bin-fill align-bottom me-2 text-muted" /> Delete</DropdownItem
															>
														</li>
													</DropdownMenu>
												</Dropdown>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<!-- end col -->
						</Row>
						<!-- end row -->
					</div>
				</div>
			</CardBody>
			<!-- end card body -->
		</Card>
		<!-- end card -->

		<Card>
			<div class="card-header align-items-center d-flex">
				<h4 class="card-title mb-0 flex-grow-1">Comments</h4>
				<div class="flex-shrink-0">
					<Dropdown class="card-header-dropdown">
						<DropdownToggle class="text-reset dropdown-btn p-0" href="{null}" color="">
							<span class="text-muted">Recent<i class="mdi mdi-chevron-down ms-1" /></span>
						</DropdownToggle>
						<DropdownMenu class="dropdown-menu-end">
							<DropdownItem href="{null}">Recent</DropdownItem>
							<DropdownItem href="{null}">Top Rated</DropdownItem>
							<DropdownItem href="{null}">Previous</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>
			<!-- end card header -->

			<CardBody>
				<div data-simplebar style="height: 300px;" class="px-3 mx-n3 mb-2">
					<div class="d-flex mb-4">
						<div class="flex-shrink-0">
							<img
								src={avatar8}
								alt=""
								class="avatar-xs rounded-circle"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h5 class="fs-14">
								Joseph Parker <small class="text-muted ms-2">20 Dec 2021 - 05:47AM</small>
							</h5>
							<p class="text-muted">
								I am getting message from customers that when they place order always get error
								message .
							</p>
							<Link href="{null}" class="badge text-muted bg-light"
								><i class="mdi mdi-reply" /> Reply</Link>
							<div class="d-flex mt-4">
								<div class="flex-shrink-0">
									<img
										src={avatar10}
										alt=""
										class="avatar-xs rounded-circle"
									/>
								</div>
								<div class="flex-grow-1 ms-3">
									<h5 class="fs-14">
										Alexis Clarke <small class="text-muted ms-2">22 Dec 2021 - 02:32PM</small>
									</h5>
									<p class="text-muted">
										Please be sure to check your Spam mailbox to see if your email filters have
										identified the email from Dell as spam.
									</p>
									<Link href="{null}" class="badge text-muted bg-light"
										><i class="mdi mdi-reply" /> Reply</Link
									>
								</div>
							</div>
						</div>
					</div>
					<div class="d-flex mb-4">
						<div class="flex-shrink-0">
							<img
								src={avatar6}
								alt=""
								class="avatar-xs rounded-circle"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h5 class="fs-14">
								Donald Palmer <small class="text-muted ms-2">24 Dec 2021 - 05:20PM</small>
							</h5>
							<p class="text-muted">
								If you have further questions, please contact Customer Support from the “Action
								Menu” on your <Link href="{null}" class="text-decoration-underline"
									>Online Order Support</Link
								>.
							</p>
							<Link href="{null}" class="badge text-muted bg-light"
								><i class="mdi mdi-reply" /> Reply</Link>
						</div>
					</div>
					<div class="d-flex">
						<div class="flex-shrink-0">
							<img
								src={avatar10}
								alt=""
								class="avatar-xs rounded-circle"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h5 class="fs-14">Alexis Clarke <small class="text-muted ms-2">26 min ago</small></h5>
							<p class="text-muted">
								Your <Link href="{null}" class="text-decoration-underline"
									>Online Order Support</Link
								> provides you with the most current status of your order. To help manage your order
								refer to the “Action Menu” to initiate return, contact Customer Support and more.
							</p>
							<Row class="g-2 mb-3">
								<div class="col-lg-1 col-sm-2 col-6">
									<img src={img4} alt="" class="img-fluid rounded" />
								</div>
								<div class="col-lg-1 col-sm-2 col-6">
									<img src={img5} alt="" class="img-fluid rounded" />
								</div>
							</Row>
							<Link href="{null}" class="badge text-muted bg-light"
								><i class="mdi mdi-reply" /> Reply</Link>
							<div class="d-flex mt-4">
								<div class="flex-shrink-0">
									<img
										src={avatar6}
										alt=""
										class="avatar-xs rounded-circle"
									/>
								</div>
								<div class="flex-grow-1 ms-3">
									<h5 class="fs-14">
										Donald Palmer <small class="text-muted ms-2">8 sec ago</small>
									</h5>
									<p class="text-muted">
										Other shipping methods are available at checkout if you want your purchase
										delivered faster.
									</p>
									<Link href="{null}" class="badge text-muted bg-light"
										><i class="mdi mdi-reply" /> Reply</Link
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<form class="mt-4">
					<Row class="g-3">
						<div class="col-12">
							<Label for="exampleFormControlTextarea1" class="form-label text-body"
								>Leave a Comments</Label>
							<textarea
								class="form-control bg-light border-light"
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="Enter your comment..."
							/>
						</div>
						<div class="col-12 text-end">
							<Button class="btn btn-ghost-primary btn-icon waves-effect me-1" color=""
								><i class="ri-attachment-line fs-16" /></Button>
							<Link href="{null}" class="btn btn-success">Post Comments</Link>
						</div>
					</Row>
				</form>
			</CardBody>
			<!-- end card body -->
		</Card>
		<!-- end card -->
	</Col>
	<!-- ene col -->
	<div class="col-xl-3 col-lg-4">
		<Card>
			<CardBody>
				<h5 class="card-title mb-4">Skills</h5>
				<div class="d-flex flex-wrap gap-2 fs-16">
					<div class="badge fw-medium badge-soft-secondary">UI/UX</div>
					<div class="badge fw-medium badge-soft-secondary">Figma</div>
					<div class="badge fw-medium badge-soft-secondary">HTML</div>
					<div class="badge fw-medium badge-soft-secondary">CSS</div>
					<div class="badge fw-medium badge-soft-secondary">Javascript</div>
					<div class="badge fw-medium badge-soft-secondary">C#</div>
					<div class="badge fw-medium badge-soft-secondary">Nodejs</div>
				</div>
			</CardBody>
			<!-- end card body -->
		</Card>
		<!-- end card -->

		<Card>
			<div class="card-header align-items-center d-flex border-bottom-dashed">
				<h4 class="card-title mb-0 flex-grow-1">Members</h4>
				<div class="flex-shrink-0">
					<Button class="btn btn-soft-danger btn-sm" color="">
						<i class="ri-share-line me-1 align-bottom" /> Invite Member</Button>
				</div>
			</div>

			<CardBody>
				<div data-simplebar style="height: 235px;" class="mx-n3 px-3">
					<div class="vstack gap-3">
						<div class="d-flex align-items-center">
							<div class="avatar-xs flex-shrink-0 me-3">
								<img
									src={avatar2}
									alt=""
									class="img-fluid rounded-circle"
								/>
							</div>
							<div class="flex-grow-1">
								<h5 class="fs-14 mb-0"><a href="{null}" class="text-body d-block">Nancy Martino</a></h5>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex align-items-center gap-1">
									<Button color="light" class="btn-sm">Message</Button>
									<Dropdown>
										<DropdownToggle class="btn btn-icon btn-sm fs-16 text-muted dropdown" color="">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem href="{null}"
												><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
											>
											<DropdownItem href="{null}"
												><i
													class="ri-star-fill text-muted me-2 align-bottom"
												/>Favourite</DropdownItem
											>
											<DropdownItem href="{null}"
												><i
													class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
						<!-- end member item -->
						<div class="d-flex align-items-center">
							<div class="avatar-xs flex-shrink-0 me-3">
								<div class="avatar-title bg-soft-danger text-danger rounded-circle">HB</div>
							</div>
							<div class="flex-grow-1">
								<h5 class="fs-14 mb-0"><a href="{null}" class="text-body d-block">Henry Baird</a></h5>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex align-items-center gap-1">
									<Button color="light" class="btn-sm">Message</Button>
									<Dropdown>
										<DropdownToggle color="" class="btn btn-icon btn-sm fs-16 text-muted dropdown">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem href="{null}"
												><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
											>
											<DropdownItem href="{null}"
												><i
													class="ri-star-fill text-muted me-2 align-bottom"
												/>Favourite</DropdownItem
											>
											<DropdownItem href="{null}"
												><i
													class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
						<!-- end member item -->
						<div class="d-flex align-items-center">
							<div class="avatar-xs flex-shrink-0 me-3">
								<img
									src={avatar3}
									alt=""
									class="img-fluid rounded-circle"
								/>
							</div>
							<div class="flex-grow-1">
								<h5 class="fs-14 mb-0"><a href="{null}" class="text-body d-block">Frank Hook</a></h5>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex align-items-center gap-1">
									<Button color="light" class="btn-sm">Message</Button>
									<Dropdown>
										<DropdownToggle class="btn btn-icon btn-sm fs-16 text-muted dropdown" color="">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem href="{null}"
												><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
											>
											<DropdownItem href="{null}"
												><i
													class="ri-star-fill text-muted me-2 align-bottom"
												/>Favourite</DropdownItem
											>
											<DropdownItem href="{null}"
												><i
													class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
						<!-- end member item -->
						<div class="d-flex align-items-center">
							<div class="avatar-xs flex-shrink-0 me-3">
								<img
									src={avatar4}
									alt=""
									class="img-fluid rounded-circle"
								/>
							</div>
							<div class="flex-grow-1">
								<h5 class="fs-14 mb-0">
									<a href="{null}" class="text-body d-block">Jennifer Carter</a>
								</h5>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex align-items-center gap-1">
									<Button color="light" class="btn-sm">Message</Button>
									<Dropdown>
										<DropdownToggle class="btn btn-icon btn-sm fs-16 text-muted dropdown" color="">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem href="{null}"
												><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
											>
											<DropdownItem href="{null}"
												><i
													class="ri-star-fill text-muted me-2 align-bottom"
												/>Favourite</DropdownItem
											>
											<DropdownItem href="{null}"
												><i
													class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
						<!-- end member item -->
						<div class="d-flex align-items-center">
							<div class="avatar-xs flex-shrink-0 me-3">
								<div class="avatar-title bg-soft-success text-success rounded-circle">AC</div>
							</div>
							<div class="flex-grow-1">
								<h5 class="fs-14 mb-0"><a href="{null}" class="text-body d-block">Alexis Clarke</a></h5>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex align-items-center gap-1">
									<Button color="light" class="btn-sm">Message</Button>
									<Dropdown>
										<DropdownToggle class="btn btn-icon btn-sm fs-16 text-muted dropdown" color="">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem href="{null}"
												><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
											>
											<DropdownItem href="{null}"
												><i
													class="ri-star-fill text-muted me-2 align-bottom"
												/>Favourite</DropdownItem
											>
											<DropdownItem href="{null}"
												><i
													class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
						<!-- end member item -->
						<div class="d-flex align-items-center">
							<div class="avatar-xs flex-shrink-0 me-3">
								<img
									src={avatar7}
									alt=""
									class="img-fluid rounded-circle"
								/>
							</div>
							<div class="flex-grow-1">
								<h5 class="fs-14 mb-0"><a href="{null}" class="text-body d-block">Joseph Parker</a></h5>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex align-items-center gap-1">
									<Button color="light" class="btn-sm">Message</Button>
									<Dropdown>
										<DropdownToggle class="btn btn-icon btn-sm fs-16 text-muted dropdown" color="">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem href="{null}"
												><i class="ri-eye-fill text-muted me-2 align-bottom" />View</DropdownItem
											>
											<DropdownItem href="{null}"
												><i
													class="ri-star-fill text-muted me-2 align-bottom"
												/>Favourite</DropdownItem
											>
											<DropdownItem href="{null}"
												><i
													class="ri-delete-bin-5-fill text-muted me-2 align-bottom"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
						<!-- end member item -->
					</div>
					<!-- end list -->
				</div>
			</CardBody>
			<!-- end card body -->
		</Card>
		<!-- end card -->

		<Card>
			<div class="card-header align-items-center d-flex border-bottom-dashed">
				<h4 class="card-title mb-0 flex-grow-1">Attachments</h4>
				<div class="flex-shrink-0">
					<Button class="btn btn-soft-info btn-sm" color=""
						><i class="ri-upload-2-fill me-1 align-bottom" /> Upload</Button>
				</div>
			</div>

			<CardBody>
				<div class="vstack gap-2">
					<div class="border rounded border-dashed p-2">
						<div class="d-flex align-items-center">
							<div class="flex-shrink-0 me-3">
								<div class="avatar-sm">
									<div class="avatar-title bg-light text-secondary rounded fs-24">
										<i class="ri-folder-zip-line" />
									</div>
								</div>
							</div>
							<div class="flex-grow-1 overflow-hidden">
								<h5 class="fs-15 mb-1">
									<Link href="{null}" class="text-body text-truncate d-block">App-pages.zip</Link>
								</h5>
								<div>2.2MB</div>
							</div>
							<div class="flex-shrink-0 ms-2">
								<div class="d-flex gap-1">
									<Button class="btn btn-icon text-muted btn-sm fs-18" color=""
										><i class="ri-download-2-line" /></Button
									>
									<Dropdown>
										<DropdownToggle
											tag="button"
											color=""
											class="btn btn-icon text-muted btn-sm fs-18 dropdown"
										>
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem
												><i class="ri-pencil-fill align-bottom me-2 text-muted" /> Rename</DropdownItem
											>
											<DropdownItem
												><i class="ri-delete-bin-fill align-bottom me-2 text-muted" /> Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
					</div>

					<div class="border rounded border-dashed p-2">
						<div class="d-flex align-items-center">
							<div class="flex-shrink-0 me-3">
								<div class="avatar-sm">
									<div class="avatar-title bg-light text-secondary rounded fs-24">
										<i class="ri-file-ppt-2-line" />
									</div>
								</div>
							</div>
							<div class="flex-grow-1 overflow-hidden">
								<h5 class="fs-15 mb-1">
									<Link href="{null}" class="text-body text-truncate d-block">Velzon-admin.ppt</Link>
								</h5>
								<div>2.4MB</div>
							</div>
							<div class="flex-shrink-0 ms-2">
								<div class="d-flex gap-1">
									<Button class="btn btn-icon text-muted btn-sm fs-18" color=""
										><i class="ri-download-2-line" /></Button
									>
									<Dropdown>
										<DropdownToggle class="btn btn-icon text-muted btn-sm fs-18 dropdown" color="">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem href="{null}"
												><i class="ri-pencil-fill align-bottom me-2 text-muted" /> Rename</DropdownItem
											>
											<DropdownItem href="{null}"
												><i class="ri-delete-bin-fill align-bottom me-2 text-muted" /> Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
					</div>

					<div class="border rounded border-dashed p-2">
						<div class="d-flex align-items-center">
							<div class="flex-shrink-0 me-3">
								<div class="avatar-sm">
									<div class="avatar-title bg-light text-secondary rounded fs-24">
										<i class="ri-folder-zip-line" />
									</div>
								</div>
							</div>
							<div class="flex-grow-1 overflow-hidden">
								<h5 class="fs-15 mb-1">
									<Link href="{null}" class="text-body text-truncate d-block">Images.zip</Link>
								</h5>
								<div>1.2MB</div>
							</div>
							<div class="flex-shrink-0 ms-2">
								<div class="d-flex gap-1">
									<Button class="btn btn-icon text-muted btn-sm fs-18" color=""
										><i class="ri-download-2-line" /></Button
									>
									<Dropdown>
										<DropdownToggle class="btn btn-icon text-muted btn-sm fs-18 dropdown" color="">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem href="{null}"
												><i class="ri-pencil-fill align-bottom me-2 text-muted" /> Rename</DropdownItem
											>
											<DropdownItem href="{null}"
												><i class="ri-delete-bin-fill align-bottom me-2 text-muted" /> Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
					</div>

					<div class="border rounded border-dashed p-2">
						<div class="d-flex align-items-center">
							<div class="flex-shrink-0 me-3">
								<div class="avatar-sm">
									<div class="avatar-title bg-light text-secondary rounded fs-24">
										<i class="ri-image-2-line" />
									</div>
								</div>
							</div>
							<div class="flex-grow-1 overflow-hidden">
								<h5 class="fs-15 mb-1">
									<Link href="{null}" class="text-body text-truncate d-block">bg-pattern.png</Link>
								</h5>
								<div>1.1MB</div>
							</div>
							<div class="flex-shrink-0 ms-2">
								<div class="d-flex gap-1">
									<Button class="btn btn-icon text-muted btn-sm fs-18" color=""
										><i class="ri-download-2-line" /></Button
									>
									<Dropdown>
										<DropdownToggle class="btn btn-icon text-muted btn-sm fs-18 dropdown" color="">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem href="{null}"
												><i class="ri-pencil-fill align-bottom me-2 text-muted" /> Rename</DropdownItem
											>
											<DropdownItem href="{null}"
												><i class="ri-delete-bin-fill align-bottom me-2 text-muted" /> Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
					</div>

					<div class="mt-2 text-center">
						<Button color="success">View more</Button>
					</div>
				</div>
			</CardBody>
			<!-- end card body -->
		</Card>
		<!-- end card -->
	</div>
	<!-- end col -->
</Row>
