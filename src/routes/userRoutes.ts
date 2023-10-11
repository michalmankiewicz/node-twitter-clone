import { Router } from "express";

const router = Router();

// Create User
router.post("/", (req, res) => {
  res.status(501).json({ error: "Not impplemented" });
});

// List Users
router.get("/", (req, res) => {
  res.status(501).json({ error: "Not impplemented" });
});

// Get one User
router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.status(501).json({ error: `Not impplemented ${id}` });
});

// Update User
router.put("/:id", (req, res) => {
  const { id } = req.params;

  res.status(501).json({ error: `Not impplemented ${id}` });
});

export default router;
