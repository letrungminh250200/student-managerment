<script>
    import {
        Col,
        Container,
        Row,
        Collapse,
        Accordion,
        AccordionItem,
    } from "sveltestrap";
</script>

<section class="section">
    <Container>
        <Row class="justify-content-center">
            <Col lg={8}>
                <div class="text-center mb-5">
                    <h3 class="mb-3 fw-bold">Frequently Asked Questions</h3>
                    <p class="text-muted mb-4 ff-secondary">
                        If you can not find answer to your question in our FAQ,
                        you can always contact us or email us. We will answer
                        you shortly!
                    </p>

                    <div class="">
                        <button
                            type="button"
                            class="btn btn-primary btn-label rounded-pill me-1"
                            ><i
                                class="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"
                            /> Email Us</button
                        >
                        <button
                            type="button"
                            class="btn btn-info btn-label rounded-pill"
                            ><i
                                class="ri-twitter-line label-icon align-middle rounded-pill fs-16 me-2"
                            /> Send Us Tweet</button
                        >
                    </div>
                </div>
            </Col>
        </Row>

        <Row class="g-lg-5 g-4">
            <Col lg={6}>
                <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0 me-1">
                        <i
                            class="ri-question-line fs-24 align-middle text-success me-1"
                        />
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="mb-0 fw-semibold">General Questions</h5>
                    </div>
                </div>
                <Accordion
                    class="custom-accordionwithicon custom-accordion-border accordion-border-box"
                >
                    <AccordionItem class="fs-15 fw-semibold"
                        active
                        header="What is the purpose of using themes ?"
                    >
                        <div class="ff-secondary">
                            A theme is a set of colors, fonts, effects, and more
                            that can be applied to your entire presentation to
                            give it a consistent, professional look. You've
                            already been using a theme, even if you didn't know
                            it: the default Office theme, which consists.
                        </div>
                    </AccordionItem>
                    <AccordionItem class="fs-15 fw-semibold"
                        header="Can a theme have more than one theme?"
                    >
                        <div class="ff-secondary">
                            A story can have as many themes as the reader can
                            identify based on recurring patterns and parallels
                            within the story itself. In looking at ways to
                            separate themes into a hierarchy, we might find it
                            useful to follow the example of a single book.
                        </div>
                    </AccordionItem>
                    <AccordionItem class="fs-15 fw-semibold" header="What are theme features?">
                        <div class="ff-secondary">
                            Theme features is a set of specific functionality
                            that may be enabled by theme authors. Themes must
                            register each individual Theme Feature that the
                            author wishes to support. Theme support functions
                            should be called in the theme's functions.
                        </div>
                    </AccordionItem>
                    <AccordionItem class="fs-15 fw-semibold" header=" What is simple theme?">
                        <div class="ff-secondary">
                            Simple is a free WordPress theme, by Themify, built
                            exactly what it is named for: simplicity.
                            Immediately upgrade the quality of your WordPress
                            site with the simple theme To use the built-in
                            Chrome theme editor.
                        </div>
                    </AccordionItem>
                </Accordion>
            </Col>

            <Col lg={6}>
                <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0 me-1">
                        <i
                            class="ri-shield-keyhole-line fs-24 align-middle text-success me-1"
                        />
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="mb-0 fw-semibold">Privacy &amp; Security</h5>
                    </div>
                </div>

                <Accordion
                    class="custom-accordionwithicon custom-accordion-border accordion-border-box"
                >
                    <AccordionItem class="fs-15 fw-semibold" active header="Does Word have night mode?">
                        <div class="ff-secondary">
                            You can run Microsoft Word in dark mode, which uses
                            a dark color palette to help reduce eye strain in
                            low light settings. You can choose to make the
                            document white or black using the Switch Modes
                            button in the ribbon's View tab.
                        </div>
                    </AccordionItem>
                    <AccordionItem class="fs-15 fw-semibold" header="Is theme an opinion?">
                        <div class="ff-secondary">
                            A theme is an opinion the author expresses on the
                            subject, for instance, the author's dissatisfaction
                            with the narrow confines of French bourgeois
                            marriage during that period theme is an idea that a
                            writer repeats.
                        </div>
                    </AccordionItem>
                    <AccordionItem class="fs-15 fw-semibold" header="How do you develop a theme?">
                        <div class="ff-secondary">
                            A short story, novella, or novel presents a
                            narrative to its reader. Perhaps that narrative
                            involves mystery, terror, romance, comedy, or all of
                            the above. These works of fiction may also contain
                            memorable characters, vivid world-building, literary
                            devices.
                        </div>
                    </AccordionItem>
                    <AccordionItem class="fs-15 fw-semibold" header="Do stories need themes?">
                        <div class="ff-secondary">
                            A story can have as many themes as the reader can
                            identify based on recurring patterns and parallels
                            within the story itself. In looking at ways to
                            separate themes into a hierarchy, we might find it
                            useful to follow the example of a single book.
                        </div>
                    </AccordionItem>
                </Accordion>
            </Col>
        </Row>
    </Container>
</section>
