<script>
	import { Card, CardBody, CardHeader, Col,Progress } from 'sveltestrap';
    export let activeProjects;
</script>

<Col xl={12}>
	<Card>
		<CardHeader class="d-flex align-items-center">
			<h4 class="card-title flex-grow-1 mb-0">Active Projects</h4>
			<div class="flex-shrink-0">
				<a href="{null}" class="btn btn-soft-info btn-sm">Export Report</a>
			</div>
		</CardHeader>
		<CardBody>
			<div class="table-responsive table-card">
				<table class="table table-nowrap table-centered align-middle">
					<thead class="bg-light text-muted">
						<tr>
							<th scope="col">Project Name</th>
							<th scope="col">Project Lead</th>
							<th scope="col">Progress</th>
							<th scope="col">Assignee</th>
							<th scope="col">Status</th>
							<th scope="col" style="width: 10%">Due Date</th>
						</tr>
					</thead>

					<tbody>
						{#each activeProjects as item}
							<tr>
								<td class="fw-semibold">{item.projectName}</td>
								<td>
									<img src={item.img} class="avatar-xxs rounded-circle me-1" alt="" />
									<a href="{null}" class="text-reset">{item.projectLead}</a>
								</td>
								<td>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 me-1 text-muted fs-13">{item.percentage}</div>
                                        <Progress class="progress-sm flex-grow-1 rounded" color="primary" value={item.percentage} />
									</div>
								</td>
								<td>
									<div class="avatar-group flex-nowrap">
										{#each item.subItem as item}
											<div class="avatar-group-item">
												<a href="{null}" class="d-inline-block">
													<img src={item.assImg} alt="" class="rounded-circle avatar-xxs" />
												</a>
											</div>
										{/each}
									</div>
								</td>
								<td><span class={'badge badge-soft-' + item.badgeClass}>{item.badge}</span></td>
								<td class="text-muted">{item.dueDate}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<div class="align-items-center mt-xl-3 mt-4 justify-content-between d-flex">
				<div class="flex-shrink-0">
					<div class="text-muted">
						Showing <span class="fw-semibold">5</span> of <span class="fw-semibold">25</span> Results
					</div>
				</div>
				<ul class="pagination pagination-separated pagination-sm mb-0">
					<li class="page-item disabled">
						<a href="{null}" class="page-link">←</a>
					</li>
					<li class="page-item">
						<a href="{null}" class="page-link">1</a>
					</li>
					<li class="page-item active">
						<a href="{null}" class="page-link">2</a>
					</li>
					<li class="page-item">
						<a href="{null}" class="page-link">3</a>
					</li>
					<li class="page-item">
						<a href="{null}" class="page-link">→</a>
					</li>
				</ul>
			</div>
		</CardBody>
	</Card>
</Col>