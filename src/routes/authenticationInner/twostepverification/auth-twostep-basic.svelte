<script>
	import Link from "svelte-link";
	import { Card, CardBody, Col, Container, Row, Button,Label } from "sveltestrap";
	import ParticlesAuth from "../ParticlesAuth.svelte";
	import logoLight from "../../../assets/images/logo-light.png";
	import { browser } from "$app/env";

	const moveToNext = (value, count) => {
		if (browser) {
			if (value.length > 0) {
				document.getElementById("digit" + count + "-input").focus();
			}
		}
	};
</script>

<svelte:head>
	<title
		>Two Step Verification | Velzon - Svelte Admin & Dashboard Template</title
	>
</svelte:head>
<div class="auth-page-wrapper">
	<ParticlesAuth>
		<div class="auth-page-content">
			<Container>
				<Row>
					<Col lg={12}>
						<div class="text-center mt-sm-5 mb-4 text-white-50">
							<div>
								<Link
									href="/dashboard"
									class="d-inline-block auth-logo"
								>
									<img src={logoLight} alt="" height="20" />
								</Link>
							</div>
							<p class="mt-3 fs-16 fw-semibold">
								Premium Admin & Dashboard Template
							</p>
						</div>
					</Col>
				</Row>

				<Row class="justify-content-center">
					<Col md={8} lg={6} xl={5}>
						<Card class="mt-4">
							<CardBody class="p-4">
								<div class="mb-4">
									<div class="avatar-lg mx-auto">
										<div class="avatar-title bg-light text-primary display-5 rounded-circle"
										>
											<i class="ri-mail-line" />
										</div>
									</div>
								</div>

								<div class="p-2 mt-4">
									<div class="text-muted text-center mb-4 mx-lg-3"
									>
										<h4 class="">Verify Your Email</h4>
										<p>
											Please enter the 4 digit code sent
											to <span class="fw-bold"
												>example@abc.com</span
											>
										</p>
									</div>

									<form>
										<Row>
											<Col class="col-3">
												<div class="mb-3">
													<Label
														for="digit1-input"
														class="visually-hidden"
														>Dight 1</Label
													>
													<input
														type="text"
														class="form-control form-control-lg bg-light border-light text-center"
														on:keyup={({
															target: { value },
														}) =>
															moveToNext(
																value,
																2
															)}
														maxLength="1"
														id="digit1-input"
													/>
												</div>
											</Col>

											<Col class="col-3">
												<div class="mb-3">
													<Label
														for="digit2-input"
														class="visually-hidden"
														>Dight 2</Label
													>
													<input
														type="text"
														class="form-control form-control-lg bg-light border-light text-center"
														on:keyup={({
															target: { value },
														}) =>
															moveToNext(
																value,
																3
															)}
														maxLength="1"
														id="digit2-input"
													/>
												</div>
											</Col>

											<Col class="col-3">
												<div class="mb-3">
													<Label
														for="digit3-input"
														class="visually-hidden"
														>Dight 3</Label
													>
													<input
														type="text"
														class="form-control form-control-lg bg-light border-light text-center"
														on:keyup={({
															target: { value },
														}) =>
															moveToNext(
																value,
																4
															)}
														maxLength="1"
														id="digit3-input"
													/>
												</div>
											</Col>

											<Col class="col-3">
												<div class="mb-3">
													<Label
														for="digit4-input"
														class="visually-hidden"
														>Dight 4</Label
													>
													<input
														type="text"
														class="form-control form-control-lg bg-light border-light text-center"
														on:keyup={({
															target: { value },
														}) =>
															moveToNext(
																value,
																4
															)}
														maxLength="1"
														id="digit4-input"
													/>
												</div>
											</Col>
										</Row>
									</form>
									<div class="mt-3">
										<Button color="success" class="w-100"
											>Confirm</Button
										>
									</div>
								</div>
							</CardBody>
						</Card>
						<div class="mt-4 text-center">
							<p class="mb-0">
								Didn't receive a code ? <Link
									href="/authenticationInner/passwordreset/auth-pass-reset-basic"
									class="fw-bold text-primary text-decoration-underline"
									>Resend</Link
								>
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	</ParticlesAuth>
</div>
