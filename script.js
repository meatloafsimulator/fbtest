import {qs, qsa, ael, aelo} from './utility.js';
import {
  db, ref, set, increment, onValue
} from './firebase.js';

const currentRef = ref(db, 'current');
set(currentRef, 0);

for (const b of qsa('button')) {
  ael(b, 'click', () => {
    // const div = qs('div');
    // const current = parseInt(div.innerHTML);
    const add = parseInt(b.innerHTML);
    // div.innerHTML = current + add;
    set(ref(db, 'current'), increment(add));
  });
}

onValue(currentRef, snapshot => {
  qs('div').innerHTML = snapshot.val();
});
