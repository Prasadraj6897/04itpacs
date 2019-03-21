db = db.getSiblingDB('itpacs01');
db.createUser({
    user: "itpacs" , 
    pwd: "Inurtura123", 
    roles: [  
        { role:"dbOwner", db: "itpacs01" }
    ]
});