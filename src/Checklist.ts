export enum ChecklistMode {
  INCLUDE = 'include',
  EXCLUDE = 'exclude',
}

export interface ChecklistOptions<T> {
  data: Array<T>;
  mode: ChecklistMode;
}

/**
 * Check whether items are included or not (blacklist or whitelist, depending on `mode`).
 */
export class Checklist<T> implements ChecklistOptions<T> {
  /**
   * TODO: switch to Set
   */
  public readonly data: Array<T>;
  public readonly mode: ChecklistMode;

  constructor(options: ChecklistOptions<T>) {
    this.data = Array.from(options.data);
    this.mode = options.mode;
  }

  public check(value: T): boolean {
    if (this.mode === ChecklistMode.INCLUDE) {
      return this.data.includes(value);
    }

    if (this.mode === ChecklistMode.EXCLUDE) {
      return !this.data.includes(value);
    }

    return false;
  }
}
