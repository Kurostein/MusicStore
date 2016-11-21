(function () {
  var container = this;

  container.onItemClick = OnItemClick;

  function OnItemClick() {
    document.location.href = './pages/album_detail.html';
  }
})();