$(function(){
    var hHeight=$('.header').outerHeight();
    var mHeight=$('.member-info').outerHeight()||0;
    var winHeight=$(window).height()
    var fxHeight=$('.fixed-bottom').outerHeight()||0;
    var wrapsHeight=winHeight-(hHeight+fxHeight+mHeight);
    $('[data-scroll]').css({
        'overflowY':'scroll',
        'height':wrapsHeight+'px'
    })
    if($(document).find($('[data-scroll]')).length > 0){
        $('body').css('overflow','hidden');
    }
    $('.trans-btn-group .btn').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active')
        var _index=$(this).index()
        $('.trans-wrap-box').each(function(){
            if($(this).hasClass('active')){
                return;
            }else{
                $(this).css('opacity',0)
            }
        })
        $('.trans-wrap-box').eq(_index).addClass('active').animate({
            opacity:1
        },200).siblings('.trans-wrap-box').removeClass('active').animate({
            opacity:0
        },200)
    })
    
    $('[data-modal]').on('click',function(){
        var _data=$(this).data('modal')||data
        $(_data).addClass('show').animate({
            opacity:1
        },200,function(){
            $(this).find('.card-modal').removeClass('hidden').addClass('show')
        })
        console.log(_data)
    })
    $('[data-close]').on('click',function(){
        var _data=$(this).data('close');
        $(this).closest('.card-modal').removeClass('show').addClass('hidden');
        $(this).closest(_data).animate({
            opacity:0
        },200,function(){
            $(this).removeClass('show')
        })
    })
    $('[data-submit]').on('click', function () {
        var _data = $(this).data('submit');
        var data_val = $(_data).find('.card-body input').val()
        $(this).closest('.card-modal').removeClass('show')
        $(this).closest(_data).animate({
            opacity: 0
        }, 200, function () {
            $(this).removeClass('show')
        })
        $('.list-group-item').find('.birthday').text(data_val)
    })
})