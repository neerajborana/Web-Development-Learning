// Searching for data
db.items.find({rating:3.5})
db.items.find({rating:{$gte:3.5}})
db.items.find({rating:{$gt:3.5}})

db.items.find({rating:{$gt:3.5},price :{$gt:4000}})
db.items.find({rating:{$lt:4.5},price :{$gt:4000}})


db.items.find({$or :[{rating:{$lt:4.5}},{price :{$gt:4000}}]})


db.items.find({rating:{$lt:4.5}},{rating :1,qty:1})