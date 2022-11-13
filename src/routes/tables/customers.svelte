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
	import Select from 'svelte-select';
	import Flatpickr from 'svelte-flatpickr';
	import BreadCrumb from '../../Components/Common/BreadCrumb.svelte';
	import { html } from 'gridjs';
	import {userStore} from '../../lib/store/userStore';
	import {getUserRef, updateUserRef , addUserRef, deleteUserRef} from '../../lib/service/userRefService';
	import {key} from '../../lib/service/db'
	import {goto} from '$app/navigation';
	import { toasts, ToastContainer, FlatToast }  from "svelte-toasts";

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
	let selected;
	let checkFormEdit = false;
	const genderOptions = [
		{ value: 0, label: 'Female' },
		{ value: 1, label: 'Male' },
	];
	let idCus;
	let dataModal = {
		full_name: '',
		address: '',
		email: '',
		address: '',
		birthday: '',
	}
	const addCustomer = async (e) => {
		const formdata = new FormData(e.target);
		try{
			await addUserRef({
				user_id: $userStore.user.id,
				full_name: formdata.get('full_name'), 
				email: formdata.get('email'), 
				phone: formdata.get('phone'),
				address: formdata.get('address'),
				birthday: formdata.get('birthday'),
				gender: selected.value,
			})
			.then(res  => {
				if(res.status >= 400){
					toasts.add({
						title: 'Failed',
						description: 'Delete Failed!', 
						duration: 3000, 
						placement: 'bottom-right',
						type: 'info',
						placement: 'bottom-right',
						showProgress: true,
						type: 'error',
						theme: 'dark',
					});
				}else{
					toggle()
					formValue('','','','','')
					toasts.add({
						title: 'Success',
						description: 'Delete Successfuly!', 
						duration: 3000, 
						placement: 'bottom-right',
						type: 'info',
						placement: 'bottom-right',
						showProgress: true,
						type: 'success',
						theme: 'light',
					});
				}
			})
		}catch(e) {
			console.error(e)
		}
	}
	const updateCustomer = async (e) => {
		const formdata = new FormData(e.target);
		const data = {
			full_name: formdata.get('full_name'), 
			email: formdata.get('email'), 
			phone: formdata.get('phone'),
			address: formdata.get('address'),
			birthday: formdata.get('birthday'),
			gender: selected.value,
		}
		try{
			await updateUserRef(data,idCus)
			.then(res => {
				if(res.status >= 400){
					console.error(e)
					toasts.add({
						title: 'Failed',
						description: 'Update Failed!', 
						duration: 3000, 
						placement: 'bottom-right',
						type: 'info',
						placement: 'bottom-right',
						showProgress: true,
						type: 'error',
						theme: 'dark',
					});
				}else{
					toggle()
					formValue('','','','','')
					toasts.add({
						title: 'Success',
						description: 'Update Successfuly!', 
						duration: 3000, 
						placement: 'bottom-right',
						type: 'info',
						placement: 'bottom-right',
						showProgress: true,
						type: 'success',
						theme: 'light',
					});

				}
			})
			// window.location.reload();
		}catch(e) {
			console.error(e)
			toasts.add({
				title: 'Failed',
				description: 'Update Failed!', 
				duration: 3000, 
				placement: 'bottom-right',
				type: 'info',
				placement: 'bottom-right',
				showProgress: true,
				type: 'error',
				theme: 'dark',
			});
		}
	}
	const server = {
		url: 'https://trnsohfvgkrqzwrtqrnk.supabase.co/rest/v1/ref_profiles?select=*',
		headers: {
			apikey: key,
			Authorization: 'Bearer ' + $userStore.access_token,
		},
		total: (data) => data.count,
		then: (data) => data.map((res, index) => ([
				// index + 1,
				res.id,
				res.full_name, 
				res.email, 
				res.phone, 
				res.gender, 
				res.address, 
				res.birthday,
			])
		),
	};
	const showModalAdd = () => {
		checkFormEdit = false;
		selected = '1'
		toggle()
	}
	const deleteCustomer = async (id) => {
		try{
			await deleteUserRef(id)
			toasts.add({
				title: 'Success',
				description: 'Delete Successfuly!', 
				duration: 3000, 
				placement: 'bottom-right',
				type: 'info',
				placement: 'bottom-right',
				showProgress: true,
				type: 'success',
				theme: 'light',
			});
			// window.location.reload();
		}catch(e) {
			console.error(e)
			toasts.add({
				title: 'Failed',
				description: 'Delete Failed!', 
				duration: 3000, 
				placement: 'bottom-right',
				type: 'info',
				placement: 'bottom-right',
				showProgress: true,
				type: 'error',
				theme: 'dark',
			});
		}
	}
	
	let formValue = (full_name,email,phone,address,birthday) => {
		dataModal.full_name = full_name;
		dataModal.email = email;
		dataModal.phone = phone;
		dataModal.address = address;
		dataModal.birthday = birthday;
	}
	
	const showModalEdit = (data) => {
		formValue(data[1].data, data[2].data, data[3].data, data[5].data, data[6].data)
		idCus =  data[0].data
		selected = data[4].data
		checkFormEdit = true;
		toggle()
	}
	const hideModal = () => {
		formValue('','','','','')
		toggle()
	}
