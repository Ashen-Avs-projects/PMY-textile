import { Component } from '@angular/core';
import {Questions} from "../../../shared/models/Questions";
import {QuestionsService} from "../../../services/quections.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../../../shared/models/User";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-login-page-admin',
  templateUrl: './login-page-admin.component.html',
  styleUrls: ['./login-page-admin.component.css']
})
export class LoginPageAdminComponent {

  users: User[] = [];
  constructor(private userService:UserService, activatedRoute: ActivatedRoute,private router: Router) {
    let userObservalbe:Observable<User[]>;
    activatedRoute.params.subscribe((params) => {
      userObservalbe = userService.getAll();

      userObservalbe.subscribe((serverItems) => {
        this.users = serverItems;

      })
    })
  }


  ngOnInit(): void {
  }

}
