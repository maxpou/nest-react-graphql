import { Injectable } from '@nestjs/common';
import { Company } from './models/company.model';

@Injectable()
export class CompaniesService {
  private companies: Company[] = [
    { id: 1, name: 'Herman Miller' },
    { id: 2, name: 'Maxence Poutord' },
    { id: 3, name: 'Bart Simpson Inc.' },
  ];

  findById(id: number): Company {
    return this.companies.find((company) => company.id === Number(id));
  }

  findAll(): Company[] {
    return this.companies;
  }
}
