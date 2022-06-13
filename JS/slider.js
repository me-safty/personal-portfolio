function slider(left, right, box, item) {
  const gap = parseInt(getComputedStyle(box).gap);
  const translate = item.clientWidth + gap;
  let count = 0;
  left.addEventListener("click", (_) => {
    if (count > -translate * 2 + 100) {
      count -= translate;
      box.style.transform = `translateX(${count}px)`;
    } else {
      count = 0;
      box.style.transform = `translateX(${count}px)`;
    }
  });
  right.addEventListener("click", (_) => {
    if (count < 0) {
      count += translate;
      box.style.transform = `translateX(${count}px)`;
    } else {
      count = -translate * 2;
      box.style.transform = `translateX(${count}px)`;
    }
  });
}

export { slider };