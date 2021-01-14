function wbk_on_form_rendered( service ){
    jQuery('#wbk-booking-form-container').find('.wpcf7').append('<label class="wbk-input-label" for="wbk-dynamic_field">This field added dynamically</label><span class="wpcf7-form-control-wrap wbk-dynamic_field"><input type="text" name="wbk-dynamic_field" value="" size="40" class="wpcf7-form-control wpcf7-text wbk-text" id="wbk-dynamic_field" aria-invalid="false"></span>');
}
