// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 初始化Valine的函数
  function initValine() {
    // 检查评论容器是否存在
    const commentContainer = document.getElementById('v-comments');
    if (!commentContainer) return;

    // 初始化评论功能
    new Valine({
      el: '#v-comments',
      appId: 'nLV43lQMFVCNTCbYhjP6lphP-MdYXbMMI', // 你的appId
      appKey: 'zLQdxx5UheQSC3jv40ek5s0o', // 你的appKey
      serverURLs: 'https://nlv43lqm.api.lncldglobal.com', // 服务器地址
      path: window.location.pathname, // 自动获取当前页面路径
      placeholder: '万水千山总是情，发个评论行不行~', // 评论框提示
      visitor: true, // 显示阅读量
      enableQQ: true, // 支持QQ头像
      avatar: 'mp' // 头像风格
    });
  }

  // 加载Valine脚本并初始化
  if (typeof Valine === 'undefined') {
    // 动态加载Valine库
    const script = document.createElement('script');
    script.src = '/vendors/valine@1.4.18/dist/Valine.min.js';
    script.onload = initValine; // 加载完成后初始化
    document.head.appendChild(script);
  } else {
    // 如果已经加载过，直接初始化
    initValine();
  }

  // 支持pjax无刷新跳转
  window.addEventListener('pjax:success', initValine);
});


/*
上面是AI的，备个份
(() => {
  const loadComments = async () => {
    if (typeof Valine === "undefined") {
      setTimeout(loadComments, 100);
    } else {
      const container = document.getElementById('v-comments');
      if (!container) {
        return;
      }
      const path = container.getAttribute("data-path");
      new Valine({
        el: '#v-comments',
        appId: 'nLV43lQMFVCNTCbYhjP6lphP-MdYXbMMI',
        appKey: 'zLQdxx5UheQSC3jv40ek5s0o',
        //serverURLs: 'https://nlv43lqm.api.lncldglobal.com',
        path,
      });
    }
  };

  window.loadComments = loadComments;
  window.addEventListener('pjax:success', () => {
    window.loadComments = loadComments;
  });
})();
*/
