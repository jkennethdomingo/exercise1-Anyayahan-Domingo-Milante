<template>
	<section class="ftco-section">
	  <div class="container-fluid px-md-5">
		<div class="row justify-content-between">
		  <div class="col-md-8 order-md-last">
			<div class="row">
			  <div class="col-md-6 text-center">
				<router-link to="/" class="navbar-brand">Logistica <span>Architecture Agency</span></router-link>
			  </div>
			  <div class="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
				<form action="#" class="searchform order-lg-last">
				  <div class="form-group d-flex">
					<input type="text" class="form-control pl-3" placeholder="Search">
					<button type="submit" placeholder="" class="form-control search">
					  <span class="fa fa-search"></span>
					</button>
				  </div>
				</form>
			  </div>
			</div>
		  </div>
		  <div class="col-md-4 d-flex">
			<div class="social-media">
			  <p class="mb-0 d-flex">
				<a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"><i class="sr-only">Facebook</i></span></a>
				<a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"><i class="sr-only">Twitter</i></span></a>
				<a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"><i class="sr-only">Instagram</i></span></a>
				<a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-dribbble"><i class="sr-only">Dribbble</i></span></a>
			  </p>
			</div>
		  </div>
		</div>
	  </div>
	  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
		<div class="container-fluid">
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="fa fa-bars"></span> Menu
		  </button>
		  <div class="collapse navbar-collapse" id="ftco-nav">
			<ul class="navbar-nav m-auto">
			  <li class="nav-item active"><router-link to="/" class="nav-link">Home</router-link></li>
			  <li class="nav-item dropdown">
				<router-link to="#" class="nav-link dropdown-toggle" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Page</router-link>
				<div class="dropdown-menu" aria-labelledby="dropdown04">
				  <router-link to="/page1" class="dropdown-item">Page 1</router-link>
				  <router-link to="/page2" class="dropdown-item">Page 2</router-link>
				  <router-link to="/page3" class="dropdown-item">Page 3</router-link>
				  <router-link to="/page4" class="dropdown-item">Page 4</router-link>
				</div>
			  </li>
			  <li class="nav-item"><router-link :to="{ name: 'kenneth' }" class="nav-link">Kenneth</router-link></li>
			  <li class="nav-item"><router-link :to="{ name: 'JD' }" class="nav-link">JD</router-link></li>
			  <li class="nav-item"><router-link to="/Ayen" class="nav-link">Ayen</router-link></li>
			</ul>
		  </div>
		</div>
	  </nav>
	  <!-- END nav -->
	</section>
  </template>
  

<script>
  export default {
    name: "NavBar",
};
</script>

<style scoped>

</style>