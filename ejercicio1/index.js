var http = require('http');
var fs=require('fs');

http.createServer((req, res) => {

    let file = '.' + req.url;
    let fecha = new Date();
    fecha = fecha.toLocaleDateString("es-Ar", {year: 'numeric', month: 'numeric', day: 'numeric', hour:'numeric', minute:'numeric', second: 'numeric' });

    if (req.url === '/log.txt') {
        let log = fecha + " - Status: 403 - " + req.url + "\n";
        fs.writeFile('log.txt', log, {encoding: 'utf8', flag: 'a'}, (error) => {
            if (error) throw error; 
            
            res.writeHead(403, {'Content-Type': 'text/html'});
            res.write("<h1>Ud. no tiene permiso para realizar esta accion.</h1>");
            res.end();
        });
    }else{
        fs.readFile(file, 'utf8', (err, data) => {
            if(err){
                let log = fecha + " - Status: 400 - " + req.url + "\n";
                fs.writeFile('log.txt', log, {encoding: 'utf8', flag: 'a'}, (error) => {
                    if (error) throw error; 
                    console.log('The file has been saved!');
                    
                    res.writeHead(400, {'Content-Type': 'text/plain'});
                    res.end(err.Error);
                });
            } else {
                let log = fecha + " - Status: 200 - " + req.url + "\n";
                fs.writeFile('log.txt', log, {encoding: 'utf8', flag: 'a'}, (error) => {
                    if (error) throw error; 
                    console.log('The file has been saved!');
                    
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end(data);
                });
            }
        });

    }

}).listen(8080);