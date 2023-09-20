<div align="center">
  <br>
  <img alt="logo" src="https://github.com/lmsGenie/client/assets/43786036/fda77759-f5dc-4578-b4b0-9417bedc3957" width="150"/>
  <h2> :dizzy: lmsGenie Front-End :dizzy:</h2>
  
![Next.js](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript.js](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ShancnUI](https://img.shields.io/badge/Shadcn/ui-black)

This repository contains code and resources dedicated to the development and maintenance of the frontend component of the lmsGenie application. For UI design, we are adapting [E-Tutor - Learning Management System Figma Design](https://www.figma.com/community/file/1271304360859402063/e-tutor-learning-management-system-community) by [Templatecookie](https://www.figma.com/@templatecookie) which is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
</div>

## Getting Started
Below steps will guide you, how to set up your project locally. To get a local copy up and running follow these simple example steps.
1. Install pnpm
```
npm i -g pnpm
```
2. Clone repo locally.
```
git clone https://github.com/lmsGenie/client.git
```
3. Install dependencies
```
pnpm i
```
4. Run project locally
```
pnpm run dev
```

## Project Structure
1. Code files
- `src/`: Contains main source code
- `src/app`: Next.js app directory. [Checkout Next.js Routing](https://nextjs.org/docs/app/building-your-application/routing)
- `src/app/global.css`: Global CSS file.
- `src/components`: Contains UI components.
- `src/components/ui`: Contains shadcn/ui components. [Checkout Shadcn/ui Components](https://ui.shadcn.com/docs/components/accordion)
- `src/types`: Contains Type definitions.
- `src/sampledata`: Contains sample data.

2. Assets files
- `src/assets`: Contains project assets (images, icons, etc.)
- `public/`: Next.js public directory. [Checkout Next.js Routing](https://nextjs.org/docs/app/building-your-application/routing)
- `public/sprite`: Contains all svg icons. [Checkout "How to use Sprite Icons"](https://github.com/orgs/lmsGenie/discussions/41#discussioncomment-7049981)

3. Config files
- `next.config.js`: Next.js config.
- `components.json`: Shadcn config.
- `.eslintrc.json`: Eslint config.
- `.eslintignore`: Esline ignore.
- `commitlint.config.js`: Commitlint config.
- `prettier.config.js`: Prettier config.
- `.prettierignore`: Prettier ignore.
- `tailwind.config.ts`: Tailwind config.
- `tsconfig.json`: Typesctipt config.
- `package.json`: Project dependencies.

## Want to contribute?
Feel like contributing? That's awesome! We have a [contributing guide](.github/CONTRIBUTING.md) to help guide you. 

Want to discuss something? [Create a discussion](https://github.com/orgs/lmsGenie/discussions/new/choose)
