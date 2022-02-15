# Next JS Example
## next-exam

### 설명

- [Notion](https://spot-mosquito-8d3.notion.site/WLM-version2-Frontend-Architecture-3b75ba905fd842558c07db38abe6eb5c)

```
/(root)
ﾤ .storybook           // CDD(component driven development) 모듈
ﾤ components           // ui
  ﾤ *_css.ts           // 구조적 단위의 공통 style 선언 -> emotion js 사용
  ﾤ *.tsx              // 컴포넌트 고유 style -> style jsx 사용
ﾤ pages                // page module
  ﾤ api
  ﾤ _app.js            // global layout
  ﾤ _error.js          // global error layout
  ﾤ 404.tsx            // 404 page
  ﾤ 500.tsx            // 500 page
  ﾤ index.tsx          // home view
ﾤ public
  ﾤ image              // 이미지 파일
ﾤ store                // redux store
  ﾤ actions            // action 선언
  ﾤ reducers           // state 별로 reducer 생성
  ﾤ types              // state interface 선언
  ﾤ index.ts           // root reducer
ﾤ stories              // story manager tsx 파일
ﾤ styles               // (scope에 따른 style 적용 방식 다름)
  ﾤ globals.css        // _app.js에서 전역 style -> css import 사용
ﾤ tests
  ﾤ *.spec.ts          // 테스트 코드
ﾤ utils                // 유틸
  ﾤ api                // rest api 통신 모듈 (필요하면 middleware 포함, axios 사용)
  ﾤ auth               // 인증 모듈
  ﾤ common             // 상수, 공용 모듈 (.js, .ts)
  ﾤ jwt                // jwt 모듈
  ﾤ route              // 라우터 접근 관리 모듈
    ﾤ privateRouter.ts // 접근 권한별 라우팅
ﾤ .env.development     // 개발용 실행 설정(환경)
ﾤ .env.production      // 배포용 빌드 설정(환경)
ﾤ .env.production.local// 개발용 빌드 설정(환경)
ﾤ .eslintrc.json       // eslint 설정
ﾤ .gitignore           // git ignore 설정
ﾤ .prettierrc.json     // prettier 설정
ﾤ next-env.d.ts
ﾤ next.config.js       // next js 설정
ﾤ package-lock.json
ﾤ package.json
ﾤ playwright.config.ts // playwright 설정
ﾤ README.md
ﾤ tsconfig.json        // ts 설정
```