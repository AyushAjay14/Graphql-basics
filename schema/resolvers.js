const { UserList } = require("../fakeData");
const _ = require("lodash");
const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = Number(args.id);
      const user = _.find(UserList, { id: id });
      return user;
    },
  },
  Mutation: {
    createuser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },
  },
};
module.exports = { resolvers };
