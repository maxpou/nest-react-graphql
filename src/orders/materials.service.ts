import { Injectable } from '@nestjs/common';
import { Material } from './models/material.model';

@Injectable()
export class MaterialsService {
  private materials: Material[] = [
    { id: 1, name: 'Aluminium' },
    { id: 2, name: 'plywood' },
    { id: 3, name: 'Bamboo' },
    { id: 4, name: 'Plastic' },
  ];

  findById(id: number): Material {
    return this.materials.find((material) => material.id === Number(id));
  }

  findAll(): Material[] {
    return this.materials;
  }
}
