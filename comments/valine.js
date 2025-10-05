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
        path,
      });
    }
  };

  window.loadComments = loadComments;
  window.addEventListener('pjax:success', () => {
    window.loadComments = loadComments;
  });
})();
