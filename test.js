$(function(){
    $('.estimate_contents .fixed_ip_box input[type="radio"]').on("change",function(){
        let vals_ip = $(this).val();
        let pic_ip = $('.estimate_contents .perpc_hidden_fixed_ip')
    
        if(vals_ip == "Y_office_ip"){
            pic_ip.css("display","block");
        } else {
            pic_ip.css("display","none");
        }
    })
})
