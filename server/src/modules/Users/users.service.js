import userRepo from "./users.repository.js";

async function createUser(data) {
  const result = await userRepo.createUser(data);
  return result;
}

async function findUser(query) {
  const result = await userRepo.findByEmailorPhone(query);
  return result;
}

async function updateUser(userId, data) {
  const result = await userRepo.updateUser(userId, data);
  return result;
}

export default {
  createUser,
  findUser,
  updateUser,
};
