$(function(){
    $('.estimate_contents .wifi_box input[type="radio"]').on("change",function(){
        let vals_wifi = $(this).val();
        let pic_wifi = $('.estimate_contents .perpc_hidden_wifi')
    
        if(vals_wifi == "Y_wifi"){
            pic_wifi.css("display","block");
        } else {
            pic_wifi.css("display","none");
        }
    })
    $('.estimate_contents .ip_box input[type="radio"]').on("change",function(){
        let vals_ip = $(this).val();
        let pic_ip = $('.estimate_contents .perpc_hidden_ip')
    
        if(vals_ip == "Y_ip"){
            pic_ip.css("display","block");
        } else {
            pic_ip.css("display","none");
        }
    })
})
