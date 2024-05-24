import { AuthService, PermissionService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { MemberService } from '@proxy/services';
import { MemberItemDto } from '@proxy/services/dtos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  get isAdmin(): boolean {
    return this.permissionService.getGrantedPolicy('AbpIdentity.Roles.Create');
  }

  memberItem: MemberItemDto = {
    accountNumber: '',
    fscaRegistrationNumber: '',
    id_Passport: '',
    investmentAmount: '',
    investmentPortfolio: '',
    policyNumber: '',
    name: '',
    surname: '',
    reasonForTransfer: '',
    taxNumber: '',
  };

  constructor(
    private authService: AuthService,
    private memberService: MemberService,
    private permissionService: PermissionService
  ) {}

  create() {
    this.memberService.create(this.memberItem).subscribe(result => {
      this.memberItem = {
        accountNumber: '',
        fscaRegistrationNumber: '',
        id_Passport: '',
        investmentAmount: '',
        investmentPortfolio: '',
        policyNumber: '',
        name: '',
        surname: '',
        reasonForTransfer: '',
        taxNumber: '',
      };
    });
  }

  update() {}

  login() {
    this.authService.navigateToLogin();
  }
}
