$('#estimate').on("change", function(){
    $('#estimate_result').css("display","block");
    $('#er_floatbanner').css("display","block");
	$('.doz_row').eq(5).css("display","block");
    getrightnow();
});

//사업자 선택
$('.business_name input[name="business_name"]').on("change", function () {
    business_name = $(this).val();

})

// TV제공 총 룸수 시작
$('.tv_supply_box input[name="tv_supply"]').on("change", function () {
    tv_supply = parseInt($(this).val());
    if (isNaN(tv_supply)) {
        tv_supply = 0;
    }
    if (tv_supply == 0) {
        [internet_ea, tv_ea, tv_more_ea] = Array(3).fill(0);
    } else {
        if (!(tv_supply % 8 == 0)) {
            internet_ea = (parseInt(tv_supply / 8) + 1);
            tv_ea = (parseInt(tv_supply / 8) + 1);
            tv_more_ea = ((tv_supply - tv_ea));
        } else {
            internet_ea = (parseInt(tv_supply / 8));
            tv_ea = (parseInt(tv_supply / 8));
            tv_more_ea = ((tv_supply % 7) + (tv_ea * 6));
        }
        //internet
        internet = "500M";
        internet_price = 25000;
        internet_sum = internet_price * internet_ea;
        internet_setup = 27500;
        internet_more_setup = 11000;
        internet_setup_sum = (internet_setup + (internet_more_setup * (internet_ea - 1)));
        //tv
        tv = "OTV_멀티룸팩"
        tv_price = 6000;
        tv_sum = (tv_ea * tv_price);
        tv_setup = 27500;
        tv_setup_sum = (tv_setup * tv_ea);
        //tv 셋탑
        tv_settop = tv;
        tv_settop_ea = tv_ea;
        tv_settop_price = 2000;
        tv_settop_sum = (tv_settop_price * tv_ea);
        tv_settop_setup = 0;
        tv_settop_setup_sum = (tv_ea * tv_settop_setup);
        //추가 tv
        tv_more = tv;
        if (19 < tv_supply < 501) {
            tv_more_price = 4000 * 0.9;
        } else {
            tv_more_price = 4000;
        };
        tv_more_sum = (tv_more_ea * tv_more_price);
        tv_more_setup = 11000;
        tv_more_setup_sum = (tv_more_setup * tv_more_ea);
        //추가 tv 셋탑
        tv_more_settop = tv;
        tv_more_settop_ea = tv_more_ea;
        tv_more_settop_price = 2000;
        tv_more_settop_sum = (tv_more_settop_price * tv_more_ea);
        tv_more_settop_setup = 0;
        tv_more_settop_setup_sum = (tv_more_ea * tv_more_settop_setup);

    } if (!(tv_supply == 0)) {
        fill(
            [
                {
                    "selector": er_internet,
                    "option": [internet, internet_ea, internet_price, internet_sum, internet_setup_sum]
                },
                {
                    "selector": er_tv,
                    "option": [tv, tv_ea, tv_price, tv_sum, tv_setup]
                },
                {
                    "selector": er_tv_more,
                    "option": [tv_more, tv_more_ea, tv_more_price, tv_more_sum, tv_more_setup_sum]
                },
                {
                    "selector": er_tv_settop,
                    "option": [tv_settop, tv_settop_ea, tv_settop_price, tv_settop_sum, tv_settop_setup]
                },
                {
                    "selector": er_tv_more_settop,
                    "option": [tv_more_settop, tv_more_settop_ea, tv_more_settop_price, tv_more_settop_sum, tv_more_settop_setup]
                }

            ]
        )
    } else {
        reset([er_internet, er_tv, er_tv_more]);
    }
});
$('.tv_supply_box').on("change", function(){
    set_sums_hotel();
})
//인터넷 종류
$('.internet_type_box select[name="internet_type"]').on("change", function () {
    internet = $(this).val();
    if (tv_supply == undefined) {
        for (let i = 0; i < internet_type_ea.length; i++) {
            unselected_internet_type([tv_plan_otv_ea[i]]);
        }
        alert(" 먼저 TV 제공 총룸수 부터 입력해주세요. ");
    } else if (tv_supply == 0) {
        for (let i = 0; i < internet_type_ea.length; i++) {
            unselected_internet_type([tv_plan_otv_ea[i]]);
        } alert(" 먼저 TV 제공 총룸수 부터 입력해주세요. ");
    }
    if (internet == 0) {
        internet = "500M";
        internet_price = 25000;
        internet_sum = internet_price * internet_ea;
        internet_setup = 27500;
        internet_setup_sum = (internet_setup + (internet_more_setup * (internet_ea - 1)));
    } else {
        internet_price = internet_d[internet];
        internet_sum = (internet_price * internet_ea);
        internet_setup_sum = (internet_setup + (internet_more_setup * (internet_ea - 1)));
    }
    if (internet == 0) {
        fill(
            [
                {
                    "selector": er_internet,
                    "option": [internet, internet_ea, internet_price, internet_sum, internet_setup_sum]
                }
            ]

        )
    } else if (tv_supply == undefined) {
        reset([er_internet]);
    } else {
        fill(
            [
                {
                    "selector": er_internet,
                    "option": [internet, internet_ea, internet_price, internet_sum, internet_setup_sum]
                }
            ]

        )
    }

})
$('.internet_type_box').on("change", function(){
    set_sums_hotel();
})
//TV종류
$('.tv_type_box input[name="tv_type"]').on("change", function () {
    tv_type = $(this).val();
    if (tv_supply == undefined) {
        $('.tv_type_box input').eq(0).prop("checked", false);
        $('.tv_type_box input').eq(1).prop("checked", false);
        alert(" 먼저 TV 제공 총룸수 부터 입력해주세요. ");
    } else if (tv_supply == 0) {
        $('.tv_type_box input').eq(0).prop("checked", false);
        $('.tv_type_box input').eq(1).prop("checked", false);
        alert(" 먼저 TV 제공 총룸수 부터 입력해주세요. ");
    }
    if (!(tv_type == 0)) {
        tv = "OTS10"
        tv_price = tv_d1[tv];
        tv_sum = (tv_ea * tv_price);
        tv_setup = 27500;
        tv_setup_sum = (tv_setup * tv_ea);
        //tv settop
        tv_settop = tv;
        tv_settop_ea = tv_ea;
        if (tv == "OTV_멀티룸팩") {
            tv_settop_price = 2000;
        } else if (tv == "선택형") {
            tv_settop_price = 2000;
        } else {
            tv_settop_price = 2000;
        }
        tv_settop_sum = (tv_settop_price * tv_ea);
        tv_settop_setup = 0;
        tv_settop_setup_sum = (tv_ea * tv_settop_setup);
        //추가 tv
        tv_more = tv;
        //10% 할인 회선이 20~500 사이일때
        if (19 < tv_supply < 501) {
            tv_more_price = (tv_more_d1[tv] * 0.9)
        } else {
            tv_more_price = tv_more_d1[tv];
        };

        tv_more_sum = (tv_more_ea * tv_more_price);
        tv_more_setup = 11000;
        tv_more_setup_sum = (tv_more_setup * tv_more_ea);
        //추가 tv 셋탑
        tv_more_settop = tv;
        tv_more_settop_ea = tv_more_ea;
        if (tv == "OTV_멀티룸팩") {
            tv_more_settop_price = 2000;
        } else if (tv == "선택형") {
            tv_more_settop_price = 2000;
        } else {
            tv_more_settop_price = 2000;
        }
        tv_more_settop_sum = (tv_more_settop_price * tv_more_ea);
        tv_more_settop_setup = 0;
        tv_more_settop_setup_sum = (tv_more_ea * tv_more_settop_setup);
    } else {
        tv = "OTV_멀티룸팩"
        tv_price = 6000;
        tv_sum = (tv_ea * tv_price);
        tv_setup = 27500;
        tv_setup_sum = (tv_setup * tv_ea);
        //추가 tv
        tv_more = tv;
        tv_plan_otv = "OTV_멀티룸팩";
        if (19 < tv_supply < 501) {
            tv_more_price = (tv_more_d[tv_plan_otv] * 0.9)
        } else {
            tv_more_price = tv_more_d[tv_type];
        };
        tv_more_sum = (tv_more_ea * tv_more_price);
        tv_more_setup = 11000;
        tv_more_setup_sum = (tv_more_setup * tv_more_ea);
        //tv settop
        tv_settop = tv;
        tv_more_settop = tv;
    }
    if (!(tv_type == 0)) {
        fill(
            [
                {
                    "selector": er_tv,
                    "option": [tv, tv_ea, tv_price, tv_sum, tv_setup]
                },
                {
                    "selector": er_tv_more,
                    "option": [tv_more, tv_more_ea, tv_more_price, tv_more_sum, tv_more_setup]
                },
                {
                    "selector": er_tv_settop,
                    "option": [tv_settop, tv_settop_ea, tv_settop_price, tv_settop_sum, tv_settop_setup]
                },
                {
                    "selector": er_tv_more_settop,
                    "option": [tv_more_settop, tv_more_settop_ea, tv_more_settop_price, tv_more_settop_sum, tv_more_settop_setup]
                }

            ]
        )
    } else {
        fill(
            [
                {
                    "selector": er_tv,
                    "option": [tv, tv_ea, tv_price, tv_sum, tv_setup]
                },
                {
                    "selector": er_tv_more,
                    "option": [tv_more, tv_more_ea, tv_more_price, tv_more_sum, tv_more_setup]
                },
                {
                    "selector": er_tv_settop,
                    "option": [tv_settop, tv_settop_ea, tv_settop_price, tv_settop_sum, tv_settop_setup]
                },
                {
                    "selector": er_tv_more_settop,
                    "option": [tv_more_settop, tv_more_settop_ea, tv_more_settop_price, tv_more_settop_sum, tv_more_settop_setup]
                }

            ]
        )
    }
    for (let i = 0; i < tv_plan_otv_ea.length; i++) {
        unselected_tv_plan([tv_plan_otv_ea[i]]);
    }
    for (let i = 0; i < tv_plan_ots_ea.length; i++) {
        unselected_tv_plan1([tv_plan_ots_ea[i]]);
    }

})
$('.tv_type_box').on("change", function(){
    set_sums_hotel();
})

