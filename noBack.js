history.pushState(null, document.title, location.href);//履歴を変更
window.addEventListener('popstate', function (event)
{
  alert('無効...');
  history.pushState(null, document.title, location.href);
  
});