# PhoneBook
project consist of the front-end written in angular and the api.
## To run the web api 

- Restore all nuget packages
- run migration
- `dotnet ef migrations add MyFirstMigration --context PhoneBookDbContext`
- `dotnet ef database update --context PhoneBookDbContext`
- angular folder container the front-end
