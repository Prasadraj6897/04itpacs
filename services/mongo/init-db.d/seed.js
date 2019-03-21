db = db.getSiblingDB('itpacs01');
db.createUser({
    user: "itpacs" , 
    pwd: "Inurtura123", 
    roles: [  
        { role:"dbOwner", db: "itpacs01" }
    ]
});
// db.test.drop();
// db.test.insertMany([
//   {
//     _id: 1,
//     name: 'Tensor',
//     age: 6
//   },
//   {
//     _id: 2,
//     name: 'Flow',
//     age: 10
//   }
// ])