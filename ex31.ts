// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

const emptyUserNames:string[]=[];
let userNames:string[]=['admin','Azra Bano','Lubna Gondal','Bisma Gondal','Unzila Gondal'];

function greetUsers(usernames:string[]):void{
    if (usernames.length===0){
        console.log('We need to find some users!');return;
    }
    for (const username of usernames){
        if (username.toLowerCase()=== 'admin'){
            console.log('Hello admin, would you like to see a status report?');
        }else{
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
console.log(`For non empty username:\n`)
greetUsers(userNames);

userNames=[];
console.log(`\n\n For empty username:\n`)
greetUsers(userNames);
export{};


