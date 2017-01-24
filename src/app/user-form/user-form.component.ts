import { Component } from '@angular/core';
import { User } from '../user.model';
import { CurrentUser } from '../current-user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})

export class UserFormComponent  {

  submitForm(name: string, age: number, alignment: string){
    CurrentUser.length = 0;
    CurrentUser.push(new User(name, age, alignment));
  }

}
