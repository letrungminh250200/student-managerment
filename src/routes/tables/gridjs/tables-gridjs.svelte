<svelte:head>
  <title>Grid js | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
	import Grid from 'gridjs-svelte';
	import {
		Card,
		CardBody,
		Col,
		Container,
		Input,
		Label,
		Row,
		Table,
		CardHeader
	} from 'sveltestrap';
	import BreadCrumb from '../../../Components/Common/BreadCrumb.svelte';
	import { html } from 'gridjs';

	const data = [
		[
			'01',
			'Jonathan',
			'jonathan@example.com',
			'Senior Implementation Architect',
			'Hauck Inc',
			'Holy See'
		],
		['02', 'Harold', 'harold@example.com', 'Forward Creative Coordinator', 'Metz Inc', 'Iran'],
		[
			'03',
			'Shannon',
			'shannon@example.com',
			'Legacy Functionality Associate',
			'Zemlak Group',
			'South Georgia'
		],
		['04', 'Robert', 'robert@example.com', 'Product Accounts Technician', 'Hoeger', 'San Marino'],
		['05', 'Noel', 'noel@example.com', 'Customer Data Director', 'Howell - Rippin', 'Germany'],
		[
			'06',
			'Traci',
			'traci@example.com',
			'Corporate Identity Director',
			'Koelpin - Goldner',
			'Vanuatu'
		],
		[
			'07',
			'Kerry',
			'kerry@example.com',
			'Lead Applications Associate',
			'Feeney, Langworth and Tremblay',
			'Niger'
		],
		['08', 'Patsy', 'patsy@example.com', 'Dynamic Assurance Director', 'Streich Group', 'Niue'],
		[
			'09',
			'Cathy',
			'cathy@example.com',
			'Customer Data Director',
			'Ebert, Schamberger and Johnston',
			'Mexico'
		],
		[
			'10',
			'Tyrone',
			'tyrone@example.com',
			'Senior Response Liaison',
			'Raynor, Rolfson and Daugherty',
			'Qatar'
		]
	];

	const data1 = [
		['#VL2111', 'Jonathan', '07 Oct, 2021', '$24.05', 'Paid'],
		['#VL2110', 'Harold', '07 Oct, 2021', '$26.15', 'Paid'],
		['#VL2109', 'Shannon', '06 Oct, 2021', '$21.25', 'Refund'],
		['#VL2108', 'Robert', '05 Oct, 2021', '$25.03', 'Paid'],
		['#VL2107', 'Noel', '05 Oct, 2021', '$22.61', 'Paid'],
		['#VL2106', 'Traci', '04 Oct, 2021', '$24.05', 'Paid'],
		['#VL2105', 'Kerry', '04 Oct, 2021', '$26.15', 'Paid'],
		['#VL2104', 'Patsy', '04 Oct, 2021', '$21.25', 'Refund'],
		['#VL2103', 'Cathy', '03 Oct, 2021', '$22.61', 'Paid'],
		['#VL2102', 'Tyrone', '03 Oct, 2021', '$25.03', 'Paid']
	];

	const data2 = [
		[
			'Jonathan',
			'jonathan@example.com',
			'Senior Implementation Architect',
			'Hauck Inc',
			'Holy See'
		],
		['Harold', 'harold@example.com', 'Forward Creative Coordinator', 'Metz Inc', 'Iran'],
		[
			'Shannon',
			'shannon@example.com',
			'Legacy Functionality Associate',
			'Zemlak Group',
			'South Georgia'
		],
		['Robert', 'robert@example.com', 'Product Accounts Technician', 'Hoeger', 'San Marino'],
		['Noel', 'noel@example.com', 'Customer Data Director', 'Howell - Rippin', 'Germany'],
		['Traci', 'traci@example.com', 'Corporate Identity Director', 'Koelpin - Goldner', 'Vanuatu'],
		[
			'Kerry',
			'kerry@example.com',
			'Lead Applications Associate',
			'Feeney, Langworth and Tremblay',
			'Niger'
		],
		['Patsy', 'patsy@example.com', 'Dynamic Assurance Director', 'Streich Group', 'Niue'],
		[
			'Cathy',
			'cathy@example.com',
			'Customer Data Director',
			'Ebert, Schamberger and Johnston',
			'Mexico'
		],
		[
			'Tyrone',
			'tyrone@example.com',
			'Senior Response Liaison',
			'Raynor, Rolfson and Daugherty',
			'Qatar'
		]
	];
