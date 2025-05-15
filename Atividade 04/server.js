const http = require('http');
const fs = require('fs');
const path = require('path');
const Users = require('./public/modules/Users');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/' || url === '/index.html') {
    serveFile(path.join(PUBLIC_DIR, 'index.html'), 'text/html', res);
  }

  else if (url === '/users') {
    const users = new Users(path.join(PUBLIC_DIR, 'data', 'users.txt'));;
    const top = users.getSortedUsers().slice(0, 5);
    const html = `
      <html>
        <head>
          <meta charset="UTF-8">
          <link rel="stylesheet" href="/css/style.css">
          <title>Usuários</title>
        </head>
        <body>
          <h1>Top 5 Usuários</h1>
          <ul>${top.map(n => `<li>${n}</li>`).join('')}</ul>
          <a href="/">Voltar</a>
        </body>
      </html>
    `;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }

  else {
    const filePath = path.join(PUBLIC_DIR, url);
    const ext = path.extname(filePath);
    const type = ext === '.css' ? 'text/css' : 'text/html';

    fs.exists(filePath, (exists) => {
      if (exists) {
        serveFile(filePath, type, res);
      } else {
        res.writeHead(404);
        res.end('<h1>404 - Página não encontrada</h1>');
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

function serveFile(filePath, contentType, res) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error("Erro ao ler o arquivo:", filePath);
        console.error(err);  // Mostra o erro real
        res.writeHead(500);
        res.end('Erro interno no servidor');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  }


