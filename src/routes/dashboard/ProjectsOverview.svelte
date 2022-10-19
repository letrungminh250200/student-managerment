<script>
	import { Card, CardBody, CardHeader, Col, Row } from 'sveltestrap';
	import ProjectsOverviewCharts from './ProjectsOverviewCharts.svelte';
</script>

<Row>
	<Col xl={12}>
		<Card>
			<CardHeader class="border-0 align-items-center d-flex">
				<h4 class="card-title mb-0 flex-grow-1">Projects Overview</h4>
				<div class="d-flex gap-1">
					<button type="button" class="btn btn-soft-secondary btn-sm"> ALL </button>
					<button type="button" class="btn btn-soft-secondary btn-sm"> 1M </button>
					<button type="button" class="btn btn-soft-secondary btn-sm"> 6M </button>
					<button type="button" class="btn btn-soft-primary btn-sm"> 1Y </button>
				</div>
			</CardHeader>

			<CardHeader class="p-0 border-0 bg-soft-light">
				<Row class="g-0 text-center">
					<Col xs={6} sm={3}>
						<div class="p-3 border border-dashed border-start-0">
							<h5 class="mb-1"><span class="counter-value" data-target="9851">0</span></h5>

							<p class="text-muted mb-0">Number of Projects</p>
						</div>
					</Col>
					<Col xs={6} sm={3}>
						<div class="p-3 border border-dashed border-start-0">
							<h5 class="mb-1"><span class="counter-value" data-target="1026">0</span></h5>

							<p class="text-muted mb-0">Active Projects</p>
						</div>
					</Col>
					<Col xs={6} sm={3}>
						<div class="p-3 border border-dashed border-start-0">
							<h5 class="mb-1">$<span class="counter-value" data-target="228.89">0</span>k</h5>

							<p class="text-muted mb-0">Revenue</p>
						</div>
					</Col>
					<Col xs={6} sm={3}>
						<div class="p-3 border border-dashed border-start-0 border-end-0">
							<h5 class="mb-1 text-success">
								<span class="counter-value" data-target="10589">0</span>h
							</h5>

							<p class="text-muted mb-0">Working Hours</p>
						</div>
					</Col>
				</Row>
			</CardHeader>
			<CardBody class="p-0 pb-2">
				<div>
					<div dir="ltr" class="apex-charts">
						<ProjectsOverviewCharts dataColors={["--vz-secondary", "--vz-warning", "--vz-success"]} />
					</div>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>
