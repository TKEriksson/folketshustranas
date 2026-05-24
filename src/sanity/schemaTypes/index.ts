import type { SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";

import { projectType } from "./projektType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, projectType],
};
