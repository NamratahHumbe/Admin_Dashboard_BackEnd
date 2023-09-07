const express = require('express');
const router = express.Router();

const boardData = {
    columns: [
        {
            id: 1,
            title: "BACKLOG",
            cards: [
                {
                    id: 1,
                    title: "Database Setup",
                    description: "Firebase Integration"
                },
                {
                    id: 2,
                    title: "Data Flow",
                    description: "Setup Diagram with other developers"
                },
            ]
        },
        {
            id: 2,
            title: "TODO",
            cards: [
                {
                    id: 9,
                    title: "Data Table Page",
                    description: "Server side Pagination",
                }
            ]
        },
        {
            id: 3,
            title: "DOING",
            cards: [
                {
                    id: 10,
                    title: "Full Calendar Extension",
                    description: "Make new events and store in global states"
                },
                {
                    id: 11,
                    title: "Custom Kanban Board",
                    description: "Setup react-kanban dep within Dashboard as seperate page"
                }
            ]
        },
        {
            id: 4,
            title: "COMPLETED",
            cards: [
                {
                    id: 12,
                    title: "Vite Server Setup",
                    description: "Configure required modules and starters"
                },
                {
                    id: 13,
                    title: "Modular structre",
                    description: "Write css in form of modules to reduce the naming conflicts"
                },
                {
                    id: 14,
                    title: "Study structre",
                    description: "Write css in form of modules to set the study structre"
                }
            ]
        }
    ]
};

router.get('/board', (req, res) => {
    res.json(boardData);
});

module.exports = router;