<script>
  import Loader from "$lib/components/Loader.svelte";
  import gsap from "gsap";
  import { onMount } from "svelte";
  import jQuery from "jquery";

  import FeatherIcons from "$lib/components/FeatherIcons.svelte";
  
  import { db } from "$lib/firebase/firebase";
  import { serverTimestamp, collection, addDoc, getDocs } from "firebase/firestore";
  import { error } from "@sveltejs/kit";

  onMount(async () => {
    setTimeout(() => {
        jQuery(".loader").css("transform", "translateY(-300%)", "opacity", ".8");
        gsap.from(".signAnm", {
          scale: .8,
          ease: "power.out",
          delay: .2,
          opacity: 0,
        })
      }, 1000)
    })

    let firstName = '';
    let lastName = '';
    let email = '';
    async function submitForm(event) {
      event.preventDefault();
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        createdAt: serverTimestamp()
      };
      try{
        await addDoc(collection(db,'users'),userData);
        console.log("Success")
      } catch(error){
        console.error("Something went wrong: ", error);
      }
    }

    async function retriveData() {
      const userCollection = collection(db, 'users');
      const dataRows = await getDocs(userCollection);

      const userList = [];

      dataRows.forEach((doc) => {
          userList.push({
            id: doc.id,
            ...doc.data()
          });
      });
      console.log(userList)
    }
    retriveData()
</script>

<Loader />

<section class="vh-100" style="background-color: #4CC9FE;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100 signAnm">
        <div class="col col-xl-10"> 
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0 flex-row-reverse">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="images/loginGirl.jpg" alt="login form" class="img-fluid" style="border-radius: 0 1rem 1rem 0; height:100%; object-fit:cover; object-position: 50%; overflow-clip-margin: unset;" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form on:submit={submitForm}>
                    <div class="d-flex align-items-center mb-3 pb-1 justify-content-center">
                        <img src="images/logo.png" alt="logo" width=100>
                    </div>
  
                    <h5 class="fw-normal mb-3 pb-2 text-center" style="letter-spacing: 1px;">Create Your Account</h5>
  
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <div data-mdb-input-init class="form-outline">
                          <label class="form-label" for="form3Example1">First name</label>
                          <input type="text" id="form3Example1" class="form-control form-control-lg" bind:value={firstName} />
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <div data-mdb-input-init class="form-outline">
                          <label class="form-label" for="form3Example2">Last name</label>
                          <input type="text" id="form3Example2" class="form-control form-control-lg" bind:value={lastName} />
                        </div>
                      </div>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-3">
                        <label class="form-label" for="form2Example17">Email address</label>
                        <input type="email" id="form2Example17" class="form-control form-control-lg" bind:value={email} />
                    </div>
  
                    <div data-mdb-input-init class="form-outline mb-3">
                        <label class="form-label" for="form2Example27">Password</label>
                        <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    </div>
  
                    <div class="pt-1 mb-3">
                      <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block w-100" type="submit">Create Account</button>
                    </div>
  
                    <p class="pb-lg-2" style="color: #393f81;">Already Have An Account? <a href="/login" style="color: #393f81;">Login here</a></p>

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