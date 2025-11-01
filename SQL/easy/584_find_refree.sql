-- Customer =
-- | id | name | referee_id |
-- | -- | ---- | ---------- |
-- | 1  | Will | null       |
-- | 2  | Jane | null       |
-- | 3  | Alex | 2          |
-- | 4  | Bill | null       |
-- | 5  | Zack | 1          |
-- | 6  | Mark | 2          |
-- Find the names of the customer that are either:

-- referred by any customer with id != 2.
-- not referred by any customer.
-- # Write your MySQL query statement below
SELECT name from Customer where referee_id IS NULL OR referee_id != 2;