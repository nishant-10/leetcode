-- Write a solution to report the name and bonus amount of each employee with a bonus less than 1000.
SELECT emp.name, b.bonus  FROM Employee AS emp
LEFT JOIN Bonus as b ON
emp.empId = b.empId
WHERE b.bonus < 1000 OR b.bonus IS NULL;