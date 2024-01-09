var productName = document.getElementById("productName");
var productprice = document.getElementById("productprice");
var productcatgoery = document.getElementById("productcatgoery");
var productdesc = document.getElementById("productdesc");
var productsearch = document.getElementById("search");
var product_data = [];

if (localStorage.getItem("Productdata") != null) {
  product_data = JSON.parse(localStorage.getItem("Productdata"));
  displayProduct(product_data);
}
function addProdcut() {
  var product = {
    name: productName.value,
    price: Number(productprice.value),
    catgoery: productcatgoery.value,
    description: productdesc.value,
  };
  product_data.push(product);
  console.log(product_data);
  localStorage.setItem("Productdata", JSON.stringify(product_data));
  clearProdcut();
  displayProduct(product_data);
}
function clearProdcut() {
  productName.value = "";
  productprice.value = "";
  productcatgoery.value = "";
  productdesc.value = "";
}
function displayProduct(array) {
  var row_data = "";
  for (var i = 0; i < array.length; i++) {
    row_data += `<tr class="text-center">
            <td>${i + 1}</td>
            <td>${array[i].name}</td>
            <td>${array[i].price}</td>
            <td>${array[i].catgoery}</td>
            <td>${array[i].description}</td>
            <td><button   class="btn btn-warning">Update</button></td>
            <td><button onclick="deletProduct(${i})"  class="btn btn-danger">Delete</button></td>
          </tr>`;
  }
  document.getElementById("tbody").innerHTML = row_data;
}
function deletProduct(ele) {
  product_data.splice(ele, 1);
  localStorage.setItem("Productdata", JSON.stringify(product_data));
  displayProduct(product_data);
}
function searchProduct() {
  var search_ele = [];
  for (var i = 0; i < product_data.length; i++) {
    if (
      product_data[i].name
        .toLowerCase()
        .includes(productsearch.value.toLowerCase())
    ) {
      search_ele.push(product_data[i]);
    }
  }
  displayProduct(search_ele);
}

/*
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
  </head>

  <body>
    <div class="w-50 m-auto shadow p-4 my-4 bg-light-subtle">
      <h2 class="text-center  text-dark">CRUD SYSTEM </h2>

      <label for="productName">Product Name :</label>
      <input type="text" class="form-control mb-3" id="productName">

      <label for="productprice">Product Price :</label>
      <input type="number" class="form-control mb-3" id="productprice">

      <label for="productcatgoery">Product Category :</label>
      <input type="text" class="form-control mb-3" id="productcatgoery">

      <label for="productdesc">Product Description :</label>
      <textarea class="form-control mb-3 " id="productdesc"></textarea>

      <button onclick="addProdcut();" id="addBtn" class="btn btn-outline-success">Add Product</button>
      <button onclick="clearProdcut();" class="btn btn-outline-success">Clear</button>

    </div>
    <input type="text" onkeyup="searchProduct(this.value);" class="form-control mb-3 w-50 mx-auto " id="search"
      placeholder="search...">



    <div class="table-responsive text-center w-75 mx-auto">
      <table class="table table-striped">
        <thead>
          <tr class="text-center">
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Update</th>
            <th scope="col">Delelte</th>
          </tr>
        </thead>
        <tbody id="tbody"></tbody>
      </table>
    </div>



    <script src="js/bootstrap.bundle.min.js"></script>

    <script src="js/main.js"></script>


  </body>

</html>
*/
