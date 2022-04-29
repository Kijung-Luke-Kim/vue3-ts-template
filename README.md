# Vue 3 TypeScript Template

Vue 3 + TypeScript 프로젝트 템플릿

- Vue 3
- TypeScript
- Vite
- Vue Router
- Vuex

본 템플릿에서 사용하는 Vue 3 `<script setup>` SFC에 대해선 [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) 참조.

- Composition API 이용시에 사용

## 추천 IDE 설정

- [VS Code](https://code.visualstudio.com/)

  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- VS Code 설정
  - 코드 포맷팅
    - Format on save 활성화
    - Editor: Default Formatter은 Prettier로 설정
  - TypeScript 설정
    - Command Palette 진입 (Mac: Cmd + Shift + P, Windows: Ctrl + Shift + P) -> `Extensions: Show Built-in Extensions` 실행 -> `TypeScript and JavaScript Language Features` 검색 후 `Disable (Workspace)` 클릭
    - Command Palette에서 `Developer: Reload Window` 실행하여 IDE 리로드

## Vite 템플릿 관련 공식 README

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
