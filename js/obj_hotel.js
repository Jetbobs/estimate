    //인터넷 스피드 선언
    const internet_d = { "100M+": 23100,"500M+": 34100, "1G+": 38500, "100M": 22000, "500M": 33000, "1G": 38500};
    // const internet_speed_d1 = { "100M+": 17600,"500M+": 23100, "1G+": 27500, "100M": 16500, "500M": 22000, "1G": 27500};
    // const internet_speed_setup_price = 27500; 
    //가격
    const internet_family_price = -5000;
    let [internet_speed_price,internet_speed_price_setup] = Array(2).fill(0);
    //문자
    let tv_supply;
    let [] = Array(2).fill(0);
    //정수
    let internet_ea = 0;

    //셀렉터
    let er_internet_speed = $('.er_internet_speed')
    let internet_speed_family = $('.internet_speed_box input[name="internet_speed_family"]');
    internet_speed = $('.internet_speed_box select[name="internet_speed"]');

        //인터넷 스피드 선언
        // const tv_d = { "100M+": 23100,"500M+": 34100, "1G+": 38500, "100M": 22000, "500M": 33000, "1G": 38500};
        // const tv_more_d = { "100M+": 17600,"500M+": 23100, "1G+": 27500, "100M": 16500, "500M": 22000, "1G": 27500};
        // const internet_speed_setup_price = 27500; 
        //가격
        // let [internet_speed_price,internet_speed_price_setup] = Array(2).fill(0);
        //문자

        // let [] = Array(2).fill(0);
        //정수
        let [tv_ea,tv_more_ea] = Array(2).fill(0);
        //셀렉터
        // let er_internet_speed = $('.er_internet_speed')
        // let internet_speed_family = $('.internet_speed_box input[name="internet_speed_family"]');
        // internet_speed = $('.internet_speed_box select[name="internet_speed"]');


