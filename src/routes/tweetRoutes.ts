import { Router } from "express";

const router = Router();

// Create Tweet
router.post("/", (req, res) => {
  res.status(501).json({ error: "Not impplemented" });
});

// List Tweet
router.get("/", (req, res) => {
  res.status(501).json({ error: "Not impplemented" });
});

// Get one Tweet
router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.status(501).json({ error: `Not impplemented ${id}` });
});

// Update tweet
router.put("/:id", (req, res) => {
  const { id } = req.params;

  res.status(501).json({ error: `Not impplemented ${id}` });
});

// Delete tweet
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.status(501).json({ error: `Not impplemented ${id}` });
});

export default router;
