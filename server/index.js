const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// =============================================================================
// ROUTES
// =============================================================================

app.get("/api")

app.get("/api", (req,res) => {
    res.json({ message: "Server says hi! :D "});
});













app.listen(PORT, () => console.log(`I'm listening on ${PORT} -->> http://localhost:3001`));