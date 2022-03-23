    //TV 선언
    const need_tv_d = { "BIZOTV 슬림": 11880, "BIZOTV 에센스_273": 18216, "BIZOTV 라이트_248": 14256, "BIZOTV 베이직_243": 13266 };
    const need_tv_d_more = { "BIZOTV 슬림": 6600, "BIZOTV 에센스_273": 10120, "BIZOTV 라이트_248": 7920, "BIZOTV 베이직_243": 7370 };
    const tv_setup_price = 15400;
    const tv_setup_more_price = 11000;
    const tv_settop = 2200;
    //가격
    let [internet, fixedip, tv_price, tv_more, internet_call, wire_call, fax, extra1, extra2, extra3, extra4, extra5, extra6, extra7, extra8, tv_price_settop, tv_more_settop] = Array(17).fill(0);
    let [internet_setup, fixedip_setup, tv_price_setup, tv_more_setup, internet_call_setup, wire_call_setup, fax_setup, extra1_setup, extra2_setup, extra3_setup, extra4_setup, extra5_setup, extra6_setup, extra7_setup, extra8_setup, tv_settop_setup, tv_more_settop_setup] = Array(17).fill(0);
    //문자
    let tv;
    let tv_more_ch;
    let tts = 0;
    //정수
    let tv_more_ea;
    //셀렉터
    let er_need_tv = $(".er_need_tv");
    let er_need_tv_plus = $(".er_need_tv_plus");
    let tv_settop_s = $(".tv_settop");
    let tv_settop_more = $(".tv_settop_more");

    //인터넷 스피드 선언