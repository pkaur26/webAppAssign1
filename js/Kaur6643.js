function Info() {
  var a = document.getElementById("name").value;
  var b = document.getElementById("email").value;
  var c = document.getElementById("quantity").value;
  var d = document.getElementById("product").value;
  var p = 1.49*c;

  localStorage.setItem("cname",a);
  localStorage.setItem("cemail",b);
  localStorage.setItem("cquantity",c);
  localStorage.setItem("cproduct",d);
  localStorage.setItem("price",p);

}
function set() {
 
  document.getElementById("firstResult").innerHTML = localStorage.getItem('cname');
  document.getElementById("secondResult").innerHTML = localStorage.getItem('cemail');
  document.getElementById("thirdResult").innerHTML = localStorage.getItem('cquantity');
  document.getElementById("fourthResult").innerHTML = localStorage.getItem('cproduct');
  document.getElementById("fifthResult").innerHTML = localStorage.getItem('price');
}