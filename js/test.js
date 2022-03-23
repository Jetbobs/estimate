    //[TV] 시작
    //기본TV 셋팅
    $('.estimate_contents_need_tv select[name="tv"]').on("change", function () {
        tv = $(this).val();
        if (tv == 0) {
            [tv_price,tv_price_setup,tv_price_settop,tts,tv_more,tv_more_setup,tv_more_settop] = Array(7).fill(0)
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
                        "selector":er_need_tv,
                        "option":[tv,1,tv_price,(tv_price * 1),tv_price_setup]
                    },
                    {
                        "selector":tv_settop_s,
                        "option":[tv,1,tv_settop,(tv_settop * 1),tv_settop_setup]
                    }
                ]
            )
        } else {
            reset([er_need_tv,tv_settop_s,er_need_tv_plus,tv_settop_more]);
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
                            "selector":er_need_tv_plus,
                            "option":[tv,tv_more_ea,tv_more_ch,tv_more,tv_more_setup]
                        },
                        {
                            "selector":tv_settop_more,
                            "option":[tv,tv_more_ea,tv_settop,tv_more_settop,tv_more_settop_setup]
                        }
                    ]
                )
            }
        }
        if (tv_more_ea == 0) {
            reset([er_need_tv_plus,tv_settop_more])
        }
    });
    //TV전체 셋팅
    $(".estimate_contents_need_tv").on("change", function () {
        set_sums();
    })
    //[TV] 끝