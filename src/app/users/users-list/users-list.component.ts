import {Component, OnInit} from '@angular/core';
import {User} from "../../_models/user";
import {UserService} from "../../_services/user.service";
import {first} from "rxjs";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  page = 1;
  pageSize = 4;
  usersLength = 0;
  paginatedUsers: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService
      .list()
      .pipe(first())
      .subscribe( (u) => {
        this.users = u;
        this.usersLength = u.length;
      })
  }

}
