const users = [];
const addUser = ({ socket_id, name, user_id, room_id }) => {
    const exist = users.find(user => user.room_id === room_id &&
        user.user_id === user_id);

    if (exist) {
        return { error: 'user already here' }
    }
    else {
        const user = { socket_id, name, user_id, room_id };
        users.push(user);
        return { user };
    }
}

module.exports = { addUser }