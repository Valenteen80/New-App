import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  constructor(public authService: AuthService) {}

  public profile: Profile = {};
  public valueAttributeAvatar: string = 'photo';

  @Output() public onAddAuth: EventEmitter<Profile> = new EventEmitter();

  ngOnInit(): void {
    this.useProfile();
  }

  public loginRedirect(): void {
    this.authService.loginWithRedirect();
  }

  public logout(): void {
    this.authService.logout();
  }

  public getProfile(): Observable<Profile> {
    return this.authService.user$;
  }

  public useProfile(): void {
    this.getProfile().subscribe((profile) => {
      this.profile = profile;
      this.inputEvent();
    });
  }

  public inputEvent(): void {
    this.onAddAuth.emit(this.profile);
  }
}
