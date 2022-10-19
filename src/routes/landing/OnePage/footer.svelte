<script>
    import Link from 'svelte-link';
import { Col, Container, Row } from 'sveltestrap';

// Import Images
import logolight from "../../../assets/images/logo-light.png";
</script>
<footer class="custom-footer bg-dark py-5 position-relative">
    <Container>
        <Row>
            <Col lg={4} class="mt-4">
                <div>
                    <div>
                        <img src={logolight} alt="logo light" height="17" />
                    </div>
                    <div class="mt-4">
                        <p>Premium Multipurpose Admin & Dashboard Template</p>
                        <p class="ff-secondary">You can build any type of web application like eCommerce, CRM, CMS, Project
                            management apps, Admin Panels, etc using Velzon.</p>
                    </div>
                </div>
            </Col>

            <Col lg={7} class="ms-lg-auto">
                <Row>
                    <Col sm={4} class="mt-4">
                        <h5 class="text-white mb-0">Apps Pages</h5>
                        <div class="text-muted mt-3">
                            <ul class="list-unstyled ff-secondary footer-list fs-14">
                                <li><Link href="/crm/apps-crm-deals">Deals</Link></li>
                                <li><Link href="/tasks/apps-tasks-kanban">Kanban Board</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={4} class="mt-4">
                        <h5 class="text-white mb-0">Support</h5>
                        <div class="text-muted mt-3">
                            <ul class="list-unstyled ff-secondary footer-list fs-14">
                                <li><Link href="/crm/apps-crm-contacts">Contact</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Col>

        </Row>

        <Row class="text-center text-sm-start align-items-center mt-5">
            <Col sm={6}>

                <div>
                    <p class="copy-rights mb-0">
                        {new Date().getFullYear()} © Velzon - Themesbrand
                    </p>
                </div>
            </Col>
            <Col sm={6}>
                <div class="text-sm-end mt-3 mt-sm-0">
                    <ul class="list-inline mb-0 footer-social-link">
                        <li class="list-inline-item">
                            <Link href="#" class="avatar-xs d-block">
                                <div class="avatar-title rounded-circle">
                                    <i class="ri-facebook-fill"></i>
                                </div>
                            </Link>
                        </li>
                        <li class="list-inline-item">
                            <Link href="#" class="avatar-xs d-block">
                                <div class="avatar-title rounded-circle">
                                    <i class="ri-github-fill"></i>
                                </div>
                            </Link>
                        </li>
                        <li class="list-inline-item">
                            <Link href="#" class="avatar-xs d-block">
                                <div class="avatar-title rounded-circle">
                                    <i class="ri-linkedin-fill"></i>
                                </div>
                            </Link>
                        </li>
                        <li class="list-inline-item">
                            <Link href="#" class="avatar-xs d-block">
                                <div class="avatar-title rounded-circle">
                                    <i class="ri-google-fill"></i>
                                </div>
                            </Link>
                        </li>
                        <li class="list-inline-item">
                            <Link href="#" class="avatar-xs d-block">
                                <div class="avatar-title rounded-circle">
                                    <i class="ri-dribbble-line"></i>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
    </Container>
</footer>