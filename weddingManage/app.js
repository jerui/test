/* ===== 页面联动跳转 ===== */
function navigateTo(page) {
  document.querySelectorAll('.menu-item[data-page]').forEach(function(item) {
    item.classList.toggle('active', item.dataset.page === page);
  });

  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.toggle('active', p.id === 'page-' + page);
  });

  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('mobile-open');
  }

  document.querySelector('.content').scrollTop = 0;
}

document.querySelectorAll('.menu-item[data-page]').forEach(function(item) {
  item.addEventListener('click', function() {
    navigateTo(item.dataset.page);
  });
});

/* ===== 侧边栏折叠 ===== */
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('mobile-open');
  } else {
    sidebar.classList.toggle('collapsed');
  }
}

/* ===== 柱状图生成 ===== */
function renderBars() {
  var data = [
    { label: '周一', value: 45 },
    { label: '周二', value: 60 },
    { label: '周三', value: 35 },
    { label: '周四', value: 80 },
    { label: '周五', value: 95 },
    { label: '周六', value: 100 },
    { label: '周日', value: 85 }
  ];

  var container = document.getElementById('barChart');
  container.innerHTML = '';

  data.forEach(function(d, i) {
    var group = document.createElement('div');
    group.className = 'bar-group';
    group.innerHTML =
      '<div class="bar" style="height:' + d.value + '%; animation-delay:' + (i * 0.1) + 's"></div>' +
      '<span class="bar-label">' + d.label + '</span>';
    container.appendChild(group);
  });
}
renderBars();

/* ===== Toast 提示 ===== */
var toastTimer;
function showToast(msg) {
  var toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() {
    toast.classList.remove('show');
  }, 2500);
}