//[internet_speed]시작
//internet_speed 셋팅
$('.internet_speed_box select[name="internet_speed"]').on("change", function () {
    internet_speed = $(this).val();
        if (internet_speed == 0) {
            [internet_speed_price, internet_speed_price_setup, internet_speed_count, internet_speed_sum] = Array(4).fill(0);
        } else {
            if(!(internet_speed_family.is(":checked") == false)){
                internet_speed_price = internet_speed_d1[internet_speed]
            } else{
            internet_speed_price = internet_speed_d[internet_speed];
            }
            internet_speed_price_setup = internet_speed_setup_price;
            internet_speed_count = 1;
            internet_speed_sum = (internet_speed_price);
            internet_speed_ea = 1;
            
        }
        if (!(internet_speed == 0)) {
            fill(
                [
                    {
                        "selector": er_internet_speed,
                        "option": [internet_speed, internet_speed_ea, internet_speed_price, internet_speed_sum, internet_speed_price_setup]
                    }
                ]
            )
        } else {
            reset([er_internet_speed]);
        }
});
$('.internet_speed_box input[name="internet_speed_family"]').on("change", function(){
    internet_speed = $('.internet_speed_box select[name="internet_speed"]').val();
    if(internet_speed == 0){
        [internet_speed_price, internet_speed_price_setup, internet_speed_count, internet_speed_sum] = Array(4).fill(0);
    } else {
    if(!(internet_speed_family.is(":checked") == false)){
        internet_speed_price = internet_speed_d1[internet_speed];
    } else {
        internet_speed_price = internet_speed_d[internet_speed]
    };
    internet_speed_price_setup = internet_speed_setup_price;
    internet_speed_sum = (internet_speed_price);
    if(internet_speed_count == 0){
        internet_speed_ea = 0
    } else {
        internet_speed_ea = 1;
    }
    }
    if(!(internet_speed == 0)){
        fill(
            [
                {
                    "selector": er_internet_speed,
                    "option": [internet_speed, internet_speed_ea, internet_speed_price, internet_speed_sum, internet_speed_price_setup]
                }
            ]
        )
    } else {
            reset([er_internet_speed]);
        }
})
$(".internet_speed_box select").on("change", function () {
    set_sums_store();
})
$('.internet_speed_box input[name="internet_speed_family"]').on("change", function(){
    set_sums_store();
})
//[need_tv]시작
//need_tv 셋팅
$('.need_tv_box select[name="tv"]').on("change", function(){
    tv = $(this).val();
    if (tv == 0){
        [tv_price, tv_price_setup, tv_price_settop, tts, tv_more, tv_more_setup, tv_more_settop] = Array(7).fill(0)
    } else {
        if(!(ginisettops.is(":checked") == false)){
            tv_settop_gini = tv_settop + 1100;
            tv_store();
        } else{
            tv_settop_gini = tv_settop;
            tv_store();
        }
    }
    if (!(tv == 0)) {
        fill(
            [
                {
                    "selector": er_need_tv,
                    "option": [tv, 1, tv_price, tv_sum, tv_price_setup]
                },
                {
                    "selector": tv_settop_s,
                    "option": [tv, 1, tv_settop, tv_settop_sum, tv_settop_setup]
                }
            ]
        )
    } else {
        reset([er_need_tv, tv_settop_s, er_need_tv_plus, tv_settop_more]);
    }
})
$('.need_tv_box input[name="ginisettop"]').on("change", function(){
    tv = $('.need_tv_box select[name="tv"]').val();
    if (tv == 0){
        [tv_price, tv_price_setup, tv_price_settop, tts, tv_more, tv_more_setup, tv_more_settop] = Array(7).fill(0)
    } else {
    if(!(ginisettops.is(":checked") == false)){
        tv_settop_gini = tv_settop + 1100;
        tv_store();
    } else {
        tv_settop_gini = tv_settop;
        tv_store();
    } }
    if (!(tv == 0)) {
        fill(
            [
                {
                    "selector": er_need_tv,
                    "option": [tv, 1, tv_price, tv_sum, tv_price_setup]
                },
                {
                    "selector": tv_settop_s,
                    "option": [tv, 1, tv_settop_gini, tv_settop_sum, tv_settop_setup]
                }
            ]
        )
    } else {
        reset([er_need_tv, tv_settop_s, er_need_tv_plus, tv_settop_more]);
    }
})
$('.need_tv_box select').on("change", function(){
    set_sums_store();
})
$('.need_tv_box input').on("change", function(){
    set_sums_store();
});

