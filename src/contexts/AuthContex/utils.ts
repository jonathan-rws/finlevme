import { auth } from "../../services/firebase";
import { ref, set, get, child } from "firebase/database";
import { db } from "../../services/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";



export async function AuthenticateUser(email: string, password: string) {

  const { user: data } = await signInWithEmailAndPassword(auth, email, password)
  const token = await data.getIdToken()
  const name = await getUserName(data.uid)
  const balance = await getUserName(data.uid)
  const user = {
    name,
    email,
    token,
    uid: data.uid,
    balance
  }

  return user
}


export async function createUserAccount(name: string, email: string, password: string) {
  const { user: data } = await createUserWithEmailAndPassword(auth, email, password)
  createUserOnFirebase(name, email, data.uid)
  const token = await data.getIdToken()

  const user = {
    name,
    email,
    token,
    uid: data.uid,
    balance: 0,
  }

  return user




}



// ***** DB FUNCTIONS ******



export async function createUserOnFirebase(name: string, email: string, uid: string,) {
  await set(ref(db, 'users/' + uid), {
    uid,
    name,
    email,
    balance: 0
  })

}

export async function getUserName(uid: string) {
  const name = await get(child(ref(db), `users/${uid}/name`))
  return name.val()
}

export async function getUserBalance(uid: string) {
  const balance = await get(child(ref(db), `users/${uid}/balance`))
  return balance.val()
}