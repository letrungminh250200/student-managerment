<script>
    import Navbar from './navbar.svelte';
    import Home from './home.svelte';
    import Client from './client.svelte';
    import Services from './services.svelte';
    import Features from './features.svelte';
    import Plans from './plans.svelte';
    import Reviews from './reviews.svelte';

    import Contact from './contact.svelte';
    import Cta from './cta.svelte';
    import Footer from './footer.svelte';

    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        const element = document.getElementById("back-to-top");
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    };

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
</script>
<div class="layout-wrapper landing">
    <Navbar />
    <Home />
    <Client />
    <Services />
    <Features />
    <Plans />
    <Reviews />
    <Contact />
    <Cta />
    <Footer />
    <button class="btn btn-danger btn-icon landing-back-top" id="back-to-top" on:click={() => toTop()}>
        <i class="ri-arrow-up-line"></i>
    </button>
</div>