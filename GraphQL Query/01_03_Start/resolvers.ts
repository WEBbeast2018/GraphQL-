import {users} from './data.ts';


// TODO
// Add resolve to get single user


const resolvers = {
    getUsers: () => {
        return users;
    }
}


module.exports.resolvers = resolvers;