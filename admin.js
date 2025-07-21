const { kafka } = require('./client');

async function init () {
    const admin = kafka.admin();
    console.log("Admin connecting...")
    admin.connect();
    console.log("Admin Connected Successed");
    
    console.log("Creating topics...");
    admin.createTopics({
        topics: [
            {
                topic: 'rider-update',
                numPartitions: 2,
            }
        ]
    });
    console.log("Topics Created Successed");

    console.log("disconnecting ...");
    await admin.disconnect();
}

init();