# 🐘 Apache Kafka Setup with Docker

This repository helps you set up Apache Kafka using Docker along with Node.js prerequisites for building producer/consumer apps.

---

## ✅ Prerequisites

Before you begin, make sure you have the following installed:

- 🔧 [Node.js](https://nodejs.org/en/download/) (v14 or above)
- 🐳 [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- 💻 Basic Terminal/Command-line knowledge

---

## 📦 Step-by-Step Kafka Setup

### 1️⃣ Start Zookeeper

```bash
docker run -d --name zookeeper -p 2181:2181 zookeeper
docker run -d --name kafka \
  -p 9092:9092 \
  -e KAFKA_ZOOKEEPER_CONNECT=host.docker.internal:2181 \
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 \
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
  confluentinc/cp-kafka


Component	Port
Zookeeper	2181
Kafka	9092

