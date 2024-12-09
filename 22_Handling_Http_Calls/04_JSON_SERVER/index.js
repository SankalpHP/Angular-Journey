const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors")


const app = express();
app.use(cors())
const dataFilePath = path.join(__dirname, "db.json");

app.use(express.json()); // Middleware to parse JSON requests

// Utility function to read/write data to db.json
const getData = () => JSON.parse(fs.readFileSync(dataFilePath, "utf-8"))["products"];
const saveData = (data) => fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf-8");

// READ: Get all data
app.get("/products", (req, res) => {
    const data = getData();
    res.send(data);
});

// CREATE: Add a new entry
app.post("/products", (req, res) => {
    const newItem = req.body; // Assuming the client sends a JSON object
    const data = getData();
    data.push(newItem); // Push the new item to the array
    saveData(data);
    res.status(201).send(newItem);
});

// READ: Get a single entry by ID (assuming each entry has a unique `id`)
app.get("/:id", (req, res) => {
    const id = req.params.id;
    const data = getData();
    const item = data.find((entry) => entry.id === id);

    if (!item) {
        return res.status(404).send({ message: "Item not found" });
    }
    res.send(item);
});

// UPDATE: Update an entry by ID
app.put("/products/:id", (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    const data = getData();
    const index = data.findIndex((entry) => entry.id === id);

    if (index === -1) {
        return res.status(404).send({ message: "Item not found" });
    }

    data[index] = { ...data[index], ...updatedItem }; // Merge updates into existing object
    saveData(data);
    res.send(data[index]);
});

// DELETE: Remove an entry by ID
app.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    const data = getData();
    const filteredData = data.filter((entry) => entry.id !== id);

    if (filteredData.length === data.length) {
        return res.status(404).send({ message: "Item not found" });
    }

    saveData(filteredData);
    res.status(204).send(); // 204 No Content for a successful deletion
});

app.listen(4000, () => console.log("JSON server running on 4000"));
