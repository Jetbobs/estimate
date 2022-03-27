function set_sums() {

    let total_price, total_setup_price;
    extra_sums = extra_price_price["발신번호표시"] + extra_price_price["통화연결음"] + extra_price_price["조건별착신전화"] + extra_price_price["ARS"] + extra_price_price["원넘버멀티폰"] + extra_price_price["개인통화보안"] + extra_price_price["오피스100"] + extra_price_price["오피스200"];

    total_price = tv_price + tv_more + fixed_ip_sum + tv_price_settop + tv_more_settop + internet_speed_sum + call_internet_sum + eqipment_installment_sum + call_wire_sum + fax_sum + extra_sums;
    // total_price = internet_speed_sum + tv_price + tv_settop + tv_more + tv_more_settop;

    total_setup_price = internet_speed_price_setup + call_internet_setup + tv_price_setup + tv_more_setup + fixed_ip_setup + call_internet_setup + call_wire_setup + tv_settop_setup + tv_more_settop_setup + call_internet_setup + fax_setup;

    $(".er_sum2 span").text(total_setup_price.toLocaleString("ko-KR") + " 원");
    $(".er_sum4 span").text(total_price.toLocaleString("ko-KR") + " 원")
}
function set_sums_store(){
    let total_price, total_setup_price;

    extra_sums = extra_price_price["발신번호표시"] + extra_price_price["통화중대기"] + extra_price_price["착신통화전환"];

    total_price = internet_speed_sum + tv_price + tv_more + tv_settop_sum + tv_more_settop + call_wire_sum + call_internet_sum + call_fax_sum + extra_sums + pos_sum + cctv_sum;

    total_setup_price = internet_speed_price_setup + tv_price_setup + tv_more_setup + tv_more_settop_setup + call_wire_setup_sum + call_internet_setup_sum + call_fax_setup_sum + pos_setup_sum + cctv_setup_price;

    $(".er_sum2 span").text(total_setup_price.toLocaleString("ko-KR") + " 원");
    $(".er_sum4 span").text(total_price.toLocaleString("ko-KR") + " 원")
}
function set_sums_home(){
    let total_price, total_setup_price;

    extra_sums = extra_price_price["발신번호표시"] + extra_price_price["통화중대기"] + extra_price_price["착신통화전환"];

    total_price = internet_speed_sum + tv_price + tv_more + tv_settop_sum + tv_more_settop + call_wire_sum + call_internet_sum + extra_sums + cctv_sum;

    total_setup_price = internet_speed_price_setup + tv_price_setup + tv_more_setup + tv_more_settop_setup + call_wire_setup_sum + call_internet_setup_sum + cctv_setup_price;
    
    $(".er_sum2 span").text(total_setup_price.toLocaleString("ko-KR") + " 원");
    $(".er_sum4 span").text(total_price.toLocaleString("ko-KR") + " 원")
};
function reset(par) {
    for (let i = 0; i < par.length; i++) {
        par[i].find(".product_name").empty();
        par[i].find(".product_ea").empty();
        par[i].find(".product_price").empty();
        par[i].find(".product_sum").empty();
        par[i].find(".product_setup_price").empty();
    }
}
function konum(par) {
    return par.toLocaleString("ko-KR");
}
function fill(par) {
    for (let i = 0; i < par.length; i++) {
        par[i]["selector"].find(".product_name").text(par[i]["option"][0])
        par[i]["selector"].find(".product_ea").text(par[i]["option"][1])
        par[i]["selector"].find(".product_price").text(konum(par[i]["option"][2]))
        par[i]["selector"].find(".product_sum").text(konum(par[i]["option"][3]))
        par[i]["selector"].find(".product_setup_price").text(konum(par[i]["option"][4]))
    }
}
function resetvar(par){
    for(let i = 0; i < par.length; i++){
        par[i] = 0;
        console.log(par,par[i]);
    }
};
function sum(par){
    par_sum = par_price * par_ea;
};
function unchecked(par){
    $(`input[name="${par}"]`).prop('checked', false);
};
function extra_reset(par){
    $(`.${par} .product_sum`) = 0;
};

function tv_store(){
    tv_price = need_tv_d[tv];
    tv_price_setup = tv_setup_price;
    tv_price_settop = tv_settop_gini;
    tv_sum = tv_price * 1;
    tv_settop_sum = tv_settop_gini * 1;
    tts = 1;
}