//[need_tv_more]시작
//need_tv_more 셋팅
$('.need_tv_more input[name="need_tv_more"]').on("change", function(){
    tv_more_ea = $(this).val();
    if(tv == 0){
        $('.need_tv_more input[name="need_tv_more"]').eq(0).prop("checked", false);
        $('.need_tv_more input[name="need_tv_more"]').eq(1).prop("checked", false);
        $('.need_tv_more input[name="need_tv_more"]').eq(2).prop("checked", false);
        alert(" 먼저 TV를 선택해 주세요 ")
    } else {
    if(tts = 1 ) {
        tv_more_ch = need_tv_d_more[tv];
        tv_more = tv_more_ch * tv_more_ea;
        tv_more_settop = tv_settop_mores * tv_more_ea;
        tv_more_settop_setup = 0;
        tv_more_setup = (11000 * tv_more_ea);
    }
     if(tv_more_ea > 0 ){
        fill(
            [
                {
                    "selector": er_tv_more,
                    "option": [tv, tv_more_ea, tv_more_ch, tv_more, tv_more_setup]
                },
                {
                    "selector": tv_settop_more,
                    "option": [tv, tv_more_ea, tv_settop_mores, tv_more_settop, tv_more_settop_setup]
                }
            ]
        )
    }}
})
$('.need_tv_more').on("change", function(){
    set_sums_store();
})

//[call_internet]시작
//call_internet 셋팅
//여기부터 fax까지 펑션으로 코드 수 줄일 수 있음. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$('.call_internet select[name="store_internetcall"]').on("change", function () {
    call_internet = $(this).val();
    if (call_internet == 0) {
        [call_internet_price, call_internet_setup, call_internet_count, call_internet_sum, call_internet_setup_sum] = Array(5).fill(0);
    } else {
        if(call_internet_ea > 0){
            call_internet_setup = 27500;
        }
        call_internet_price = call_internet_d[call_internet];
        call_internet_count = 1;
        call_internet_sum = (call_internet_price * call_internet_ea);
        call_internet_setup_sum = call_internet_setup * call_internet_ea;
    }

    if (!(call_internet == 0)) {
        fill(
            [
                {
                    "selector": er_call_internet,
                    "option": [call_internet, call_internet_ea, call_internet_price, call_internet_sum, call_internet_setup_sum]
                }
            ]
        )
    } else {
        reset([er_call_internet]);
    }

});
$('.call_internet select[name="store_internetcall_perpc"]').on("change", function () {
    call_internet_ea = $(this).val();
    call_internet_sum = (call_internet_price * call_internet_ea);
    if (call_internet_count == 1) {
        call_internet_setup = 27500;
        call_internet_setup_sum = call_internet_setup * call_internet_ea;
        fill(
            [
                {
                    "selector": er_call_internet,
                    "option": [call_internet, call_internet_ea, call_internet_price, call_internet_sum, call_internet_setup_sum]
                }
            ]
        )
    } else {
        reset([er_call_internet]);
    };
})
$('.call_internet select').on("change", function(){
    set_sums_store();
});


//[call_wire]시작
//call_wire 셋팅
$('.call_wire select[name="store_wirecall"]').on("change", function () {
    call_wire = $(this).val();
    if (call_wire == 0) {
        [call_wire_price, call_wire_setup, call_wire_count, call_wire_sum, call_wire_setup_sum] = Array(5).fill(0);
    } else {
        if(call_wire_ea > 0){
            call_wire_setup = 27500;
        }
        call_wire_price = call_wire_d[call_wire];
        call_wire_count = 1;
        call_wire_sum = (call_wire_price * call_wire_ea);
        call_wire_setup_sum = call_wire_setup * call_wire_ea;
    }

    if (!(call_wire == 0)) {
        fill(
            [
                {
                    "selector": er_call_wire,
                    "option": [call_wire, call_wire_ea, call_wire_price, call_wire_sum, call_wire_setup_sum]
                }
            ]
        )
    } else {
        for (i = 0; i < extra_arr.length; i++) {
            reset([extra_arr[i]]);
        }
        for(i = 0; i < extra_arr1.length; i++){
            unchecked([extra_arr1[i]])
            };
        for(i = 0; i < Object.keys(extra_price_price).length; i++){
            extra_price_price[Object.keys(extra_price_price)[i]] = 0;
        }
    }

});
$('.call_wire select[name="store_wirecall_perpc"]').on("change", function () {
    call_wire_ea = $(this).val();
    call_wire_sum = (call_wire_price * call_wire_ea);
    if (call_wire_count == 1) {
        call_wire_setup = 27500;
        call_wire_setup_sum = call_wire_setup * call_wire_ea;
        fill(
            [
                {
                    "selector": er_call_wire,
                    "option": [call_wire, call_wire_ea, call_wire_price, call_wire_sum, call_wire_setup_sum]
                }
            ]
        )
    } else {
        reset([er_call_wire]);
    };
    if (call_wire_ea == 0) {
        for (i = 0; i < extra_arr.length; i++) {
            reset([extra_arr[i]]);
        }
        for(i = 0; i < extra_arr1.length; i++){
            unchecked([extra_arr1[i]])
        };
    };
})
$('.call_wire select').on("change", function(){
    set_sums_store();
});
//[call_fax]시작
//call_fax 셋팅
$('.call_fax select[name="store_faxcall"]').on("change", function () {
    call_fax = $(this).val();
    if (call_fax == 0) {
        [call_fax_price, call_fax_setup, call_fax_count, call_fax_sum, call_fax_setup_sum] = Array(5).fill(0);
    } else {
        if(call_fax_ea > 0){
            call_fax_setup = 27500;
        }
        call_fax_price = call_fax_d[call_fax];
        call_fax_count = 1;
        call_fax_sum = (call_fax_price * call_fax_ea);
        call_fax_setup_sum = call_fax_setup * call_fax_ea;
    }

    if (!(call_fax == 0)) {
        fill(
            [
                {
                    "selector": er_call_fax,
                    "option": [call_fax, call_fax_ea, call_fax_price, call_fax_sum, call_fax_setup_sum]
                }
            ]
        )
    } else {
        reset([er_call_fax]);
    }

});
$('.call_fax select[name="store_faxcall_perpc"]').on("change", function () {
    call_fax_ea = $(this).val();
    call_fax_sum = (call_fax_price * call_fax_ea);
    if (call_fax_count == 1) {
        call_fax_setup = 27500;
        call_fax_setup_sum = call_fax_setup * call_fax_ea;
        fill(
            [
                {
                    "selector": er_call_fax,
                    "option": [call_fax, call_fax_ea, call_fax_price, call_fax_sum, call_fax_setup_sum]
                }
            ]
        )
    } else {
        reset([er_call_fax]);
    };
})
$('.call_fax select').on("change", function(){
    set_sums_store();
});

