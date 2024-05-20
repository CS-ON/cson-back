import { Test, TestingModule } from '@nestjs/testing';
import { BusinessEmployeeController } from '../business-employee.controller';

describe(BusinessEmployeeController.name, () => {
  let controller: BusinessEmployeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessEmployeeController],
    }).compile();

    controller = module.get<BusinessEmployeeController>(
      BusinessEmployeeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
