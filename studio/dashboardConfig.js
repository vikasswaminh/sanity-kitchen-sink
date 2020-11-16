export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb212a992ce9a2a4ddf8929',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-c6kyq755',
                  apiId: '83b9b6c2-c327-4859-a202-b7eba416d8fc'
                },
                {
                  buildHookId: '5fb212a9f97cbd3180b7b686',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9jkscbaq',
                  apiId: 'd2b8c828-a543-43dd-8b45-e17a63564c30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vikasswaminh/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9jkscbaq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
