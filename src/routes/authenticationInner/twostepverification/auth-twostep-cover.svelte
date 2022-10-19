<script>
    import Link from "svelte-link";
    import { Button, Card, Col, Container, Row,Label } from "sveltestrap";

    //import images
    import AuthSlider from "../AuthSlider.svelte";
</script>

<svelte:head>
    <title>Two Step Verification | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<div
    class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100"
>
    <div class="bg-overlay" />
    <div class="auth-page-content overflow-hidden pt-lg-5">
        <Container>
            <Row>
                <Col lg={12}>
                    <Card class="overflow-hidden">
                        <Row class="justify-content-center g-0">
                            <AuthSlider />
                            <Col lg={6}>
                                <div class="p-lg-5 p-4">
                                    <div class="mb-4">
                                        <div class="avatar-lg mx-auto">
                                            <div
                                                class="avatar-title bg-light text-primary display-5 rounded-circle"
                                            >
                                                <i class="ri-mail-line" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-muted text-center mx-lg-3">
                                        <h4 class="">Verify Your Email</h4>
                                        <p>
                                            Please enter the 4 digit code sent
                                            to <span class="fw-semibold"
                                                >example@abc.com</span
                                            >
                                        </p>
                                    </div>

                                    <div class="mt-4">
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
                                                            maxLength="1"
                                                            id="digit4-input"
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>

                                            <div class="mt-3">
                                                <Button
                                                    color="success"
                                                    class="w-100"
                                                    >Confirm</Button
                                                >
                                            </div>
                                        </form>
                                    </div>

                                    <div class="mt-5 text-center">
                                        <p class="mb-0">
                                            Didn't receive a code ? <Link
                                                href="/authenticationInner/passwordreset/auth-pass-reset-cover"
                                                class="fw-semibold text-primary text-decoration-underline"
                                                >Resend</Link
                                            >
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    <footer class="footer">
        <Container>
            <Row>
                <Col lg={12}>
                    <div class="text-center">
                        <p class="mb-0">
                            &copy; {new Date().getFullYear()} Velzon. Crafted with
                            <i class="mdi mdi-heart text-danger" /> by Themesbrand
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
</div>
