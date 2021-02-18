import $ from 'jquery';

$(() => {
  $('.error').hide();
  /* $('input.text-input').css({backgroundColor:"#FFFFFF"});
  $('input.text-input').focus(function(){
    $(this).css({backgroundColor:"#FFDDAA"});
  });
  $('input.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
  });
  */
 $('.button').click(() => {
    // validate and process form
    // first hide any error messages
    $('.error').hide();

    const name = $('input#name').val();
    if (name == '') {
      $('label#name_error').show();
      $('input#name').focus();
      return false;
    }
	 
    const phone = $('input#phone').val();
    if (phone == '') {
      $('label#phone_error').show();
      $('input#phone').focus();
      return false;
    }
	 
    const banner = $('input#type-banner-measure').val();

    const dataString = `name=${ name  }&phone=${  phone  }&banner=${  banner}`;
    // alert (dataString);return false;
    $.ajax({
      type: 'POST',
      url: 'https://panorama30.ru/wp-content/themes/panorama/bin/process.php',
      data: dataString,
      success() {
        $('#contact_form').html("<div id='message'></div>");
        $('#message').html('<h2>Ваша заявка отправлена!</h2>')
        .append('<p>Наш администратор свяжется с Вами<br> в ближайшее время.</p>')
        .hide()
        .fadeIn(1500, () => {
          $('#message').append("<img id='checkmark' src='https://panorama30.ru/wp-content/themes/panorama/img/check.png' />");
        });
      }
    });
    return false;
  });


  $('.form_btn').click((evt) => {
    const phone = document.querySelector('#tel');
    var whats = document.querySelector('#whats');
    var vk = document.querySelector('#vk');
    var inst = document.querySelector('#inst');

    if (phone.value || whats.value || vk.value || inst.value) {
  		// validate and process form
  		// first hide any error messages
      $('.error').hide();

      if ($('#solo').is(':checked')) { var solo = 'да'; }
      if ($('#double').is(':checked')) { var double = 'да'; }
      if ($('#triple').is(':checked')) { var triple = 'да'; }
      if ($('#tripleWithTwoStvorki').is(':checked')) { var tripleWithTwoStvorki = 'да'; }
      if ($('#four').is(':checked')) { var four = 'да'; }
      if ($('#balcony').is(':checked')) { var balcony = 'да'; }
      if ($('#balconyWithStvorki').is(':checked')) { var balconyWithStvorki = 'да'; }

      const material = $('select#material').val();
      const profile = $('select#profile').val();
      const glass = $('select#glass').val();
      const color = $('select#color').val();
      const wood = $('select#wood').val();
      const woodProfile = $('select#woodProfile').val();
      const alProfile = $('select#alProfile').val();
      const alColor = $('select#alColor').val();

      if ($('#otliv').is(':checked')) { var otliv = 'да'; }
      if ($('#otkos').is(':checked')) { var otkos = 'да'; }
      if ($('#setka').is(':checked')) { var setka = 'да'; }
      if ($('#podokonik').is(':checked')) { var podokonik = 'да'; }

      const montage = $('select#montage').val();
      const size = $('textarea#size').val();
      const communication = $('select#communication').val();

      const tel = $('input#tel').val();
      var whats = $('input#whats').val();
      var vk = $('input#vk').val();
      var inst = $('input#inst').val();

      const typeBanner = $('input#type-banner').val();

      const dataString = `solo=${ solo  }&double=${  double  }&triple=${  triple  }&tripleWithTwoStvorki=${  tripleWithTwoStvorki
       }&four=${  four  }&balcony=${  balcony  }&balconyWithStvorki=${  balconyWithStvorki

       }&material=${  material  }&profile=${  profile  }&glass=${  glass  }&color=${  color  }&wood=${  wood
       }&woodProfile=${  woodProfile  }&alProfile=${  alProfile  }&alColor=${  alColor

       }&otliv=${  otliv  }&otkos=${  otkos  }&setka=${  setka  }&podokonik=${  podokonik

       }&montage=${  montage  }&size=${  size  }&communication=${  communication  }&tel=${  tel  }&whats=${  whats  }&vk=${  vk
       }&inst=${  inst  }&typeBanner=${  typeBanner}`;
  		// alert (dataString);return false;



  		$.ajax({
        type: 'POST',
        url: 'https://panorama30.ru/wp-content/themes/panorama/bin/form-calc.php',
        data: dataString,
        success() {
          $('#price_form').html("<div id='message'></div>");
          $('#message').html('<h2>Ваша заявка отправлена!</h2>')
          .append('<p>Наш администратор свяжется с Вами<br> в ближайшее время.</p>')
          .hide()
          .fadeIn(1500, () => {
            $('#message').append("<img id='checkmark' src='https://panorama30.ru/wp-content/themes/panorama/img/check.png' />");
          });
        }
      });

      return false;
    } 
      evt.preventDefault();
      phone.classList.add('slider-price3__input--error');
      vk.classList.add('slider-price3__input--error');
      whats.classList.add('slider-price3__input--error');
      inst.classList.add('slider-price3__input--error');
    
  });
});
runOnLoad(()=> {
  /* $("input#name").select().focus(); */
});
