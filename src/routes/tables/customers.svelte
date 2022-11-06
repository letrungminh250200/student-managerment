<svelte:head>
  <title>Grid js | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
	import Grid from 'gridjs-svelte';
	import { h, PluginPosition } from "gridjs";
	import {
		Card,
		CardBody,
		Col,
		Container,
		Input,
		Label,
		Row,
		Table,
		Button,
		Modal,
		ModalBody,
		ModalFooter,
		ModalHeader,
		CardHeader
	} from 'sveltestrap';
	import BreadCrumb from '../../Components/Common/BreadCrumb.svelte';
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
		],
		[
			'11',
			'Jonathan',
			'jonathan@example.com',
			'Senior Implementation Architect',
			'Hauck Inc',
			'Holy See'
		],
		['12', 'Harold', 'harold@example.com', 'Forward Creative Coordinator', 'Metz Inc', 'Iran'],
		[
			'13',
			'Shannon',
			'shannon@example.com',
			'Legacy Functionality Associate',
			'Zemlak Group',
			'South Georgia'
		],
		['14', 'Robert', 'robert@example.com', 'Product Accounts Technician', 'Hoeger', 'San Marino'],
		['15', 'Noel', 'noel@example.com', 'Customer Data Director', 'Howell - Rippin', 'Germany'],
		[
			'16',
			'Traci',
			'traci@example.com',
			'Corporate Identity Director',
			'Koelpin - Goldner',
			'Vanuatu'
		],
		[
			'17',
			'Kerry',
			'kerry@example.com',
			'Lead Applications Associate',
			'Feeney, Langworth and Tremblay',
			'Niger'
		],
		['18', 'Patsy', 'patsy@example.com', 'Dynamic Assurance Director', 'Streich Group', 'Niue'],
		[
			'19',
			'Cathy',
			'cathy@example.com',
			'Customer Data Director',
			'Ebert, Schamberger and Johnston',
			'Mexico'
		],
		[
			'20',
			'Tyrone',
			'tyrone@example.com',
			'Senior Response Liaison',
			'Raynor, Rolfson and Daugherty',
			'Qatar'
		]
	];

	let open = false;
	const toggle = () => (open = !open);
</script>

<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Customer" pageTitle="Tables" />
			<Row>
				<Col lg={12}>
					<Card>
						<CardBody>
							<div id="table-gridjs" class="position-relative table-customer">
								<Button  class="btn btn-primary position-absolute text-reset mx-1" style="right:0; z-index:1;" on:click={toggle}> 
									<i class="mdi mdi-18px mdi-account-plus"></i> Add user	
								</Button>
								
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
											name: '',
											sortable: false,
											width: '120px',
											formatter: (cell, row) => {
												return h('button', {
													className: 'btn btn-primary text-white ',
													onClick: () => toggle()
												}, 'Edit');
											}
											
										},
										{
											name: '',
											sortable: false,
											width: '120px',
											className: 'le-trung-minh',
											formatter: (cell, row) => {
												return h('button', {
													className: 'btn btn-primary text-white ',
													onClick: () => toggle()
												}, 'Delete');
											}
											
										},
										
									]}
									
									search={true}
									sort={true}
									pagination={{ enabled: true, limit: 8 }}
								/>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Modal isOpen={open} {toggle}>
					<ModalHeader {toggle}>Modal title</ModalHeader>
					<ModalBody>
					  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					  tempor incididunt ut labore et dolore magna aliqua.
					</ModalBody>
					<ModalFooter>
					  <Button color="primary" on:click={toggle}>Do Something</Button>
					  <Button color="secondary" on:click={toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</Row>
	</Container>
</div>

<style global>
	@import '//cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
	.table-customer button.gridjs-sort:last-child(7){
   		display: none !important;
	}
</style>