</script>

<div class="page-content">
	<Container fluid>
		<BreadCrumb title="GRID JS" pageTitle="Tables" />

		<Row>
			<Col lg={12}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0 flex-grow-1">Base Example</h4>
					</CardHeader>

					<CardBody>
						<div id="table-gridjs">
							<Grid
								{data}
								columns={[
									'ID',
									'Name',
									{
										name: 'Email',
										width: '180px',
										formatter: (cell, row) => html(`<a href="javascript://"> ${cell} </a>`)
									},
									{
										name: 'Position',
										width: '228px',
									},
									'Company',
									'Country',
									{
										name: 'Actions',
										width: '120px',
										formatter: (cell) =>
											html(
												`<a href="javascript://" class="text-reset text-decoration-underline"> Details </a>`
											)
									}
								]}
								search={true}
								sort={true}
								pagination={{ enabled: true, limit: 5 }}
							/>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col lg={12}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Card Table</h4>
					</CardHeader>

					<CardBody>
						<div id="table-card" class="table-card">
							<Grid
								data={data2}
								columns={['Name',
								{
										name: 'Email',
										width: '200px'
								},'Position', 'Company',{
										name: 'Country',
										width: '160px'
								}]}
								sort={true}
								pagination={{ enabled: true, limit: 5 }}
							/>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col lg={12}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Pagination</h4>
					</CardHeader>

					<CardBody>
						<div id="table-pagination">
							<Grid
								data={data1}
								columns={[
									{
										name: 'ID',
										width: '120px',
										formatter: (cell, row) => html(`<a href="javascript://"> ${cell} </a>`)
									},
									'Name',
									'Date',
									'Total',
									'Status',
									{
										name: 'Actions',
										width: '100px',
										formatter: (cell) =>
											html(`<button type='button' class='btn btn-sm btn-light'> Details </button>`)
									}
								]}
								pagination={{ enabled: true, limit: 5 }}
							/>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col lg={12}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Search</h4>
					</CardHeader>

					<CardBody>
						<div id="table-search">
							<Grid
								data={data2}
								columns={['Name', {
									name: 'Email',
									width: '200px'
							}, 'Position', 'Company', {
										name: 'Country',
										width: '160px'
								}]}
								search={true}
								pagination={{ enabled: true, limit: 5 }}
							/>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col lg={12}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Sorting</h4>
					</CardHeader>

					<CardBody>
						<div id="table-sorting">
							<Grid
								data={data2}
								columns={['Name', 'Email', 'Position', 'Company', 'Country']}
								sort={true}
								pagination={{ enabled: true, limit: 5 }}
							/>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col lg={12}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Loading State</h4>
					</CardHeader>

					<CardBody>
						<div id="table-loading-state">
							<Grid
								data={function () {
									return new Promise(function (resolve) {
										setTimeout(function () {
											resolve(data2);
										}, 2000);
									});
								}}
								columns={['Name', 'Email', 'Position', 'Company', 'Country']}
								sort={true}
								pagination={{ enabled: true, limit: 5 }}
							/>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col lg={12}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Fixed Header</h4>
					</CardHeader>

					<CardBody>
						<div id="table-fixed-header">
							<Grid
								data={data2}
								columns={['Name', 'Email', 'Position', 'Company', 'Country']}
								sort={true}
								pagination={{ enabled: true, limit: 10 }}
								fixedHeader={true}
								height={'400px'}
							/>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col lg={12}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Hidden Columns</h4>
					</CardHeader>

					<CardBody>
						<div id="table-hidden-column">
							<Grid
								{data}
								columns={[
									{
										name: 'ID',
										hidden: true
									},
									'Name',
									'Email',
									'Position',
									'Company',
									{
										name: 'Country',
										hidden: true
									}
								]}
								sort={true}
								pagination={{ enabled: true, limit: 5 }}
							/>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>

<style global>
	@import '//cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
</style>
