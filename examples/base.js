$(function() {
  $('.gender.dropdown')
  .dropdown('setting', 'transition', 'vertical flip')
  .dropdown('set selected', 'female')
  .popup('setting', 'content', 'Select your gender');
  $('.search.dropdown')
  .dropdown('setting', 'transition', 'vertical flip')
  .dropdown('set selected', 'default')
  .popup('setting', 'content', 'Select your country');
  $('.DEMO .ui.checkbox')
  .checkbox();
  $('.ui.fft.dropdown')
  .dropdown();
});

