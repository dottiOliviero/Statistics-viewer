import { Component, OnInit, Input } from '@angular/core';
import { WindowRefService, ICustomWindow  } from '../service/window-ref.service';
import { AuthService } from '../service/auth.service';
import { AuthGuardService } from '../service/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  private window: ICustomWindow;
  public show = false;

  public showExplanation = false;


constructor ( public authService: AuthService,
              public authGuardService : AuthGuardService,
              public router: Router,
              public windowRef: WindowRefService) {
      this.window = windowRef.nativeWindow;
  }

  ngOnInit() {
  }

  explain(){
    this.showExplanation = true;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    }

}
