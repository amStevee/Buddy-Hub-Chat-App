import userRepo from "./users.repository.js";

async function createUser(data) {
  const result = await userRepo.createUser(data);
  return result;
}

async function findUser(query, currentUserId) {
  const result = await userRepo.findByEmailorPhone(query);
  if (!currentUserId) return result;
  return result.filter((user) => user.id !== currentUserId);
}

async function updateUser(userId, data) {
  const result = await userRepo.updateUser(userId, data);
  return result;
}

async function deleteUser(userId) {
  const result = await userRepo.deleteUserById(userId);
  return result;
}

export default {
  createUser,
  findUser,
  updateUser,
  deleteUser,
};
