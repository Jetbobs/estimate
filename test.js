$(function () {
    $('.estimate_contents .fixed_ip_box input[type="radio"]').on("change", function () {
        let vals_ip = $(this).val();
        let pic_ip = $('.estimate_contents .perpc_hidden_fixed_ip')

        if (vals_ip == "Y_office_ip") {
            pic_ip.css("display", "block");
        } else {
            pic_ip.css("display", "none");
        }
    })
});
$(function () {
    const internet_speed_price_d = { "500M+": 41800, "1G+": 46750, "100M": 30800, "500M": 44000, "1G": 49500, "2.5G": 55000, "5G": 77000, "10G": 110000 };

    let internet_speed, internet_speed_price, internet_speed_perpc, internet_speed_sum, internet_speed_setup, internet_product_n;
    let select_internet_speed = $('select[name="internet_speed"]');
    let select_internet_speed_perpc = $('select[name="internet_speed_perpc"]');

    $('.estimate_contents_internet_speed select').on("change", function () {
        internet_speed = select_internet_speed.val();
        internet_speed_price = internet_speed_price_d[internet_speed]
        internet_product_n = '오피스넷 ' + select_internet_speed.val();
        internet_speed_perpc = parseInt(select_internet_speed_perpc.val());
        internet_speed_sum = internet_speed_price * internet_speed_perpc;
        internet_speed_setup = 27500;
        $('tr.er_internet_speed .product_name').text(internet_product_n);
        $('tr.er_internet_speed .product_ea').text(internet_speed_perpc);
        $('tr.er_internet_speed .product_price').text(internet_speed_price.toLocaleString("ko-KR"));
        $('tr.er_internet_speed .product_sum font b').text(internet_speed_sum.toLocaleString("ko-KR"))
        $('tr.er_internet_speed .product_setup_price').text(internet_speed_setup.toLocaleString("ko-KR"))
    })
});
$(function (){
    const fixed_ip_d = {"N_office_ip":49500 , "Y_office_ip": 49500};
    let fixed_ips, fixed_ip_price, fixed_ip_n, fixed_ip_perpc, fixed_ip_sum, fixed_ip_setup, select_fixed_ip, select_fixed_ip_perpc;

    $('.estimate_contents_fixed_ip').on("change", function(){
        select_fixed_ip = $('input[name="office_ip"]:checked');
        select_fixed_ip_perpc = $('select[name="fixed_ip"]');
        fixed_ips = select_fixed_ip.val();
        fixed_ip_price = fixed_ip_d[fixed_ips]
        fixed_ip_n = '(고정)오피스넷';
        fixed_ip_perpc = parseInt(select_fixed_ip_perpc.val());
        fixed_ip_sum = fixed_ip_price * fixed_ip_perpc;
        fixed_ip_setup = 0;
        $('.er_fixed_ip .product_name').text(fixed_ip_n);
        $('.er_fixed_ip .product_ea').text(fixed_ip_perpc);
        $('.er_fixed_ip .product_price').text(fixed_ip_price.toLocaleString("ko-KR"));
        $('.er_fixed_ip .product_sum font b').text(fixed_ip_sum.toLocaleString("ko-KR"));
        $('.er_fixed_ip .product_setup_price').text(fixed_ip_setup.toLocaleString("ko-KR"));
    })
});
$(function (){
    const need_tv_d = {"BIZOTV 슬림":11880 , "BIZOTV 에센스_273": 18216, "BIZOTV 라이트_248": 14256, "BIZOTV 베이직_243": 13266};
    const need_tv_d_more = {"BIZOTV 슬림":6600, "BIZOTV 에센스_273": 10120, "BIZOTV 라이트_248": 7920, "BIZOTV 베이직_243": 7370};

    let need_tvs, need_tv_price, need_tv_n, need_tv_more, need_tv_sum, need_tv_setup, select_need_tv_more, select_need_tv, need_tv_ea,need_tv_settop_n,need_tv_settop_per,need_tv_settop_more_per,need_tv_settop_sum,need_tv_settop_setup;

    const need_tv_settop = 2200;
    const need_tv_settop_more = 2200;
    const need_tv_setting = 15400;
    $('.estimate_contents_need_tv').on("change", function(){
        select_need_tv = $("select[name='tv']");
        select_need_tv_more = $('input[name="need_tv"]:checked');
        need_tvs = select_need_tv.val();
        need_tvs_more = select_need_tv_more.val();
        need_tv_price = need_tv_d[need_tvs];
        need_tv_price_more = need_tv_d_more[need_tvs];
        need_tv_setup = need_tv_setting;
        need_tv_n =  need_tvs;
        need_tv_sum = need_tv_price;
        if(need_tvs == 0){
            need_tv_ea = 0;
        } else {
            need_tv_ea = 1;
        }
        if(need_tvs_more >= 0){
            need_tv_more_num = parseInt(need_tvs_more);
            need_tv_price_more = need_tv_d_more[need_tvs] * need_tv_more_num;

            need_tv_sum = need_tv_price + need_tv_price_more;

            need_tv_setup = need_tv_setting + (11000*need_tv_more_num);

            need_tv_ea = 1 + need_tv_more_num;
        };
        need_tv_settop_n = "일반 셋탑";
        need_tv_settop_per = 1;
        need_tv_settop_more_per = need_tv_more_num;
        need_tv_settop_sum = need_tv_settop * 1;
        need_tv_settop_more_sum = need_tv_settop_more * need_tv_more_num;
        need_tv_settop_setup = 0;
        $('.er_need_tv .product_name').text(need_tv_n);
        $('.er_need_tv .product_ea').text(need_tv_ea);
        $('.er_need_tv .product_price').text(need_tv_price.toLocaleString("ko-KR"));
        $('.er_need_tv .product_sum font b').text(need_tv_sum.toLocaleString("ko-KR"));
        $('.er_need_tv .product_setup_price').text(need_tv_setup.toLocaleString("ko-KR"));
        //TV셋탑 위치 시작
        $('.tv_settop .product_name').text(need_tv_settop_n);
        $('.tv_settop .product_ea').text(need_tv_settop_per);
        $('.tv_settop .product_price').text(need_tv_settop.toLocaleString("ko-KR"));
        $('.tv_settop .product_sum font b').text(need_tv_settop_sum.toLocaleString("ko-KR"));
        $('.tv_settop .product_setup_price').text(need_tv_settop_setup.toLocaleString("ko-KR"));
        //추가TV셋탑 시작
        $('.tv_settop_more .product_name').text(need_tv_settop_n);
        $('.tv_settop_more .product_ea').text(need_tv_settop_more_per);
        $('.tv_settop_more .product_price').text(need_tv_settop.toLocaleString("ko-KR"));
        $('.tv_settop_more .product_sum font b').text(need_tv_settop_more_sum.toLocaleString("ko-KR"));
        $('.tv_settop_more .product_setup_price').text(need_tv_settop_setup.toLocaleString("ko-KR"));
    })
});
$(function () {
    const internet_call_price_d = { "IP-4705H_Centrex": 2200, "IP-4705G_Centrex": 2200, "IP-700SC": 2200, "MWP-2500": 2200};

    let internet_call,inertnet_call_price,internet_call_n,internet_call_per,internet_call_sum,internet_call_setup;
    let select_internet_call = $('select[name="office_internetcall"]');
    let select_internet_call_per = $('select[name="office_internetcall_perpc"]');

    $('.call_internet select').on("change", function () {
        internet_call = select_internet_call.val();
        if(internet_call == 0){
            internet_call_price = "";
            internet_call_n = "";
            internet_call_pers = "";
            internet_call_sum = "";
            internet_call_setup = "";
            $('tr.er_internet_call .product_name').text(internet_call_n);
            $('tr.er_internet_call .product_ea').text(internet_call_per);
            $('tr.er_internet_call .product_price').text(internet_call_price.toLocaleString("ko-KR"));
            $('tr.er_internet_call .product_sum font b').text(internet_call_sum.toLocaleString("ko-KR"))
            $('tr.er_internet_call .product_setup_price').text(internet_call_setup.toLocaleString("ko-KR"))
        }
        internet_call_price = internet_call_price_d[internet_call];
        internet_call_n = internet_call;
        internet_call_pers = select_internet_call_per.val();
        internet_call_per = parseInt(select_internet_call_per.val());
        internet_call_sum = internet_call_price * internet_call_per;
        internet_call_setup = 0;
        $('tr.er_internet_call .product_name').text(internet_call_n);
        $('tr.er_internet_call .product_ea').text(internet_call_pers);
        $('tr.er_internet_call .product_price').text(internet_call_price.toLocaleString("ko-KR"));
        $('tr.er_internet_call .product_sum font b').text(internet_call_sum.toLocaleString("ko-KR"))
        $('tr.er_internet_call .product_setup_price').text(internet_call_setup.toLocaleString("ko-KR"))
    })
});
$(function () {
    const wire_call_price_d = { "홈무한3000": 6050, "소호무한3000": 8250, "팩스전용": 6050};

    let wire_call,wire_call_price,wire_call_n,wire_call_per,wire_call_sum,wire_call_setup;
    let select_wire_call = $('select[name="office_wirecall"]');
    let select_wire_call_per = $('select[name="office_wirecall_perpc"]');

    $('.wire_call select').on("change", function () {
        wire_call = select_wire_call.val();
        wire_call_price = wire_call_price_d[wire_call];
        wire_call_n = wire_call;
        wire_call_per = parseInt(select_wire_call_per.val());
        wire_call_sum = wire_call_price * wire_call_per;
        wire_call_setup = 0;
        $('tr.er_wire_call .product_name').text(wire_call_n);
        $('tr.er_wire_call .product_ea').text(wire_call_per);
        $('tr.er_wire_call .product_price').text(wire_call_price.toLocaleString("ko-KR"));
        $('tr.er_wire_call .product_sum font b').text(wire_call_sum.toLocaleString("ko-KR"))
        $('tr.er_wire_call .product_setup_price').text(wire_call_setup.toLocaleString("ko-KR"))
    })
});
$(function () {
    const fax_call_price_d = { "FAX": 6050};

    let fax_call,fax_call_price,fax_call_n,fax_call_per,fax_call_sum,fax_call_setup;
    let select_fax_call = $('select[name="fax"]');
    let select_fax_call_per = $('select[name="fax_perpc"]');

    $('.fax_call select').on("change", function () {
        fax_call = select_fax_call.val();
        fax_call_price = fax_call_price_d[fax_call];
        fax_call_n = fax_call;
        fax_call_per = parseInt(select_fax_call_per.val());
        fax_call_sum = fax_call_price * fax_call_per;
        fax_call_setup = 27500;
        $('tr.er_fax_call .product_name').text(fax_call_n);
        $('tr.er_fax_call .product_ea').text(fax_call_per);
        $('tr.er_fax_call .product_price').text(fax_call_price.toLocaleString("ko-KR"));
        $('tr.er_fax_call .product_sum font b').text(fax_call_sum.toLocaleString("ko-KR"))
        $('tr.er_fax_call .product_setup_price').text(fax_call_setup.toLocaleString("ko-KR"))
    })
});
$(function () {
    const display_callerid_price_d = { "발신번호표시": 1100};

    let display_callerid,display_callerid_price,display_callerid_n,display_callerid_per,display_callerid_sum,display_callerid_setup;
    let select_display_callerid = $('input[name="display_callerid"]');

    $('.estimate_contents_extra_services input[name="display_callerid"]').on("change", function () {
        display_callerid = select_display_callerid.val();
        display_callerid_price = display_callerid_price_d[display_callerid];
        display_callerid_n = display_callerid;
        display_callerid_sum = display_callerid_price;
        display_callerid_setup = 0;
        if(select_display_callerid.is(":checked")){
            display_callerid_per = 1;
        } else {
            display_callerid_per = "";
            display_callerid_n = "";
            display_callerid_price = "";
            display_callerid_sum = "";
            display_callerid_setup = ""
        }
        $('tr.display_callerid .product_name').text(display_callerid_n);
        $('tr.display_callerid .product_ea').text(display_callerid_per);
        $('tr.display_callerid .product_price').text(display_callerid_price.toLocaleString("ko-KR"));
        $('tr.display_callerid .product_sum font b').text(display_callerid_sum.toLocaleString("ko-KR"))
        $('tr.display_callerid .product_setup_price').text(display_callerid_setup.toLocaleString("ko-KR"))
    })
});
$(function () {
    const calling_music_price_d = { "통화연결음": 2420};

    let calling_music,calling_music_price,calling_music_n,calling_music_sum,calling_music_setup;
    let select_calling_music = $('input[name="calling_music"]');

    $('.estimate_contents_extra_services input[name="calling_music"]').on("change", function () {
        calling_music = select_calling_music.val();
        calling_music_price = calling_music_price_d[calling_music];
        calling_music_n = calling_music;
        calling_music_sum = calling_music_price;
        calling_music_setup = 0;
        if(select_calling_music.is(":checked")){
            calling_music_per = 1;
        } else {
            calling_music_per = "";
            calling_music_n = "";
            calling_music_price = "";
            calling_music_sum = "";
            calling_music_setup = ""
        }
        $('tr.calling_music .product_name').text(calling_music_n);
        $('tr.calling_music .product_ea').text(calling_music_per);
        $('tr.calling_music .product_price').text(calling_music_price.toLocaleString("ko-KR"));
        $('tr.calling_music .product_sum font b').text(calling_music_sum.toLocaleString("ko-KR"))
        $('tr.calling_music .product_setup_price').text(calling_music_setup.toLocaleString("ko-KR"))
    })
});
$(function () {
    const condition_destinationcall_price_d = { "조건별착신전화": 550};

    let condition_destinationcall,condition_destinationcall_price,condition_destinationcall_n,condition_destinationcall_sum,condition_destinationcall_setup,condition_destinationcall_per;
    let select_condition_destinationcall = $('input[name="condition_destinationcall"]');

    $('.estimate_contents_extra_services input[name="condition_destinationcall"]').on("change", function () {
        condition_destinationcall = select_condition_destinationcall.val();
        condition_destinationcall_price = condition_destinationcall_price_d[condition_destinationcall];
        condition_destinationcall_n = condition_destinationcall;
        condition_destinationcall_sum = condition_destinationcall_price;
        condition_destinationcall_setup = 0;
        if(select_condition_destinationcall.is(":checked")){
            condition_destinationcall_per = 1;
        } else {
            condition_destinationcall_per = "";
            condition_destinationcall_n = "";
            condition_destinationcall_price = "";
            condition_destinationcall_sum = "";
            condition_destinationcall_setup = ""
        }
        $('tr.condition_destinationcall .product_name').text(condition_destinationcall_n);
        $('tr.condition_destinationcall .product_ea').text(condition_destinationcall_per);
        $('tr.condition_destinationcall .product_price').text(condition_destinationcall_price.toLocaleString("ko-KR"));
        $('tr.condition_destinationcall .product_sum font b').text(condition_destinationcall_sum.toLocaleString("ko-KR"))
        $('tr.condition_destinationcall .product_setup_price').text(condition_destinationcall_setup.toLocaleString("ko-KR"))
    })
});
$(function () {
    const ars_price_d = { "ARS": 11000};

    let arss,ars_price,ars_n,ars_sum,ars_setup,ars_per;
    let select_ars = $('input[name="ars"]');

    $('.estimate_contents_extra_services input[name="ars"]').on("change", function () {
        arss = select_ars.val();
        ars_price = ars_price_d[arss];
        ars_n = arss;
        ars_sum = ars_price;
        ars_setup = 0;
        if(select_ars.is(":checked")){
            ars_per = 1;
        } else {
            ars_per = "";
            ars_n = "";
            ars_price = "";
            ars_sum = "";
            ars_setup = ""
        }
        $('tr.ars .product_name').text(ars_n);
        $('tr.ars .product_ea').text(ars_per);
        $('tr.ars .product_price').text(ars_price.toLocaleString("ko-KR"));
        $('tr.ars .product_sum font b').text(ars_sum.toLocaleString("ko-KR"))
        $('tr.ars .product_setup_price').text(ars_setup.toLocaleString("ko-KR"))
    })
});
$(function () {
    const onenumber_multiphone_price_d = { "원넘버멀티폰": 1100};

    let onenumber_multiphone,onenumber_multiphone_price,onenumber_multiphone_n,onenumber_multiphone_sum,onenumber_multiphone_setup,onenumber_multiphone_per;
    let select_onenumber_multiphone = $('input[name="onenumber_multiphone"]');

    $('.extra_services_box2 input[name="onenumber_multiphone"]').on("change", function () {
        onenumber_multiphone = select_onenumber_multiphone.val();
        onenumber_multiphone_price = onenumber_multiphone_price_d[onenumber_multiphone];
        onenumber_multiphone_n = onenumber_multiphone;
        onenumber_multiphone_sum = onenumber_multiphone_price;
        onenumber_multiphone_setup = 0;
        if(select_onenumber_multiphone.is(":checked")){
            onenumber_multiphone_per = 1;
        } else {
            onenumber_multiphone_per = "";
            onenumber_multiphone_n = "";
            onenumber_multiphone_price = "";
            onenumber_multiphone_sum = "";
            onenumber_multiphone_setup = ""
        }
        $('tr.onenumber_multiphone .product_name').text(onenumber_multiphone_n);
        $('tr.onenumber_multiphone .product_ea').text(onenumber_multiphone_per);
        $('tr.onenumber_multiphone .product_price').text(onenumber_multiphone_price.toLocaleString("ko-KR"));
        $('tr.onenumber_multiphone .product_sum font b').text(onenumber_multiphone_sum.toLocaleString("ko-KR"))
        $('tr.onenumber_multiphone .product_setup_price').text(onenumber_multiphone_setup.toLocaleString("ko-KR"))
    })
});
$(function () {
    const personalcall_security_price_d = { "개인통화보안": 1100};

    let personalcall_security,personalcall_security_price,personalcall_security_n,personalcall_security_sum,personalcall_security_setup,personalcall_security_per;
    let select_personalcall_security = $('input[name="personalcall_security"]');

    $('.extra_services_box2 input[name="personalcall_security"]').on("change", function () {
        personalcall_security = select_personalcall_security.val();
        personalcall_security_price = personalcall_security_price_d[personalcall_security];
        personalcall_security_n = personalcall_security;
        personalcall_security_sum = personalcall_security_price;
        personalcall_security_setup = 0;
        if(select_personalcall_security.is(":checked")){
            personalcall_security_per = 1;
        } else {
            personalcall_security_per = "";
            personalcall_security_n = "";
            personalcall_security_price = "";
            personalcall_security_sum = "";
            personalcall_security_setup = ""
        }
        $('tr.personalcall_security .product_name').text(personalcall_security_n);
        $('tr.personalcall_security .product_ea').text(personalcall_security_per);
        $('tr.personalcall_security .product_price').text(personalcall_security_price.toLocaleString("ko-KR"));
        $('tr.personalcall_security .product_sum font b').text(personalcall_security_sum.toLocaleString("ko-KR"))
        $('tr.personalcall_security .product_setup_price').text(personalcall_security_setup.toLocaleString("ko-KR"))
    })
});
$(function () {
    const office100_price_d = { "오피스100": 2750};

    let office100,office100_price,office100_n,office100_sum,office100_setup,office100_per;
    let select_office100 = $('input[name="office100"]');

    $('.extra_services_box2 input[name="office100"]').on("change", function () {
        office100 = select_office100.val();
        office100_price = office100_price_d[office100];
        office100_n = office100;
        office100_sum = office100_price;
        office100_setup = 0;
        if(select_office100.is(":checked")){
            office100_per = 1;
        } else {
            office100_per = "";
            office100_n = "";
            office100_price = "";
            office100_sum = "";
            office100_setup = ""
        }
        $('tr.office100 .product_name').text(office100_n);
        $('tr.office100 .product_ea').text(office100_per);
        $('tr.office100 .product_price').text(office100_price.toLocaleString("ko-KR"));
        $('tr.office100 .product_sum font b').text(office100_sum.toLocaleString("ko-KR"))
        $('tr.office100 .product_setup_price').text(office100_setup.toLocaleString("ko-KR"))
    })
});
$(function () {
    const office200_price_d = { "오피스200": 4400};

    let office200,office200_price,office200_n,office200_sum,office200_setup,office200_per;
    let select_office200 = $('input[name="office200"]');

    $('.extra_services_box2 input[name="office200"]').on("change", function () {
        office200 = select_office200.val();
        office200_price = office200_price_d[office200];
        office200_n = office200;
        office200_sum = office200_price;
        office200_setup = 0;
        if(select_office200.is(":checked")){
            office200_per = 1;
        } else {
            office200_per = "";
            office200_n = "";
            office200_price = "";
            office200_sum = "";
            office200_setup = ""
        }
        $('tr.office200 .product_name').text(office200_n);
        $('tr.office200 .product_ea').text(office200_per);
        $('tr.office200 .product_price').text(office200_price.toLocaleString("ko-KR"));
        $('tr.office200 .product_sum font b').text(office200_sum.toLocaleString("ko-KR"))
        $('tr.office200 .product_setup_price').text(office200_setup.toLocaleString("ko-KR"))
    })
});
$(function () {
    const internet_call_price_d = { "IP-4705H_Centrex": 550, "IP-4705G_Centrex": 880, "IP-700SC": 4400, "MWP-2500": 1650};

    let internet_call,inertnet_call_price,internet_call_n,internet_call_per,internet_call_sum,internet_call_setup;
    let select_internet_call = $('select[name="office_internetcall"]');
    let select_internet_call_per = $('select[name="office_internetcall_perpc"]');

    $('.call_internet select').on("change", function () {
        internet_call = select_internet_call.val();
        internet_call_price = internet_call_price_d[internet_call];
        internet_call_n = internet_call;
        internet_call_per = parseInt(select_internet_call_per.val());
        internet_call_sum = internet_call_price * internet_call_per;
        internet_call_setup = 0;
        $('tr.eqipment_installment .product_name').text(internet_call_n);
        $('tr.eqipment_installment .product_ea').text(internet_call_per);
        $('tr.eqipment_installment .product_price').text(internet_call_price.toLocaleString("ko-KR"));
        $('tr.eqipment_installment .product_sum font b').text(internet_call_sum.toLocaleString("ko-KR"))
        $('tr.eqipment_installment .product_setup_price').text(internet_call_setup.toLocaleString("ko-KR"))
    })
});
$(function(){
    let setup_sum = internet_speed_setup + fixed_ip_setup + need_tv_setup + fax_call_setup;
    let monthly_pay;
    $('#er_sum .ersum2 span').text(setup_sum);
    $('#er_sum .ersum4 span').text();
})





