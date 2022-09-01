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
                  buildHookId: '6310d11cc8fde3126ad657c4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rkukk8ry',
                  apiId: 'e3a96d81-5cc6-4504-94c1-b89494d966fa'
                },
                {
                  buildHookId: '6310d11ccf123e12e4f13e78',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-szmktei6',
                  apiId: '11d36fc5-9a90-4c69-bf2e-8f35a6c57cb9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/petemccarthy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-szmktei6.netlify.app', category: 'apps'}
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
