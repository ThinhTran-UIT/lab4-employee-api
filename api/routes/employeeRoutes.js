module.exports = (app, mysqlConnection) => {
        
    app
        .route("/api/employees")

        //Get all employees
        .get((req, res) => {
            mysqlConnection.query('SELECT * FROM Employee', (err, rows, fields) => {
                if (!err)
                    res.send(rows);
                else
                    console.log(err);
            })
        })

        //Insert an employees
        .post((req, res) => {
            let emp = req.body;
            var sql = "SET @EmpID = ?;SET @Name = ?;SET @Salary = ?; \
            CALL EmployeeAddOrEdit(@EmpID,@Name,@Salary);";
            mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.Salary], (err, rows, fields) => {
                if (!err)
                    rows.forEach(element => {
                        if(element.constructor == Array)
                        res.send('Inserted employee id : '+element[0].EmpID);
                    });
                else
                    console.log(err);
            })
        })

        //Update an employees
        .put((req, res) => {
            let emp = req.body;
            var sql = "SET @EmpID = ?;SET @Name = ?;SET @Salary = ?; \
            CALL EmployeeAddOrEdit(@EmpID,@Name,@Salary);";
            mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.Salary], (err, rows, fields) => {
                if (!err)
                    res.send('Updated successfully');
                else
                    console.log(err);
            })
        });

    app
        .route("/api/employees/:id")

        //Get an employees by ID
        .get((req, res) => {
            mysqlConnection.query('SELECT * FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
                if (!err)
                    res.send(rows);
                else
                    console.log(err);
            })
        })

        //Delete an employees by ID
        .delete((req, res) => {
            mysqlConnection.query('DELETE FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
                if (!err)
                    res.send('Deleted successfully.');
                else
                    console.log(err);
                })
        });
        

    
}
