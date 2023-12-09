const User = require("../models/user-model");
const Location = require("../models/location-model")
const faker = require('faker');

const generateFakeUsers = async (n) => {
    const users = [];

    for (let i = 1; i <= n; i++) {
        const username = faker.name.firstName() + " " + faker.name.lastName();
        const password = faker.internet.password();
        const rating = faker.datatype.float({ max: 10, precision: 0.01 });
        const pfp =  faker.image.avatar(100, 100, 'png', true, true);
        const location = {
            latitude: String(faker.datatype.float({ max: 360, precision: 0.0001 })),
            longitude: String(faker.datatype.float({ max: 360, precision: 0.0001 }))
        };
        const email = faker.internet.email();

        users.push({
            username,
            password,
            rating,
            pfp,
            location,
            email
        });
    }
    try {
        
        await User.insertMany(users);
        console.log(`${users.length} fake users inserted successfully.`);
    } catch (error) {
        console.error('Error inserting fake users:', error);
    }
};

const generateFakeLocations = async (n) => {
    const locations = [];

    for (let i = 1; i <= n; i++) {
        const name = faker.company.companyName();
        const description = faker.lorem.sentence();
        const photo = faker.image.image();
        const rating = faker.datatype.float({ max: 10, precision: 0.01 });
        const latitude = faker.datatype.float({ max: 360, precision: 0.0001 });
        const longitude = faker.datatype.float({ max: 360, precision: 0.0001 });
        const radius = faker.datatype.float({ max: 10, precision: 0.01 });
        const benefits = Array.from({ length: faker.datatype.number({ min: 1, max: 5 }) }, () => faker.lorem.word());

        locations.push({
            name,
            description,
            photo,
            rating,
            benefits,
            location: {
                latitude,
                longitude,
                radius,
            },
        });
    }

    try {
        await Location.insertMany(locations);
        console.log(`${locations.length} fake locations inserted successfully.`);
    } catch (error) {
        console.error('Error inserting fake locations:', error);
    }
};



module.exports = {generateFakeUsers, generateFakeLocations}
