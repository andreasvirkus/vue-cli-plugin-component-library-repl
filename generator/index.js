module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    dependencies: {
      "bigbank-interface-components": "^0.3.2"
    }
  })


  // Rewrite components if allowed
  {
    const fs = require('fs')
    const routerPath = api.resolve('./src/router.js')
    opts.router = fs.existsSync(routerPath)

    if (opts.replaceComponents) {
      api.render('./templates/default', { ...opts })
    }
  }

  // adapted from https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/generator/index.js#L68-L91
  api.onCreateComplete(() => {
    const fs = require('fs')

    // Setup Interface Components import for main.js
    let icLines = ''

    icLines += "\nimport Components from 'bigbank-interface-components'"
    icLines += "\nimport 'bigbank-interface-components/dist/bigbank-interface-components.min.css'\n"
    icLines += "\nVue.use(Components)"

    // Modify main.js
    {
      const mainPath = api.resolve('./src/main.js')
      let content = fs.readFileSync(mainPath, { encoding: 'utf8' })

      const lines = content.split(/\r?\n/g).reverse()

      // Inject import
      const lastImportIndex = lines.findIndex(line => line.match(/^import/))
      lines[lastImportIndex] += icLines
      // Modify app
      content = lines.reverse().join('\n')
      fs.writeFileSync(mainPath, content, { encoding: 'utf8' })
    }
  })
}