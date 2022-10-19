<script>
    import { Col, Container, Row } from 'sveltestrap';
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/effect-fade";
    import "swiper/css/pagination";

    import { Pagination, Autoplay } from "swiper";
    import { Swiper, SwiperSlide } from "swiper/svelte";

    // Import Images
    import amazon from "../../../assets/images/clients/amazon.svg";
    import walmart from "../../../assets/images/clients/walmart.svg";
    import lenovo from "../../../assets/images/clients/lenovo.svg";
    import paypal from "../../../assets/images/clients/paypal.svg";
    import shopify from "../../../assets/images/clients/shopify.svg";
    import verizon from "../../../assets/images/clients/verizon.svg";
</script>
<div class="pt-5 mt-5">
    <Container>
        <Row>
            <Col lg={12}>

                <div class="text-center mt-5">
                    <h5 class="fs-20">Trusted <span class="text-primary text-decoration-underline">by</span> the world's best</h5>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={false}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        loop={true}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        modules={[Pagination, Autoplay]}
                        class="mySwiper swiper trusted-client-slider mt-sm-5 mt-4 mb-sm-5 mb-4"
                    >
                        <SwiperSlide>
                            <div class="client-images">
                                <img src={amazon} alt="client-img" class="mx-auto img-fluid d-block" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="client-images">
                                <img src={walmart} alt="client-img" class="mx-auto img-fluid d-block" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="client-images">
                                <img src={lenovo} alt="client-img" class="mx-auto img-fluid d-block" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="client-images">
                                <img src={paypal} alt="client-img" class="mx-auto img-fluid d-block" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="client-images">
                                <img src={shopify} alt="client-img" class="mx-auto img-fluid d-block" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="client-images">
                                <img src={verizon} alt="client-img" class="mx-auto img-fluid d-block" />
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </Col>
        </Row>
    </Container>
</div>