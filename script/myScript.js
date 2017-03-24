function setVisibility(id) {
    var returnValue = true;
    var pro = document.getElementById("product");
    var qua = document.getElementById("quantity");

    if(pro.value==""){
      alert("Product missing");
    }else if (qua.value=="") {
      alert("Quantity missing");
    }else{


      var height=document.getElementById('lists').style.height;//This increases the height of the div after every click
      //transform element from string to integer
      height=height.replace("px","");
      height=+height;

      //change height
      var n=height;
      height=n+25+'px';
      document.getElementById('lists').style.height = height;

      var table = document.getElementById("table");      //This adds a row after every click
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var btn = row.insertCell(2);
      cell1.innerHTML = document.getElementById("product").value;  //prints products
      cell2.innerHTML = document.getElementById("quantity").value; //prints quantity
      btn.innerHTML = "<input type='button' value='Remove' onclick='deleteRow(this)'>";
    }
}

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
}

function clearInput() {
  document.getElementById("product").value = '';
  document.getElementById("quantity").value = '';

}
