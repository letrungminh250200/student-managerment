<script>
    import { Col, Container, Row } from 'sveltestrap';
    // Swiper
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import "swiper/css";
	import "swiper/css/pagination";
	import "swiper/css/navigation";
	import "swiper/css/autoplay";
    import { Pagination, Navigation, Autoplay } from "swiper";

</script>
<section class="section bg-primary" id="reviews">
    <div class="bg-overlay bg-overlay-pattern"></div>
    <Container>
        <Row class="justify-content-center">
            <Col lg={10}>
                <div class="text-center">
                    <div>
                        <i class="ri-double-quotes-l text-success display-3"></i>
                    </div>
                    <h4 class="text-white mb-5"><span class="text-success">19k</span>+ Satisfied clients</h4>

                    <Swiper modules={[Navigation, Pagination, Autoplay]} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} class="mySwiper swiper client-review-swiper rounded">
                        <SwiperSlide>
                            <div class="row justify-content-center">
                                <div class="col-10">
                                    <div class="text-white-50">
                                        <p class="fs-20 ff-secondary mb-4">" I am givng 5 stars. Theme is great and everyone one stuff everything in theme. Future request should not affect current
                                            state of theme. "</p>

                                        <div>
                                            <h5 class="text-white">gregoriusus</h5>
                                            <p>- Skote User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="row justify-content-center">
                                <div class="col-10">
                                    <div class="text-white-50">
                                        <p class="fs-20 ff-secondary mb-4">" Awesome support. Had few issues while setting up because of my device, the support team helped me fix them up in a day.
                                            Everything looks clean and good. Highly recommended! "</p>

                                        <div>
                                            <h5 class="text-white">GeekyGreenOwl</h5>
                                            <p>- Skote User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="row justify-content-center">
                                <div class="col-10">
                                    <div class="text-white-50">
                                        <p class="fs-20 ff-secondary mb-4">" Amazing template, Redux store and components is nicely designed.
                                            It's a great start point for an admin based project. Clean Code and good documentation. Template is
                                            completely in React and absolutely no usage of jQuery "</p>

                                        <div>
                                            <h5 class="text-white">sreeks456</h5>
                                            <p>- Veltrix User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Col>
        </Row>
    </Container>
</section>