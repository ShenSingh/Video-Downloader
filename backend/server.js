// server.js
const express = require('express');
const cors = require('cors');
const downloadRoutes = require('./routes/downloadRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use('/api', downloadRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
