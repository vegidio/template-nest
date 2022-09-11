import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    findOneById = (id: number): Promise<User> => User.findOneBy({ id });

    findOneByEmail = (email: string): Promise<User> => User.findOneBy({ email });
}
