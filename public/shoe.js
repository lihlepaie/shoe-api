$(function() {

    // var Sizes = document.querySelector('.')
    var sizeFilter = document.querySelector('#sizeFilter')
    var Sizes = document.querySelector('#Sizes')
    var brandFilter = document.querySelector('#brandFilter')
    var Brand = document.querySelector('#Brand')

    var colors = document.querySelector('.color');
    var brand = document.querySelector('.brand')
    var li = document.querySelector('.li')
    var shoe = document.querySelector('.shoeData')
    var myshoeSize = document.querySelector('.myshoeSize')
    var result = document.querySelector('.results')
    var addbttn = document.querySelector('.addBtn')
    var bttn = document.querySelector('.bttn')
    var img = document.querySelector('.image')
    var display = document.querySelector('.display')



    var myTemplate = document.querySelector(".myTemplate");
    var TemplateInstance = Handlebars.compile(myTemplate.innerHTML);

    function showSock() {
        $.ajax({
            type: 'GET',
            url: '/api/shoes',
            datatype: 'json',
            success: function(shoeData) {
                display.innerHTML = TemplateInstance({
                    shoes: shoeData
                })
            }

        })
    }
    showSock();


    var add_size = document.querySelector('#size')
    var add_color = document.querySelector('#color')
    var in_stock = document.querySelector('#in_stock')
    var add_price = document.querySelector('#price')
    var add_brand = document.querySelector('#brand')

    addbttn.addEventListener('click', function() {

        var size = add_size.value;
        var color = add_color.value;
        var stock = in_stock.value;
        var price = add_price.value;
        var brand = add_brand.value;
        // var image = imagePath.value

        // if (add_color !== undefined && add_size !== undefined && add_brand !== undefined && add_price !== undefined && in_stock !== undefined) {

        var newdata = {
            color: color,
            size: size,
            brand: brand,
            price: price,
            in_stock: stock
        };

        $.ajax({
            type: 'POST',
            url: '/api/shoes',
            datatype: 'json',
            data: newdata,
            success: function(shoeData) {
                showSock();
                display.innerHTML = TemplateInstance({
                    shoes: shoeData
                })
            }
            // error : function (xhr, err) {
            //   alert(err);
            // }

        })
    })



    Sizes.addEventListener('click', function() {
        var size = sizeFilter.value;
        $.ajax({
            type: 'GET',
            url: '/api/shoes/size/' + size,
            datatype: 'json',
            success: function(shoeData) {
                display.innerHTML = TemplateInstance({
                    shoes: shoeData
                })
            }
        })
    })

    Brand.addEventListener('click', function() {
        var brand = brandFilter.value;
        $.ajax({
            type: 'GET',
            url: '/api/shoes/brand/' + brand,
            datatype: 'json',

            success: function(shoeData) {
                display.innerHTML = TemplateInstance({
                    shoes: shoeData
                })
            }
        })
    })

})
