import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { ResponseTransformInterceptor } from 'src/common/interceptors/response-transform.interceptor';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    @UseInterceptors(new ResponseTransformInterceptor())
    findAll(@Query() filterUserDto: FilterUserDto) {
        return this.usersService.findAll();
    }

    @Get(':id')
    @UseInterceptors(new ResponseTransformInterceptor())
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}
