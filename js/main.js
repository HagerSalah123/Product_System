var productName = document.getElementById("productName");
var productprice = document.getElementById("productprice");
var productcatgoery = document.getElementById("productcatgoery");
var productdesc = document.getElementById("productdesc");
var productsearch = document.getElementById("search");
var add_btn = document.getElementById("addBtn");
var updateIndex = 0;
var product_data = [];

if (localStorage.getItem("Productdata") != null) {
  product_data = JSON.parse(localStorage.getItem("Productdata"));
  displayProduct();
}

function addProdcut() {
  if (add_btn.innerHTML === `Update Product`) {
    updateProdcut();
  } else {
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
    displayProduct();
  }
}

function clearProdcut() {
  productName.value = "";
  productprice.value = "";
  productcatgoery.value = "";
  productdesc.value = "";
}
function displayProduct() {
  var row_data = "";
  for (var i = 0; i < product_data.length; i++) {
    row_data += `<tr class="text-center">
            <td>${i + 1}</td>
            <td>${product_data[i].name}</td>
            <td>${product_data[i].price}</td>
            <td>${product_data[i].catgoery}</td>
            <td>${product_data[i].description}</td>
            <td><button onclick="setUpdateform(${i})"  class="btn btn-warning">Update</button></td>
            <td><button onclick="deletProduct(${i})"  class="btn btn-danger">Delete</button></td>
          </tr>`;
  }
  document.getElementById("tbody").innerHTML = row_data;
}
function deletProduct(ele) {
  product_data.splice(ele, 1);
  localStorage.setItem("Productdata", JSON.stringify(product_data));
  displayProduct();
}
function searchProduct(term) {
  var search_ele = "";
  for (var i = 0; i < product_data.length; i++) {
    if (
      product_data[i].name.toLowerCase().includes(term.toLowerCase()) == true
    ) {
      search_ele += `<tr>
      <td>${i + 1}</td>
      <td>${product_data[i].name}</td>
      <td>${product_data[i].price}</td>
      <td>${product_data[i].catgoery}</td>
      <td>${product_data[i].description}</td>
      <td><button onclick="setUpdateform(${i})" class="btn btn-warning">Update</button></td>
      <td><button onclick="deletProduct(${i})"  class="btn btn-danger">Delete</button></td>
      </tr>`;
    }
    document.getElementById("tbody").innerHTML = search_ele;
  }
}
function setUpdateform(ele) {
  updateIndex = ele;
  productName.value = product_data[ele].name;
  productprice.value = product_data[ele].price;
  productcatgoery.value = product_data[ele].catgoery;
  productdesc.value = product_data[ele].description;
  add_btn.innerHTML = `Update Product`;
  
}

function updateProdcut() {
  var product = {
    name: productName.value,
    price: Number(productprice.value),
    catgoery: productcatgoery.value,
    description: productdesc.value,
  };

  product_data.splice(updateIndex, 1, product);

  clearProdcut();
  localStorage.setItem("Productdata", JSON.stringify(product_data));
  displayProduct(product_data);

  add_btn.innerHTML = "Add Product";
}
