import {users} from './data.ts';

const resolvers = {
    getUsers:() =>{
        return users;
    }
};


module.exports.resolvers = resolvers;