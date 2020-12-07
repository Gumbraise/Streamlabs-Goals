document.addEventListener('goalLoad', function(obj) {
  $('#title').html(obj.detail.title+' ');
  $('#money').text(obj.detail.amount.current+'€ / '+obj.detail.amount.target+'€');
});

document.addEventListener('goalEvent', function(obj) {
  $('#title').html(obj.detail.title+' ');
  $('#money').text(obj.detail.amount.current+'€ / '+obj.detail.amount.target+'€');
});
