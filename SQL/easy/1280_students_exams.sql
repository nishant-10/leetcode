-- https://leetcode.com/problems/students-and-examinations
SELECT 
    s.student_id,
    s.student_name,
    sub.subject_name,
    COUNT(e.subject_name) AS attended_exams
FROM Students s
CROSS JOIN Subjects sub
-- first cross join students ans subject to get all possible combinations
LEFT JOIN Examinations e
-- then left join exams to get records to even those students who didnt attend exams
    ON e.student_id = s.student_id
    AND e.subject_name = sub.subject_name
GROUP BY 
    s.student_id,
    s.student_name,
    sub.subject_name
-- we want a row of a student, its and subject name, and its counts, thats why all 3 in group by
ORDER BY 
    s.student_id,
    sub.subject_name;
-- first sort student_id then once that is done then subject names of group of each student record

