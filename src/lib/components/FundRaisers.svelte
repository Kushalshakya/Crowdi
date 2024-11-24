<script>
    import FeatherIcons from "./FeatherIcons.svelte";

</script>
<div class="card fundRaiser">
  <div class="imageContainer position-relative">
    <img class="card-img-top" src="images/FundRaiserImage1.jpg" alt="Cardimagecap">
    <div class="wrapOptions position-absolute d-flex gap-2 end-0 bottom-0 p-2">
      <FeatherIcons name="share" className="btn border btn-light" />
      <FeatherIcons name="heart" className="btn border btn-light" />
    </div>
  </div>
  <div class="card-body">
    <div class="cardProfile d-flex gap-3 align-items-center pt-1 pb-2">
      <img src="images/avatarGirl01.avif" alt="FundRaiserImage" width="50" class="rounded" >
      <h2 class="pt-3" style="font-size: 18px;">Kushal Shakya</h2>
    </div>
    <h5 class="card-title pt-2">Help People of Rural Areas</h5>
    <p class="card-text pt-2 m-0">A Little Efforts can change someone prespective of living the life.</p>
    <div class="cardFundRaised d-flex align-items-center gap-3">
      <div class="progressBar mt-2"></div>
      <div class="normWrap d-flex align-items-center">
        <FeatherIcons name="gift" />
        <h4 class="px-2">90/420</h4>
      </div>
    </div>
    <!-- <a href="/" class="joinnow text-decoration-none rounded p-2 border-0 text-white">Join Campaign</a> -->
  </div>
</div>  