# Challenge 3

Using raw data to understand how data is joined between
different entities. These entities are normally represented as
structured data in a relation or NoSQL database.

Here, we will load records into memory and run the following
scenarios.

## Scenario 1 - Inner join

Given the following two arrays, return an array where there is atleast one match in each array.

### Entity : User

| Id  | DisplayName     | Account Id         |
| --- | --------------- | ------------------ |
| 1   | Some Name       | Some Acct Id       |
| 2   | Some other nane | Some other account |

### Entity : Post

| Id  | OwnerUserId | Title                        |
| --- | ----------- | ---------------------------- |
| 1   | 1           | Really Cool Stuff            |
| 2   | 7           | Some other really cool stuff |
