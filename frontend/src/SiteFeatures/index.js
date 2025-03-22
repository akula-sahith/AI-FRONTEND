const components = {};
const context = require.context('./', false, /\.jsx$/);

context.keys().forEach((fileName) => {
    const componentName = fileName.replace('./', '').replace('.jsx', '');
    components[componentName] = context(fileName).default;
});

export default components;
