
---

## About Domain Scope

### Introduction

<img src = "">

DomainScope is a web application built for tracking critical domain information of websites.



### Features

#### Website Input Card

<img src = "public/input_card.png" alt = "data_input_card">

📚[Installation Guide](https://day.js.org/docs/en/installation/installation)

### API

It's easy to use Day.js APIs to parse, validate, manipulate, and display dates and times.

```javascript
dayjs('2018-08-08') // parse

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display

dayjs().set('month', 3).month() // get & set

dayjs().add(1, 'year') // manipulate

dayjs().isBefore(dayjs()) // query
```

📚[API Reference](https://day.js.org/docs/en/parse/parse)

### I18n

Day.js has great support for internationalization.

But none of them will be included in your build unless you use it.

```javascript
import 'dayjs/locale/es' // load on demand

dayjs.locale('es') // use Spanish locale globally

dayjs('2018-05-05').locale('zh-cn').format() // use Chinese Simplified locale in a specific instance
```

📚[Internationalization](https://day.js.org/docs/en/i18n/i18n)

### Plugin

A plugin is an independent module that can be added to Day.js to extend functionality or add new features.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // load on demand

dayjs.extend(advancedFormat) // use plugin

dayjs().format('Q Do k kk X x') // more available formats
```

📚[Plugin List](https://day.js.org/docs/en/plugin/plugin)

### Usage Trend

<a href="https://npm-compare.com/moment,dayjs/#timeRange=THREE_YEARS" target="_blank">
  <img src="https://user-images.githubusercontent.com/3455798/270162667-c7bd2ebe-675e-45c6-a2c9-dc67f3b65d6e.png">
</a>

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website.

[[Become a sponsor via Github](https://github.com/sponsors/iamkun/)] [[Become a sponsor via OpenCollective](https://opencollective.com/dayjs#sponsor)]

<a href="https://toyokumo.co.jp" target="_blank">
  <img width="70" src="https://user-images.githubusercontent.com/17680888/197092231-2367b5eb-1e43-467e-a311-23f7cd97b086.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/ken-swyfft" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/65305317?v=4">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://opencollective.com/sight-and-sound-ministries" target="_blank">
  <img width="70" src="https://user-images.githubusercontent.com/17680888/232316426-cb99b4cf-0ccb-4e73-a6ce-e16dba6aadf4.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://chudovo.com/" target="_blank">
  <img width="70" src="https://images.opencollective.com/chudovo/3c866f5/logo/256.png?height=256">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.honrev.com" target="_blank">
  <img width="70" src="https://github.com/user-attachments/assets/b3203350-34c1-4637-b8b1-d9b8bab346d3">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/alan-eu" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/18175329?s=52&v=4">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.exoflare.com/open-source/?utm_source=dayjs&utm_campaign=open_source" target="_blank">
  <img width="70" src="https://user-images.githubusercontent.com/17680888/162761622-1407a849-0c41-4591-8aa9-f98114ec2092.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/storyblok" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/13880908?s=200&v=4">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://bestkru.com/" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/159320286" alt="BestKru">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://route4me.com/" target="_blank">
  <img width="70" src="https://github.com/user-attachments/assets/3fbc86c5-98a9-49c2-beae-1969026fcd76" alt="Route Optimizer and Route Planner Software">
</a>


## Contributors

This project exists thanks to all the people who contribute.

Please give us a 💖 star 💖 to support us. Thank you.

And thank you to all our backers! 🙏

<a href="https://opencollective.com/dayjs/backer/0/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/1/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/2/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/3/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/3/avatar.svg?requireActive=false"></a>
<br />
<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>



