import {
	addDoc,
	updateDoc,
	onSnapshot,
	deleteDoc,
	collection,
} from 'firebase/firestore';

import { db } from '../firebaseConfig';

const addDocument = (table, data) => {
	const table = collection();
	addDoc(collection(db, table), data);
};
const updateDocument = (data, table, id) => {
	const docRef = doc(db, table, id);
	updateDoc(docRef, data);
};

const deleteDocument = (data, table, id) => {
	const docRef = doc(db, table, id);
	deleteDoc(docRef);
};

// const listenChanges = ({ store, table, ordenarPor, arrayName }) => {
// 	const q = ordenarPor
// 		? query(collection(db, table), orderBy(ordenarPor))
// 		: collection(db, table);
// 	onSnapshot(q, (snapshot) => {
// 		snapshot.docChanges().forEach((change) => {
// 			if (change.type == 'added') {
// 				if (!store[arrayName].some((item) => item.docId == change.doc.id)) {
// 					const data = {
// 						docId: change.doc.id,
// 						...change.doc.data(),
// 					};
// 					store[arrayName].unshift(data);
// 				}
// 			} else if (change.type == 'modified') {
// 				let cambio = store[arrayName].find(
// 					(item) => item.docId == change.doc.id
// 				);
// 				let index = store[arrayName].findIndex(
// 					(item) => item.docId == change.doc.id
// 				);
// 				store[arrayName][index] = { ...cambio, ...change.doc.data() };
// 			} else if (change.type == 'removed') {
// 				store[arrayName] = store.productDatabase.filter(
// 					(item) => item.docId != change.doc.id
// 				);
// 			}
// 		});
// 	});
// };

export { addDocument, updateDocument, deleteDocument };
