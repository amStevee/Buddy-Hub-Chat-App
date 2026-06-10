import userRepo from "./users.repository.js";

async function createUser(data) {
  const result = await userRepo.createUser(data);
  return result;
}

export default {
  createUser,
};
