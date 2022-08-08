'use strict';

for (const b of qsa('button')) {
  ael(b, 'click', () => {
    const div = qs('div');
    const current = parseInt(div.innerHTML);
    const add = parseInt(b.innerHTML);
    div.innerHTML = current + add;
  });
}
