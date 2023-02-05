import { ICategoriesRepository } from "@modules/houses/repositories/ICategoryRepository";
import { Category } from "@prisma/client";


class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository){}

  execute():Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
