import { v4 as uuidv4 } from 'uuid';
import { db } from "../services/firebase"
import { ref, set, get, child } from "firebase/database";

export function useTransactions(){
  return({
    create: async function (title: string,category:string , value: number, type: string, uid:string){
     
      const currentMoth = new Date().getMonth()
      const currentYear = new Date().getFullYear()
      
        await set(ref(db, `transactions/${uid}/${currentYear}/${currentMoth}/${uuidv4()}`), {
          title,
          category,
          value,
          createdAt : new Date().toISOString()
      })
    },
    get: async function (uid: string , year: number, month:number){

     
      const data = await get(child(ref(db), `transactions/${uid}/${year}/${month}`))
      const transactions:any = []
      data.forEach((item)=>{
        transactions.push(item.val())
      })
      return(transactions)
    }
  })
}