//[wire_call_extra]시작
//wire_call_extra 셋팅
$('.extra_services_box input').on("change", function(){
    if(call_wire_ea == 0){
        $('.extra_services_box input').eq(0).prop("checked", false);
        $('.extra_services_box input').eq(1).prop("checked", false);
        $('.extra_services_box input').eq(2).prop("checked", false);
        alert(" 먼저 유선 전화 회선수를 선택해 주세요 ");
    } else {
        if ($(this).is(":checked")){
            extra_val = $(this).val();
            extra_price = extra_price_d[extra_val];
            extra_sum = (extra_price * call_wire_ea);
            extra_price_price[extra_val] = extra_sum;
            extra_setup = (0 * call_wire_ea);
            fill(
                [
                    {
                        "selector": extra_price_sel[extra_val],
                        "option": [extra_val, call_wire_ea, extra_price, extra_sum, extra_setup]
                    }
                ]
            )
        } else {
            extra_price_price[extra_val] = 0;
            reset([extra_price_sel[extra_val]]);
        }
    }
});
$(".extra_services_box input").on("change", function () {
    set_sums_store();
});

//[pos]시작
//pos 시작
$('.need_pos_box select[name="pos"]').on("change", function(){
    pos = $(this).val();
    if (pos == 0) {
        [pos_price, pos_setup, pos_count, pos_sum, pos_setup_sum] = Array(5).fill(0);
    } else {

        pos_price = pos_d[pos];
        pos_count = 1;
        pos_ea = 1;
        pos_sum = (pos_price * pos_ea);
        pos_setup_sum = (pos_setup * pos_ea);
    }

    if (!(pos == 0)) {
        fill(
            [
                {
                    "selector": er_pos,
                    "option": [pos, pos_ea, pos_price, pos_sum, pos_setup_sum]
                }
            ]
        )
    } else {
        reset([er_pos]);
    }
})
$(".need_pos_box").on("change", function () {
    set_sums_store();
});



//[cctv]시작
//cctv 셋팅
$('.cctv_box select[name="cctv"]').on("change", function () {
    cctv = $(this).val();
    if (cctv == 0) {
        [cctv_price, cctv_price_setup, cctv_count, cctv_sum] = Array(4).fill(0);
    } else {
        cctv_price = cctv_d[cctv];
        cctv_setup_price = (cctv_setup * cctv_ea);
        cctv_count = 1;
        cctv_sum = (cctv_price * cctv_ea);
    }
    if (!(cctv == 0)) {
        fill(
            [
                {
                    "selector": er_cctv,
                    "option": [cctv, cctv_ea, cctv_price, cctv_sum, cctv_setup_price]
                }
            ]
        )
    } else {
        reset([er_cctv]);
    }
});
$('.cctv_box select[name="cctv_ea"]').on("change", function () {
    
    cctv_ea = $(this).val();
    cctv_price = cctv_ea_d[cctv_ea];
    cctv_sum = (cctv_price * cctv_ea);
    cctv_setup_price = cctv_setup_price * cctv_ea;
    if (cctv_count == 1) {
        fill(
            [
                {
                    "selector": er_cctv,
                    "option": [cctv, cctv_ea, cctv_price, cctv_sum, cctv_setup_price]
                }
            ]
        )
    } else {
        reset([er_cctv]);
    }
});
$(".cctv_box").on("change", function () {
    set_sums_store();
});