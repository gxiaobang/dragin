

// 无操作
export const noop = () => { }

// 事件绑定
export const addEvent = (elem, type, callback) => {

  let fn = (e) => {
    callback && callback();
  }

  elem.addEventListener(type, fn, false);


  return () => {
    removeEvent(elem, type, fn);
  }
}

export const removeEvent = (elem, type, callback) => {
  elem.removeEventListener(type, callback, false);
}


// 样式class
export const addClass = (elem, name) => {
  if (!hasClass(elem, name)) {
    elem.classList.add(name);
  }
}

export const removeClass = (elem, name) => {
  if (hasClass(elem, name)) {
    elem.classList.remove(name);
  }
}

export const hasClass = (elem, name) => {
  return (' ' + elem.className + ' ').indexOf(' ' + name + ' ') > -1;
}
