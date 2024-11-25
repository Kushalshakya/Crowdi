<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import FeatherIcons from '$lib/components/FeatherIcons.svelte';
    import FundRaisers from '$lib/components/FundRaisers.svelte';
    
    import jQuery from 'jquery';

    import { onMount } from "svelte";
    import gsap from 'gsap';
    import Loader from '$lib/components/Loader.svelte';

    onMount(async () => {
        setInterval(() => {
            if(window.pageYOffset > 10){
                jQuery("header").css("background-color", "#4CC9FE");
            } else{
                jQuery("header").css("background-color", "transparent");
            }
        },100)
        setTimeout(() => {
            jQuery(".loader").css("transform", "translateY(-300%)", "opacity", ".8");
            gsap.from(".mainContentContainer h1", {
                y: 100,
                delay: .5,
                opacity: 0,
            }),
            gsap.from(".mainContentContainer p", {
                y: 150,
                delay: .7,
                opacity: 0
            })
            gsap.from(".btnConnectWithUs", {
                scale: .5,
                delay: .7,
                opacity: 0
            })
        }, 1000)
    })


    onMount(async () => {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".cardTopFeatured",
                start: "top center",
                end: "bottom center",
                scrub: true,
                markers: false,
            },
        });

        timeline.to('.cardTopFeatured', {
            y: 100,
        })
    });

</script>

<Loader />

<Header />
<div class="mainContent d-flex justify-content-center align-items-center">
    <div class="mainContentContainer text-center">
        <h1 class="text-white">Empower Change<br>Fund the Future</h1>
        <p class="text-white my-3">Together, we can turn ideas into solving global challenges.</p>
        <button class="btnConnectWithUs rounded p-2 border-0 text-white mt-3 mb-4">Connect With US</button>
    </div>
    <div class="card cardTopFeatured" style="width: 48rem;">
        <div class="card-body">
            <div class="cardContainer d-flex gap-3 align-items-center pt-2 pb-4">
                <img src="images/avatarGirl01.avif" alt="HostAvatar" class="rounded-circle" width=70 >
                <div class="cardDesc">
                    <h5 class="card-title">Help Us Teach Kids All Over The Country</h5>
                    <div class="extraDesc d-flex gap-2 align-items-center">
                        <FeatherIcons name="dollar-sign" className="text-success" /><h6 class="card-subtitle text-muted">Community Fundraisers</h6>
                        <FeatherIcons name="map-pin" className="text-danger" /><h6 class="location text-muted">Sunsari, Nepal</h6>
                    </div>
                </div>
            </div>
        
          <p class="card-text pt-2 pb-1">Your support can make education accessible to children in need. Together, we can create opportunities and inspire a brighter future for kids across the nation.</p>
          <button class="btnTopFeatured rounded p-2 border-0 text-white mb-2">Join Campaign</button>
    
          <div class="progressBarContainer d-flex gap-3 align-items-center justify-content-end">
            <div class="progressBar"></div>
            <div class="progressBarFunds d-flex">
                <span class="collectedAmount">1450</span>
                <div class="seperator">/</div>
                <span class="totalAmount">7200</span>
            </div>
          </div>
          <div class="topContributors">
          </div>
        </div>
    </div>
</div>
<!-- .fundRaiserContainer .fundRaiser -->
<div class="vh-auto w-100 py-4 mt-5">
    <h2 class="mt-5 pt-2 ps-2 pb-4" style="width: 85%; margin: auto; font-weight:800; font-size: 30px;">Explore</h2>
    <div class="fundRaiserContainer d-flex flex-wrap h-100 gap-4 align-items-center justify-content-center pb-3">
        <FundRaisers />
        <FundRaisers />
        <FundRaisers />
        <FundRaisers />
        <FundRaisers />
        <FundRaisers />
        <FundRaisers />
        <FundRaisers />
    </div>
</div>
<Footer />
<style>
</style>