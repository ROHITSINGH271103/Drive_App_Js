const Firebase = require('firebase-admin');

const serviceAccount = require('../drive-a415c-firebase-adminsdk-jui57-14f199d5db.json')


const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'console.cloud.google.com/storage/browser/bucket_2703'
})


module.exports = Firebase;