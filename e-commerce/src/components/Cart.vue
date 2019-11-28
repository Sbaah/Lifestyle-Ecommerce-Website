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
              <a href="cart"
                ><span class="glyphicon glyphicon-shopping-cart">Cart</span></a
              >
            </li>
            <li>
              <a href="settings"
                ><span class="glyphicon glyphicon-user">Settings</span></a
              >
            </li>
            <li>
              <a href="logout"
                ><span class="glyphicon glyphicon-log-out">Logout</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="table-responsive table-condensed table_style">
            <table class="table table-bordered table-striped table-hover">
              <tbody>
                <tr>
                  <th>Item Number</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th></th>
                </tr>
                <tr></tr>
                <tr>
                  <td></td>
                  <td>Total</td>
                  <td>Rs.0</td>
                  <td>
                    <a href="success"
                      ><button class="btn btn-primary">Confirm Order</button></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
  name: "Cart",
  props: {}
};
</script>
