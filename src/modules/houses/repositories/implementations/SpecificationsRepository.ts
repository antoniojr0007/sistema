import { ISpecificationDTO } from "@modules/houses/dtos/SpecificationDTO";
import { Specification } from "@modules/houses/model/Specification";
import { ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.specifications = []
  }


  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ISpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, { name, description, createdAt: new Date() });
    this.specifications.push(specification);

  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) => specification.name === name);
    return specification;
  }

}

export { SpecificationsRepository };

