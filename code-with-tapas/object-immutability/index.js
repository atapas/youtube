try{
    console.log('We will learn about Object Mutability and Immutability');

    let user = {
        name: 'John',
        age: 25,
        country: 'USA',
        city: 'New York',
        email: 'john.doe@gmail',
        phone: '123-456-7890',
        address: '123 Main St.',
        zip: '12345',
        password: '12345678',
        isAdmin: true,
    };

    console.log('*** Mutate Object ***');

    // Read
    console.log(user['name']);

    // Object is extensible?
    console.log(Object.isExtensible(user));

    // Add a property to the user object
    user['spouse'] = 'Jane';
    console.log(user);

    // Update a property of the user Object
    user['name'] = 'John Doe';
    console.log(user);

    // Delete a property of the user Object
    delete user['isAdmin'];
    console.log(user);

    // Use the defineProperty()
    Object.defineProperty(user, 'isMaintainer', {
        value: false,
        writable: true,
        enumerable: true,
        configurable: true,
    });

    console.log(user);

    console.log('*** Object Prevent Extensible ***');

    // Making this object as not extensible
    Object.preventExtensions(user);

    // Object is extensible?
    console.log(Object.isExtensible(user));

    // What does it mean if the object is not extensible?
    // It means, You can not create a new property to an object. 
    // However, you are allowed to update an existing property or dlete one!

    user['isAdmin'] = true;
    console.log(user);

    // Uncomment the below code of Use the defineProperty()
    /*Object.defineProperty(user, 'isSuperMan', {
        value: false,
        writable: true,
        enumerable: true,
        configurable: true,
    });
    console.log(user);*/

    user['address'] = '124 main St.';
    console.log(user);
    delete user['isAdmin'];

    console.log('*** Object Sealing ***');
    // Seal the object
    Object.seal(user);

    // It means you can not create or delete a property 
    // to the object. However, you are allowed to update an 
    // existing property!
    user['salary'] = 123456;
    console.log(user);
    delete user['name'];
    console.log(user);
    user['name'] = 'Mr. John Doe';
    console.log(user);

    console.log('*** Object Freezing ***');
    // freeze the object
    let frozenObj = Object.freeze(user);
    console.log(frozenObj === user);
    user['salary'] = 123456;
    delete user['name'];
    user['name'] = 'Jill Doe';
    console.log(user);

    // Check if an object is frozen
    console.log(Object.isFrozen(user));

    // Arrays can be frozen too
    let humanSenses = ['touch', 'sight', 'hearing', 'smell', 'taste'] ;
    Object.freeze(humanSenses);
    humanSenses.length = 0;
    // humanSenses.push('walking');
    console.log(humanSenses);

    // Shallow vs Deep Freeze 
    let config = {
        'db': 'postgresql',
        'host': 'acme-ind.com',
        'password': 'fake-password',
        'port': 512,
        'admin': {
          'name': 'Tapas',
          'rights': ['create', 'update', 'delete']
        }
    }

    Object.freeze(config);
    config.db = 'oracle';
    config.admin.name = 'Someone';
    console.log(config);

    // To deep freeze use recursion
    let deepFreeze = (obj) => {
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'object') {
                deepFreeze(obj[key]);
            }
        });
        Object.freeze(obj);
    }
    deepFreeze(config);
    config.db = 'mysql';
    config.admin.name = 'Someone Else';
    console.log(config);


} catch(err) {
    console.error('Error: ', err.message);
}



