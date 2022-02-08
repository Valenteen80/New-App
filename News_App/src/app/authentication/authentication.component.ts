import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Profile } from '../interfaces/profile';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  constructor(public auth: AuthService) {}

  public profile: Profile = {};
  public valueAttributeImgAlt: string = 'photo';

  ngOnInit(): void {
    this.getProfile();
  }

  public loginRedirect(): void {
    this.auth.loginWithRedirect();
  }

  public logout(): void {
    this.auth.logout();
  }

  public getProfile(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
    });
  }
}
