const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json()); 

const groups = []; 

app.post('/groups', (req, res) => {

    try {

        const data = req.body;

        if (!data.groupName) {
            return res.status(400).json({ error: "Invalid input. 'groupName' and 'admin' fields are required." });
        }

        if (!data.admin || !data.admin.name || !data.admin.email) {
            return res.status(400).json({ error: "Invalid input. 'groupName' and 'admin' fields are required." });
        }

        const groupId = groups.length + 1; 
        group = {
            groupId,
            groupName: data.groupName,
            admin: {
                name: data.admin.name,
                email: data.admin.email
            },
            createdAt: new Date().toISOString()
        }

        groups.push(group);

        res.status(201).json(group);
    }

 catch (error) {
    res.status(500).json({ error: "An internal error occurred ,try again" });
}
});


app.listen(PORT, () => {
    console.log(`The server is running on port ${8080}`);
});

