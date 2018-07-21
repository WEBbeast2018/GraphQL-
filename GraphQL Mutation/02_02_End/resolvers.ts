import {users} from './data.ts';

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
    },
    updateUser: ({id, name}) => {
        console.log('updateUser', name );
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                // Found our user go update
                users[i].name = name;
                return users[i];
            }
        }
    }
};


module.exports.resolvers = resolvers;