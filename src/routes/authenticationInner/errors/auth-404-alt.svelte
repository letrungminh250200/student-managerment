<script>
    import { Card, CardBody, Col, Container, Row } from "sveltestrap";
    import Link from "svelte-link";
</script>

<svelte:head>
    <title>404 Error Alt | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<div
    class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100"
>
    <div class="bg-overlay" />
    <div class="auth-page-content overflow-hidden pt-lg-5">
        <Container>
            <Row class="justify-content-center">
                <Col xl={5}>
                    <Card class="overflow-hidden">
                        <CardBody class="p-4">
                            <div class="text-center">
                                <lord-icon
                                    class="avatar-xl"
                                    src="//cdn.lordicon.com/spxnqpau.json"
                                    trigger="loop"
                                    colors="primary:#405189,secondary:#0ab39c"
                                    style="width: 120px;height: 120px"
                                />
                                <h1 class="text-primary mb-4">Oops !</h1>
                                <h4 class="text-uppercase">
                                    Sorry, Page not Found 😭
                                </h4>
                                <p class="text-muted mb-4">
                                    The page you are looking for not available!
                                </p>
                                <Link href="/dashboard" class="btn btn-success"
                                    ><i class="mdi mdi-home me-1" />Back to home</Link
                                >
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
</div>
