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
  AlertService,
  DropdownMenuItem
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
      message: `Are you sure you wish to delete ${user.firstName} ${user.lastName}?`
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

  public getMenuItems(user: any): DropdownMenuItem[] {
    const menuItems: DropdownMenuItem[] = [];

    if (user.emailExistsOnMailingList) {
      menuItems.push({
        label: 'Remove from mailing list',
        action: () => {
          this.userService.removeFromMailingList(user.emailAddress).subscribe(
            (result: any) => {
              this.alertService.success(result.message);
            },
            (err: any) => {
              this.alertService.error(err.error.message);
            }
          );
        }
      });

      if (user.isEmailSubscribedToMailingList) {
        menuItems.push({
          label: 'Unsubscribe from mailing list',
          action: () => {
            this.userService.updateMailingListSubscription(user.emailAddress, {
              subscribed: false
            }).subscribe(
              (result: any) => {
                this.alertService.success(result.message);
              },
              (err: any) => {
                this.alertService.error(err.error.message);
              }
            );
          }
        });
      } else {
        menuItems.push({
          label: 'Resubscribe to mailing list',
          action: () => {
            this.userService.updateMailingListSubscription(user.emailAddress, {
              subscribed: true
            }).subscribe(
              (result: any) => {
                this.alertService.success(result.message);
              },
              (err: any) => {
                this.alertService.error(err.error.message);
              }
            );
          }
        });
      }
    } else {
      menuItems.push({
        label: 'Add to mailing list',
        action: () => {
          this.userService.addToMailingList(user).subscribe(
            (result: any) => {
              this.alertService.success(result.message);
            },
            (err: any) => {
              this.alertService.error(err.error.message);
            }
          );
        }
      });
    }

    if (!user.emailAddressVerified) {
      menuItems.push({
        label: 'Verify email address',
        action: () => {}
      });
    }

    menuItems.push(
      {
        label: 'Reset password',
        action: () => {
          this.userService.requestResetPasswordToken(user.emailAddress).subscribe(
            (result: any) => {
              this.alertService.success(result.message);
            },
            (err: any) => {
              this.alertService.error(err.error.message);
            }
          );
        },
        addSeparatorAfter: true
      },
      {
        label: 'Delete',
        action: () => {
          this.confirmDelete(user);
        }
      }
    );

    return menuItems;
  }
}
