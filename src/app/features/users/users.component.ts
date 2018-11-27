import {
  Component,
  OnInit
} from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';

import {
  ConfirmAnswerType,
  ConfirmService,
  ConfirmAnswer,
  AlertService
} from '@giftdibs/ux';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[];

  constructor(
    private alertService: AlertService,
    private confirmService: ConfirmService,
    private userService: UserService
  ) { }

  public ngOnInit(): void {
    this.userService.getAll().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (err: any) => {
        this.alertService.error(err.error.message);
      }
    );
  }

  public confirmDelete(user: User): void {
    this.confirmService.confirm({
      message: 'Are you sure?'
    }, (answer: ConfirmAnswer) => {
      if (answer.type === ConfirmAnswerType.Okay) {
        this.userService.remove(user.id).subscribe(
          () => {
            this.alertService.success('User successfully deleted.');
          },
          (err) => {
            this.alertService.error(err.error.message);
          }
        );
      }
    });
  }
}
