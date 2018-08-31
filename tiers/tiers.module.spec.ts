import { TiersModule } from './tiers.module';

describe('TiersModule', () => {
  let tiersModule: TiersModule;

  beforeEach(() => {
    tiersModule = new TiersModule();
  });

  it('should create an instance', () => {
    expect(tiersModule).toBeTruthy();
  });
});
