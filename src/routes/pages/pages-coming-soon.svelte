<script>
    import ParticlesAuth from "../authenticationInner/ParticlesAuth.svelte";
    import { Col, Container, Input, InputGroup, Row } from "sveltestrap";
    //import images
    import comingsoon from "../../assets/images/comingsoon.png";
    import { browser } from "$app/env";

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 1, 2023").getTime();

    // Update the count down every 1 second
    var countDown = setInterval(function () {
        // Get today's date and time
        var currentTime = new Date().getTime();

        // Find the distance between currentTime and the count down date
        var distance = countDownDate - currentTime;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var countDownBlock =
            '<div class="countdownlist-item">' +
            '<div class="count-title">Days</div>' +
            '<div class="count-num">' +
            days +
            "</div>" +
            "</div>" +
            '<div class="countdownlist-item">' +
            '<div class="count-title">Hours</div>' +
            '<div class="count-num">' +
            hours +
            "</div>" +
            "</div>" +
            '<div class="countdownlist-item">' +
            '<div class="count-title">Minutes</div>' +
            '<div class="count-num">' +
            minutes +
            "</div>" +
            "</div>" +
            '<div class="countdownlist-item">' +
            '<div class="count-title">Seconds</div>' +
            '<div class="count-num">' +
            seconds +
            "</div>" +
            "</div>";
        if (browser) {
            // Output the result in an element with id="countDownBlock"
            document.getElementById("countdown").innerHTML = countDownBlock;

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(countDown);
                document.getElementById("countdown").innerHTML =
                    '<div class="countdown-endtxt">The countdown has ended!</div>';
            }
        }
    }, 1000);
</script>

<svelte:head>
    <title>Comming Soon | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<ParticlesAuth>
    <div class="auth-page-content">
        <Container>
            <Row>
                <Col lg={12}>
                    <div class="text-center mt-sm-5 pt-4 mb-4">
                        <div class="mb-sm-5 pb-sm-4 pb-5">
                            <img
                                src={comingsoon}
                                alt=""
                                height="120"
                                class="move-animation"
                            />
                        </div>
                        <div class="mb-5">
                            <h1 class="display-2 coming-soon-text">
                                Coming Soon
                            </h1>
                        </div>
                        <div>
                            <Row class="justify-content-center mt-5">
                                <Col lg={8}>
                                    <div id="countdown" class="countdownlist" />
                                </Col>
                            </Row>

                            <div class="mt-5">
                                <h3>Get notified when we launch</h3>
                                <p class="text-muted">
                                    Don't worry we will not spam you 😊
                                </p>
                            </div>

                            <InputGroup
                                class="countdown-input-group mx-auto my-4"
                            >
                                <Input
                                    type="email"
                                    class="form-control border-light shadow"
                                    placeholder="Enter your email address"
                                />
                                <button class="btn btn-success" type="button"
                                    >Send
                                    <i
                                        class="ri-send-plane-2-fill align-bottom ms-2"
                                    />
                                </button>
                            </InputGroup>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
</ParticlesAuth>
