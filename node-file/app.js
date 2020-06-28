const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');

app.set('view engine','ejs');
app.set(express.static(path.join(__dirname,'views')));

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '0.0.0.0';

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST || '172.17.0.2',
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || 'password',
	database: process.env.MYSQL_DATABASE || 'newtest'
});


app.get('/',(req,res,next) => {
    db.query(`select cases as cases from states where id=1`,(err,result) => {
        if(err)
            throw err;
        res.render('index',{
            cases : result[0].cases
        });
	})
	
    
})

db.connect((err) => {
	if (err) {
		console.error('error connecting mysql: ', err);
	} else {
		console.log('mysql connection successful');
		app.listen(PORT, HOST, (err) => {
			if (err) {
				console.error('Error starting  server', err);
			} else {
				console.log('server listening at port ' + PORT);
			}
		});
	}
});



