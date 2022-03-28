// TV제공 총 룸수 시작
$('.tv_supply_box input[name="tv_supply"]').on("change", function(){
    tv_supply = parseInt($(this).val());
    if (tv_supply == 0){
         [internet_ea,tv_ea,tv_more_ea] = Array(3).fill(0);
    } else {
        internet_ea = (parseInt(tv_supply / 9) + 1);
        tv_ea = (parseInt(tv_supply / 9) + 1);
        tv_more_ea = ((tv_supply % 8) + tv_ea * 8);
    }
});
$('.internet_family select[name="internet_family"]').on("change", function(){
    internet_family = $(this).val();
    if(internet_family == 0 ){
        internet_family_ea = 0;
    } else {
        internet_family_sum = parseInt((internet_family * internet_family_price));
    }
});