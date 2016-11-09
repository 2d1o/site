module.exports = {
    title: '"Two Devs One Ops" podcast',

    "links": {
        "home": null,
    },

    plugins: [
        "-fontsettings",
        "-lunr",
        "-search",
        "ga",
        "github",
    ],

    "pluginsConfig": {
        "sharing": {
            "google": true,
            "vk": true,
        },
        "ga": {
            "token": "UA-54409006-3"
        },
        "github": {
            url: "https://github.com/2d1o/site"
        }
    },
};