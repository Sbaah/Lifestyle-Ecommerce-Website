<template>
  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
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
              <a href="cart">
                <span class="glyphicon glyphicon-shopping-cart">Cart</span>
              </a>
            </li>
            <li>
              <a href="settings">
                <span class="glyphicon glyphicon-user">Settings</span>
              </a>
            </li>
            <li>
              <a href="logout.html">
                <span class="glyphicon glyphicon-log-out">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="jumbotron jumbotron_style">
        <h1>Welcome to our Lifestyle store!</h1>
        <p>
          We have the best cameras,watches and shirts for you.No need to hunt it
          around,we have all in one place.
        </p>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-md-3 col-sm-6">
        <div class="thumbnail">
          <img src="../assets/img/camera.jpg" alt="Nikon" />
          <div class="caption">
            <h3>Nikon NX21</h3>
            <p>Rs.36000.00</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6 ">
        <div class="thumbnail">
          <img src="../assets/img/camera2.jpg" alt="Sony" />

          <div class="caption">
            <h3>Sony LDS</h3>
            <p>Rs.32000.00</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6 ">
        <div class="thumbnail">
          <img src="../assets/img/camera3.jpg" alt="cannon" />
          <div class="caption">
            <h3>Cannon EDS70D</h3>
            <p>Rs.29000.00</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 ">
        <div class="thumbnail">
          <img src="../assets/img/camera4.jpg" alt="Panasonic" />
          <div class="caption">
            <h3>Lumix2</h3>
            <p>Rs.33000.00</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-md-3 col-sm-6">
        <div class="thumbnail">
          <img src="../assets/img/watch.jpg" alt="watch" />
          <div class="caption">
            <h3>Y&K</h3>
            <p>Rs.3000.00</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 ">
        <div class="thumbnail">
          <img src="../assets/img/watch2.jpg" />

          <div class="caption">
            <h3>Casio G-Shock</h3>
            <p>Rs.6000.00</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6 ">
        <div class="thumbnail">
          <img src="../assets/img/watch3.jpg" alt="Watch" />
          <div class="caption">
            <h3>Omega</h3>
            <p>Rs.2000.00</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 ">
        <div class="thumbnail">
          <img src="../assets/img/watch4.jpg" alt="Watch" />
          <div class="caption">
            <h3>Diesel 3bar</h3>
            <p>Rs.3300.00</p>

            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-md-3 col-sm-6">
        <div class="thumbnail">
          <img src="../assets/img/shirt.jpg" alt="Tommy" />
          <div class="caption">
            <h3>Tommy Hilfigher</h3>
            <p>Rs.3600.00</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6 ">
        <div class="thumbnail">
          <img src="../assets/img/shirt2.jpg" alt="U.S.Polo" />
          <div class="caption">
            <h3>U.S. Polo</h3>
            <p>Rs.970.00</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6 ">
        <div class="thumbnail">
          <img src="../assets/img/shirt3.jpg" alt="cannon" />
          <div class="caption">
            <h3>Allen Solly</h3>
            <p>Rs.2900.00</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 ">
        <div class="thumbnail">
          <img src="../assets/img/shirt4.jpg" />
          <div class="caption">
            <h3>UCB</h3>
            <p>Rs.960.00</p>

            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        Copyright © Lifestyle Store. All Rights Reserved and Contact Us: +91
        90000 00000
      </div>
    </footer>
  </body>
</template>
<script>
export default {
  name: "Products",
  props: {}
};
</script>
