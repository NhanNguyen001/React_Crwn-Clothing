import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('e28kqG6Fe0oOlIE5b6WY').collection('cartItems').doc('FepK2LYdVaN3donfOyUr');
firestore.doc('/users/e28kqG6Fe0oOlIE5b6WY/cartItems/FepK2LYdVaN3donfOyUr');
firestore.collection('/users/e28kqG6Fe0oOlIE5b6WY/cartItems');