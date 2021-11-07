/*

/**
 * @swagger
 * /api/employees:
 *    get:
 *      tags:
 *        - Employee
 *      description: Get All Employees
 *      responses:
 *        200:
 *          description: Success
 */

/**
 * @swagger
 * /api/employees:
 *    post:
 *      tags:
 *        - Employee
 *      parameters:
 *        - name: id
 *          description: Employee ID
 *          in: path
 *          required: true
 *          type: number
 *        - name: name
 *          description: Employee Name
 *          in: path
 *          required: true
 *          type: string
 *        - name: salary
 *          description: Employee Salary
 *          in: path
 *          required: true
 *          type: number
 *      description: Create Employees
 *      responses:
 *        200:
 *          description: Success
 */

/**
 * @swagger
 * /api/employees:
 *    put:
 *      tags:
 *        - Employee
 *      parameters:
 *        - name: id
 *          description: Employee ID
 *          in: path
 *          required: true
 *          type: number
 *        - name: name
 *          description: Employee Name
 *          in: path
 *          required: true
 *          type: string
 *        - name: salary
 *          description: Employee Salary
 *          in: path
 *          required: true
 *          type: number
 *      description: Update Employee
 *      responses:
 *        200:
 *          description: Success
 */

/**
 * @swagger
 * /api/employees/{id}:
 *    get:
 *      tags:
 *        - Employee
 *      parameters:
 *        - name: id
 *          description: Employee ID
 *          in: path
 *          required: true
 *          type: number
 *      description: Get employee by ID
 *      responses:
 *        200:
 *          description: Success
 *  
 */

/**
 * @swagger
 * /api/employees/{id}:
 *    delete:
 *      tags:
 *        - Employee
 *      parameters:
 *        - name: id
 *          description: Employee ID
 *          in: path
 *          required: true
 *          type: number
 *      description: Delete employee by ID
 *      responses:
 *        200:
 *          description: Success
 *  
 */

