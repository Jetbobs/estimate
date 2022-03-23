function set_sums() {
    let total_price, total_setup_price;
    total_price = internet + fixedip + tv_price + tv_more + internet_call + wire_call + fax + extra1 + extra2 + extra3 + extra4 + extra5 + extra6 + extra7 + extra8 + tv_price_settop + tv_more_settop;

    total_setup_price = internet_setup + fixedip_setup + tv_price_setup + tv_more_setup + internet_call_setup + wire_call_setup + fax_setup + extra1_setup + extra2_setup + extra3_setup + extra4_setup + extra5_setup + extra6_setup + extra7_setup + extra8_setup, tv_settop_setup + tv_more_settop_setup;

    $(".er_sum2 span").text(total_setup_price + " 원");
    $(".er_sum4 span").text(total_price + " 원")
}
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
}
