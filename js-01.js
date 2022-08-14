let person = {
    Name: 'Viji',
    age: '25',
    address: {
        addressline1: '124Maun st',
        addressLine2: 'Apt #4',
        city: 'NJ',
        zip: '09555'
    },
    emailAddress: 'vij@test.com',
    interests: ['sports','reading','cooking']
    };
    console.log('Name of person: '+ person.Name);
    console.log('Address of person is:'+ JSON.stringify(person.address));
    console.log('JSON is'+ JSON.stringify(person));