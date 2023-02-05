import { ICategoriesRepository } from "@modules/houses/repositories/ICategoryRepository";


interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase{
  constructor(private categoriesRepository: ICategoriesRepository){}

  execute({name, description}:IRequest): void{
    const categoryAlreadyExits = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExits) {
      throw new Error(`Category with name ${name} already exists`);
    }

    this.categoriesRepository.create({name, description});

  }
}

export { CreateCategoryUseCase };

