import { Builder, BuilderConfiguration, BuilderContext, BuildEvent } from '@angular-devkit/architect';
import { from, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StartStorybookSchema } from './schema';

import storyBookOptions from '../options';

export default class StartStorybookBuilder implements Builder<StartStorybookSchema> {
  constructor(private context: BuilderContext) {}

  run(builderConfig: BuilderConfiguration<Partial<StartStorybookSchema>>): Observable<BuildEvent> {
    console.log('OK');

    return of(null).pipe(map(() => ({ success: true })));
  }
}
