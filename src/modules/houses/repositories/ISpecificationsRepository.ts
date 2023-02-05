import { ISpecificationDTO } from "@modules/houses/dtos/SpecificationDTO";
import { Specification } from "@modules/houses/model/Specification";

interface ISpecificationsRepository{
 findByName(name: string): Specification;
 list(): Specification[];
 create({name, description}:ISpecificationDTO): void;
}

export { ISpecificationsRepository };