//TV 요금제 선택
$('.tv_plan_box select[name="tv_plan_otv"]').on("change", function () {
    tv_plan_otv = $(this).val();
    // if(tv_supply == undefined){
    //     for(let i = 0; i < tv_plan_otv_ea.length; i++){
    //         unselected_tv_plan([tv_plan_otv_ea[i]]);
    //     }
    //     tv_plan_otv = undefined;
    //     alert(" 먼저 TV 제공 총룸수 부터 입력해주세요. ");
    // } else if (tv_supply == 0){
    //     for(let i = 0; i < tv_plan_otv_ea.length; i++){
    //         unselected_tv_plan([tv_plan_otv_ea[i]]);
    //     }
    //     $('.tv_plan_box select').eq(1).prop("selected", false);
    //     alert(" 먼저 TV 제공 총룸수 부터 입력해주세요. ");
    // }
    if (($('.tv_type_box input').eq(0).is(':checked')) == false) {
        for (let i = 0; i < tv_plan_otv_ea.length; i++) {
            unselected_tv_plan([tv_plan_otv_ea[i]]);
        }
    }
    if ($('.tv_type_box input').eq(0).is(':checked') == true) {
        if (tv_plan_otv == 0) {
            tv = "OTV_멀티룸팩"
            tv_price = 6000;
            tv_sum = (tv_ea * tv_price);
            tv_setup = 27500;
            tv_setup_sum = (tv_setup * tv_ea);
            //tv settop
            tv_settop = tv;
            tv_settop_ea = tv_ea;
            if (tv == "OTV_멀티룸팩") {
                tv_settop_price = 2000;
            } else if (tv == "선택형") {
                tv_settop_price = 2000;
            } else {
                tv_settop_price = 2000;
            }
            tv_settop_sum = (tv_settop_price * tv_ea);
            tv_settop_setup = 0;
            tv_settop_setup_sum = (tv_ea * tv_settop_setup);
            //추가 tv
            tv_more = tv;
            tv_more_price = 4000;
            tv_more_sum = (tv_more_ea * tv_more_price);
            tv_more_setup = 11000;
            tv_more_setup_sum = (tv_more_setup * tv_more_ea);
            //추가 tv 셋탑
            tv_more_settop = tv;
            tv_more_settop_ea = tv_more_ea;
            if (tv == "OTV_멀티룸팩") {
                tv_more_settop_price = 2000;
            } else if (tv == "선택형") {
                tv_more_settop_price = 2000;
            } else {
                tv_more_settop_price = 2000;
            }
            tv_more_settop_sum = (tv_more_settop_price * tv_more_ea);
            tv_more_settop_setup = 0;
            tv_more_settop_setup_sum = (tv_more_ea * tv_more_settop_setup)
        }
        else {
            tv = tv_plan_otv;
            tv_price = tv_d[tv_plan_otv];
            tv_sum = (tv_ea * tv_price);
            tv_setup = 27500;
            tv_setup_sum = (tv_setup * tv_ea);
            //추가 tv
            tv_more = tv;
            if (19 < tv_supply < 501) {
                tv_more_price = tv_more_d[tv_plan_otv] * 0.9;
            } else {
                tv_more_price = tv_more_d[tv_plan_otv];
            };
            tv_more_sum = (tv_more_ea * tv_more_price);
            tv_more_setup = 11000;
            tv_more_setup_sum = (tv_more_setup * tv_more_ea);                   
        }
        if (tv_plan_otv == 0) {
            fill(
                [
                    {
                        "selector": er_tv,
                        "option": [tv, tv_ea, tv_price, tv_sum, tv_setup]
                    },
                    {
                        "selector": er_tv_more,
                        "option": [tv_more, tv_more_ea, tv_more_price, tv_more_sum, tv_more_setup]
                    },
                    {
                        "selector": er_tv_settop,
                        "option": [tv_settop, tv_settop_ea, tv_settop_price, tv_settop_sum, tv_settop_setup]
                    },
                    {
                        "selector": er_tv_more_settop,
                        "option": [tv_more_settop, tv_more_settop_ea, tv_more_settop_price, tv_more_settop_sum, tv_more_settop_setup]
                    }

                ]
            )
        } else if (tv_plan_otv == undefined) {
            reset([er_tv, er_tv_more]);
        } else {
            fill(
                [
                    {
                        "selector": er_tv,
                        "option": [tv, tv_ea, tv_price, tv_sum, tv_setup]
                    },
                    {
                        "selector": er_tv_more,
                        "option": [tv_more, tv_more_ea, tv_more_price, tv_more_sum, tv_more_setup]
                    },
                    {
                        "selector": er_tv_settop,
                        "option": [tv_settop, tv_settop_ea, tv_settop_price, tv_settop_sum, tv_settop_setup]
                    },
                    {
                        "selector": er_tv_more_settop,
                        "option": [tv_more_settop, tv_more_settop_ea, tv_more_settop_price, tv_more_settop_sum, tv_more_settop_setup]
                    }

                ]
            )
        }
    } else {
        alert("OTV를 선택 후 종류 선택을 해주세요.")
    }
});
$('.tv_plan_box select[name="tv_plan_ots"]').on("change", function () {
    tv_plan_ots = $(this).val();

    // if(tv_supply == undefined){
    //     for(let i = 0; i < tv_plan_ots_ea.length; i++){
    //         unselected_tv_plan1([tv_plan_ots_ea[i]]);
    //     }
    //     tv_plan_ots = undefined;
    //     alert(" 먼저 TV 제공 총룸수 부터 입력해주세요. ");
    // } else if (tv_supply == 0){
    //     for(let i = 0; i < tv_plan_ots_ea.length; i++){
    //         unselected_tv_plan1([tv_plan_ots_ea[i]]);
    //     }
    //     $('.tv_plan_box select').eq(1).prop("selected", false);
    //     alert(" 먼저 TV 제공 총룸수 부터 입력해주세요. ");
    // }
    if (($('.tv_type_box input').eq(1).is(':checked')) == false) {
        for (let i = 0; i < tv_plan_ots_ea.length; i++) {
            unselected_tv_plan1([tv_plan_ots_ea[i]]);
        }
    }
    if ($('.tv_type_box input').eq(1).is(':checked') == true) {
        if (tv_plan_ots == 0) {
            tv = "OTS10"
            tv_price = 10000;
            tv_sum = (tv_ea * tv_price);
            tv_setup = 27500;
            tv_setup_sum = (tv_setup * tv_ea);
            //tv settop
            tv_settop = tv;
            tv_settop_ea = tv_ea;
            if (tv == "OTV_멀티룸팩") {
                tv_settop_price = 2000;
            } else if (tv == "선택형") {
                tv_settop_price = 2000;
            } else {
                tv_settop = tv_plan_ots;
                tv_settop_price = 2000;
            }
            tv_settop_sum = (tv_settop_price * tv_ea);
            tv_settop_setup = 0;
            tv_settop_setup_sum = (tv_ea * tv_settop_setup);
            //추가 tv
            tv_more = tv;
            tv_more_price = 7000;
            tv_more_sum = (tv_more_ea * tv_more_price);
            tv_more_setup = 11000;
            tv_more_setup_sum = (tv_more_setup * tv_more_ea);
            //추가 tv 셋탑
            tv_more_settop = tv;
            tv_more_settop_ea = tv_more_ea;
            if (tv == "OTV_멀티룸팩") {
                tv_more_settop_price = 2000;
            } else if (tv == "선택형") {
                tv_more_settop_price = 2000;
            } else {
                tv_more_settop_price = 2000;
            }
            tv_more_settop_sum = (tv_more_settop_price * tv_more_ea);
            tv_more_settop_setup = 0;
            tv_more_settop_setup_sum = (tv_more_ea * tv_more_settop_setup);

        }
        else {
            tv = tv_plan_ots;
            tv_price = tv_d1[tv_plan_ots];
            tv_sum = (tv_ea * tv_price);
            tv_setup = 27500;
            tv_setup_sum = (tv_setup * tv_ea);
            //tv settop
            tv_settop = tv;
            tv_settop_ea = tv_ea;
            if (tv == "OTV_멀티룸팩") {
                tv_settop_price = 2000;
            } else if (tv == "선택형") {
                tv_settop_price = 2000;
            } else {
                tv_settop = tv_plan_ots;
                tv_settop_price = 2000;
            }
            tv_settop_sum = (tv_settop_price * tv_ea);
            tv_settop_setup = 0;
            tv_settop_setup_sum = (tv_ea * tv_settop_setup);
            //추가 tv
            tv_more = tv;
            if (19 < tv_supply < 501) {
                tv_more_price = tv_more_d1[tv_plan_ots] * 0.9;
            } else {
                tv_more_price = tv_more_d1[tv_plan_ots];
            };
            tv_more_sum = (tv_more_ea * tv_more_price);
            tv_more_setup = 11000;
            tv_more_setup_sum = (tv_more_setup * tv_more_ea);
            //추가 tv 셋탑
            tv_more_settop = tv;
            tv_more_settop_ea = tv_more_ea;
            if (tv == "OTV_멀티룸팩") {
                tv_more_settop_price = 2000;
            } else if (tv == "선택형") {
                tv_more_settop_price = 2000;
            } else {
                tv_more_settop_price = 2000;
            }
            tv_more_settop_sum = (tv_more_settop_price * tv_more_ea);
            tv_more_settop_setup = 0;
            tv_more_settop_setup_sum = (tv_more_ea * tv_more_settop_setup);
        }
        if (tv_plan_ots == 0) {
            fill(
                [
                    {
                        "selector": er_tv,
                        "option": [tv, tv_ea, tv_price, tv_sum, tv_setup]
                    },
                    {
                        "selector": er_tv_more,
                        "option": [tv_more, tv_more_ea, tv_more_price, tv_more_sum, tv_more_setup_sum]
                    },
                    {
                        "selector": er_tv_settop,
                        "option": [tv_settop, tv_settop_ea, tv_settop_price, tv_settop_sum, tv_settop_setup]
                    },
                    {
                        "selector": er_tv_more_settop,
                        "option": [tv_more_settop, tv_more_settop_ea, tv_more_settop_price, tv_more_settop_sum, tv_more_settop_setup]
                    }

                ]
            )
        } else if (tv_plan_ots == undefined) {
            reset([er_tv, er_tv_more]);
        } else {
            fill(
                [
                    {
                        "selector": er_tv,
                        "option": [tv, tv_ea, tv_price, tv_sum, tv_setup]
                    },
                    {
                        "selector": er_tv_more,
                        "option": [tv_more, tv_more_ea, tv_more_price, tv_more_sum, tv_more_setup]
                    },
                    {
                        "selector": er_tv_settop,
                        "option": [tv_settop, tv_settop_ea, tv_settop_price, tv_settop_sum, tv_settop_setup]
                    },
                    {
                        "selector": er_tv_more_settop,
                        "option": [tv_more_settop, tv_more_settop_ea, tv_more_settop_price, tv_more_settop_sum, tv_more_settop_setup]
                    }

                ]
            )
        }
    } else {
        alert("OTS를 선택 후 종류 선택을 해주세요.")
    }
});
$('.tv_plan_box').on("change", function(){
    set_sums_hotel();
})

