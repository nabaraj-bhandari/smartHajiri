const express = require("express");
const Log = require("../models/Log");

const router = express.Router();

// Get all logs (READ)
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find().sort({ timestamp: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new log (CREATE)
router.post("/", async (req, res) => {
  const { uid } = req.body;

  if (!uid) {
    return res.status(400).json({ message: "UID is required" });
  }

  try {
    const newLog = new Log({ uid });
    await newLog.save();

    // Send real-time update to clients
    req.io.emit("new-log", newLog);

    res.status(201).json(newLog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an existing log (UPDATE)
router.put("/:id", async (req, res) => {
  const { uid } = req.body;

  if (!uid) {
    return res.status(400).json({ message: "UID is required" });
  }

  try {
    const updatedLog = await Log.findByIdAndUpdate(
      req.params.id,
      { uid },
      { new: true } // Returns the updated document
    );

    if (!updatedLog) {
      return res.status(404).json({ message: "Log not found" });
    }

    res.json(updatedLog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete an RFID log by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLog = await Log.findByIdAndDelete(id);

    if (!deletedLog) {
      return res.status(404).json({ message: "Log not found" });
    }

    // Emit delete event to all connected clients
    req.io.emit("delete-log", id);

    res.json({ message: "Log deleted successfully", id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
