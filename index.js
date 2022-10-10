import { initializeApp, cert } from "firebase-admin/app";
import{getFirestore} from "firebase-admin/firestore" 

//import our credentials (serviceAccount)
import serviceAccount from './serviceAccount.js';

//connect to our firebase project using those credentials
initializeApp({
    credential: cert(serviceAccount)
})
//connect to firestore database
const db = getFirestore();

//define a new video game: 
const newGame = {
    title: 'Frogger',
    rated: 'E',
    genre: 'Arcade',
    realeased: 1981,
   
}

//create a doc inside a collection
db.collection('games').add(newGame)//go to database go to game collection adds data to game collection
//if ok, console.log the doc id (.then)
.then(doc => console.log('Game created:', doc.id))
//if not, console.log the error (.catch)
.catch(console.error)
//.catch(err=> console.error(err)) same as ^

//get all games 
db.collection('games').get()
//reshape the collection 
.then(collection => {
    collection.docs.forEach(doc=> {
        console.log(doc.id, doc.data())
    })
    
})

.catch(console.error)

