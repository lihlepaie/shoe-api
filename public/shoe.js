$(function(){

var sizedrpDwn = document.querySelector('.myTemplate1')
var colordrpDwn = document.querySelector('.myTemplate2')
var brandDrpDwn = document.querySelector('.myTemplate3')
var colors = document.querySelector('.color');
var brand = document.querySelector('.brand')
var sizeSelected = document.querySelector('.sizes');
var searchShoes = document.querySelector('.shoeStock')
var li = document.querySelector('.li')
var shoe = document.querySelector('.shoeData')
var myshoeSize = document.querySelector('.myshoeSize')
var result = document.querySelector('.results')
var addbttn = document.querySelector('.addBtn')
var bttn = document.querySelector('.bttn')
var image = document.querySelector('.bttn')
var display = document.querySelector('.display')



var myTemplate = document.querySelector(".myTemplate");
var TemplateInstance = Handlebars.compile(myTemplate.innerHTML);

  $.ajax({
    type:'GET',
    url:'/api/shoes',
    datatype:'json',
    success:function(shoeData){
  display.innerHTML =TemplateInstance({shoes:shoeData})
    }

    });

    var add_size = document.querySelector('#size')
    var add_color = document.querySelector('#color')
    var in_stock = document.querySelector('#in_stock')
    var add_price = document.querySelector('#price')
    var add_brand = document.querySelector('#brand')

    addbttn.addEventListener('click', function() {

        // var imagePath = image.value.substring(12)
        var size = add_size.value;
        var color = add_color.value;
        var stock = in_stock.value;
        var price = add_price.value;
        var brand = add_brand.value
        console.log(brand);
// if (add_color !== undefined && add_size !== undefined && add_brand !== undefined && add_price !== undefined && in_stock !== undefined) {

          var newdata = {
                color: color,
                size: size,
                brand: brand,
                price: price,
                in_stock: stock
                // image: imagePath,
              }
    $.ajax({
      type:'POST',
      url:'/api/shoes',
      datatype:'json',
      data : newdata,
      success:function(shoeData){
    display.innerHTML =TemplateInstance({shoes:shoeData})
      }
    })


    var myDropdown = Handlebars.compile(sizedrpDwn.innerHTML);
    var results = myDropdown({
      shoes: shoes
    });
    var sizeSelected = document.querySelector('.selectSize');
    sizeSelected.innerHTML = results;

    var myDropdown = Handlebars.compile(colordrpDwn.innerHTML);
    var results = myDropdown({
      shoes: shoes
    });
    var colors = document.querySelector('.selectColor');
    colors.innerHTML = results;

    var myDropdown = Handlebars.compile(brandDrpDwn.innerHTML);
    var results = myDropdown({
      shoes: shoes
    });
    var brand = document.querySelector('.selectBrand')
    brand.innerHTML = results;

})
})
