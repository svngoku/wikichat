<a href="https://WikiChat.vercel.app">
  <img alt="Chat with Wikipedia Articles using natural language." src="/app/wikichat.png">
  <h1 align="center">WikiChat</h1>
</a>

<p align="center">
  Chat with Wikipedia using natural language. Built with OpenAI Functions and Vercel AI SDK. 
</p>

<p align="center">
  <a href="https://news.ycombinator.com/item?id=36480570"><img src="https://img.shields.io/badge/Hacker%20News-210-%23FF6600" alt="Hacker News"></a>
  <a href="https://github.com/svngoku/wikichat/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/svngoku/wikichat?label=license&logo=github&color=f80&logoColor=fff" alt="License" />
  </a>
  <a href="https://github.com/svngoku/wikichat"><img src="https://img.shields.io/github/stars/svngoku/wikichat?style=social" alt="WikiChat's GitHub repo"></a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#setting-up-locally"><strong>Setting Up Locally</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>
<br/>

## Introduction

WikiChat is an open-source AI chatbot that uses [OpenAI Functions](https://platform.openai.com/docs/guides/gpt/function-calling) and the [Vercel AI SDK](https://sdk.vercel.ai/docs) to interact with the [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page) with natural language.

<!-- https://github.com/svngoku/wikichat/assets/28986134/9c0ad554-f4e5-4e98-8771-5999ddf79235 -->

## Deploy your own

You can deploy your own version of WikiChat with 1-click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-title=WikiChat%20%E2%80%93%20Chat%20with%20Hacker%20News&demo-description=AI%20chatbot%20that%20uses%20OpenAI%20Functions%20and%20Vercel%20AI%20SDK%20to%20interact%20with%20the%20Hacker%20News%20API%20with%20natural%20language.&demo-url=https%3A%2F%2FWikiChat.vercel.app%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F2lviJwxaFNmmqdNynfoUvi%2Fbc4eee4291e05f34c8e3691b3bd5d48d%2FCleanShot_2023-06-25_at_12.47.17.png&project-name=WikiChat%20%E2%80%93%20Chat%20with%20Hacker%20News&repository-name=WikiChat&repository-url=https%3A%2F%2Fgithub.com%2Fsteven-tey%2FWikiChat&from=templates&skippable-integrations=1&env=OPENAI_API_KEY&envDescription=Get%20your%20OpenAI%20API%20key%20here%3A&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys)

## Setting Up Locally

To set up WikiChat locally, you'll need to clone the repository and set up the following environment variables:

- `OPENAI_API_KEY` – your OpenAI API key (you can get one [here](https://platform.openai.com/account/api-keys))

## Tech Stack

ChatH is built on the following stack:

- [Next.js](https://nextjs.org/) – framework
- [OpenAI Functions](https://platform.openai.com/docs/guides/gpt/function-calling) - AI completions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) – AI streaming library
- [Vercel](https://vercel.com) – deployments
- [TailwindCSS](https://tailwindcss.com/) – styles

## Contributing

Here's how you can contribute:

- [Open an issue](https://github.com/svngoku/wikichat/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/svngoku/wikichat/pull) to add new features/make quality-of-life improvements/fix bugs.

## Author

- Chrys NIONGOLO ([@cniongolo](https://twitter.com/cniongolo))

## License

Licensed under the [MIT license]("")
