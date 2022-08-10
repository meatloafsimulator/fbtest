import {qs, qsa, ael, aelo} from './utility.js';
import {
  db, ref, set, increment, onValue
} from './firebase.js';

const currentRef = ref(db, 'current');

ael('button.reset', 'click', () => {
  set(currentRef, 0);
});

for (const b of qsa('button.add')) {
  ael(b, 'click', () => {
    const add = parseInt(b.innerHTML);
    set(ref(db, 'current'), increment(add));
  });
}

onValue(currentRef, snapshot => {
  qs('div').innerHTML = snapshot.val();
});
