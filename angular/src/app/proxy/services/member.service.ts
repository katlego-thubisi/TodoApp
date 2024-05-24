import type { MemberItemDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  apiName = 'Default';
  

  create = (input: MemberItemDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MemberItemDto>({
      method: 'POST',
      url: '/api/app/member',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/member/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, MemberItemDto[]>({
      method: 'GET',
      url: '/api/app/member',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
