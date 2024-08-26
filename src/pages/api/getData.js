// pages/api/getData.js
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../../lib/firebaseConfig';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
