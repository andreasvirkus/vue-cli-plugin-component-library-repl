# vue-cli-plugin-component-library-repl
Minimal replication of an in-house vue-cli plugin to add our Vue component library with vue-cli@3

A replication meant to debug https://github.com/vuejs/vue-cli/issues/1087

Issue is now resolved. The culprit was a [`browserconfig.xml`](https://github.com/andreasvirkus/vue-cli-plugin-component-library-repl/blob/master/generator/templates/default/public/img/icons/browserconfig.xml#L5) file, which had an `htmlWebpackPlugin` template
tag left in from vue-cli@2 [pwa template](https://github.com/vuejs-templates/pwa/).
