<template>
  <body>
    <nav class="navbar  navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#mynavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="/" class="navbar-brand">Lifestyle store</a>
        </div>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="sign"
                ><span class="glyphicon glyphicon-user">SignUp</span></a
              >
            </li>
            <li>
              <a href="login"
                ><span class="glyphicon glyphicon-log-in">Login</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="banner-image">
      <div class="container">
        <div class="banner-content">
          <h1>We sell lifestyle</h1>
          <p>Flat 40% OFF on all premium brands</p>
          <a href="products" class="btn btn-danger btn-lg active">Shop Now</a>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-4">
          <div class="thumbnail">
            <a href="products"
              ><img src="../assets/img/watch.jpg" alt="Watches"
            /></a>
            <div class="caption">
              <h2>Watches</h2>
              <p>Original watches from the best brands.</p>
            </div>
          </div>
        </div>
        <div class="col-xs-4">
          <div class="thumbnail">
            <a href="products"
              ><img src="../assets/img/camera.jpg" alt="Camera"
            /></a>
            <div class="caption">
              <h2>Camera</h2>
              <p>Choose among the best available in the world.</p>
            </div>
          </div>
        </div>
        <div class="col-xs-4">
          <div class="thumbnail">
            <a href="products"
              ><img src="../assets/img/shirt.jpg" alt="Shirt"
            /></a>
            <div class="caption">
              <h2>Shirts</h2>
              <p>Our exquisite collection of shirts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <p>
          Copyright © Lifestyle Store. All Rights Reserved and Contact Us: +91
          90000 00000
        </p>
      </div>
    </footer>
  </body>
</template>

<script>
export default {
  name: "Home",
  props: {}
};
</script>
<style scoped>
.banner-image {
  background-image: url("../assets/img/intro-bg_1_2.jpg");
}
.footer {
  height: 40px;
}
</style>
//