</script>

<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Customer" pageTitle="Tables" />
			<Row>
				<Col lg={12}>
					<Card>
						<CardBody>
							<div id="table-gridjs" class="position-relative table-customer">
								<Button  class="btn btn-primary position-absolute text-reset mx-1" style="right:0; z-index:1;" on:click={showModalAdd}> 
									<i class="mdi mdi-18px mdi-account-plus"></i> Add user	
								</Button>
								<Grid
									{server}
									columns={[
										'ID',
										'Full Name',
										{
											name: 'Email',
											width: '180px',
											formatter: (cell, row) => html(`<a href="javascript://"> ${cell} </a>`)
										},
										{
											name: 'Phone Number',
											width: '228px',
										},
										{
											name: 'Gender',
											formatter: (cell, row) => (cell == 1) ? 'Male' : 'Female'
										},
										'Address',
										'Birtday',
										{
											name: '',
											sortable: false,
											width: '70px',
											formatter: (cell, row) => {
												return h('button', {
													className: 'btn btn-primary text-white ',
													onClick: () => showModalEdit(row._cells)
												}, 'Edit');
											}
											
										},
										{
											name: '',
											sortable: false,
											width: '80px',
											className: 'le-trung-minh',
											formatter: (cell, row) => {
												return h('button', {
													className: 'btn btn-primary text-white ',
													onClick: () => deleteCustomer(row._cells[0].data)
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
					<ModalHeader>Add Customer</ModalHeader>
					<ModalBody>
						<form action="index" on:submit|preventDefault={(!checkFormEdit) ? addCustomer : updateCustomer}>
							<div class="mb-3">
								<Label
									for="full_name"
									class="form-label"
									>Full Name<span class="text-danger"
										>*</span
									></Label
								>
								<input
									type="text"
									class="form-control"
									id="full_name"
									name="full_name"
									bind:value={dataModal.full_name}
									placeholder="Full name"
									required
								/>
							</div>
							<div class="mb-3">
								<Label
									for="address"
									class="form-label"
									>Address<span class="text-danger"
										>*</span
									></Label
								>
								<input
									type="text"
									class="form-control"
									id="address"
									name="address"
									bind:value={dataModal.address}
									placeholder="Address"
									required
								/>
							</div>
							<div class="mb-3">
								<Label
									for="phone"
									class="form-label"
									>Phone Number<span class="text-danger"
										>*</span
									></Label
								>
								<input
									type="text"
									class="form-control"
									id="phone"
									name="phone"
									bind:value={dataModal.phone}
									placeholder="Phone Numbwe"
									required
								/>
							</div>
							<div class="mb-3">
								<Label
									for="eamil"
									class="form-label"
									>Email<span class="text-danger"
										>*</span
									></Label
								>
								<input
									type="eamil"
									class="form-control"
									id="email"
									name="email"
									bind:value={dataModal.email}
									placeholder="Email"
									required
								/>
							</div>
							<div class="mb-3">
								<Label for="gender" class="form-label">Gender</Label>
								<Select
									class="form-select mb-3"
									id="gender"
									name="gender"
									bind:value={selected}
									placeholder="Gender..."
									items={genderOptions}
									required
								/>
							</div>
							<div class="mb-3">
								<Label for="birthday" class="form-label">Birthday</Label>
								<Flatpickr
									class="form-control"
									id='birthday'
									name= 'birthday'
									bind:value={dataModal.birthday}
									options={{
										dateFormat: 'd M, Y'
									}}
									placeholder="Choose your birthday"
								/>
							</div>
							<div class="text-end">
								<Button color="primary" type="submit" >save</Button>
					  			<Button color="secondary" type="button" on:click={hideModal}>Cancel</Button>
							</div>
						</form>
					</ModalBody>
				</Modal>
			</Row>
	</Container>
	<ToastContainer let:data={data}>
		<FlatToast {data}  />
	</ToastContainer>
</div>

<style global>
	@import '//cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
	.table-customer button.gridjs-sort:last-child(7){
   		display: none !important;
	}
</style>
