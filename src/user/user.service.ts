import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    findOneByEmail = (email: string): Promise<User> => User.findOneBy({ email });
}
