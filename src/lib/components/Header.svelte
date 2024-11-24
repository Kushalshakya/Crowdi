<script>
  import FeatherIcons from './FeatherIcons.svelte';
</script>

<header class="pb-3 text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <img src="images/logo.png" alt="logo" width=100 >

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 pt-4 ps-4">
          <li><a href="/" class="nav-link px-2 text-white">Home</a></li>
          <li><a href="/explore" class="nav-link px-2 text-white">Explore</a></li>
          <li><a href="/about" class="nav-link px-2 text-white">Campaigns</a></li>
          <li><a href="/about" class="nav-link px-2 text-white">Profile</a></li>
        </ul>

        <form class="searchWrap d-flex align-items-center col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 rounded mt-4">
            <FeatherIcons name="search" className="searchIcon rounded-start" />
            <input type="search" placeholder="Search" aria-label="Search" class="rounded-end w-100 bg-transparent">
        </form>

        <div class="text-end pt-4">
            <!-- <FeatherIcons name="plus-circle" className="btn btn-outline-light" />
            <FeatherIcons name="settings" className="btn btn-outline-light" /> -->
            <button type="button" class="btn btn-light btnLogin me-2"><a href="/login" class="text-dark text-decoration-none">Login</a></button>
            <button type="button" class="btnSignup rounded me-2 border-0"><a href="/signup" class="text-white text-decoration-none">Signup</a></button>
        </div>
      </div>
    </div>
  </header>