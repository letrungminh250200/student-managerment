<script>
    import { Col, Container, Form, Row,Label } from 'sveltestrap';
</script>
<section class="section" id="contact">
    <Container>
        <Row class="justify-content-center">
            <Col lg={8}>
                <div class="text-center mb-5">
                    <h3 class="mb-3 fw-bold">Get In Touch</h3>
                    <p class="text-muted mb-4 ff-secondary">We thrive when coming up with innovative ideas but also
                        understand that a smart concept should be supported with faucibus sapien odio measurable
                        results.</p>
                </div>
            </Col>
        </Row>

        <Row class="gy-4">
            <Col lg={4}>
                <div>
                    <div class="mt-4">
                        <h5 class="fs-13 text-muted text-uppercase">Office Address 1:</h5>
                        <div class="ff-secondary fw-semibold">4461 Cedar Street Moro, <br />AR 72368</div>
                    </div>
                    <div class="mt-4">
                        <h5 class="fs-13 text-muted text-uppercase">Office Address 2:</h5>
                        <div class="ff-secondary fw-semibold">2467 Swick Hill Street <br />New Orleans, LA</div>
                    </div>
                    <div class="mt-4">
                        <h5 class="fs-13 text-muted text-uppercase">Working Hours:</h5>
                        <div class="ff-secondary fw-semibold">9:00am to 6:00pm</div>
                    </div>
                </div>
            </Col>

            <Col lg={8}>
                <div>
                    <Form>
                        <Row>
                            <Col lg={6}>
                                <div class="mb-4">
                                    <Label htmlfor="name" class="form-label fs-13">Name</Label>
                                    <input name="name" id="name" type="text"
                                        class="form-control bg-light border-light" placeholder="Your name*" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div class="mb-4">
                                    <Label htmlfor="email" class="form-label fs-13">Email</Label>
                                    <input name="email" id="email" type="email"
                                        class="form-control bg-light border-light" placeholder="Your email*" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div class="mb-4">
                                    <Label htmlfor="subject" class="form-label fs-13">Subject</Label>
                                    <input type="text" class="form-control bg-light border-light" id="subject"
                                        name="subject" placeholder="Your Subject.." />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div class="mb-3">
                                    <Label htmlfor="comments" class="form-label fs-13">Message</Label>
                                    <textarea name="comments" id="comments" rows="3"
                                        class="form-control bg-light border-light"
                                        placeholder="Your message..."></textarea>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} class="text-end">
                                <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary"
                                    value="Send Message" />
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Col>
        </Row>
    </Container>
</section>