import _ from 'lodash'
import printme from './print'
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')
  let btn = document.createElement('button');
  btn.innerHTML = '点我,然后检查控制台'
  btn.onclick = printme

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());