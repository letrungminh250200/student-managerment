<script>
    import Link from 'svelte-link';
import { Card, CardBody, Col, Container, Row,Label } from 'sveltestrap';
let plan = true
</script>
<section class="section bg-light" id="plans">
    <div class="bg-overlay bg-overlay-pattern"></div>
    <Container>
        <Row class="justify-content-center">
            <Col lg={8}>
                <div class="text-center mb-5">
                    <h3 class="mb-3 fw-bold">Choose the plan that's right for you</h3>
                    <p class="text-muted mb-4">Simple pricing. No hidden fees. Advanced features for you
                        business.</p>

                    <div class="d-flex justify-content-center align-items-center">
                        <div>
                            <h5 class="fs-15 mb-0">Month</h5>
                        </div>
                        <div class="form-check form-switch fs-20 ms-3 " on:click={() => (plan = !plan)}>
                            <input class="form-check-input" type="checkbox" id="plan-switch" />
                            <Label class="form-check-label" htmlfor="plan-switch"></Label>
                        </div>
                        <div>
                            <h5 class="fs-15 mb-0">Annual <span class="badge badge-soft-success">Save 20%</span></h5>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>

        <Row class="gy-4">
            <Col lg={4}>
                <Card class="plan-box mb-0">
                    <CardBody class="p-4 m-2">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h5 class="mb-1 fw-bold">Basic Plan</h5>
                                <p class="text-muted mb-0">For Startup</p>
                            </div>
                            <div class="avatar-sm">
                                <div class="avatar-title bg-light rounded-circle text-primary">
                                    <i class="ri-book-mark-line fs-20"></i>
                                </div>
                            </div>
                        </div>
                        <div class="py-4 text-center">
                            {#if plan}
                                <h1 class="month"><sup><small>$</small></sup><span class="ff-secondary fw-bold">19</span> <span
                                    class="fs-13 text-muted">/Month</span></h1>
                            {:else}
                                    <h1 class="annual"><sup><small>$</small></sup><span class="ff-secondary fw-bold">171</span> <span
                                        class="fs-13 text-muted">/Year</span></h1>
                            {/if}
                        </div>

                        <div>
                            <ul class="list-unstyled text-muted vstack gap-3 ff-secondary">
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            Upto <b>3</b> Projects
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            Upto <b>299</b> Customers
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            Scalable Bandwidth
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <b>5</b> FTP Login
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-danger me-1">
                                            <i class="ri-close-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <b>24/7</b> Support
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-danger me-1">
                                            <i class="ri-close-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <b>Unlimited</b> Storage
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-danger me-1">
                                            <i class="ri-close-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            Domain
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="mt-4">
                                <Link href="#" class="btn btn-soft-success w-100">Get
                                    Started</Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={4}>
                <Card class="plan-box mb-0 ribbon-box right">
                    <CardBody class="p-4 m-2">
                        <div class="ribbon-two ribbon-two-danger"><span>Popular</span></div>
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h5 class="mb-1 fw-bold">Pro Business</h5>
                                <p class="text-muted mb-0">Professional plans</p>
                            </div>
                            <div class="avatar-sm">
                                <div class="avatar-title bg-light rounded-circle text-primary">
                                    <i class="ri-medal-fill fs-20"></i>
                                </div>
                            </div>
                        </div>
                        <div class="py-4 text-center">
                            {#if plan}
                            <h1 class="month"><sup><small>$</small></sup><span class="ff-secondary fw-bold">29</span> <span
                                class="fs-13 text-muted">/Month</span></h1>
                                 {:else}
                                <h1 class="annual"><sup><small>$</small></sup><span class="ff-secondary fw-bold">261</span> <span
                                    class="fs-13 text-muted">/Year</span></h1>
                            {/if}
                        </div>

                        <div>
                            <ul class="list-unstyled text-muted vstack gap-3 ff-secondary">
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            Upto <b>15</b> Projects
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <b>Unlimited</b> Customers
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            Scalable Bandwidth
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <b>12</b> FTP Login
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <b>24/7</b> Support
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-danger me-1">
                                            <i class="ri-close-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <b>Unlimited</b> Storage
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-danger me-1">
                                            <i class="ri-close-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            Domain
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="mt-4">
                                <Link href="#" class="btn btn-soft-success w-100">Get
                                    Started</Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={4}>
                <Card class="plan-box mb-0">
                    <CardBody class="p-4 m-2">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h5 class="mb-1 fw-bold">Platinum Plan</h5>
                                <p class="text-muted mb-0">Enterprise Businesses</p>
                            </div>
                            <div class="avatar-sm">
                                <div class="avatar-title bg-light rounded-circle text-primary">
                                    <i class="ri-stack-fill fs-20"></i>
                                </div>
                            </div>
                        </div>
                        <div class="py-4 text-center">
                            {#if plan}
                                <h1 class="month"><sup><small>$</small></sup><span class="ff-secondary fw-bold">39</span> <span
                                class="fs-13 text-muted">/Month</span></h1>
                                 {:else}
                                <h1 class="annual"><sup><small>$</small></sup><span class="ff-secondary fw-bold">351</span> <span
                                    class="fs-13 text-muted">/Year</span></h1>
                            {/if}
                        </div>

                        <div>
                            <ul class="list-unstyled text-muted vstack gap-3 ff-secondary">
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <b>Unlimited</b> Projects
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <b>Unlimited</b> Customers
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            Scalable Bandwidth
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <b>Unlimited</b> FTP Login
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <b>24/7</b> Support
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <b>Unlimited</b> Storage
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 text-success me-1">
                                            <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            Domain
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="mt-4">
                                <Link href="#" class="btn btn-soft-success w-100">Get
                                    Started</Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
</section>