function convertToKebabCase(filename) {
  return filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[\\/]/g, '-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_.-]+/g, '-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

export default {
  multipass: true,
  plugins: [
    // Add filename conversion as first plugin
    {
      name: 'modifyFilename',
      fn: (ast, params, info) => {
        const oldPath = info.path;
        const extension = oldPath.match(/\.[^/.]+$/)[0];
        const newName = convertToKebabCase(oldPath.replace(/\.[^/.]+$/, ''));
        info.path = newName + extension;
        return ast;
      }
    },
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          removeUnknownsAndDefaults: {
            keepDataAttrs: true,
            keepAriaAttrs: true,
            keepRoleAttr: true
          },
          cleanupIDs: false
        }
      }
    },
    {
      name: 'removeTitle'
    },
    {
      name: 'removeDimensions'
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: ['class', 'data-name', 'fill-rule', 'clip-rule']
      }
    },
    {
      name: 'convertColors',
      params: {
        currentColor: true,
        names2hex: true,
        rgb2hex: true,
        shortname: true,
        shortcuts: true,
        keepCurrentColor: true
      }
    },
    {
      name: 'collapseGroups'
    },
    {
      name: 'mergePaths',
      params: {
        force: true,
        noSpaceAfterFlags: true
      }
    },
    {
      name: 'removeEmptyAttrs'
    },
    {
      name: 'convertPathData',
      params: {
        relative: true,
        noSpaceAfterFlags: true
      }
    }
  ],
  js2svg: {
    pretty: true,
    indent: 2
  }
};
