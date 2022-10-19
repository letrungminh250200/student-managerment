<script>
    import { Col, Container, Row } from "sveltestrap";

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/effect-fade";
    import "swiper/css/pagination";

    import { EffectFade, Autoplay } from "swiper";
    import { Swiper, SwiperSlide } from "swiper/svelte";

    // Import Images
    import imgpattern from "../../../assets/images/landing/img-pattern.png";

    import defaultDemo from "../../../assets/images/demos/default.png";
    import saasDemo from "../../../assets/images/demos/saas.png";
    import materialDemo from "../../../assets/images/demos/material.png";
    import minimalDemo from "../../../assets/images/demos/minimal.png";
    import creativeDemo from "../../../assets/images/demos/creative.png";
    import modernDemo from "../../../assets/images/demos/modern.png";
    import interactiveDemo from "../../../assets/images/demos/interactive.png";

    import Link from 'svelte-link';
</script>

<section class="section pb-0 hero-section" id="hero">
    <div class="bg-overlay bg-overlay-pattern" />
    <Container>
        <Row class="justify-content-center">
            <Col lg={8} sm={10}>
                <div class="text-center mt-lg-5 pt-5">
                    <h1 class="display-6 fw-bold mb-3 lh-base">
                        The better way to manage your website with <span
                            class="text-success"
                            >Velzon
                        </span>
                    </h1>
                    <p class="lead text-muted lh-base">
                        Velzon is a fully responsive, multipurpose and premium
                        Bootstrap 5 Admin & Dashboard Template built in multiple
                        frameworks.
                    </p>

                    <div class="d-flex gap-2 justify-content-center mt-4">
                        <Link href="/authenticationInner/register/auth-signup" class="btn btn-primary"
                            >Get Started <i
                                class="ri-arrow-right-line align-middle ms-1"
                            /></Link
                        >
                    </div>
                </div>

                <div class="mt-4 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel">
                    <div class="demo-img-patten-top d-none d-sm-block">
                        <img
                            src={imgpattern}
                            class="d-block img-fluid"
                            alt="..."
                        />
                    </div>
                    <div class="demo-img-patten-bottom d-none d-sm-block">
                        <img
                            src={imgpattern}
                            class="d-block img-fluid"
                            alt="..."
                        />
                    </div>
                    <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        modules={[EffectFade, Autoplay]}
                        class="mySwiper"
                    >
                        <SwiperSlide
                            class="carousel-inner shadow-lg p-2 bg-white rounded"
                        >
                            <img
                                src={defaultDemo}
                                class="d-block w-100"
                                alt="..."
                            />
                        </SwiperSlide>
                        <SwiperSlide
                            class="carousel-inner shadow-lg p-2 bg-white rounded"
                        >
                            <img
                                src={saasDemo}
                                class="d-block w-100"
                                alt="..."
                            />
                        </SwiperSlide>
                        <SwiperSlide
                            class="carousel-inner shadow-lg p-2 bg-white rounded"
                        >
                            <img
                                src={materialDemo}
                                class="d-block w-100"
                                alt="..."
                            />
                        </SwiperSlide>
                        <SwiperSlide
                            class="carousel-inner shadow-lg p-2 bg-white rounded"
                        >
                            <img
                                src={minimalDemo}
                                class="d-block w-100"
                                alt="..."
                            />
                        </SwiperSlide>
                        <SwiperSlide
                            class="carousel-inner shadow-lg p-2 bg-white rounded"
                        >
                            <img
                                src={creativeDemo}
                                class="d-block w-100"
                                alt="..."
                            />
                        </SwiperSlide>
                        <SwiperSlide
                            class="carousel-inner shadow-lg p-2 bg-white rounded"
                        >
                            <img
                                src={modernDemo}
                                class="d-block w-100"
                                alt="..."
                            />
                        </SwiperSlide>
                        <SwiperSlide
                            class="carousel-inner shadow-lg p-2 bg-white rounded"
                        >
                            <img
                                src={interactiveDemo}
                                class="d-block w-100"
                                alt="..."
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Col>
        </Row>
    </Container>

    <div class="position-absolute start-0 end-0 bottom-0 hero-shape-svg">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1440 120"
        >
            <g mask="url(&quot;#SvgjsMask1003&quot;)" fill="none">
                <path
                    d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z"
                />
            </g>
        </svg>
    </div>
</section>
