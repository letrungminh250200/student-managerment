<svelte:head>
  <title>Maintenance | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
    import { Col, Container, Row } from 'sveltestrap';
    import ParticlesAuth from '../authenticationInner/ParticlesAuth.svelte';
    import maintenanceImg from '../../assets/images/maintenance.png';
    import Link from 'svelte-link';
</script>
<ParticlesAuth>
    <div class="auth-page-content">
        <Container>
            <Row>
                <Col lg={12}>
                    <div class="text-center mt-sm-5 pt-4">
                        <div class="mb-5 text-white-50">
                            <h1 class="display-5 coming-soon-text">Site is Under Maintenance</h1>
                            <p class="fs-15">Please check back in sometime</p>
                            <div class="mt-4 pt-2">
                                <Link href="/" class="btn btn-success"><i class="mdi mdi-home me-1"></i> Back to Home</Link>
                            </div>
                        </div>
                        <Row class="justify-content-center mb-5">
                            <Col xl={4} lg={8}>
                                <div>
                                    <img src={maintenanceImg} alt="" class="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
</ParticlesAuth>