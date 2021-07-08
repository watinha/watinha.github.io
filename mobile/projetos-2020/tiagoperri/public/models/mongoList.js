const MongoClient = require('mongodb').MongoClient;

module.exports = class MongoList{
     static async find(){ // lista todos os usuarios
          const conn = await MongoClient.connect('mongodb://localhost:27017/nintendo'); // nintendo = banco de dados
          const db = conn.db();
          const accounts = await db.collection('posts').find().toArray();  // posts = tabela
          if(accounts){
                conn.close();
                return accounts;
          }
          conn.close();
          return false;     
       } 
    
    static async insert(theEmail,thePassword,group){ // insere uma nova conta
          const conn = await MongoClient.connect('mongodb://localhost:27017/nintendo'); // nintendo = banco de dados
          const db = conn.db();
          const accounts = await db.collection('posts').find().toArray();

          function findAccount(account){
                return account.email === theEmail;
          }
          
          if(accounts.find(findAccount)){
            conn.close()
            console.log("conta ja cadastrada");
            return false;
          }  

          db.collection('posts').insertOne({email : theEmail, senha: thePassword, group : group});
          conn.close();
          return true;
    }

    static async doLogin(theEmail,thePassword){ // faz login
          const conn = await MongoClient.connect('mongodb://localhost:27017/nintendo'); // nintendo = banco de dados
          const db = conn.db();
          var accounts;
          var theResult = "error";
          accounts = await db.collection('posts').find().toArray();

          function findAccount(account){
                return account.email === theEmail && account.senha === thePassword;
          }
          
          if(accounts.find(findAccount)){
            theResult = "ok";
            console.log("logado com sucesso");
            //setar os cookies para manter a conexão aqui em baixo
           
          }  
          conn.close();
          return theResult;
    }

    static async getUser(theEmail){ // retorna um usuario
          const conn = await MongoClient.connect('mongodb://localhost:27017/nintendo'); // nintendo = banco de dados
          const db = conn.db();
          var accounts;
          accounts = await db.collection('posts').find({email:theEmail}).toArray()

          if(accounts){
            conn.close();
            return accounts;
          }  

          conn.close();
          return null;
    }
}
