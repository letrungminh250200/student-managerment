<script>
	export let projectTasks;
	import {
		Card,
		CardBody,
		CardHeader,
		Col,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Dropdown,
		Label,
        Table
	} from 'sveltestrap';
</script>

<Col xl={5}>
	<Card class="card-height-100">
		<CardHeader class="card-header align-items-center d-flex">
			<h4 class="card-title mb-0 flex-grow-1 py-1">My Tasks</h4>
			<div class="flex-shrink-0">
				<Dropdown class="card-header-dropdown">
					<DropdownToggle class="text-reset dropdown-btn p-0" color="" tag="a" role="button">
						<span class="text-muted">All Tasks <i class="mdi mdi-chevron-down ms-1" /></span>
					</DropdownToggle>
					<DropdownMenu class="dropdown-menu-end">
						<DropdownItem>All Tasks</DropdownItem>
						<DropdownItem>Completed</DropdownItem>
						<DropdownItem>Inprogress</DropdownItem>
						<DropdownItem>Pending</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</CardHeader>
		<CardBody>
			<div class="table-responsive table-card">
				<Table class="table-borderless table-nowrap table-centered align-middle mb-0">
					<thead class="table-light text-muted">
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Dedline</th>
							<th scope="col">Status</th>
							<th scope="col">Assignee</th>
						</tr>
					</thead>
					<tbody>
						{#each projectTasks as item}
							<tr>
								<td>
									<div class="form-check">
										<input
											class="form-check-input fs-15"
											type="checkbox"
											value=""
											id={item.forId}
										/>
										<Label class="form-check-label ms-1" for={item.forId}>
											{item.label}
										</Label>
									</div>
								</td>
								<td class="text-muted">{item.dedline}</td>
								<td><span class={'badge badge-soft-' + item.statusClass}>{item.status}</span></td>
								<td>
									<a href="{null}" class="d-inline-block">
										<img src={item.img} alt="" class="rounded-circle avatar-xxs" />
									</a>
								</td>
							</tr>
						{/each}
					</tbody>
				</Table>
			</div>
			<div class="mt-3 text-center">
				<a href="{null}" class="text-muted text-decoration-underline">Load More</a>
			</div>
		</CardBody>
	</Card>
</Col>