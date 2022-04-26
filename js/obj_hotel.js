    //인터넷 스피드 선언
    const internet_d = { "100M": 20000,"500M": 25000, "1G": 30000};
    // const internet_speed_d1 = { "100M+": 17600,"500M+": 23100, "1G+": 27500, "100M": 16500, "500M": 22000, "1G": 27500};
    // const internet_speed_setup_price = 27500; 
    //가격
    let [internet_price,internet_sum,internet_setup_sum] = Array(3).fill(0);
    //문자
    let internet;
    let tv_supply;
    let [] = Array(2).fill(0);
    //정수
    let internet_ea = 0;
    let internet_setup = 27500;
    let internet_more_setup = 11000;
    //셀렉터
    let er_internet = $('.er_internet')
    let internet_type_ea = [0,1,2,3]


    //tv
    const tv_d = { "OTV_멀티룸팩": 6000,"선택형": 6000, "OTV10": 10000, "OTV12": 12000, "OTV15": 15000, "OTV25": 25000,"OTV34":34000};
    //TV 선언
    const tv_more_d = { "OTV_멀티룸팩": 4000,"선택형": 4000, "OTV10": 6000, "OTV12": 7200, "OTV15": 9200, "OTV25": 14400, "OTV34": 20000};
    const tv_d1 = {"OTS10":10000, "OTS12":12000,"OTS15":15000};
    const tv_more_d1 = {"OTS10":6000, "OTS12":7200,"OTS15":9200};
    //가격
    let [tv_price,tv_sum,tv_setup,tv_setup_sum] = Array(4).fill(0);
    //문자
    let tv;
    let [] = Array(2).fill(0);
    //정수
    let [tv_ea,tv_more_ea] = Array(2).fill(0);
    //셀렉터
    let er_tv = $('.er_tv');

    //TV MORE 선언
    //가격
    let [tv_more_price,tv_more_sum,tv_more_setup,tv_more_setup_sum] = Array(4).fill(0);
    //문자
    let tv_more;
    let [] = Array(2).fill(0);
    //정수
    //셀렉터
    let er_tv_more = $('.er_tv_more');
    let tv_type_box = $('.tv_type_box input')

    let tv_plan_otv_ea = [0,1,2,3,4,5,6,7,8];
    let tv_plan_ots_ea = [0,1,2,3]
    let family_ea = [0,1,2]
 
       //tv 셋탑

       //가격
       let [tv_settop_price,tv_settop_sum,tv_settop_setup,tv_settop_setup_sum] = Array(4).fill(0);
       //문자
       let tv_settop;
       let [] = Array(2).fill(0);
       //정수

       //셀렉터
       let er_tv_settop = $('.er_tv_settop');

         //tv 추가 셋탑

       //가격
       let [tv_more_settop_price,tv_more_settop_sum,tv_more_settop_setup,tv_more_settop_setup_sum] = Array(4).fill(0);
       //문자
       let tv_more_settop;
       let [] = Array(2).fill(0);
       //정수

       //셀렉터
       let er_tv_more_settop = $('.er_tv_more_settop');


    //인터넷 패밀리
    const internet_family_d = {1: "패밀리 추가할인 1회", 2 :"패밀리 추가 할인 2회" }
    //선언
    let internet_family_n;
    let business_name;
    let internet_family;
    //가격
    let [internet_family_ea, internet_family_sum, internet_family_setup] = Array(3).fill(0);
    let internet_family_price = -5000;
    //셀렉터
    let business_names =  $('.business_name input[name="business_name"]');
    let internet_familys = $('.internet_family');

    //wifi
    //정수

    let [wifi_ea, wifi_sum, wifi_setup_sum] = Array(3).fill(0);
    //셀렉터
    let er_wifi = $('.er_wifi');

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

