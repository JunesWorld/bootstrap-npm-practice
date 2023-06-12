# Bootstrap-NPM-practice

## CDN vs NPM

CDN은 외부에서 완성된 파일만 연결해주는 것이기 때문에 세부적으로 정리X

## NPM 설치

- `npm install bootstrap@5.3.0`

## Customize - Sass

지정된 functions, variables, mixins를 가져오기 위해 사용
```Sass
// Required
@import "../node_modules/bootstrap/scss/functions"
@import "../node_modules/bootstrap/scss/variables"
@import "../node_modules/bootstrap/scss/mixins"
```

## Customize - Optimize(최적화)

Lean Sass imports
- 최대한 간결하게 사용하기 위해 필요한 것만 가져와 사용
- JavaScript도 사용 가능
- 초기화 해줘야 함!
