export default {};

export const config = {
    version: '0.0.1',
    instance_name: 'rossilaz.xyz',
    instance_admin: 'Rosy',
    endpoints: {
        update: 'https://mittzy-loginredux_updatestatus.web.val.run',
        login: 'https://mittzy-loginredux_login.web.val.run',
        delete: 'https://mittzy-loginredux_deleteaccount.web.val.run',
        ban: 'https://mittzy-loginredux_banuser.web.val.run',
    },
    instances: [
        {
            name: 'todepond.com',
            feed: 'https://todepond-lablogingetusers.web.val.run',
            gifs: {
                berd: {
                    src: 'https://www.todepond.com/image/berd.gif',
                    alt: 'A sparkly bird gif',
                },
                bot: {
                    src: 'https://www.todepond.com/image/bot.gif',
                    alt: 'A sparkly robot gif',
                },
                tode: {
                    src: 'https://www.todepond.com/image/tode.gif',
                    alt: 'A sparkly toad gif',
                },
            },
        },
        {
            name: 'rossilaz.xyz',
            feed: 'https://mittzy-lablogingetusers.web.val.run',
        },
        {
            name: 'evolved.systems',
            feed: 'https://evol-lablogingetusers.web.val.run',
        },
        {
            name: 'svenlaa.com',
            feed: 'https://svenlaa-lablogingetusers.web.val.run',
        },
        {
            _comment: 'client on github pages @ https://cute-catgirl.github.io/login/',
            name: 'maemoon.me',
            feed: 'https://maemoon-lablogingetusers.web.val.run',
        },
    ],
};