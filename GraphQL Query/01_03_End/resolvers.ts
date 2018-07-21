import {users} from './data.ts';

const resolvers = {
    getUsers:() =>{
        return users;
    },
    getUser:(id) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id.id) {
                return users[i];
            }
        }
    }
};


module.exports.resolvers = resolvers;