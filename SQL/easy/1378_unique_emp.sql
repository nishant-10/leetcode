-- //https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier
SELECT u.unique_id, e.name
FROM EmployeeUNI u
RIGHT JOIN Employees e
ON u.id = e.id;