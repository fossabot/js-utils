import { AsyncHook, createHook } from 'async_hooks';

import { isDebug } from './Env';
import { isNil, Optional } from './Maybe';

export interface TrackedResource {
  source: string;
  triggerAsyncId: number;
  type: string;
}

export type StackFilter = (stack: string) => string;

/**
 * Async resource tracker using  node's internal hooks.
 *
 * This probably won't work in a browser. It does not hold references to the resource, to avoid leaks.
 * Adapted from https://gist.github.com/boneskull/7fe75b63d613fa940db7ec990a5f5843#file-async-dump-js
 *
 * @public
 */
export class AsyncTracker {
  public filter: Optional<StackFilter>;
  private readonly hook: AsyncHook;
  private readonly resources: Map<number, TrackedResource>;

  constructor() {
    this.resources = new Map();
    this.hook = createHook({
      destroy: (id: number) => {
        this.resources.delete(id);
      },
      init: (id: number, type: string, triggerAsyncId: number) => {
        const source = this.getStack();
        // @TODO: exclude async hooks, including this one
        this.resources.set(id, {
          source,
          triggerAsyncId,
          type,
        });
      },
      promiseResolve: (id: number) => {
        this.resources.delete(id);
      },
    });
  }

  /**
   * Get a filtered version of the current call stack. This creates a new error to generate the
   * stack trace and will be quite slow.
   */
  public getStack(): string {
    const err = new Error();
    if (isNil(err.stack)) {
      return 'no stack trace available';
    }

    if (isNil(this.filter)) {
      return err.stack;
    }

    return this.filter(err.stack);
  }

  public clear() {
    this.resources.clear();
  }

  public disable() {
    this.hook.disable();
  }

  /**
   * Print a listing of all tracked resources. When debug mode is enabled (DEBUG=TRUE), include
   * stack traces.
   */
  /* eslint-disable no-console, no-invalid-this */
  public dump() {
    console.error(`tracking ${this.resources.size} async resources`);
    this.resources.forEach((res, id) => {
      console.error(`${id}: ${res.type}`);
      if (isDebug()) {
        console.error(res.source);
        console.error('\n');
      }
    });
  }

  public enable() {
    this.hook.enable();
  }

  public get size(): number {
    return this.resources.size;
  }
}
