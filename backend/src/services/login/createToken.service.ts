import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { TLoginRequest } from '../../interfaces/login.interface';
import { AppError } from '../../errors/AppError';
import { User } from '../../entities';

export const createTokenService = async (
  payload: TLoginRequest
): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOne({
    where: { email: payload.email }
  });
  if (!user) {
    throw new AppError('Invalid credentials', 401);
  }

  const passwordValidate: boolean = await compare(
    payload.password,
    user.password
  );

  if (!passwordValidate) {
    throw new AppError('Invalid credentials', 401);
  }

  const token = sign(
    {
      userName: user.full_name,
      userId: user.id
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: '2d',
      subject: user.id.toString()
    }
  );

  return token;
};
