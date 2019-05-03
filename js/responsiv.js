$(function (){
  $('.subscription_btn').click(function (){
      $(this).removeClass('col-3');
      $(this).addClass('col');
      $(this).removeClass('disabled');
      $(this).addClass('active'); 
      
      $('.login_btn').removeClass('col');
      $('.login_btn').addClass('col-3');
      $('.login_btn').removeClass('active');
      $('.login_btn').addClass('disabled');
      
      $('.form_login_item').hide();
      $('.form_subscription_item').fadeIn("slow");
  });
  
  $('.login_btn').click(function (){
      $(this).removeClass('col-3');
      $(this).addClass('col');
      $(this).removeClass('disabled');
      $(this).addClass('active');
      
      
      $('.subscription_btn').removeClass('col');
      $('.subscription_btn').addClass('col-3');
      $('.subscription_btn').removeClass('active');
      $('.subscription_btn').addClass('disabled');
      
      $('.form_subscription_item').hide();
      $('.form_login_item').fadeIn("slow");
  });
});