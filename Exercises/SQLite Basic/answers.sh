"select * from students"
"select name from students"
"select * from students where Age > 30"
"select Name from students where Age >= 30 and Gender = 'F'"
"select Points from students where Name = "Alex""
"INSERT INTO students(Name,Age,Gender,Points) VALUES ("Bassel","20","M",500)"
"UPDATE students SET points = 400 where Name = "Basma""
"UPDATE students SET points = 150 where Name = "Alex""
"INSERT INTO graduates (Name,Age,Gender,Points) VALUES ((SELECT Name FROM students where Name = "Layal"),(SELECT Age FROM students where Name = "Layal"),(SELECT Gender FROM students where Name = "Layal"),(SELECT Points FROM students where Name = "Layal"))"
"UPDATE graduates SET Graduation = "16-1-2020" WHERE Name = "Layal""
"DELETE FROM students WHERE Name = "Layal""
