import httpStatus from 'http-status';
import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id

  // default password
  const isExistUser = User.findOne({ email: user?.email });
  if (!isExistUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'user email already exist');
  }

  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new ApiError(400, 'Failed to create ,Please try again registration');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
