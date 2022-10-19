<script>
	import {
		Card,
		CardBody,
		Col,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Input,
		Row,
		Dropdown,
        Progress
	} from 'sveltestrap';
	import Link from 'svelte-link';
	import { MoreHorizontalIcon } from 'svelte-feather-icons';
	import Select from 'svelte-select';
	export let projectList;

	const customerstatus = [
		{ label: 'All', value: 'All' },
		{ label: 'Today', value: 'Today' },
		{ label: 'Yesterday', value: 'Yesterday' },
		{ label: 'Last 7 Days', value: 'Last 7 Days' },
		{ label: 'Last 30 Days', value: 'Last 30 Days' },
		{ label: 'This Month', value: 'This Month' },
		{ label: 'Last Year', value: 'Last Year' },
	];
</script>

<Row class="g-4 mb-3">
	<div class="col-sm-auto">
		<div>
			<Link href="/projects/apps-projects-create" class="btn btn-success"
				><i class="ri-add-line align-bottom me-1" /> Add New</Link
			>
		</div>
	</div>
	<div class="col-sm">
		<div class="d-flex align-items-start justify-content-sm-end gap-2">
			<div class="search-box ms-2">
				<Input type="text" class="form-control" placeholder="Search..." />
				<i class="ri-search-line search-icon" />
			</div>

			<div class="select-single">
				<Select class="w-md" items={customerstatus} value="Yesterday" >
				</Select>
			</div>
		</div>
	</div>
