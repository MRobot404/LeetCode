SELECT eu.unique_id, e.name
FROM employees e left join employeeuni eu ON e.id = eu.id;