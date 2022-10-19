<script>
    import { Col, Container, Row } from 'sveltestrap';
    import Counter from '../../../Components/Common/counter.svelte'
</script>
<Counter />
<section class="py-5 position-relative bg-light">
    <Container>
        <Row class="text-center gy-4">
            <Col lg={3} class="col-6">
                <div>
                    <h2 class="mb-2"><span class="counter-value" data-target="100">0</span>+</h2>
                    <div class="text-muted">Projects Completed</div>
                </div>
            </Col>

            <Col lg={3} class="col-6">
                <div>
                    <h2 class="mb-2"><span class="counter-value" data-target="24">0</span></h2>
                    <div class="text-muted">Win Awards</div>
                </div>
            </Col>

            <Col lg={3} class="col-6">
                <div>
                    <h2 class="mb-2"><span class="counter-value" data-target="20.3">0</span>k</h2>
                    <div class="text-muted">Satisfied Clients</div>
                </div>
            </Col>

            <Col lg={3} class="col-6">
                <div>
                    <h2 class="mb-2"><span class="counter-value" data-target="50">0</span></h2>
                    <div class="text-muted">Employees</div>
                </div>
            </Col>
        </Row>
    </Container>
</section>