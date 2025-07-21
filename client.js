const { Kafka} = require('kafkajs');

exports.kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['172.24.32.1:9092'], // connect your broker here
})