<svelte:head>
  <title>Profile Settings | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
	import {
		Card,
		CardBody,
		CardHeader,
		Col,
		Container,
		Form,
		Input,
		Label,
		Nav,
		NavItem,
		NavLink,
		Row,
		TabContent,
		TabPane
	} from 'sveltestrap';
	import Link from 'svelte-link';
	import Flatpickr from 'svelte-flatpickr';
	import Select from 'svelte-select';
	import profilebg from '../../../../assets/images/profile-bg.jpg'
	import avatar1 from '../../../../assets/images/users/user-1.png'
	import { updateProfile, uploadAvatar, getAvatar, getImages, getUser} from '../../../../lib/service/userService'
	import {userStore} from '../../../../lib/store/userStore'
	import { toasts, ToastContainer, FlatToast }  from "svelte-toasts";
	import {url} from '../../../../lib/service/db'
    import { goto } from '$app/navigation';

	
	let activeTab = 1;
	let selected = "1";
	let avatar;
	
	const genderOptions = [
		{ value: 0, label: 'Female' },
		{ value: 1, label: 'Male' },
		
	];
	const selectYears = [
		{ value: 'Select years', label: 'Select years' },
		{ value: '2001', label: '2001' },
		{ value: '2002', label: '2002' },
		{ value: '2003', label: '2003' },
		{ value: '2004', label: '2004' },
		{ value: '2005', label: '2005' },
		{ value: '2006', label: '2006' },
		{ value: '2007', label: '2007' },
		{ value: '2008', label: '2008' },
		{ value: '2009', label: '2009' },
		{ value: '2010', label: '2010' },
		{ value: '2011', label: '2011' },
		{ value: '2012', label: '2012' },
		{ value: '2013', label: '2013' },
		{ value: '2014', label: '2014' },
		{ value: '2015', label: '2015' },
		{ value: '2016', label: '2016' },
		{ value: '2017', label: '2017' },
		{ value: '2018', label: '2018' },
		{ value: '2019', label: '2019' },
		{ value: '2020', label: '2020' },
		{ value: '2021', label: '2021' },
		{ value: '2022', label: '2022' }
	];
	async function handleChange(e){
		let {data, error} = await uploadAvatar(e.target.files[0])
		if(data){
			if(data.full_name == null){
				goto('/pages/profile/settings/pages-profile-settings')
			}
			// await updateProfile({avatar_url: `${url}/storage/v1/object/sign/avatars/${data.path}`}, $userStore.user.id)
			await updateProfile({avatar_url: data.path}, $userStore.user.id)

		}else{
			console.log(error)
		}
	}
	async function updateProfiles(e){
		const formdata = new FormData(e.target);
		let full_name = `${formdata.get('lastName')} ${formdata.get('fistName')}`;
		let data = { 
				full_name: full_name, 
				website: formdata.get('website'), 
				email: formdata.get('email'), 
				phone: formdata.get('phone'), 
				address: formdata.get('address'), 
				gender: selected.value, 
				birthday: formdata.get('birthday') 
			}
		if(formdata.get('fistName') == '' || formdata.get('lastName') == '' || data.email == '' || data.phone == '' || data.website == '' || data.address == ''){
			toasts.add({
				title: 'Failed',
				description: 'please fill out this field.', 
				duration: 3000, 
				placement: 'bottom-right',
				type: 'info',
				placement: 'bottom-right',
				showProgress: true,
				type: 'error',
				theme: 'dark',
			});
		}else{
			
				await updateProfile(data, $userStore.user.id)
				.then(() =>{
					toasts.add({
					title: 'Success',
					description: 'Form submitted successfully', 
					duration: 3000, 
					placement: 'bottom-right',
					type: 'info',
					theme: 'dark',
					placement: 'bottom-right',
					showProgress: true,
					type: 'success',
				});
				goto('/pages/profile/simple/simplepage')
				})
				.catch(e =>{
					toasts.add({
						title: 'Failed',
						description: e.message, 
						duration: 3000, 
						placement: 'bottom-right',
						type: 'info',
						placement: 'bottom-right',
						showProgress: true,
						type: 'error',
						theme: 'dark',
					});
				})
			}
	}
	// async function setAvatarProfile(){
    //     let {data, err} = await getAvatar($userStore.user.id)
    //     if(data){
	// 		// console.log(data[0].avatar_url)
	// 		await getImages(data[0].avatar_url).then(res=> console.log(res))
	// 		// console.log(image)
    //         avatar = `${data[0].avatar_url}?token=${$userStore.access_token}`
    //     }else{
    //         console.log(err)
    //     }
    // }
    // setAvatarProfile()
