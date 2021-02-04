import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getById(id: string): Promise<User> {
    return this.userRepository.findOne({ id: parseInt(id) });
  }

  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
