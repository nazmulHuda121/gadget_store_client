import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function createUser({ name, email, password }) {
  const client = await clientPromise;
  const db = client.db('gadget_storeDB');

  const isExist = await db.collection('users').findOne({ email });

  if (isExist) {
    throw new Error('User already exists');
  }

  const hashed = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashed,
    createdAt: new Date(),
  };

  await db.collection('users').insertOne(newUser);

  return newUser;
}

export async function findUserByEmail(email) {
  const client = await clientPromise;
  const db = client.db('gadget_storeDB');

  return await db.collection('users').findOne({ email });
}
