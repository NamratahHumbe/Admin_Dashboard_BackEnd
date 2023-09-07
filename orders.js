// backend/orders.js

const express = require('express');
const router = express.Router();

const ordersData = [
    {
        name: "Skatebnoard",
        type: "Illustration",
        items: 58,
        change: 290,
    },
    {
        name: "Language courses",
        type: "Illustration",
        items: 12,
        change: 72
    },
    {
        name: "Office Collaboration",
        type: "Illustration",
        items: 7,
        change: 70
    },
    {
        name: "Robot",
        type: "Illustration",
        items: 21,
        change: 15
    }
];

router.get('/orders', (req, res) => {
    res.json(ordersData);
});

module.exports = router;
