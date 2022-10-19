<script>
  import { Col, Container, Row } from "sveltestrap";
  import Link from "svelte-link";
  // Import Images
  import error400cover from "../../../assets/images/error400-cover.png";
</script>

<svelte:head>
  <title>404 Error Cover | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<div class="auth-page-content">
  <div
    class="auth-page-wrapper py-5 d-flex justify-content-center align-items-center min-vh-100"
  >
    <div class="auth-page-content overflow-hidden p-0">
      <Container>
        <Row class="justify-content-center">
          <Col xl={7} lg={8}>
            <div class="text-center">
              <img src={error400cover} alt="error img" class="img-fluid" />
              <div class="mt-3">
                <h3 class="text-uppercase">Sorry, Page not Found 😭</h3>
                <p class="text-muted mb-4">
                  The page you are looking for not available!
                </p>
                <Link href="/dashboard" class="btn btn-success"
                  ><i class="mdi mdi-home me-1" />Back to home</Link
                >
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
</div>
