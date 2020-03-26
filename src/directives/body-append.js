
const directive = {
  inserted(el) {
    if (el.dataset && el.dataset.transfer !== 'true') { // 如果没有dataset.transfer标记，就return
      return false;
    }
    // 首先，在当前dom树中，把当前dom删除掉
    const parentNode = el.parentNode;
    if (!parentNode) {
      return;
    };
    const commentNode = document.createComment('');
    parentNode.replaceChild(commentNode, el); // 用新生成的注释节点替换掉当前dom节点
    // 然后，再把当前dom节点，添加到body的最后面
    document.body.appendChild(el);
  }
};

export default directive;
