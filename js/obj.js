    //인터넷 스피드 선언
    const internet_speed_d = { "500M+": 41800, "1G+": 46750, "100M": 30800, "500M": 44000, "1G": 49500, "2.5G": 55000, "5G": 77000, "10G": 110000}
    const internet_speed_setup_price = 27500; 
    //가격
    let [internet_speed_price,internet_speed_price_setup] = Array(2).fill(0);
    //문자
    let internet_speed;
    let [internet_speed_count,internet_speed_sum] = Array(2).fill(0);
    //정수
    let internet_speed_ea = 0;
    //셀렉터
    let er_internet_speed = $('.er_internet_speed')


    //고정ip선언
    const fixed_ip_d = {"N_office_ip":0, "Y_office_ip" : "고정 IP"};
    //가격
    let fixed_ip_price = 0;
    //문자
    let fixed_ip;
    let fixed_ip_sum = 0;
    let fixed_ip_count = 0;
    let fixed_ip_setup = 0;
    //정수
    let fixed_ip_ea = 0;
    //셀렉터
    let er_fixed_ip = $('.er_fixed_ip');
    
    
    //TV 선언
    const need_tv_d = { "BIZOTV 슬림": 11880, "BIZOTV 에센스_273": 18216, "BIZOTV 라이트_248": 14256, "BIZOTV 베이직_243": 13266 };
    const need_tv_d_more = { "BIZOTV 슬림": 6600, "BIZOTV 에센스_273": 10120, "BIZOTV 라이트_248": 7920, "BIZOTV 베이직_243": 7370 };
    const tv_setup_price = 15400;
    const tv_setup_more_price = 11000;
    const tv_settop = 2200;
    //가격
    let [internet, fixedip, tv_price, tv_more, internet_call, wire_call, extra1, extra2, extra3, extra4, extra5, extra6, extra7, extra8, tv_price_settop, tv_more_settop,] = Array(16).fill(0);

    let [internet_setup, fixedip_setup, tv_price_setup, tv_more_setup, tv_settop_setup, tv_more_settop_setup] = Array(6).fill(0);
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

    // 인터넷전화 선언
    const call_internet_d = { "IP-4705H_Centrex" : 550, "IP-4705G_Centrex": 880,"IP-700SC": 4400,"MWP-2500": 1650};
    // 인터넷전화 가격
    let [call_internet_price, call_internet_setup, call_internet_sum, eqipment_installment_price, eqipment_installment_sum] = Array(5).fill(0);
    // 인터넷전화 문자
    let call_internet_count = 0;
    let call_internet;
    // 인터넷전화 정수\
    let call_internet_ea = 0;
    // 인터넷전화 셀렉터 
    let er_call_internet = $('.er_call_internet');
    let eqipment_installment = $('.eqipment_installment');

    // 유선전화 선언
    const call_wire_d = { "홈무한3000" : 6050, "소호무한3000": 8250};
    // 유선전화 가격
    let [call_wire_price, call_wire_setup, call_wire_sum] = Array(3).fill(0);
    // 유선전화 문자
    let call_wire_count = 0;
    let call_wire;
    // 유선 정수
    let call_wire_ea = 0;
    // 유선 셀렉터 
    let er_call_wire = $('.er_call_wire');

    // FAX 선언
    const fax_d = { "0" : 0, "FAX": 6050};
    // FAX 가격
    let [fax_price, fax_setup, fax_sum] = Array(3).fill(0);
    let fax_setup_price = 27500;
    // FAX 문자
    let fax_count = 0;
    let fax;
    // FAX정수
    let fax_ea = 0;
    // FAX 셀렉터 
    let er_fax = $('.er_fax');

      // dc 선언

      // dc 가격
      let [dc_price, dc_setup, dc_sum , dc_count] = Array(4).fill(0);
      let dc_setup_price = 27500;
      // dc 문자

      let dc = $('.estimate_contents_extra_services input[name="display_callerid"]');
      // dc정수
      let dc_ea = 0;
      // dc 셀렉터 
      let display_callerid = $('.display_callerid');
      let calling_music = $('.calling_music');
      let condition_destinationcall = $('.condition_destinationcall');
      let ars = $('.ars');
      let onenumber_multiphone = $('.onenumber_multiphone');
      let personalcall_security = $('.personalcall_security');
      let office100 = $('.office100');
      let office200 = $('.office200');
      
    const extra_price_d = {"발신번호표시":1100,"통화연결음":2420,"조건별착신전화":550,"ARS":11000,"원넘버멀티폰":1100,"개인통화보안":1100,"오피스100":2750,"오피스200":4400};
    const extra_price_sel = {"발신번호표시":$(".display_callerid"),"통화연결음":$(".calling_music"),"조건별착신전화":$(".condition_destinationcall"),"ARS":$(".ars"),"원넘버멀티폰":$(".onenumber_multiphone"),"개인통화보안":$(".personalcall_security"),"오피스100":$(".office100"),"오피스200":$(".office200")};
    
    
    let extra_price_price = {"발신번호표시":0,"통화연결음":0,"조건별착신전화":0,"ARS":0,"원넘버멀티폰":0,"개인통화보안":0,"오피스100":0,"오피스200":0}

    
let extra_sums = extra_price_price["발신번호표시"]+extra_price_price["통화연결음"]+extra_price_price["조건별착신전화"]+extra_price_price["ARS"]+extra_price_price["원넘버멀티폰"]+extra_price_price["개인통화보안"]+extra_price_price["오피스100"]+extra_price_price["오피스200"];

let extra_arr = [er_call_internet,eqipment_installment,display_callerid,calling_music,condition_destinationcall,ars,onenumber_multiphone,personalcall_security,office100,office200];

let extra_arr1 = ["display_callerid","calling_music","condition_destinationcall","ars","onenumber_multiphone","personalcall_security","office100","office200"];

    // 선언
    // 가격
    // 문자
    // 정수
    // 셀렉터 
let pos1, pos2

let dis_non_ic = ["call_internet1","call_internet2","call_internet3","call_internet4"];


//시간 날짜 선언
let today = new Date();
let year = today.getFullYear();
let month = ('0' + (today.getMonth() + 1)).slice(-2);
let day = ('0' + today.getDate()).slice(-2);

let dateString = year + '-' + month + '-' + day;

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let timeString = hours+ ':' + minutes + ':' + seconds ;

let rightnow = dateString + ' ' + timeString;

let call_internets = {"IP-4705H_Centrex":"call_internet1","IP-4705G_Centrex":"call_internet2", "IP-700SC":"call_internet3","MWP-2500":"call_internet4"} 