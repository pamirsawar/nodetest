import { Router } from "express";

import Transaction from "../Models/Transaction.js";

const router = Router();

router.post('/', async (req, res) => {

    const { amount, description, date } = req.body;

    const transaction = new Transaction({
        amount,
        description,
        date
    });

    await transaction.save();
    res.json({ message: "success" });
});

router.get('/', async (req, res) => {
    const transaction = await Transaction.find({}).sort({ createdAt: -1 });
    res.json({ data: transaction });
    // console.log('transaction', transaction);
});

export default router;