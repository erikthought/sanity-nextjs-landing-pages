export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5eb5736c322d973f28c589f7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-d3595yus',
                  apiId: '009773e6-73c0-417d-9397-cec46802666e'
                },
                {
                  buildHookId: '5eb5736dc356e47036ba0511',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hoity7y6',
                  apiId: '89c9b9f5-5fac-4499-8d04-7f67aefac06e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erikthought/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hoity7y6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
