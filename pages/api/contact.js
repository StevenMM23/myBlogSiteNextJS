import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    console.log(email, name, message);

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };
    let client;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.4vbio1m.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
      );
    } catch (error) {
      console.log("Ni me llegue a conectar");
      res.status(500).json({ message: "Could not connect to dabatase." });
      return;
    }

    try {
      const db = await client.db();
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "Storing message failed!" });
    }

    res
      .status(201)
      .json({ message: "Successfully stored message !", message: newMessage });
  }
}

export default handler;
