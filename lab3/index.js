var http = require("http");
//TODO - Use Employee Module here
var employees = require("./Employee");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json"); // Ensure JSON response by default

    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        } else if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.statusCode = 200;
            res.end(JSON.stringify(employees, null, 2));
        } else if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const names = employees
                .map(emp => `${emp.firstName} ${emp.lastName}`)
                .sort();
            res.statusCode = 200;
            res.end(JSON.stringify(names, null, 2));
        } else if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
            res.statusCode = 200;
            res.end(JSON.stringify({ total_salary: totalSalary }));
        } else {
            res.statusCode = 404;
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
        }
    }
})

server.listen(port, () => {
    console.log(`\nServer listening on port ${port}`);
    console.log(`Open the following links in your browser:`);
    console.log(`http://localhost:${port}/`);
    console.log(`http://localhost:${port}/employee`);
    console.log(`http://localhost:${port}/employee/names`);
    console.log(`http://localhost:${port}/employee/totalsalary`);
});
