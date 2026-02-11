const { kafka } = require('./client');

const group = process.argv[2]; /// This process.argv[2] is used to pass the group name when running the consumer, for example: node consumer.js north

async function init() {
    const consumer = kafka.consumer({ groupId : group });
    console.log("Consumer connecting...");
    await consumer.connect();
    console.log("Consumer Connected Successfully");

    await consumer.subscribe({ topics: ["rider-update"] , fromBeginning: true }); // this fromBeginning: true is used to consume messages from the beginning of the topic, if you want to consume only new messages, you can set it to false

    await consumer.run({
        eachMessage: async ({ topic, partition, message , heartbeat, pause}) => {
            console.log(`Received message: ${group}: ${message.value.toString()} from topic: ${topic}, partition: ${partition}`);
        }
    });
}

init();