/* ===== 页面联动跳转 ===== */
function navigateTo(page) {
  // 切换菜单高亮
  document.querySelectorAll('.menu-item[data-page]').forEach(function(item) {
    item.classList.toggle('active', item.dataset.page === page);
  });

  // 切换页面显示
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.toggle('active', p.id === 'page-' + page);
  });

  // 移动端自动收起侧边栏
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('mobile-open');
  }

  // 内容区回到顶部
  document.querySelector('.content').scrollTop = 0;
}

// 绑定菜单点击事件
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
    { label: '周一', value: 60 },
    { label: '周二', value: 75 },
    { label: '周三', value: 55 },
    { label: '周四', value: 85 },
    { label: '周五', value: 100 },
    { label: '周六', value: 90 },
    { label: '周日', value: 70 }
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