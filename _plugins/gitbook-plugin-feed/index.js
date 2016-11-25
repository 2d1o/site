"use strict";

const RSS = require('rss');

let feed;

module.exports = {
  website: {},

  hooks: {
    'init': function () {
      const description = "Подкаст по DevOps и современный стек. Крайне субъективный и без цензуры. Мы льём в продакшн!";
      feed = new RSS({
            title: "Two Devs One Ops",
            description: description,
            author: "2d1o",
            site_url: "https://www.2d1o.ru/",
            feed_url: "feed.xml",
            custom_namespaces: {
              itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd'
            },
            custom_elements: [
              {'itunes:subtitle': 'про DevOps и вот это вот всё'},
              {'itunes:author': '2d1o'},
              {'itunes:summary': description},
              {'itunes:owner': [
                {'itunes:name': '2d1o'},
                {'itunes:email': 'bsideup+2d1o@gmail.com'}
              ]},
              {'itunes:category': [
                { _attr: { text: 'Technology' } }
              ]}
            ]
      });
    },

    'page': function (page) {
      if (page.path.substr(0, 9) === "episodes/") {

        feed.item({
          title: page.title,
          enclosure: Object.assign({ type: "audio/x-m4a" }, page.enclosure),
          custom_elements: [
              { 'pubDate': new Date(page.pubDate).toUTCString() },
              { 'itunes:summary': page.content },
              { 'itunes:duration': page.duration }
            ]
        });
      }

      return page;
    },

    'finish': function () {
      const xml = feed.xml({ indent: true });
      return this.output.writeFile("feed_new.xml", xml);
    }
  }
};
