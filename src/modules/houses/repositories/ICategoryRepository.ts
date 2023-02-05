import { ICreateCategoryDTO } from "@modules/houses/dtos/CategoryDTO";
import { Category } from "@modules/houses/model/Category";

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository };

