import { StaticfeesModule } from './staticfees.module';

describe('StaticfeesModule', () => {
  let staticfeesModule: StaticfeesModule;

  beforeEach(() => {
    staticfeesModule = new StaticfeesModule();
  });

  it('should create an instance', () => {
    expect(staticfeesModule).toBeTruthy();
  });
});
