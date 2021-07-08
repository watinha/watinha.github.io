const MongoClient = require('mongodb').MongoClient;

module.exports = class Heroes {

    static async addHero(req){

        const conn = await MongoClient.connect('mongodb://127.0.0.1:27017/nintendo');
        const db = conn.db();
        
        return Heroes.getHero(req.body.hero_name).then((res) => {
                var heroInfo = {
                    "name": req.body.hero_name,
                    "poder": req.body.poder,
                    "velocidade": req.body.velocidade,
                    "defesa": req.body.defesa,
        };
                return db.collection('heroes').insertOne(heroInfo);

            return {insertedCount:0};
    });
    }


    static async getHero(hero_name){
        const conn = await MongoClient.connect('mongodb://127.0.0.1:27017/nintendo');
        const db = conn.db();
        const hero = await db.collection('heroes').find({name:hero_name}).toArray();
        
        conn.close();
        return hero;
    }

    static async getAllHero(){
        const conn = await MongoClient.connect('mongodb://127.0.0.1:27017/nintendo');
        const db = conn.db();
        return await db.collection('heroes').find().toArray();
    }

}