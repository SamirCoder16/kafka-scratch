const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function inti() {
  const producer = kafka.producer();

  console.log("Producer connecting...");
  await producer.connect();
  console.log("Producer Connected Successfully");

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", async function (line) {
    const [riderName, location] = line.split(" ");

    await producer.send({
      topic: "rider-update",
      messages: [
        {
          partition: location.toLowerCase() === "north" ? 0 : 1,
          key: "name",
          value: JSON.stringify({ name: riderName, location }),
        },
      ],
    });
  }).on("close", async function () {
    await producer.disconnect();
});

}

inti();
