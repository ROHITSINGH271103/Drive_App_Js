const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firbase = require('./firebase.config');
const serviceAccount = require('../drive-a415c-firebase-adminsdk-jui57-14f199d5db.json');
const { credential } = require('firebase-admin');



const storage = firebaseStorage({
    credentials: firbase.credential.cert(serviceAccount),
    bucketName: 'console.cloud.google.com/storage/browser/bucket_2703',
    unique:true,
    
})

const upload = multer({
    storage: storage,
})


module.exports = upload;