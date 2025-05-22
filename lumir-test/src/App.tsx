import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// 동적으로 페이지 컴포넌트 로드
const TokenTest = lazy(() => import('./pages/TokenTest'));
const ButtonTest = lazy(() => import('./pages/ButtonTest'));
const TextTest = lazy(() => import('./pages/TextTest'));

// 로딩 컴포넌트
const Loading = () => <div>로딩 중...</div>;

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
          <h1>루미르 디자인 시스템 테스트</h1>
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', gap: 'var(--semantic-spacingHor-global-xl)', padding: 0 }}>
              <li>
                <Link to="/" style={{ color: 'var(--semantic-color-primary-oncolor-global)' }}>홈</Link>
              </li>
              <li>
                <Link to="/tokens" style={{ color: 'var(--semantic-color-primary-oncolor-global)' }}>토큰 테스트</Link>
              </li>
              <li>
                <Link to="/buttons" style={{ color: 'var(--semantic-color-primary-oncolor-global)' }}>버튼 테스트</Link>
              </li>
              <li>
                <Link to="/texts" style={{ color: 'var(--semantic-color-primary-oncolor-global)' }}>텍스트 테스트</Link>
              </li>
            </ul>
          </nav>
      </header>

        <div className="content">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={
                <div>
                  <h2>루미르 디자인 시스템 사용성 테스트</h2>
                  <p>이 프로젝트는 루미르 디자인 시스템의 사용성을 테스트하기 위해 만들어졌습니다.</p>
                  <p>상단 메뉴에서 테스트하고 싶은 항목을 선택하세요:</p>
                  <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
                    <li><strong>토큰 테스트:</strong> 시맨틱 토큰 적용 여부 확인</li>
                    <li><strong>버튼 테스트:</strong> 버튼 컴포넌트의 모든 속성 테스트</li>
                    <li><strong>텍스트 테스트:</strong> 텍스트 컴포넌트의 모든 속성 테스트</li>
                  </ul>
                </div>
              } />
              <Route path="/tokens" element={<TokenTest />} />
              <Route path="/buttons" element={<ButtonTest />} />
              <Route path="/texts" element={<TextTest />} />
            </Routes>
          </Suspense>
        </div>
    </div>
    </Router>
  );
}

export default App;
