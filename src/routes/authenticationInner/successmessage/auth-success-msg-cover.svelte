<script>
    import Link from "svelte-link";
    import { Card, Col, Container, Row } from "sveltestrap";

    import AuthSlider from "../AuthSlider.svelte";
</script>

<svelte:head>
    <title>Success Message | Velzon - Svelte Admin & Dashboard Template</title>
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
                                <div class="p-lg-5 p-4 text-center">
                                    <div class="avatar-lg mx-auto mt-2">
                                        <div
                                            class="avatar-title bg-light text-success display-3 rounded-circle"
                                        >
                                            <i
                                                class="ri-checkbox-circle-fill"
                                            />
                                        </div>
                                    </div>
                                    <div class="mt-4 pt-2">
                                        <h4>Well done !</h4>
                                        <p class="text-muted mx-4">
                                            Aww yeah, you successfully read this
                                            important message.
                                        </p>
                                        <div class="mt-4">
                                            <Link
                                                href="/authenticationInner/login/auth-signin"
                                                class="btn btn-success w-100"
                                                >Back to Dashboard</Link
                                            >
                                        </div>
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