//인터넷 패밀리
$('.internet_family select[name="internet_family"]').on("change", function () {
    internet_family = $(this).val();
    if (business_name == undefined) {
        for (let i = 0; i < family_ea.length; i++) {
            unselected_family([family_ea[i]]);
        }
        alert("사업자를 먼저 선택해 주세요.")
    }
    if (business_name == "법인사업자") {
        alert("법인 사업자는 인터넷 패밀리 가입이 불가능합니다.");
        for (let i = 0; i < family_ea.length; i++) {
            unselected_family([family_ea[i]]);
        }
    }
    if (internet_family == 0) {
        [internet_family_ea, internet_family_price, internet_family_sum, internet_family_setup] = Array(4).fill(0);
    } else {
        internet_family_n = internet_family_d[internet_family];
        internet_family_sum = parseInt((internet_family * internet_family_price));
        internet_family_ea = internet_family;
        internet_family_setup = 0;
    }
    if (!(internet_family == 0)) {
        if (!(business_name == undefined)) {
            if (!(business_name == "법인사업자")) {
                fill(
                    [
                        {
                            "selector": internet_familys,
                            "option": [internet_family_n, internet_family_ea, internet_family_price, internet_family_sum, internet_family_setup]
                        }
                    ]
                )
            }
        };
    } else {
        reset([internet_familys])
    }
});
$('.internet_family').on("change", function(){
    set_sums_hotel();
})

//wifi 
$('.wifi_box input[name="wifi"]').on("change", function () {
    wifi = $(this).val();

    if (wifi == 0) {
        [wifi_price, wifi_setup, wifi_sum, wifi_ea] = Array(4).fill(0);
    } else {
        wifi_ea = internet_ea;
        wifi_price = 1100;
        wifi_sum = (wifi_ea * wifi_price);
        wifi_setup = 0;
        wifi_setup_sum = (wifi_setup * wifi_ea);
    }
    if (tv_supply > 1) {
        if (!(wifi == 0)) {
            fill(
                [
                    {
                        "selector": er_wifi,
                        "option": [wifi, wifi_ea, wifi_price, wifi_sum, wifi_setup_sum]
                    }
                ]
            )
        } else {
            reset([er_wifi]);
        }
    }
})
$('.wifi_box').on("change", function(){
    set_sums_hotel();
})
$('#frm_office').submit(function() {
    return false;
  });
