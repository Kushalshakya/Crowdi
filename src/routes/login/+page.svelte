<script>
  import FeatherIcons from "$lib/components/FeatherIcons.svelte";
import Loader from "$lib/components/Loader.svelte";
  import gsap from "gsap";
  import jQuery from "jquery";

  import { onMount } from "svelte";
    onMount(async () => {
      setTimeout(() => {
        jQuery(".loader").css("transform", "translateY(-300%)", "opacity", ".8");
        gsap.from(".loginAnm", {
          scale: .8,
          ease: "power.out",
          delay: .2,
          opacity: 0,
        })
      }, 1000)
  })
</script>

<Loader />

<section class="vh-100" style="background-color: #4CC9FE;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100 loginAnm">
        <div class="col col-xl-10"> 
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="images/loginGirl.jpg" alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem; height:100%; object-fit:cover; object-position: 50%; overflow-clip-margin: unset;" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div class="d-flex align-items-center mb-3 pb-1 justify-content-center">
                        <img src="images/logo.png" alt="logo" width=100>
                    </div>
  
                    <h5 class="fw-normal mb-3 pb-3 text-center" style="letter-spacing: 1px;">Sign into your account</h5>
  
                    <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form2Example17">Email address</label>
                      <input type="email" id="form2Example17" class="form-control form-control-lg" />
                    </div>
  
                    <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form2Example27">Password</label>
                      <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    </div>
  
                    <div class="pt-1 mb-4">
                      <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary w-100 btn-lg btn-block" type="button">Login</button>
                    </div>
  
                    <a class="small text-muted" href="#!">Forgot password?</a>
                    <p class="pb-lg-2" style="color: #393f81;">Don't have an account? <a href="/signup" style="color: #393f81;">Register here</a></p>
                    <p class="mb-5 pb-lg-2">
                      <FeatherIcons name="home"/>
                      <a href="/" class="px-2 text-decoration-none text-dark mt-2">Goto Main Page</a>
                    </p>
                  </form>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  