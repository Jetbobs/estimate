//[internet_speed]시작
//internet_speed 셋팅
$('.estimate_contents_internet_speed select[name="internet_speed"]').on("change", function () {
    internet_speed = $(this).val();
    if (internet_speed == 0) {
        [internet_speed_price, internet_speed_price_setup, internet_speed_count, internet_speed_sum] = Array(4).fill(0);
        $('select[name="internet_speed_perpc"] option:eq(0)').prop("selected", true);
    } else {
        internet_speed_price = internet_speed_d[internet_speed];
        internet_speed_price_setup = internet_speed_setup_price * internet_speed_ea;
        internet_speed_count = 1;
        internet_speed_sum = (internet_speed_price * internet_speed_ea);
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
$('.estimate_contents_internet_speed select[name="internet_speed_perpc"]').on("change", function () {
    internet_speed_ea = $(this).val();
    internet_speed_sum = (internet_speed_price * internet_speed_ea);
    internet_speed_price_setup = internet_speed_setup_price * internet_speed_ea;
    if (internet_speed_count == 1) {
        fill(
            [
                {
                    "selector": er_internet_speed,
                    "option": [internet_speed, internet_speed_ea, internet_speed_price, (internet_speed_price * internet_speed_ea), internet_speed_price_setup]
                }
            ]
        )
    } else {
        reset([er_internet_speed]);
    }
});
$(".estimate_contents_internet_speed").on("change", function () {
    set_sums();
})
//[internet_speed]끝

//[fixed_ip]시작
//fixed_ip 셋팅
$('.fixed_ip_box input[name="office_ip"').on("change", function () {
    fixed_ip = $(this).val();
    if (fixed_ip == "N_office_ip") {
        [fixed_ip_price, fixed_ip_setup, fixed_ip_count, fixed_ip_sum] = Array(4).fill(0);
    } else {
        fixed_ip_price = 49500;
        fixed_ip_count = 1;
        fixed_ip_sum = (fixed_ip_price * fixed_ip_ea);
    }
    if (!(fixed_ip == "N_office_ip")) {
        fixed_ip = fixed_ip_d[fixed_ip];
        fill(
            [
                {
                    "selector": er_fixed_ip,
                    "option": [fixed_ip, fixed_ip_ea, fixed_ip_price, fixed_ip_sum, fixed_ip_setup]
                }
            ]
        )
    } else {
        reset([er_fixed_ip]);
    }
});
$('.perpc_hidden_fixed_ip select[name="fixed_ip"]').on("change", function () {
    fixed_ip_ea = $(this).val();
    fixed_ip_sum = (fixed_ip_price * fixed_ip_ea);
    if (fixed_ip_count == 1) {
        fill(
            [
                {
                    "selector": er_fixed_ip,
                    "option": [fixed_ip, fixed_ip_ea, fixed_ip_price, fixed_ip_sum, fixed_ip_setup]
                }
            ]
        )
    } else {
        reset([er_fixed_ip]);
    }
    if (fixed_ip == "N_office_ip") {
        reset([er_fixed_ip]);
    }

})
$(".estimate_contents_fixed_ip").on("change", function () {
    set_sums();
})
//[fixed_ip]끝


//[TV] 시작
//기본TV 셋팅
$('.estimate_contents_need_tv select[name="tv"]').on("change", function () {
    tv = $(this).val();
    if (tv == 0) {
        [tv_price, tv_price_setup, tv_price_settop, tts, tv_more, tv_more_setup, tv_more_settop] = Array(7).fill(0)
        $('.need_tvs')[0].checked = true;
    } else {
        tv_price = need_tv_d[tv];
        tv_price_setup = tv_setup_price;
        tv_price_settop = tv_settop;
        tts = 1;
    }
    if (!(tv == 0)) {
        fill(
            [
                {
                    "selector": er_need_tv,
                    "option": [tv, 1, tv_price, (tv_price * 1), tv_price_setup]
                },
                {
                    "selector": tv_settop_s,
                    "option": [tv, 1, tv_settop, (tv_settop * 1), tv_settop_setup]
                }
            ]
        )
    } else {
        reset([er_need_tv, tv_settop_s, er_need_tv_plus, tv_settop_more]);
    }
});
//추가TV 셋팅
$('.estimate_contents_need_tv input[name="need_tv"]').on("change", function () {
    tv_more_ea = $(this).val();
    if (tts == 1) {
        tv_more_ch = need_tv_d_more[tv];
        tv_more = tv_more_ch * tv_more_ea;
        tv_more_setup = tv_setup_more_price * tv_more_ea;
        tv_more_settop = tv_settop * tv_more_ea;
        tv_more_settop_setup = 0;
        if (tv_more_ea > 0) {
            fill(
                [
                    {
                        "selector": er_need_tv_plus,
                        "option": [tv, tv_more_ea, tv_more_ch, tv_more, tv_more_setup]
                    },
                    {
                        "selector": tv_settop_more,
                        "option": [tv, tv_more_ea, tv_settop, tv_more_settop, tv_more_settop_setup]
                    }
                ]
            )
        }
    }
    if (tv_more_ea == 0) {
        reset([er_need_tv_plus, tv_settop_more])
    }
});
//TV전체 셋팅
$(".estimate_contents_need_tv").on("change", function () {
    set_sums();
})
//[TV] 끝

// //[internet_call] 시작
$('.call_internet select[name="office_internetcall"]').on("change", function () {
    call_internet = $(this).val();
    if (call_internet == 0) {
        [call_internet_price, call_internet_setup, call_internet_count, call_internet_sum, eqipment_installment_price, eqipment_installment_sum] = Array(6).fill(0);
        $('select[name="office_internetcall_perpc"] option:eq(0)').prop("selected", true);
    } else {
        call_internet_price = call_internet_d[call_internet];
        call_internet_count = 1;
        call_internet_sum = (call_internet_price * call_internet_ea);
        eqipment_installment_price = 2200;
        eqipment_installment_sum = (eqipment_installment_price * call_internet_ea);
    }

    if (!(call_internet == 0)) {
        if(call_internet == "IP-4705H_Centrex"){
            display_block(call_internet1);
        } else if(call_internet == "IP-4705G_Centrex"){
            display_block(call_internet2);
        } else if(call_internet == "IP-700SC"){
            display_block(call_internet3);
        } else if(call_internet == "MWP-2500"){
            display_block(call_internet4);
        } else {
            for (i = 0; i < dis_non_ic.length; i++) {
                display_none([dis_non_ic[i]]);
            }
        }
        fill(
            [
                {
                    "selector": er_call_internet,
                    "option": [call_internet, call_internet_ea, call_internet_price, call_internet_sum, call_internet_setup]
                }, {
                    "selector": eqipment_installment,
                    "option": [call_internet, call_internet_ea, eqipment_installment_price, eqipment_installment_sum, call_internet_setup]
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
        for (i = 0; i < dis_non_ic.length; i++) {
            display_none([dis_non_ic[i]]);
        }
    }

});
$('.call_internet select[name="office_internetcall_perpc"]').on("change", function () {
    call_internet_ea = $(this).val();
    call_internet_sum = (call_internet_price * call_internet_ea);
    eqipment_installment_sum = (eqipment_installment_price * call_internet_ea);
    if (call_internet_count == 1) {
        fill(
            [
                {
                    "selector": er_call_internet,
                    "option": [call_internet, call_internet_ea, call_internet_price, call_internet_sum, call_internet_setup]
                },
                {
                    "selector": eqipment_installment,
                    "option": [call_internet, call_internet_ea, eqipment_installment_price, eqipment_installment_sum, call_internet_setup]
                }
            ]
        )
    } else {
        reset([er_call_internet]);
    };
    if (call_internet_ea == 0) {
        for (i = 0; i < extra_arr.length; i++) {
            reset([extra_arr[i]]);
        }
        for(i = 0; i < extra_arr1.length; i++){
            unchecked([extra_arr1[i]])
        };
    };
    
});
$(".call_internet").on("change", function () {
    set_sums();
})

// wire_call 시작
$('.call_wire select[name="office_wirecall"]').on("change", function () {
    call_wire = $(this).val();
    if (call_wire == 0) {
        [call_wire_price, call_wire_setup, call_wire_count, call_wire_sum] = Array(4).fill(0);
        $('select[name="office_wirecall_perpc"] option:eq(0)').prop("selected", true);
    } else {
        call_wire_price = call_wire_d[call_wire];
        call_wire_count = 1;
        call_wire_sum = (call_wire_price * call_wire_ea);
    }

    if (!(call_wire == 0)) {
        fill(
            [
                {
                    "selector": er_call_wire,
                    "option": [call_wire, call_wire_ea, call_wire_price, call_wire_sum, call_wire_setup]
                }
            ]
        )
    } else {
        reset([er_call_wire]);
    }

});
$('.call_wire select[name="office_wirecall_perpc"]').on("change", function () {
    call_wire_ea = $(this).val();
    call_wire_sum = (call_wire_price * call_wire_ea);
    if (call_wire_count == 1) {
        fill(
            [
                {
                    "selector": er_call_wire,
                    "option": [call_wire, call_wire_ea, call_wire_price, call_wire_sum, call_wire_setup]
                }
            ]
        )
    } else {
        reset([er_call_wire]);
    };
})
$(".call_wire").on("change", function () {
    set_sums();
})


//FAX 시작
$('.call_fax select[name="fax"]').on("change", function () {
    fax = $(this).val();
    if (fax == 0) {
        [fax_price, fax_setup, fax_count, fax_sum] = Array(4).fill(0);
        $('select[name="fax_perpc"] option:eq(0)').prop("selected", true);
    } else {
        fax_price = fax_d[fax];
        fax_count = 1;
        fax_sum = (fax_price * fax_ea);
        fax_setup = (fax_setup_price * fax_ea);
    }

    if (!(fax == 0)) {
        fill(
            [
                {
                    "selector": er_fax,
                    "option": [fax, fax_ea, fax_price, fax_sum, fax_setup]
                }
            ]
        )
    } else {
        reset([er_fax]);
    }

});
$('.call_fax select[name="fax_perpc"]').on("change", function () {
    fax_ea = $(this).val();
    fax_setup = (fax_setup_price * fax_ea);
    fax_sum = (fax_price * fax_ea);
    if (fax_count == 1) {
        fill(
            [
                {
                    "selector": er_fax,
                    "option": [fax, fax_ea, fax_price, fax_sum, fax_setup]
                }
            ]
        )
    } else {
        reset([er_fax]);
    };
})
$(".call_fax").on("change", function () {
    set_sums();
});

//부가서비스 시작

//발신번호표시 시작
$('.extra_services_box input').on("change", function () {
    if (call_internet_ea == 0) {
        $(".extra_services_box input").eq(0).prop("checked", false);
        $(".extra_services_box input").eq(1).prop("checked", false);
        $(".extra_services_box input").eq(2).prop("checked", false);
        $(".extra_services_box input").eq(3).prop("checked", false);
        $(".extra_services_box input").eq(4).prop("checked", false);
        $(".extra_services_box input").eq(5).prop("checked", false);
        $(".extra_services_box input").eq(6).prop("checked", false);
        $(".extra_services_box input").eq(7).prop("checked", false);
        alert(" 먼저 인터넷전화 회선수를 선택해 주세요 ")
    } else {
        if ($(this).is(":checked")) {
            extra_val = $(this).val();
            extra_price = extra_price_d[extra_val];
            extra_sum = (extra_price * call_internet_ea);
            extra_price_price[extra_val] = extra_sum;
            extra_setup = (0 * call_internet_ea);
            fill(
                [
                    {
                        "selector": extra_price_sel[extra_val],
                        "option": [extra_val, call_internet_ea, extra_price, extra_sum, extra_setup]
                    }
                ]
            )
        }
        else {
            extra_price_price[extra_val] = 0;
            reset([extra_price_sel[extra_val]]);
        }
    }

});
$(".extra_services_box input").on("change", function () {
    set_sums();
});