</script>

<div class="page-content">
	<Container fluid>
		<div class="position-relative mx-n4 mt-n4">
			<div class="profile-wid-bg profile-setting-img">
				<img src={profilebg} class="profile-wid-img" alt="" />
				<div class="overlay-content">
					<div class="text-end p-3">
						<div class="p-0 ms-auto rounded-circle profile-photo-edit">
							<Input
								id="profile-foreground-img-file-input"
								type="file"
								class="profile-foreground-img-file-input"
							/>
							<Label
								for="profile-foreground-img-file-input"
								class="profile-photo-edit btn btn-light">
								<i class="ri-image-edit-line align-bottom me-1" /> Change Cover
							</Label>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Row>
			<Col xxl={3}>
				<Card class="mt-n5">
					<CardBody class="p-4">
						<div class="text-center">
							<div class="profile-user position-relative d-inline-block mx-auto  mb-4">
								<img
									src={avatar1}
									class="rounded-circle avatar-xl img-thumbnail user-profile-image"
									alt="user-profile"
								/>
								<div class="avatar-xs p-0 rounded-circle profile-photo-edit">
									<Input id="profile-img-file-input" type="file" class="profile-img-file-input"  on:change={e => handleChange(e)}/>
									<Label for="profile-img-file-input" class="profile-photo-edit avatar-xs">
										<span class="avatar-title rounded-circle bg-light text-body">
											<i class="ri-camera-fill" />
										</span>
									</Label>
								</div>
							</div>
							<h5 class="mb-1">Anna Adame</h5>
							<p class="text-muted mb-0">Lead Designer / Developer</p>
						</div>
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<div class="d-flex align-items-center mb-5">
							<div class="flex-grow-1">
								<h5 class="card-title mb-0">Complete Your Profile</h5>
							</div>
							<div class="flex-shrink-0">
								<Link href="{null}" class="badge bg-light text-primary fs-12"
									><i class="ri-edit-box-line align-bottom me-1" /> Edit</Link
								>
							</div>
						</div>
						<div class="progress animated-progress custom-progress progress-label">
							<div 		class="progress-bar bg-danger"
								role="progressbar"
								style="width: 30%"
								aria-valuenow="30"
								aria-valuemin="0"
								aria-valuemax="100">
								<div class="label">30%</div>
							</div>
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<div class="d-flex align-items-center mb-4">
							<div class="flex-grow-1">
								<h5 class="card-title mb-0">Portfolio</h5>
							</div>
							<div class="flex-shrink-0">
								<Link href="{null}" class="badge bg-light text-primary fs-12"
									><i class="ri-add-fill align-bottom me-1" /> Add</Link
								>
							</div>
						</div>
						<div class="mb-3 d-flex">
							<div class="avatar-xs d-block flex-shrink-0 me-3">
								<span class="avatar-title rounded-circle fs-16 bg-dark text-light">
									<i class="ri-github-fill" />
								</span>
							</div>
							<Input
								type="email"
								class="form-control"
								id="gitUsername"
								placeholder="Username"
								value="@daveadame"
							/>
						</div>
						<div class="mb-3 d-flex">
							<div class="avatar-xs d-block flex-shrink-0 me-3">
								<span class="avatar-title rounded-circle fs-16 bg-primary">
									<i class="ri-global-fill" />
								</span>
							</div>
							<Input
								type="text"
								class="form-control"
								id="websiteInput"
								placeholder="www.example.com"
								value="www.velzon.com"
							/>
						</div>
						<div class="mb-3 d-flex">
							<div class="avatar-xs d-block flex-shrink-0 me-3">
								<span class="avatar-title rounded-circle fs-16 bg-success">
									<i class="ri-dribbble-fill" />
								</span>
							</div>
							<Input
								type="text"
								class="form-control"
								id="dribbleName"
								placeholder="Username"
								value="@dave_adame"
							/>
						</div>
					</CardBody>
				</Card>
			</Col>

			<Col xxl={9}>
				<Card class="mt-xxl-n5">
					<CardHeader>
						<Nav class="nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
							<NavItem>
								<NavLink class="fs-14" on:click={() => (activeTab = 1)} active={activeTab == 1}>
									<i class="fas fa-home" />
									Personal Details
								</NavLink>
							</NavItem>
							<!-- <NavItem>
								<NavLink href="{null}" on:click={() => (activeTab = 2)} active={activeTab == 2}>
									<i class="far fa-user" />
									Change Password
								</NavLink>
							</NavItem> -->
							<!-- <NavItem>
								<NavLink href="{null}" on:click={() => (activeTab = 3)} active={activeTab == 3}>
									<i class="far fa-envelope" />
									Experience
								</NavLink>
							</NavItem> -->
							<!-- <NavItem>
								<NavLink href="{null}" on:click={() => (activeTab = 4)} active={activeTab == 4}>
									<i class="far fa-envelope" />
									Privacy Policy
								</NavLink>
							</NavItem> -->
						</Nav>
					</CardHeader>
					<CardBody class="p-4">
						<TabContent>
							<TabPane tabId={1} class={activeTab == 1 ? 'active' : ''}>
								<form on:submit|preventDefault={updateProfiles}>
									<Row>
										<Col lg={6}>
											<div class="mb-3">
												<Label for="firstnameInput" class="form-label">First Name</Label>
												<input
													type="text"
													class="form-control"
													id="firstnameInput"
													name="fistName"
													placeholder="Enter your firstname"
													required
												/>
											</div>
										</Col>
										<Col lg={6}>
											<div class="mb-3">
												<Label for="lastnameInput" class="form-label">Last Name</Label>
												<input
													type="text"
													class="form-control"
													id="lastnameInput"
													name="lastName"
													placeholder="Enter your lastname"
													required
												/>
												<div class="invalid-feedback">
													Please enter Last Name
												</div>
											</div>
										</Col>
										<Col lg={6}>
											<div class="mb-3">
												<Label for="phonenumberInput" class="form-label">Phone Number</Label>
												<input
													type="text"
													class="form-control"
													id="phonenumberInput"
													name="phone"
													placeholder="XXX XXX XXXX"
													required
												/>
											</div>
										</Col>
										<Col lg={6}>
											<div class="mb-3">
												<Label for="emailInput" class="form-label">Email Address</Label>
												<input
													type="email"
													class="form-control"
													id="emailInput"
													name="email"
													placeholder="Enter your email"
													required
												/>
											</div>
										</Col>
										<Col lg={12}>
											<div class="mb-3">
												<Label for="birthdayInput" class="form-label">Birthday</Label>
												<Flatpickr
													class="form-control"
													id='birthdayInput'
													name="birthday"
													required
													options={{
														dateFormat: 'd M, Y'
													}}
												/>
											</div>
										</Col>
										<Col lg={12}>
											<div class="mb-3">
												<Label for="gender" class="form-label">Gender</Label>

												<Select
													class="form-select mb-3"
													id="genderInput"
													bind:value={selected}
													placeholder="Gender..."
													items={genderOptions}
												/>
											</div>
										</Col>
										<Col lg={12}>
											<div class="mb-3">
												<Label for="websiteInput1" class="form-label">Website</Label>
												<input
													type="text"
													class="form-control"
													id="websiteInput1"
													name="website"
													placeholder="www.example.com"
												/>
											</div>
										</Col>
										<Col lg={12}>
											<div class="mb-3">
												<Label for="addressInput" class="form-label">Address</Label>
												<input
													type="text"
													class="form-control"
													id="addressInput"
													name="address"
													placeholder="Address..."
													required
												/>
											</div>
										</Col>
										<!-- <Col lg={12}>
											<div class="mb-3 pb-2">
												<Label for="exampleFormControlTextarea" class="form-label"
													>Description</Label
												>
												<textarea
													class="form-control"
													id="exampleFormControlTextarea"
													rows="3"
													value="Hi I'm Anna Adame, It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family."
												/>
											</div>
										</Col> -->
										<Col lg={12}>
											<div class="hstack gap-2 justify-content-end">
												<button type="submit"  class="btn btn-primary">Updates</button>
												<button type="button" class="btn btn-soft-success">Cancel</button>
											</div>
										</Col>
									</Row>
									<ToastContainer let:data={data}>
										<FlatToast {data}  />
									</ToastContainer>
								</form>
							</TabPane>

							<TabPane tabId={2} class={activeTab == 2 ? 'active' : ''}>
								<Form>
									<Row class="g-2">
										<Col lg={4}>
											<div>
												<Label for="oldpasswordInput" class="form-label">Old Password*</Label>
												<input
													type="password"
													class="form-control"
													id="oldpasswordInput"
													placeholder="Enter current password"
												/>
											</div>
										</Col>

										<Col lg={4}>
											<div>
												<Label for="newpasswordInput" class="form-label">New Password*</Label>
												<Input
													type="password"
													class="form-control"
													id="newpasswordInput"
													placeholder="Enter new password"
												/>
											</div>
										</Col>

										<Col lg={4}>
											<div>
												<Label for="confirmpasswordInput" class="form-label"
													>Confirm Password*</Label
												>
												<Input
													type="password"
													class="form-control"
													id="confirmpasswordInput"
													placeholder="Confirm password"
												/>
											</div>
										</Col>

										<Col lg={12}>
											<div class="mb-3">
												<Link href="{null}" class="link-primary text-decoration-underline">Forgot Password ?</Link>
											</div>
										</Col>

										<Col lg={12}>
											<div class="text-end">
												<button type="button" class="btn btn-success">Change Password</button>
											</div>
										</Col>
									</Row>
								</Form>
								<div class="mt-4 mb-3 border-bottom pb-2">
									<div class="float-end">
										<Link href="{null}" class="link-primary">All Logout</Link>
									</div>
									<h5 class="card-title">Login History</h5>
								</div>
								<div class="d-flex align-items-center mb-3">
									<div class="flex-shrink-0 avatar-sm">
										<div class="avatar-title bg-light text-primary rounded-3 fs-18">
											<i class="ri-smartphone-line" />
										</div>
									</div>
									<div class="flex-grow-1 ms-3">
										<h6 class="fs-15">iPhone 12 Pro</h6>
										<p class="text-muted mb-0">Los Angeles, United States - March 16 at 2:47PM</p>
									</div>
									<div>
										<Link href="{null}">Logout</Link>
									</div>
								</div>
								<div class="d-flex align-items-center mb-3">
									<div class="flex-shrink-0 avatar-sm">
										<div class="avatar-title bg-light text-primary rounded-3 fs-18">
											<i class="ri-tablet-line" />
										</div>
									</div>
									<div class="flex-grow-1 ms-3">
										<h6 class="fs-15">Apple iPad Pro</h6>
										<p class="text-muted mb-0">
											Washington, United States - November 06 at 10:43AM
										</p>
									</div>
									<div>
										<Link href="{null}">Logout</Link>
									</div>
								</div>
								<div class="d-flex align-items-center mb-3">
									<div class="flex-shrink-0 avatar-sm">
										<div class="avatar-title bg-light text-primary rounded-3 fs-18">
											<i class="ri-smartphone-line" />
										</div>
									</div>
									<div class="flex-grow-1 ms-3">
										<h6 class="fs-15">Galaxy S21 Ultra 5G</h6>
										<p class="text-muted mb-0">Conneticut, United States - June 12 at 3:24PM</p>
									</div>
									<div>
										<Link href="{null}">Logout</Link>
									</div>
								</div>
								<div class="d-flex align-items-center">
									<div class="flex-shrink-0 avatar-sm">
										<div class="avatar-title bg-light text-primary rounded-3 fs-18">
											<i class="ri-macbook-line" />
										</div>
									</div>
									<div class="flex-grow-1 ms-3">
										<h6 class="fs-15">Dell Inspiron 14</h6>
										<p class="text-muted mb-0">Phoenix, United States - July 26 at 8:10AM</p>
									</div>
									<div>
										<Link href="{null}">Logout</Link>
									</div>
								</div>
							</TabPane>

							<!-- <TabPane tabId={3} class={activeTab == 3 ? 'active' : ''}>
								<form>
									<div id="newlink">
										<div id="1">
											<Row>
												<Col lg={12}>
													<div class="mb-3">
														<Label for="jobTitle" class="form-label">Job Title</Label>
														<Input
															type="text"
															class="form-control"
															id="jobTitle"
															placeholder="Job title"
															value="Lead Designer / Developer"
														/>
													</div>
												</Col>

												<Col lg={6}>
													<div class="mb-3">
														<Label for="companyName" class="form-label">Company Name</Label>
														<Input
															type="text"
															class="form-control"
															id="companyName"
															placeholder="Company name"
															value="Themesbrand"
														/>
													</div>
												</Col>

												<Col lg={6}>
													<div class="mb-3">
														<Label for="experienceYear" class="form-label"
															>Experience Years</Label
														>
														<Row>
															<Col lg={5}>
																<Select
																	class="form-control"
																	name="experienceYear"
																	id="experienceYear"
																	placeholder="Select years"
																	items={selectYears}
																/>
															</Col>

															<div class="col-auto align-self-center">to</div>

															<Col lg={5}>
																<Select
																	class="form-control"
																	items={selectYears}
																	name="choices-single-default2"
																>
																</Select>
															</Col>
														</Row>
													</div>
												</Col>

												<Col lg={12}>
													<div class="mb-3">
														<Label for="jobDescription" class="form-label"
															>Job Description</Label
														>
													</div>
												</Col>

												<div class="hstack gap-2 justify-content-end">
													<Link class="btn btn-success" to={"#"}>Delete</Link>
												</div>
											</Row>
										</div>
									</div>
									<div id="newForm" style="display: none" />

									<Col lg={12}>
										<div class="hstack gap-2">
											<button type="submit" class="btn btn-success">Update</button>
											<Link href="{null}" class="btn btn-primary">Add New</Link>
										</div>
									</Col>
								</form>
							</TabPane> -->

							<TabPane tabId={4} class={activeTab == 4 ? 'active' : ''}>
								<div class="mb-4 pb-2">
									<h5 class="card-title text-decoration-underline mb-3">Security:</h5>
									<div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
										<div class="flex-grow-1">
											<h6 class="fs-15 mb-1">Two-factor Authentication</h6>
											<p class="text-muted">
												Two-factor authentication is an enhanced security meansur. Once enabled,
												you'll be required to give two types of identification when you log into
												Google Authentication and SMS are Supported.
											</p>
										</div>
										<div class="flex-shrink-0 ms-sm-3">
											<Link href="{null}" class="btn btn-sm btn-primary"
												>Enable Two-facor Authentication</Link
											>
										</div>
									</div>
									<div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
										<div class="flex-grow-1">
											<h6 class="fs-15 mb-1">Secondary Verification</h6>
											<p class="text-muted">
												The first factor is a password and the second commonly includes a text with
												a code sent to your smartphone, or biometrics using your fingerprint, face,
												or retina.
											</p>
										</div>
										<div class="flex-shrink-0 ms-sm-3">
											<Link href="{null}" class="btn btn-sm btn-primary">Set up secondary method</Link>
										</div>
									</div>
									<div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
										<div class="flex-grow-1">
											<h6 class="fs-15 mb-1">Backup Codes</h6>
											<p class="text-muted mb-sm-0">
												A backup code is automatically generated for you when you turn on two-factor
												authentication through your iOS or Android Twitter app. You can also
												generate a backup code on twitter.com.
											</p>
										</div>
										<div class="flex-shrink-0 ms-sm-3">
											<Link href="{null}" class="btn btn-sm btn-primary">Generate backup codes</Link>
										</div>
									</div>
								</div>
								<div class="mb-3">
									<h5 class="card-title text-decoration-underline mb-3">
										Application Notifications:
									</h5>
									<ul class="list-unstyled mb-0">
										<li class="d-flex">
											<div class="flex-grow-1">
												<Label for="directMessage" class="form-check-label fs-14"
													>Direct messages</Label
												>
												<p class="text-muted">Messages from people you follow</p>
											</div>
											<div class="flex-shrink-0">
												<div class="form-check form-switch">
													<input
														class="form-check-input"
														type="checkbox"
														role="switch"
														id="directMessage"
														checked
													/>
												</div>
											</div>
										</li>
										<li class="d-flex mt-2">
											<div class="flex-grow-1">
												<Label class="form-check-label fs-15" for="desktopNotification">
													Show desktop notifications
												</Label>
												<p class="text-muted">
													Choose the option you want as your default setting. Block a site: Next to
													"Not allowed to send notifications," click Add.
												</p>
											</div>
											<div class="flex-shrink-0">
												<div class="form-check form-switch">
													<input
														class="form-check-input"
														type="checkbox"
														role="switch"
														id="desktopNotification"
														checked
													/>
												</div>
											</div>
										</li>
										<li class="d-flex mt-2">
											<div class="flex-grow-1">
												<Label class="form-check-label fs-15" for="emailNotification">
													Show email notifications
												</Label>
												<p class="text-muted">
													Under Settings, choose Notifications. Under Select an account, choose the
													account to enable notifications for.
												</p>
											</div>
											<div class="flex-shrink-0">
												<div class="form-check form-switch">
													<input
														class="form-check-input"
														type="checkbox"
														role="switch"
														id="emailNotification"
													/>
												</div>
											</div>
										</li>
										<li class="d-flex mt-2">
											<div class="flex-grow-1">
												<Label class="form-check-label fs-15" for="chatNotification">
													Show chat notifications
												</Label>
												<p class="text-muted">
													To prevent duplicate mobile notifications from the Gmail and Chat apps, in
													settings, turn off Chat notifications.
												</p>
											</div>
											<div class="flex-shrink-0">
												<div class="form-check form-switch">
													<input
														class="form-check-input"
														type="checkbox"
														role="switch"
														id="chatNotification"
													/>
												</div>
											</div>
										</li>
										<li class="d-flex mt-2">
											<div class="flex-grow-1">
												<Label class="form-check-label fs-15" for="purchaesNotification">
													Show purchase notifications
												</Label>
												<p class="text-muted">
													Get real-time purchase alerts to protect yourself from fraudulent charges.
												</p>
											</div>
											<div class="flex-shrink-0">
												<div class="form-check form-switch">
													<input
														class="form-check-input"
														type="checkbox"
														role="switch"
														id="purchaesNotification"
													/>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div>
									<h5 class="card-title text-decoration-underline mb-3">Delete This Account:</h5>
									<p class="text-muted">
										Go to the Data & Privacy section of your profile Account. Scroll to "Your data &
										privacy options." Delete your Profile Account. Follow the instructions to delete
										your account :
									</p>
									<div>
										<Input
											type="password"
											class="form-control"
											id="passwordInput"
											placeholder="Enter your password"
											value="make@321654987"
											style="max-width: 265px"
										/>
									</div>
									<div class="hstack gap-2 mt-3">
										<Link href="{null}" class="btn btn-soft-danger">Close & Delete This Account</Link>
										<Link href="{null}" class="btn btn-light">Cancel</Link>
									</div>
								</div>
							</TabPane>
						</TabContent>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>
