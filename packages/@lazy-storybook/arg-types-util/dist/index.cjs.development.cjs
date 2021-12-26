'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function enumToStorybookArgTypesInputType(enumVar) {
  return {
    options: Object.keys(enumVar),
    mapping: enumVar,
    control: {
      type: 'select',
      labels: enumVar
    }
  };
}

exports.enumToStorybookArgTypesInputType = enumToStorybookArgTypesInputType;
//# sourceMappingURL=index.cjs.development.cjs.map
