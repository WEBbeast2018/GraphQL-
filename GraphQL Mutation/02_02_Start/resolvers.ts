import {users} from './data.ts';

// TODO
// Add resolver to update user data

const resolvers = {
    getUsers: () => {
        console.log('getUsers');
        return users;
    },
    getUser: (id) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id.id) {
                return users[i];
            }
        }
    },
    addUser: ({id, name}) => {
        console.log('addUser', name);
        const newUser = { id: id, name : name};
        users.push(newUser);
        return newUser;
    }
};


module.exports.resolvers = resolvers;