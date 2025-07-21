const { kafka } = require('./client');

const group = process.argv[2]

async function init() {
    const consumer = kafka.consumer({ groupId : group });
    console.log("Consumer connecting...");
    await consumer.connect();
    console.log("Consumer Connected Successfully");

    await consumer.subscribe({ topics: ["rider-update"] , fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message , heartbeat, pause}) => {
            console.log(`Received message: ${group}: ${message.value.toString()} from topic: ${topic}, partition: ${partition}`);
        }
    });
}

init();