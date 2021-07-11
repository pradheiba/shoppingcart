$(document).ready(function(){
    

    $("#btn-place-order").click(function(){
        localStorage.clear('product')
        location.assign('./thankyou.html');
    })


        var item = localStorage.getItem("product") === null ? []:JSON.parse(localStorage.getItem("product"));

        var grandTotal = 0;
        for(var i=0; i<item.length; i++) {
    
           var checkoutCard =$('<div>').addClass("checkout-card");

            var leftDetails = $('<div>')
            var img = ($("<img>").addClass("checkout-product-img").attr("src",item[i].preview))
            leftDetails.append(img)
            
            var rightDetails = $('<div>').addClass("right-details")
            var name = $("<h4>").html(item[i].name);
            var countNo = $('<p>').html('x'+item[i].count)
            var amount =$('<p>').html("Amount:Rs:"+((parseInt(item[i].count) * parseInt(item[i].price))))
            rightDetails.append(name,countNo,amount)
            
            checkoutCard.append(leftDetails,rightDetails)
            // console.log(checkoutCard.text())

            $('#check-list').append(checkoutCard)
            console.log('name ', item[i].name);
            console.log('Price ', item[i].price);

             // total
            var totalForCurrentProduct = parseFloat(item[i].count) * parseFloat(item[i].price);

            grandTotal = grandTotal + totalForCurrentProduct;
        }
        $('#total-item').html(item.length);
        $('#total-amount').html(grandTotal);


})


       










// var totalForCurrentProduct = parseFloat(productList[i].count) * parseFloat(productList[i].price);

        // grandTotal = grandTotal + totalForCurrentProduct;

        // console.log('Total For Product '+ i + ' is=> ' + totalForCurrentProduct);