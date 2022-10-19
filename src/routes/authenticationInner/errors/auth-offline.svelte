<script>
	import Link from "svelte-link";
	import { Col, Container, Row, Card, CardBody} from "sveltestrap";

	// Import Images
	import offline from "../../../assets/images/auth-offline.gif";
</script>

<svelte:head>
	<title>Offline | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
    <div class="bg-overlay"></div>
    <!-- auth-page content -->
    <div class="auth-page-content overflow-hidden pt-lg-5">
        <Container>
            <Row class="justify-content-center">
                <Col xl={5}>
                    <Card class="card overflow-hidden">
                        <CardBody class="p-4">
                            <div class="text-center">
                                <img src={offline} alt="" height="210">
                                <h3 class="mt-4 fw-semibold">We're currently offline</h3>
                                <p class="text-muted mb-4 fs-14">We can't show you this images because you aren't connected to the internet. When you’re back online refresh the page or hit the button below</p>
                                <button class="btn btn-success btn-border"><i class="ri-refresh-line align-bottom"></i> Refresh</button>
                            </div>
                        </CardBody>
                    </Card>
                    <!-- end card -->
                </Col>
                <!-- end col -->

            </Row>
            <!-- end row -->
        </Container>
        <!-- end container -->
    </div>
    <!-- end auth page content -->
</div>