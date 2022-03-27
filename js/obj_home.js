    //인터넷 스피드 선언
    const internet_speed_d = { "100M+": 23100,"500M+": 34100, "1G+": 38500, "100M": 22000, "500M": 33000, "1G": 38500};
    const internet_speed_d1 = { "100M+": 17600,"500M+": 23100, "1G+": 27500, "100M": 16500, "500M": 22000, "1G": 27500};
    const internet_speed_setup_price = 27500; 
    //가격
    let [internet_speed_price,internet_speed_price_setup] = Array(2).fill(0);
    //문자
    let internet_speed = 0;
    let [internet_speed_count,internet_speed_sum] = Array(2).fill(0);
    //정수
    let internet_speed_ea = 0;
    //셀렉터
    let er_internet_speed = $('.er_internet_speed')
    let internet_speed_family = $('.internet_speed_box input[name="internet_speed_family"]');
    internet_speed = $('.internet_speed_box select[name="internet_speed"]');

    //TV 선언
    const need_tv_d = { "OTV(베이직_235ch)_기본상품": 12100, "OTV(라이트_240ch)_추천상품": 13200, "OTV(에센스_260ch)_고급상품": 16500, "OTV(키즈랜드_260ch)_키즈상품": 20900 ,"HD(넷플릭스_260ch)_넷플릭스":  25500, "UHD(넷플릭스_260ch)_넷플릭스UHD": 27500 };
    const need_tv_d_more = { "OTV(베이직_235ch)_기본상품": 7370, "OTV(라이트_240ch)_추천상품": 7370, "OTV(에센스_260ch)_고급상품": 7370, "OTV(키즈랜드_260ch)_키즈상품": 7370 ,"HD(넷플릭스_260ch)_넷플릭스":  7370, "UHD(넷플릭스_260ch)_넷플릭스UHD": 7370 };
    const tv_setup_price = 15400;
    const tv_setup_more_price = 15400;
    const tv_settop = 3300;
    const tv_settop_mores = 2200;

        //가격
        let [internet, fixedip, tv_price, tv_more, internet_call, wire_call, tv_price_settop, tv_more_settop,] = Array(16).fill(0);

        let [internet_setup, fixedip_setup, tv_price_setup, tv_more_setup, tv_settop_setup, tv_more_settop_setup] = Array(6).fill(0);
        //문자
        let tv_settop_gini = 0;
        let tv = 0;;
        let tv_sum = 0;
        let tv_more_ch;
        let tts = 0;
        let tv_settop_sum = 0;
        //정수
        let tv_more_ea;
        //셀렉터
        let er_need_tv = $(".er_need_tv");
        let er_tv_more = $(".er_tv_more");
        let tv_settop_s = $(".tv_settop");
        let tv_settop_more = $(".tv_settop_more");
        let ginisettops = $('.need_tv_box input[name="ginisettop"]');

         // 유선전화 선언
    const call_wire_d = { "우리끼리3000[망내유선_3,000분+SMS150]": 3850, "유선3000[망내외_유선_3,000분]" : 6050};

    // 유선전화 가격
    let [call_wire_price, call_wire_sum] = Array(2).fill(0);
    // 유선전화 문자
    let call_wire_count = 0;
    let call_wire;
    // 유선 정수
    let call_wire_setup = 0;
    let call_wire_ea = 0;
    let call_wire_setup_sum = 0;
    // 유선 셀렉터 
    let er_call_wire = $('.er_call_wire');

        // 인터넷전화 선언
    const call_internet_d = { "유무선3000[망내/외유선+망내무선3,000분]" : 8250};
    // 인터넷전화 가격
    let [call_internet_price, call_internet_sum] = Array(2).fill(0);
    // 인터넷전화 문자
    let call_internet_count = 0;
    let call_internet;
    // 인터넷 정수
    let call_internet_setup = 0;
    let call_internet_ea = 0;
    let call_internet_setup_sum = 0;
    // 인터넷 셀렉터 
    let er_call_internet = $('.er_call_internet');

        //유선전화 부가서비스
          // dc정수
          let extra_sum = 0;
          let dc_ea = 0;
          // dc 셀렉터 
          let display_callerid = $('.display_callerid');
          let call_holding = $('.call_holding');
          let destinationcall = $('.destinationcall');

    const extra_price_d = {"발신번호표시":1650,"통화중대기":1100,"착신통화전환":1100};
    const extra_price_sel = {"발신번호표시":$(".display_callerid"),"통화중대기":$(".call_holding"),"착신통화전환":$(".destinationcall")};
    
    
    let extra_price_price = {"발신번호표시":0,"통화중대기":0,"착신통화전환":0}

    
let extra_sums = extra_price_price["발신번호표시"]+extra_price_price["통화중대기"]+extra_price_price["착신통화전환"];

let extra_arr = [er_call_wire,display_callerid,call_holding,destinationcall];

let extra_arr1 = ["display_callerid","call_holding","destinationcall"];

    //CCTV 선언
    const cctv_d = { "GiGAeyes_i_slim": 13200}
    const cctv_ea_d = { "0": 13200, "1":13200,"2":12100,"3":11733,"4":11550,"5":11440,"6":11367,"7":11314,"8":11275}

    //가격
    let [cctv_price,cctv_setup, cctv_setup_price] = Array(3).fill(0);
    //문자
    let cctv;
    let [cctv_count,cctv_sum] = Array(2).fill(0);
    //정수
    let cctv_ea = 0;
    //셀렉터
    let er_cctv = $('.er_cctv');