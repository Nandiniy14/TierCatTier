import { CatTierModule } from './cat-tier.module';

describe('CatTierModule', () => {
  let catTierModule: CatTierModule;

  beforeEach(() => {
    catTierModule = new CatTierModule();
  });

  it('should create an instance', () => {
    expect(catTierModule).toBeTruthy();
  });
});
