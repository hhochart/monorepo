import { ModelPartial } from '@/utils/modelPartial';

export class Node {
  constructor(input?: ModelPartial<Node>) {
    if (input) {
      for (const [key, value] of Object.entries(input)) {
        (this as any)[key] = value;
      }
    }
  }
}
