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

export { enumToStorybookArgTypesInputType };
//# sourceMappingURL=index.esm.mjs.map
