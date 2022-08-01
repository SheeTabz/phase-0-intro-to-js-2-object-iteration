const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (const element of myArray) {
  console.log(element);
}
const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: "10004"
  };

  for(const newObj in address){
    console.log(address[newObj]);
}
const userInfo = {
    firstName: "Avi",
    lastName: "Flombaum",
    company: {
      name: "Flatbook Labs",
      jobTitle: "Developer Apprentice",
    },
    friends: [
      {
        firstName: "Nancy",
        lastName: "Burgess",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Developer Apprentice",
        },
      },
      {
        firstName: "Corinna",
        lastName: "Jackson",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Lead Developer",
        },
      },
    ],
    projects: [
      {
        title: "Flatbook",
        description:
          "The premier Flatiron School-based social network in the world.",
      },
      {
        title: "Scuber",
        description:
          "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
      },
    ],
  };


// update(userInfo)




const users = {
    name : "John",
    street :{
        city : "San Francisco",
        postalCode : "CA",
    },
    age: "23",
}

const iterate=(target)=>{
    if (typeof target==='object') {
        for (const key in target) {
         iterate(target[key]);
        }
        
    }else{
        console.log(`hello ${target}`);
    }
}
iterate(users)
    