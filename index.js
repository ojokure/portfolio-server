const server = require("./server");

const PORT = process.env.PORT || 500;

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
