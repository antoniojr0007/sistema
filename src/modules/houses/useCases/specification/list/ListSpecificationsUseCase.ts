import { Specification } from "@modules/houses/model/Specification";
import { SpecificationsRepository } from "@modules/houses/repositories/implementations/SpecificationsRepository";



class ListSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationsRepository){}

  execute():Specification[] {
    const specifications = this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
