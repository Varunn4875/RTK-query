const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient;
const ObjectID=mongodb.ObjectId


let database;
async function getDatebase(params) {
    
    const client= await MongoClient.connect('mongodb://127.0.0.1:27017')
    database=client.db('library');

    if(!database){
        console.log('data not connected');
        
    }
    return database;
}    

module.exports={
    getDatebase,
    ObjectID
}