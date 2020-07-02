
const directive = {
  inserted(el) {
    if (!el.dataset) {
      return;
    }
    if (el.dataset.transfer !== 'true') { // 如果popper不需要渲染在body最后面时, 默认渲染，通过diaplay控制显示隐藏
      el.style.display = el.dataset.visible === 'true' ? 'inline-block' : 'none';
      return;
    }

    // 如果popper需要渲染在body最后面时
    // 第一次进来不渲染popper节点
    const parentNode = el.parentNode;
    if (!parentNode) {
      return;
    };
    const commentNode = document.createComment('');
    parentNode.replaceChild(commentNode, el); // 用新生成的注释节点替换掉当前dom节点
    // document.body && document.body.appendChild(el); // 插入body后面
  },
  update(el) {
    if (!el.dataset) {
      return;
    }
    if (el.dataset.transfer === 'true' && el.dataset.visible === 'true') {
      document.body && document.body.appendChild(el); // 插入body后面
    }
    // 通过diaplay控制显示隐藏
    el.style.display = el.dataset.visible === 'true' ? 'inline-block' : 'none';
  }
};

export default directive;
