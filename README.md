# Project NASA

화성의 날씨 데이터를 시각화하는 웹 애플리케이션입니다.

## 기능

- 화성의 최신 날씨 정보 표시
- 최근 날씨 데이터 테이블 형태로 표시 (반응형)
- 온도 변화 차트
- 계절별 일출/일몰 시간 차트
- 계절 표시기

## 기술 스택

### Frontend

- Vue 3
- TypeScript
- Tailwind CSS
- Vue Query
- Unovis (차트 라이브러리)
- Radix Vue (UI 컴포넌트)
- Day.js (날짜 처리)

### 개발 도구

- Vite
- ESLint
- Prettier

## 프로젝트 구조

```
src/
├── features/
│   ├── mars-weather/      # 화성 날씨 관련 기능
│   │   ├── components/    # 컴포넌트
│   │   ├── constants/     # 상수
│   │   ├── hooks/        # 커스텀 훅
│   │   ├── services/     # API 서비스
│   │   └── types/        # 타입 정의
│   └── space-gallery/     # 우주 갤러리 관련 기능
├── shared/                # 공유 컴포넌트 및 유틸리티
│   ├── components/
│   ├── services/
│   └── lib/
└── pages/                 # 페이지 컴포넌트
```

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 린트 실행
npm run lint

# 코드 포맷팅
npm run format
```

## API

이 프로젝트는 NASA의 Mars Weather API를 사용합니다. API 키는 환경 변수로 관리됩니다.

## 반응형 디자인

- 모바일: 수직 테이블 레이아웃
- 태블릿/데스크톱: 수평 테이블 레이아웃

## 컨벤션

### 네이밍

- 컴포넌트: PascalCase
- 타입/인터페이스: PascalCase
- 변수/함수: camelCase
- 상수: SNAKE_CASE
- 폴더: kebab-case

### 코드 스타일

- Prettier 설정을 따릅니다
- ESLint 규칙을 준수합니다

## 라이선스

MIT License
