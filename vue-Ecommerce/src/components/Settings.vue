<template>
<body>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynavbar">
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
            <a href="setting">
              <span class="glyphicon glyphicon-user">Settings</span>
            </a>
          </li>
          <li>
            <a href="logout">
              <span class="glyphicon glyphicon-log-out">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row row_style">
      <div class="col-md-4 col-md-offset-4">
        <form>
          <h4>Change Password</h4>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Old Password" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="New Password" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Re-type New Password" />
          </div>
          <button class="btn btn-primary">Change</button>
        </form>
      </div>
    </div>
  </div>
  <footer>
    <div class="container">
      <center>
        Copyright © Lifestyle Store. All Rights Reserved and Contact Us: +91
        90000 00000
      </center>
    </div>
  </footer>
</body>
</template>

<script>
export default {
  name: "Settings",
  props: {}
};
</script>