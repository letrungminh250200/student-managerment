<script>
    import Link from 'svelte-link';
import { Col, Container, Row } from 'sveltestrap';
</script>
<section class="py-5 bg-primary position-relative">
    <div class="bg-overlay bg-overlay-pattern opacity-50"></div>
    <Container>
        <Row class="align-items-center gy-4">
            <Col class="col-sm">
                <div>
                    <h4 class="text-white mb-0 fw-bold">Build your web App/SaaS with Velzon dashboard</h4>
                </div>
            </Col>
            <Col class="col-sm-auto">
                <div>
                    <Link href="https://1.envato.market/velzon-admin" target="_blank" rel="noreferrer" class="btn bg-gradient btn-danger"><i class="ri-shopping-cart-2-line align-middle me-1"></i> Buy Now</Link>
                </div>
            </Col>
        </Row>
    </Container>
</section>