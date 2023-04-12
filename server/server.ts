const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/to-do-list', (req:any, res:any, next:any) => {
  const toDoItems = readToDo();
  if (toDoItems) {
    res.send(toDoItems);
  } else {
    res.status(500).send('Error');
  }
});





server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function readToDo(){
 const dbRaw = fs.readFileSync('./server/db.json')
  const toDoItems = JSON.parse(dbRaw).toDoItems
  return toDoItems
}

