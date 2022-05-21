const data = require("./data.json");

const PORT = 5000;

const app = require("express")();
app.use(require("cors")());

app.get("/", (req, res) => {
	res.send(data);
});

app.get("/:isbn", (req, res) => {
	const { isbn } = req.params;

	const book = data.find((el) => el.isbn == isbn);

	res.send(book);
});

app.listen(PORT, () =>
	console.log(`Listening for requests @ http://localhost:${PORT}`)
);
