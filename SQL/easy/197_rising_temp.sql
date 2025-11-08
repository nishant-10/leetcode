-- https://leetcode.com/problems/rising-temperature
-- DATEDIFF(w1.recordDate, w2.recordDate) = 1 → pairs up consecutive days.
-- Example:

-- 2025-11-03  (today)
-- 2025-11-02  (yesterday)


-- Then WHERE w1.temperature > w2.temperature filters only the rising days.

-- We output w1.id — the id of the “today” record

SELECT w1.id
FROM Weather w1
JOIN Weather w2
  ON DATEDIFF(w1.recordDate, w2.recordDate) = 1
WHERE w1.temperature > w2.temperature;
