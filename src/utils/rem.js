let onResizeDebounce = (()=>{
    let resizeTimer = null;
    return ()=>{
        if(!resizeTimer){
            setRem();
        }
        clearTimeout(resizeTimer);
            resizeTimer = setTimeout(()=>{
                clearTimeout(resizeTimer);
                resizeTimer = null;
            },1000);
    }
})()


// 基准大小 相当于窗口缩放到设计稿的尺寸时body的字体大小 这里设置100px 方便计算
const baseSize = 100
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于1280宽的缩放比例，可根据自己需要修改。1280是设计稿的宽度
  const scale = document.documentElement.clientWidth / 1280;
  let autoWidth = Math.round((baseSize * Math.min(scale, 2)));
  //判断页面缩放到小于99px的字体时 就不再缩小 防止内容溢出
  if (Math.round((baseSize * Math.min(scale, 2))) <= 99) {
    autoWidth = 99;
  }
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = autoWidth + 'px'
}

export function RegisterRem(){
    onResizeDebounce();
    window.addEventListener('resize',onResizeDebounce)
}

export function UnregisterRem(){
    window.removeEventListener('resize',onResizeDebounce);
}

