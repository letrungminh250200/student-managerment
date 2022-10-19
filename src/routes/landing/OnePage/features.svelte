<script>
    import Link from 'svelte-link';
import { Col, Container, Row } from 'sveltestrap';

// Import Images
import img1 from "../../../assets/images/landing/features/img-1.png";
import img2 from "../../../assets/images/landing/features/img-2.png";
import img3 from "../../../assets/images/landing/features/img-3.png";
</script>
<section class="section bg-light py-5" id="features">
    <Container>
        <Row class="align-items-center gy-4">
            <Col lg={6} sm={7} class="mx-auto">
                <div>
                    <img src={img1} alt="" class="img-fluid mx-auto" />
                </div>
            </Col>
            <Col lg={6}>
                <div class="text-muted">
                    <div class="avatar-sm icon-effect mb-4">
                        <div class="avatar-title bg-transparent rounded-circle text-success h1">
                            <i class="ri-collage-line fs-36"></i>
                        </div>
                    </div>
                    <h3 class="mb-3 fs-20">Huge collection of widgets</h3>
                    <p class="mb-4 ff-secondary fs-16">Collection widgets specialize in displaying many elements of the same type, such as a collection of pictures from a collection of articles from a news app or a collection of messages from a communication app.</p>

                    <Row class="pt-3">
                        <Col class="col-3">
                            <div class="text-center">
                                <h4>5</h4>
                                <p>Dashboards</p>
                            </div>
                        </Col>
                        <Col class="col-3">
                            <div class="text-center">
                                <h4>150+</h4>
                                <p>Pages</p>
                            </div>
                        </Col>
                        <Col class="col-4">
                            <div class="text-center">
                                <h4>7+</h4>
                                <p>Functional Apps</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
</section>

<section class="py-5 bg-primary position-relative">
    <div class="bg-overlay bg-overlay-pattern opacity-50"></div>
    <Container>
        <Row class="align-items-center gy-4">
            <Col class="col-sm">
                <div>
                    <h4 class="text-white mb-0 fw-semibold">Build your web App/SaaS with Velzon dashboard</h4>
                </div>
            </Col>
            <Col class="col-sm-auto">
                <div>
                    <Link href="https://1.envato.market/velzon-admin" target="_blank" class="btn bg-gradient btn-danger"><i class="ri-shopping-cart-2-line align-middle me-1"></i> Buy Now</Link>
                </div>
            </Col>
        </Row>
    </Container>
</section>


<section class="section">
    <Container>
        <Row class="align-items-center gy-4">
            <Col lg={6} class="order-2 order-lg-1">
                <div class="text-muted">
                    <h5 class="fs-12 text-uppercase text-success">Design</h5>
                    <h4 class="mb-3">Well Designed Dashboards</h4>
                    <p class="mb-4 ff-secondary">Quality Dashboards (QD) is a condition-specific, actionable web-based application for quality reporting and population
                        management that is integrated into the Electronic Health Record (EHR).</p>

                    <Row>
                        <Col sm={5}>
                            <div class="vstack gap-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="avatar-xs icon-effect">
                                            <div
                                                class="avatar-title bg-transparent text-success rounded-circle h2">
                                                <i class="ri-check-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-14 mb-0">Projects</h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div class="mt-4">
                        <Link href="/dashboard" class="btn btn-primary">Learn More <i class="ri-arrow-right-line align-middle ms-1"></i></Link>
                    </div>
                </div>
            </Col>

            <Col lg={6} sm={7} class="col-10 ms-auto order-1 order-lg-2">
                <div>
                    <img src={img2} alt="" class="img-fluid" />
                </div>
            </Col>
        </Row>

        <Row class="align-items-center mt-5 pt-lg-5 gy-4">
            <Col lg={6} sm={7} class="col-10 mx-auto">
                <div>
                    <img src={img3} alt="" class="img-fluid" />
                </div>
            </Col>
            <Col lg={6}>
                <div class="text-muted ps-lg-5">
                    <h5 class="fs-12 text-uppercase text-success">structure</h5>
                    <h4 class="mb-3">Well Documented</h4>
                    <p class="mb-4">used to describe something that is known about or known to be true because there are many documents that describe it,
                        prove it, etc.</p>

                    <div class="vstack gap-2">
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 me-2">
                                <div class="avatar-xs icon-effect">
                                    <div class="avatar-title bg-transparent text-success rounded-circle h2">
                                        <i class="ri-check-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <p class="mb-0">Dynamic Conetnt</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 me-2">
                                <div class="avatar-xs icon-effect">
                                    <div class="avatar-title bg-transparent text-success rounded-circle h2">
                                        <i class="ri-check-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <p class="mb-0">Setup plugin's information.</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 me-2">
                                <div class="avatar-xs icon-effect">
                                    <div class="avatar-title bg-transparent text-success rounded-circle h2">
                                        <i class="ri-check-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <p class="mb-0">Themes customization information</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</section>