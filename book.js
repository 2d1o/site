module.exports = {
    title: '"Two Devs One Ops" podcast',

    "links": {
        "sidebar": {
            "Two Devs One Ops": "https://www.2d1o.ru/"
        }
    },

    plugins: [
        "-fontsettings",
        "-lunr",
        "-search",
        "ga",
    ],

    "pluginsConfig": {
        "sharing": {
            "google": true,
            "vk": true,
        },
        "ga": {
            "token": "UA-54409006-3"
        },
    },
};