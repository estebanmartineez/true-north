print("Start mongo-init");

db = db.getSiblingDB('test');

db.createCollection('task');

print("Start mongo-init finished");
