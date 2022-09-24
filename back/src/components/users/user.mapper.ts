import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

export const userDto = (data: User): UserDto => {
  const { id, email, firstName, lastName, description } = data;

  const userDto: UserDto = { id, email, firstName, lastName, description };
  return userDto;
};
