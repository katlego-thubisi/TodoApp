import { AuthService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '@proxy/services';
import { MemberItemDto } from '@proxy/services/dtos';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  memberItem: MemberItemDto;
  memberList: MemberItemDto[];

  constructor(private authService: AuthService, private memberService: MemberService) {}

  ngOnInit() {
    this.memberService.getList().subscribe(result => {
      this.memberList = result;
    });
  }

  create() {
    this.memberService.create(this.memberItem).subscribe(result => {
      this.memberItem = result;
    });
  }

  update() {}

  login() {
    this.authService.navigateToLogin();
  }
}
