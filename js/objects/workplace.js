// User
const userRegister = {
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password123",
  age: 19,
};
// You may skip EX1 - Ex 4 and do Ex5 if you are already
//Ex1:  Add a condition to check if the user is at least 18 years old. If they are, log "Access Granted". If not, log "Access Denied".
//Ex2:  Check both the user's name and age. Log "Logged In and Access Granted" if both conditions are true, and log the appropriate message if either one is false.
// Ex3:  Modify the condition so that the comparison is case-insensitive (e.g., "john doe" or "JOHN DOE" should still log the user in).
//Ex4 Question: Why is it important to use trim() when comparing strings? I'm gonna explain this one don't do it if is hard

//Ex5:Advanced Challanges make those Ex(s) in one program

if ( userRegister.age >= 18 && userRegister.name == "John Doe")
  {
    if(userRegister.name.toLowerCase() == "john doe")
      {
       console.log("Welcome, you are logged in");
    }
  }
else
{
  console.log("Access Denied because of your age or name does not match");
}
  
    
