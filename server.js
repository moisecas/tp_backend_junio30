const http = require("http");

const server = http.createServer((req, res) => {
  const urlPath = req.url;
  if (urlPath === "/overview") { //si la url es /overview entonces... 
    res.end('Welcome');
  } else if (urlPath === "/api") { //si la url es /api entonces...
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ //stringify convierte un objeto en un string
        product_id: "xyz12u3",
        product_name: "NginX injector",
      })
    );
  } else { //si no es ninguna de las anteriores entonces...
    res.end("Successfully started a server");
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listening for request");
});



