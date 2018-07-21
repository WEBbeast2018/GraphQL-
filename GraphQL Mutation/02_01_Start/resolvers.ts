import {users} from './data.ts';


// TODO
// Add resolver to create user
const resolvers = {
    getUsers: () => {
        console.log('getUsers');
        return users;
    },
    getUser: (id) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                return users[i];
            }
        }
    }
};


module.exports.resolvers = resolvers;