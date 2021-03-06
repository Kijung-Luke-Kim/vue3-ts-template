# Vue 3 TypeScript Template

Vue 3 + TypeScript 프로젝트 템플릿

- Vue 3
- TypeScript
- Vite
  - legacy (ie >= 11) 지원
  - jsx 지원
- Vue Router
- Vuex
- Axios

- 테스트
  - Vitest
  - @vue/test-utils
  - jsdom

본 템플릿에서 사용하는 Vue 3 `<script setup>` SFC에 대해선 [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) 참조.

- Composition API 이용시에 사용

## 추천 IDE 설정

- [VS Code](https://code.visualstudio.com/)

  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
    - [Volar TypeScript](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
  - [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Vitest](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer)

- VS Code 설정

  - 코드 포맷팅
    - Format on save 활성화
    - Editor: Default Formatter은 Prettier로 설정
  - TypeScript 설정
    - Command Palette 진입 (Mac: Cmd + Shift + P, Windows: Ctrl + Shift + P) -> `Extensions: Show Built-in Extensions` 실행 -> `TypeScript and JavaScript Language Features` 검색 후 `Disable (Workspace)` 클릭
    - Command Palette에서 `Developer: Reload Window` 실행하여 IDE 리로드

  ## 사용방법

- git clone
- 프로젝트 의존 패키지 설치
  - npm install
- 프로젝트 로컬 환경 실행
  - npm run dev
- 프로젝트 빌드
  - npm run build
- 테스트 실행
  - npm run test
- 테스트 커버리지 확인

  - npm run coverage

  ## 폴더 구조

  - src
    - api
      - AJAX 호출에 쓰이는 API들을 모아두는 폴더입니다.
    - assets
      - 정적 파일들을 모아두는 폴더입니다.
      - css
      - icons
      - images
    - components
      - 상위 View에서 쓰이는 재사용 가능한 vue 컴포넌트들을 모아두는 폴더입니다.
    - mixins
    - router
      - 라우터 경로 및 파일이 위치한 폴더입니다.
    - store
      - Vuex 스토어 파일이 위치한 폴더입니다.
    - util
      - 각종 유틸 기능들을 모아두는 폴더입니다.
    - views
      - 라우터에 매핑되는 최상위 화면, 즉 재사용이 불가한 vue 파일들을 모아두는 폴더입니다.
  - test
    - 소스에 대한 테스트 코드가 위치한 폴더입니다. 기본적으로 src와 동일한 경로에 단위테스트를 작성합니다.

## 테스트 코드 참고

- https://github.com/vitest-dev/vitest/tree/main/examples/vue/test

## Vite 템플릿 관련 공식 README

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