</Row>
<div class="row">
	{#each projectList as item}
		{#if item.isDesign1}
			<Col xxl={3} sm={6} class="project-card">
				<Card class="card-height-100">
					<CardBody>
						<div class="d-flex flex-column h-100">
							<div class="d-flex">
								<div class="flex-grow-1">
									<p class="text-muted mb-4">{item.time}</p>
								</div>
								<div class="flex-shrink-0">
									<div class="d-flex gap-1 align-items-center">
										<button
											type="button"
											class={`btn avatar-xs mt-n1 p-0 favourite-btn ${item.ratingClass}`}
										>
											<span class="avatar-title bg-transparent fs-15">
												<i class="ri-star-fill" />
											</span>
										</button>
										<Dropdown>
											<DropdownToggle
												tag="button"
												color=""
												class="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15"
											>
												<MoreHorizontalIcon class="icon-sm" />
											</DropdownToggle>

											<DropdownMenu class="dropdown-menu-end">
												<DropdownItem href="/projects/apps-projects-overview"
													><i class="ri-eye-fill align-bottom me-2 text-muted" /> View</DropdownItem
												>
												<DropdownItem href="/projects/apps-projects-create"
													><i class="ri-pencil-fill align-bottom me-2 text-muted" /> Edit</DropdownItem
												>
												<div class="dropdown-divider" />
												<DropdownItem
													href="#"
													data-bs-toggle="modal"
													data-bs-target="#removeProjectModal"
													><i class="ri-delete-bin-fill align-bottom me-2 text-muted" /> Remove</DropdownItem
												>
											</DropdownMenu>
										</Dropdown>
									</div>
								</div>
							</div>
							<div class="d-flex mb-2">
								<div class="flex-shrink-0 me-3">
									<div class="avatar-sm">
										<span class={'avatar-title rounded p-2 bg-soft-' + item.imgbgColor}>
											<img src={item.img} alt="" class="img-fluid p-1" />
										</span>
									</div>
								</div>
								<div class="flex-grow-1">
									<h5 class="mb-1 fs-16">
										<Link href="/projects/apps-projects-overview" class="text-dark">{item.label}</Link>
									</h5>
									<p class="text-muted text-truncate-two-lines mb-3">{item.caption}</p>
								</div>
							</div>
							<div class="mt-auto">
								<div class="d-flex mb-2">
									<div class="flex-grow-1">
										<div>Tasks</div>
									</div>
									<div class="flex-shrink-0">
										<div>
											<i class="ri-list-check align-bottom me-1 text-muted" />
											{item.number}
										</div>
									</div>
								</div>
								<div class="progress progress-sm animated-progess">
                                    <Progress bar color="primary" value={item.progressBar} />
									
								</div>
							</div>
						</div>
					</CardBody>
					<div class="card-footer bg-transparent border-top-dashed py-2">
						<div class="d-flex align-items-center">
							<div class="flex-grow-1">
								<div class="avatar-group">
									{#each item.subItem as item}
										{#if item.imgFooter}
											<Link
												href="#"
												class="avatar-group-item"
												data-bs-toggle="tooltip"
												data-bs-trigger="hover"
												data-bs-placement="top"
												title="Darline Williams"
											>
												<div class="avatar-xxs">
													<img src={item.imgFooter} alt="" class="rounded-circle img-fluid" />
												</div>
											</Link>
										{:else}
											<Link
												href="#"
												class="avatar-group-item"
												data-bs-toggle="tooltip"
												data-bs-trigger="hover"
												data-bs-placement="top"
												title="Add Members"
											>
												<div class="avatar-xxs">
													<div class={item.bgColor
															? 'avatar-title rounded-circle bg-' + item.bgColor
															: 'avatar-title rounded-circle bg-light border-dashed border text-primary fs-16 '}
													>
														{item.imgNumber}
													</div>
												</div>
											</Link>
										{/if}
									{/each}
								</div>
							</div>
							<div class="flex-shrink-0">
								<div class="text-muted">
									<i class="ri-calendar-event-fill me-1 align-bottom" />
									{item.date}
								</div>
							</div>
						</div>
					</div>
				</Card>
			</Col>
		{:else if item.isDesign2}
			<Col xxl={3} sm={6} class="project-card">
				<Card>
					<CardBody>
						<div class={`p-3 mt-n3 mx-n3 bg-soft-${item.cardHeaderClass} rounded-top`}>
							<div class="d-flex align-items-center">
								<div class="flex-grow-1">
									<h5 class="mb-0 fs-15">
										<Link href="/projects/apps-projects-overview" class="text-dark">{item.label}</Link>
									</h5>
								</div>
								<div class="flex-shrink-0">
									<div class="d-flex gap-1 align-items-center my-n2">
										<button
											type="button"
											class={`btn avatar-xs p-0 favourite-btn ${item.ratingClass}`}
										>
											<span class="avatar-title bg-transparent fs-15">
												<i class="ri-star-fill" />
											</span>
										</button>
										<Dropdown direction="start">
											<DropdownToggle
												color=""
												class="btn btn-link text-muted p-1 mt-n1 py-0 text-decoration-none fs-15"
											>
												<MoreHorizontalIcon class="icon-sm" />
											</DropdownToggle>

											<DropdownMenu class="dropdown-menu-end">
												<DropdownItem href="/projects/apps-projects-overview"
													><i class="ri-eye-fill align-bottom me-2 text-muted" /> View</DropdownItem
												>
												<DropdownItem href="/projects/apps-projects-create"
													><i class="ri-pencil-fill align-bottom me-2 text-muted" /> Edit</DropdownItem
												>
												<div class="dropdown-divider" />
												<DropdownItem
													href="#"
													data-bs-toggle="modal"
													data-bs-target="#removeProjectModal"
													><i class="ri-delete-bin-fill align-bottom me-2 text-muted" /> Remove</DropdownItem
												>
											</DropdownMenu>
										</Dropdown>
									</div>
								</div>
							</div>
						</div>

						<div class="py-3">
							<Row class="gy-3">
								<Col xs={6}>
									<div>
										<p class="text-muted mb-1">Status</p>
										<div class={'fs-12 badge badge-soft-' + item.statusClass}>{item.status}</div>
									</div>
								</Col>
								<Col xs={6}>
									<div>
										<p class="text-muted mb-1">Deadline</p>
										<h5 class="fs-14">{item.deadline}</h5>
									</div>
								</Col>
							</Row>

							<div class="d-flex align-items-center mt-3">
								<p class="text-muted mb-0 me-2">Team :</p>
								<div class="avatar-group">
									{#each item.subItem as item}
										{#if item.imgTeam}
											<Link
												href="#"
												class="avatar-group-item"
												data-bs-toggle="tooltip"
												data-bs-trigger="hover"
												data-bs-placement="top"
												title="Darline Williams"
											>
												<div class="avatar-xxs">
													<img src={item.imgTeam} alt="" class="rounded-circle img-fluid" />
												</div>
											</Link>
										{:else}
											<Link
												href="#"
												class="avatar-group-item"
												data-bs-toggle="tooltip"
												data-bs-trigger="hover"
												data-bs-placement="top"
												title="Donna Kline"
											>
												<div class="avatar-xxs">
													<div class={item.bgColor
															? 'avatar-title rounded-circle bg-' + item.bgColor
															: 'avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary'}
													>
														{item.imgNumber}
													</div>
												</div>
											</Link>
										{/if}
									{/each}
								</div>
							</div>
						</div>
						<div>
							<div class="d-flex mb-2">
								<div class="flex-grow-1">
									<div>Progress</div>
								</div>
								<div class="flex-shrink-0">
									<div>{item.progressBar}</div>
								</div>
							</div>
							<div class="progress progress-sm animated-progess">
                                <Progress bar color="danger" value={item.progressBar} />

							</div>
						</div>
					</CardBody>
				</Card>
			</Col>
		{:else if item.isDesign3}
			<Col xxl={3} sm={6} class="project-card">
				<Card>
					<CardBody>
						<div class={`p-3 mt-n3 mx-n3 bg-${item.cardHeaderClass} rounded-top`}>
							<div class="d-flex gap-1 align-items-center justify-content-end my-n2">
								<button
									type="button"
									class={`btn avatar-xs p-0 favourite-btn ${item.ratingClass}`}
								>
									<span class="avatar-title bg-transparent fs-15">
										<i class="ri-star-fill" />
									</span>
								</button>
								<Dropdown>
									<DropdownToggle
										color=""
										class="btn btn-link text-muted p-1 mt-n1 py-0 text-decoration-none fs-15"
									>
										<MoreHorizontalIcon class="icon-sm" />
									</DropdownToggle>

									<DropdownMenu class="dropdown-menu-end">
										<DropdownItem href="/projects/apps-projects-overview"
											><i class="ri-eye-fill align-bottom me-2 text-muted" /> View</DropdownItem
										>
										<DropdownItem href="/projects/apps-projects-create"
											><i class="ri-pencil-fill align-bottom me-2 text-muted" /> Edit</DropdownItem
										>
										<DropdownItem divider />
										<DropdownItem
											href="#"
											data-bs-toggle="modal"
											data-bs-target="#removeProjectModal"
											><i class="ri-delete-bin-fill align-bottom me-2 text-muted" /> Remove</DropdownItem
										>
									</DropdownMenu>
								</Dropdown>
							</div>
							<div class="text-center pb-3">
								<img src={item.img} alt="" height="32" />
							</div>
						</div>

						<div class="py-3">
							<h5 class="fs-14 mb-3">
								<Link href="/projects/apps-projects-overview" class="text-dark">{item.label}</Link>
							</h5>
							<Row class="gy-3">
								<Col xs={6}>
									<div>
										<p class="text-muted mb-1">Status</p>
										<div class={'fs-12 badge badge-soft-' + item.statusClass}>{item.status}</div>
									</div>
								</Col>
								<Col xs={6}>
									<div>
										<p class="text-muted mb-1">Deadline</p>
										<h5 class="fs-14">{item.deadline}</h5>
									</div>
								</Col>
							</Row>

							<div class="d-flex align-items-center mt-3">
								<p class="text-muted mb-0 me-2">Team :</p>
								<div class="avatar-group">
									{#each item.subItem as item}
										{#if item.imgTeam}
											<Link
												href="#"
												class="avatar-group-item"
												data-bs-toggle="tooltip"
												data-bs-trigger="hover"
												data-bs-placement="top"
												title="Darline Williams"
											>
												<div class="avatar-xxs">
													<img src={item.imgTeam} alt="" class="rounded-circle img-fluid" />
												</div>
											</Link>
										{:else}
											<Link
												href="#"
												class="avatar-group-item"
												data-bs-toggle="tooltip"
												data-bs-trigger="hover"
												data-bs-placement="top"
												title="Donna Kline"
											>
												<div class="avatar-xxs">
													<div class={item.bgColor
															? 'avatar-title rounded-circle bg-' + item.bgColor
															: 'avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary'}
													>
														{item.imgNumber}
													</div>
												</div>
											</Link>
										{/if}
									{/each}
								</div>
							</div>
						</div>
						<div>
							<div class="d-flex mb-2">
								<div class="flex-grow-1">
									<div>Tasks</div>
								</div>
								<div class="flex-shrink-0">
									<div><i class="ri-list-check align-bottom me-1 text-muted" /> {item.number}</div>
								</div>
							</div>
							<div class="progress progress-sm animated-progess">
                                <Progress bar color="success" value={item.progressBar} />

							</div>
						</div>
					</CardBody>
				</Card>
			</Col>
		{:else}
			{null}
		{/if}
	{/each}
</div>
<Row class="g-0 text-center text-sm-start align-items-center mb-4">
	<Col sm={6}>
		<div>
			<p class="mb-sm-0 text-muted">
				Showing <span class="fw-semibold">1</span> to <span class="fw-semibold">10</span> of
				<span class="fw-semibold text-decoration-underline">12</span> entries
			</p>
		</div>
	</Col>

	<Col sm={6}>
		<ul
			class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"
		>
			<li class="page-item disabled">
				<Link href="#" class="page-link">Previous</Link>
			</li>
			<li class="page-item active">
				<Link href="#" class="page-link">1</Link>
			</li>
			<li class="page-item ">
				<Link href="#" class="page-link">2</Link>
			</li>
			<li class="page-item">
				<Link href="#" class="page-link">3</Link>
			</li>
			<li class="page-item">
				<Link href="#" class="page-link">4</Link>
			</li>
			<li class="page-item">
				<Link href="#" class="page-link">5</Link>
			</li>
			<li class="page-item">
				<Link href="#" class="page-link">Next</Link>
			</li>
		</ul>
	</Col>
</Row>
