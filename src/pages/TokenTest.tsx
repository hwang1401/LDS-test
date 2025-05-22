import React, { useState } from 'react';
import tokensDefault from 'lumir-design-tokens';

// 패키지 구조에 맞게 토큰 접근
const tokens = tokensDefault.default || tokensDefault;

const TokenTest: React.FC = () => {
  // 활성 탭 상태 관리
  const [activeTab, setActiveTab] = useState<string>('color');

  // 토큰 객체에서 일부 값 추출
  const primaryColor = String(tokens?.semantic?.color?.primary?.background?.[1]?.rest || '정보 없음');
  const secondaryColor = String(tokens?.semantic?.color?.secondary?.background?.[1]?.rest || '정보 없음');
  const fontSize = String(tokens?.semantic?.typography?.body?.regular?.fontSize || '정보 없음');
  
  return (
    <div>
      
      {/* 토큰 탭 네비게이션 */}
      <div className="token-tabs">
        <button 
          className={`tab-button ${activeTab === 'color' ? 'active' : ''}`} 
          onClick={() => setActiveTab('color')}
        >
          컬러
        </button>
        <button 
          className={`tab-button ${activeTab === 'typography' ? 'active' : ''}`} 
          onClick={() => setActiveTab('typography')}
        >
          타이포그래피
        </button>
        <button 
          className={`tab-button ${activeTab === 'spacing' ? 'active' : ''}`} 
          onClick={() => setActiveTab('spacing')}
        >
          여백
        </button>
        <button 
          className={`tab-button ${activeTab === 'shape' ? 'active' : ''}`} 
          onClick={() => setActiveTab('shape')}
        >
          형태
        </button>
        <button 
          className={`tab-button ${activeTab === 'elevation' ? 'active' : ''}`} 
          onClick={() => setActiveTab('elevation')}
        >
          입체감
        </button>
        <button 
          className={`tab-button ${activeTab === 'animation' ? 'active' : ''}`} 
          onClick={() => setActiveTab('animation')}
        >
          애니메이션
        </button>
        <button 
          className={`tab-button ${activeTab === 'focus' ? 'active' : ''}`} 
          onClick={() => setActiveTab('focus')}
        >
          포커스
        </button>
      </div>
      
      <div className="token-content">
        {/* 색상 토큰 */}
        {activeTab === 'color' && (
          <div className="token-section">
            <h3>색상 토큰</h3>
            <p>디자인 시스템의 시맨틱 색상 토큰을 보여줍니다.</p>
            
            <div className="token-grid">
              <div className="token-card">
                <h4>Primary 색상</h4>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-primary-background-1-rest)', color: 'white'}}>
                  Background 1 (Rest)
                </div>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-primary-background-1-hovered)', color: 'white'}}>
                  Background 1 (Hovered)
                </div>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-primary-background-1-pressed)', color: 'white'}}>
                  Background 1 (Pressed)
                </div>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-primary-foreground-1-rest)', color: 'white'}}>
                  Foreground 1 (Rest)
                </div>
              </div>
              
              <div className="token-card">
                <h4>Secondary 색상</h4>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-secondary-background-1-rest)', color: 'white'}}>
                  Background 1 (Rest)
                </div>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-secondary-background-1-hovered)', color: 'white'}}>
                  Background 1 (Hovered)
                </div>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-secondary-foreground-1-rest)'}}>
                  Foreground 1 (Rest)
                </div>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-secondary-foreground-2-rest)'}}>
                  Foreground 2 (Rest)
                </div>
              </div>
              
              <div className="token-card">
                <h4>CTA 색상</h4>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-cta-background-1-rest)', color: 'white'}}>
                  Background 1 (Rest)
                </div>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-cta-background-1-hovered)', color: 'white'}}>
                  Background 1 (Hovered)
                </div>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-cta-foreground-1-rest)', color: 'white'}}>
                  Foreground 1 (Rest)
                </div>
              </div>
              
              <div className="token-card">
                <h4>상태 색상</h4>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-status-success-global)', color: 'white'}}>
                  Success
                </div>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-status-warning-global)'}}>
                  Warning
                </div>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-status-error-global)', color: 'white'}}>
                  Error
                </div>
                <div className="color-sample" style={{backgroundColor: 'var(--semantic-color-status-info-global)', color: 'white'}}>
                  Info
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* 타이포그래피 토큰 */}
        {activeTab === 'typography' && (
          <div className="token-section">
            <h3>타이포그래피 토큰</h3>
            <p>디자인 시스템의 타이포그래피 스타일을 보여줍니다.</p>
            
            <div className="token-grid">
              <div className="token-card wide">
                <h4>제목 스타일</h4>
                <div className="typography-sample" style={{
                  fontSize: 'var(--semantic-typography-hero-1-regular-fontSize)',
                  fontWeight: 'var(--semantic-typography-hero-1-regular-fontWeight)',
                  lineHeight: 'var(--semantic-typography-hero-1-regular-lineHeight)'
                }}>
                  Hero 1 Regular (--semantic-typography-hero-1-regular)
                </div>
                <div className="typography-sample" style={{
                  fontSize: 'var(--semantic-typography-title-1-regular-fontSize)',
                  fontWeight: 'var(--semantic-typography-title-1-regular-fontWeight)',
                  lineHeight: 'var(--semantic-typography-title-1-regular-lineHeight)'
                }}>
                  Title 1 Regular (--semantic-typography-title-1-regular)
                </div>
                <div className="typography-sample" style={{
                  fontSize: 'var(--semantic-typography-heading-1-regular-fontSize)',
                  fontWeight: 'var(--semantic-typography-heading-1-regular-fontWeight)',
                  lineHeight: 'var(--semantic-typography-heading-1-regular-lineHeight)'
                }}>
                  Heading 1 Regular (--semantic-typography-heading-1-regular)
                </div>
                <div className="typography-sample" style={{
                  fontSize: 'var(--semantic-typography-heading-2-regular-fontSize)',
                  fontWeight: 'var(--semantic-typography-heading-2-regular-fontWeight)',
                  lineHeight: 'var(--semantic-typography-heading-2-regular-lineHeight)'
                }}>
                  Heading 2 Regular (--semantic-typography-heading-2-regular)
                </div>
                <div className="typography-sample" style={{
                  fontSize: 'var(--semantic-typography-heading-3-regular-fontSize)',
                  fontWeight: 'var(--semantic-typography-heading-3-regular-fontWeight)',
                  lineHeight: 'var(--semantic-typography-heading-3-regular-lineHeight)'
                }}>
                  Heading 3 Regular (--semantic-typography-heading-3-regular)
                </div>
              </div>
              
              <div className="token-card wide">
                <h4>본문 스타일</h4>
                <div className="typography-sample" style={{
                  fontSize: 'var(--semantic-typography-body-1-regular-fontSize)',
                  fontWeight: 'var(--semantic-typography-body-1-regular-fontWeight)',
                  lineHeight: 'var(--semantic-typography-body-1-regular-lineHeight)'
                }}>
                  Body 1 Regular (--semantic-typography-body-1-regular)
                </div>
                <div className="typography-sample" style={{
                  fontSize: 'var(--semantic-typography-body-1-medium-fontSize)',
                  fontWeight: 'var(--semantic-typography-body-1-medium-fontWeight)',
                  lineHeight: 'var(--semantic-typography-body-1-medium-lineHeight)'
                }}>
                  Body 1 Medium (--semantic-typography-body-1-medium)
                </div>
                <div className="typography-sample" style={{
                  fontSize: 'var(--semantic-typography-body-1-bold-fontSize)',
                  fontWeight: 'var(--semantic-typography-body-1-bold-fontWeight)',
                  lineHeight: 'var(--semantic-typography-body-1-bold-lineHeight)'
                }}>
                  Body 1 Bold (--semantic-typography-body-1-bold)
                </div>
                <div className="typography-sample" style={{
                  fontSize: 'var(--semantic-typography-body-2-regular-fontSize)',
                  fontWeight: 'var(--semantic-typography-body-2-regular-fontWeight)',
                  lineHeight: 'var(--semantic-typography-body-2-regular-lineHeight)'
                }}>
                  Body 2 Regular (--semantic-typography-body-2-regular)
                </div>
              </div>
              
              <div className="token-card wide">
                <h4>라벨 및 캡션 스타일</h4>
                <div className="typography-sample" style={{
                  fontSize: 'var(--semantic-typography-label-1-regular-fontSize)',
                  fontWeight: 'var(--semantic-typography-label-1-regular-fontWeight)',
                  lineHeight: 'var(--semantic-typography-label-1-regular-lineHeight)'
                }}>
                  Label 1 Regular (--semantic-typography-label-1-regular)
                </div>
                <div className="typography-sample" style={{
                  fontSize: 'var(--semantic-typography-label-2-regular-fontSize)',
                  fontWeight: 'var(--semantic-typography-label-2-regular-fontWeight)',
                  lineHeight: 'var(--semantic-typography-label-2-regular-lineHeight)'
                }}>
                  Label 2 Regular (--semantic-typography-label-2-regular)
                </div>
                <div className="typography-sample" style={{
                  fontSize: 'var(--semantic-typography-caption-1-regular-fontSize)',
                  fontWeight: 'var(--semantic-typography-caption-1-regular-fontWeight)',
                  lineHeight: 'var(--semantic-typography-caption-1-regular-lineHeight)'
                }}>
                  Caption 1 Regular (--semantic-typography-caption-1-regular)
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* 여백 토큰 */}
        {activeTab === 'spacing' && (
          <div className="token-section">
            <h3>여백 토큰</h3>
            <p>디자인 시스템의 여백 크기 토큰을 보여줍니다.</p>
            
            <div className="token-grid">
              <div className="token-card wide">
                <h4>수평 여백 (Horizontal)</h4>
                <div className="spacing-row">
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingHor-global-xxxs)'}}>
                    xxxs (2px)
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingHor-global-xxs)'}}>
                    xxs (4px)
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingHor-global-xs)'}}>
                    xs (6px)
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingHor-global-sm)'}}>
                    sm (8px)
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingHor-global-md)'}}>
                    md (10px)
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingHor-global-lg)'}}>
                    lg (12px)
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingHor-global-xl)'}}>
                    xl (16px)
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingHor-global-xxl)'}}>
                    xxl (20px)
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingHor-global-xxxl)'}}>
                    xxxl (24px)
                  </div>
                </div>
              </div>
              
              <div className="token-card wide">
                <h4>수직 여백 (Vertical)</h4>
                <div className="spacing-row">
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingVer-global-xxxs)'}}>
                    xxxs
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingVer-global-xxs)'}}>
                    xxs
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingVer-global-xs)'}}>
                    xs
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingVer-global-sm)'}}>
                    sm
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingVer-global-md)'}}>
                    md
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingVer-global-lg)'}}>
                    lg
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingVer-global-xl)'}}>
                    xl
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingVer-global-xxl)'}}>
                    xxl
                  </div>
                  <div className="spacing-sample" style={{padding: 'var(--semantic-spacingVer-global-xxxl)'}}>
                    xxxl
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* 형태 토큰 */}
        {activeTab === 'shape' && (
          <div className="token-section">
            <h3>형태 토큰</h3>
            <p>디자인 시스템의 모서리 반경 및 테두리 토큰을 보여줍니다.</p>
            
            <div className="token-grid">
              <div className="token-card">
                <h4>모서리 반경 (Border Radius)</h4>
                <div className="shape-sample" style={{borderRadius: 'var(--semantic-radius-global-none)'}}>
                  None (0px)
                </div>
                <div className="shape-sample" style={{borderRadius: 'var(--semantic-radius-global-sm)'}}>
                  Small (2px)
                </div>
                <div className="shape-sample" style={{borderRadius: 'var(--semantic-radius-global-md)'}}>
                  Medium (4px)
                </div>
                <div className="shape-sample" style={{borderRadius: 'var(--semantic-radius-global-lg)'}}>
                  Large (6px)
                </div>
                <div className="shape-sample" style={{borderRadius: 'var(--semantic-radius-global-xl)'}}>
                  X-Large (8px)
                </div>
                <div className="shape-sample" style={{borderRadius: 'var(--semantic-radius-global-xxl)'}}>
                  XX-Large (10px)
                </div>
                <div className="shape-sample" style={{borderRadius: 'var(--semantic-radius-global-pill)'}}>
                  Pill (10000px)
                </div>
              </div>
              
              <div className="token-card">
                <h4>테두리 두께 (Border Width)</h4>
                <div className="shape-sample" style={{border: 'var(--semantic-shape-borderWidth-thin) solid #666'}}>
                  Thin (1px)
                </div>
                <div className="shape-sample" style={{border: 'var(--semantic-shape-borderWidth-medium) solid #666'}}>
                  Medium (2px)
                </div>
                <div className="shape-sample" style={{border: 'var(--semantic-shape-borderWidth-thick) solid #666'}}>
                  Thick (3px)
                </div>
                <div className="shape-sample" style={{border: 'var(--semantic-shape-borderWidth-thicker) solid #666'}}>
                  Thicker (4px)
                </div>
              </div>
              
              <div className="token-card">
                <h4>컴포넌트별 테두리</h4>
                <div className="shape-sample" style={{border: 'var(--semantic-shape-borderWidth-button) solid #666'}}>
                  Button Border
                </div>
                <div className="shape-sample" style={{border: 'var(--semantic-shape-borderWidth-card) solid #666'}}>
                  Card Border
                </div>
                <div className="shape-sample" style={{border: 'var(--semantic-shape-borderWidth-input-default) solid #666'}}>
                  Input Default
                </div>
                <div className="shape-sample" style={{border: 'var(--semantic-shape-borderWidth-input-focused) solid #666'}}>
                  Input Focused
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* 입체감 토큰 */}
        {activeTab === 'elevation' && (
          <div className="token-section">
            <h3>입체감 토큰</h3>
            <p>디자인 시스템의 요소 겹침 순서(z-index) 및 그림자 토큰을 보여줍니다.</p>
            
            <div className="token-grid">
              <div className="token-card">
                <h4>Z-Index 값</h4>
                <div className="elevation-row">
                  <div className="elevation-item" style={{ zIndex: 'var(--semantic-elevation-z-base)' }}>
                    Base: {0}
                  </div>
                  <div className="elevation-item" style={{ zIndex: 'var(--semantic-elevation-z-raised)' }}>
                    Raised: {100}
                  </div>
                  <div className="elevation-item" style={{ zIndex: 'var(--semantic-elevation-z-navigation)' }}>
                    Navigation: {200}
                  </div>
                  <div className="elevation-item" style={{ zIndex: 'var(--semantic-elevation-z-header)' }}>
                    Header: {300}
                  </div>
                  <div className="elevation-item" style={{ zIndex: 'var(--semantic-elevation-z-dropdown)' }}>
                    Dropdown: {400}
                  </div>
                  <div className="elevation-item" style={{ zIndex: 'var(--semantic-elevation-z-sticky)' }}>
                    Sticky: {500}
                  </div>
                </div>
              </div>
              
              <div className="token-card wide">
                <h4>그림자 효과</h4>
                <div className="shadow-samples">
                  <div className="shadow-sample shadow-none">
                    그림자 없음
                  </div>
                  <div className="shadow-sample shadow-sm">
                    작은 그림자
                  </div>
                  <div className="shadow-sample shadow-md">
                    중간 그림자
                  </div>
                  <div className="shadow-sample shadow-lg">
                    큰 그림자
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* 애니메이션 토큰 */}
        {activeTab === 'animation' && (
          <div className="token-section">
            <h3>애니메이션 토큰</h3>
            <p>디자인 시스템의 애니메이션 지속 시간 및 타이밍 함수 토큰을 보여줍니다.</p>
            
            <div className="token-grid">
              <div className="token-card wide">
                <h4>지속 시간 (Duration)</h4>
                <div className="animation-samples">
                  <button className="animation-sample" style={{ 
                    transition: `all var(--semantic-animation-duration-global-instant)` 
                  }}>
                    Instant (100ms)
                  </button>
                  <button className="animation-sample" style={{ 
                    transition: `all var(--semantic-animation-duration-global-fast)` 
                  }}>
                    Fast (200ms)
                  </button>
                  <button className="animation-sample" style={{ 
                    transition: `all var(--semantic-animation-duration-global-normal)` 
                  }}>
                    Normal (300ms)
                  </button>
                  <button className="animation-sample" style={{ 
                    transition: `all var(--semantic-animation-duration-global-slow)` 
                  }}>
                    Slow (500ms)
                  </button>
                  <button className="animation-sample" style={{ 
                    transition: `all var(--semantic-animation-duration-global-slower)` 
                  }}>
                    Slower (700ms)
                  </button>
                </div>
              </div>
              
              <div className="token-card wide">
                <h4>피드백 애니메이션</h4>
                <div className="animation-samples">
                  <div className="animation-sample loading-animation">
                    로딩 애니메이션 (--semantic-animation-duration-feedback-loading)
                  </div>
                  <div className="animation-sample success-animation">
                    성공 애니메이션 (--semantic-animation-duration-feedback-success)
                  </div>
                  <div className="animation-sample error-animation">
                    오류 애니메이션 (--semantic-animation-duration-feedback-error)
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* 포커스 토큰 */}
        {activeTab === 'focus' && (
          <div className="token-section">
            <h3>포커스 토큰</h3>
            <p>디자인 시스템의 포커스 스타일 토큰을 보여줍니다.</p>
            
            <div className="token-grid">
              <div className="token-card wide">
                <h4>포커스 아웃라인</h4>
                <div className="focus-samples">
                  <button className="focus-sample focus-outline">
                    포커스 아웃라인 (클릭)
                  </button>
                  <div className="focus-info">
                    <p>색상: var(--semantic-focus-outline-color)</p>
                    <p>두께: var(--semantic-focus-outline-width)</p>
                    <p>스타일: var(--semantic-focus-outline-style)</p>
                    <p>오프셋: var(--semantic-focus-outline-offset)</p>
                  </div>
                </div>
              </div>
              
              <div className="token-card wide">
                <h4>포커스 링</h4>
                <div className="focus-samples">
                  <button className="focus-sample focus-ring">
                    포커스 링 (클릭)
                  </button>
                  <div className="focus-info">
                    <p>색상: var(--semantic-focus-ring-color)</p>
                    <p>두께: var(--semantic-focus-ring-width)</p>
                    <p>오프셋: var(--semantic-focus-ring-offset)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx={true}>{`
        .token-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
          justify-content: center;
        }
        
        .tab-button {
          padding: 8px 16px;
          border: 1px solid #ddd;
          background: #f5f5f5;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }
        
        .tab-button.active {
          background-color: var(--semantic-color-primary-background-1-rest);
          color: white;
          border-color: var(--semantic-color-primary-background-1-rest);
        }
        
        .token-section {
          margin-bottom: 40px;
        }
        
        .token-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        
        .token-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          width: 280px;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .token-card.wide {
          width: 580px;
        }
        
        /* 색상 토큰 테스트 */
        .color-sample {
          padding: 12px;
          margin: 8px 0;
          border-radius: 4px;
          text-align: center;
        }
        
        /* 타이포그래피 토큰 테스트 */
        .typography-sample {
          margin: 16px 0;
          padding: 8px;
          border: 1px solid #eee;
          border-radius: 4px;
        }
        
        /* 여백 토큰 테스트 */
        .spacing-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        
        .spacing-sample {
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          border-radius: 4px;
          text-align: center;
          margin-bottom: 8px;
        }
        
        /* 형태 토큰 테스트 */
        .shape-sample {
          background-color: #e0e0e0;
          padding: 12px;
          margin: 8px 0;
          text-align: center;
        }
        
        /* 입체감 토큰 테스트 */
        .elevation-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .elevation-item {
          padding: 10px;
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .shadow-samples {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .shadow-sample {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          border-radius: 8px;
          text-align: center;
        }
        
        .shadow-none {
          box-shadow: none;
        }
        
        .shadow-sm {
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        
        .shadow-md {
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .shadow-lg {
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        /* 애니메이션 토큰 테스트 */
        .animation-samples {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        
        .animation-sample {
          padding: 12px 20px;
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .animation-sample:hover {
          background-color: #e0e0e0;
          transform: translateY(-2px);
        }
        
        .loading-animation {
          position: relative;
          overflow: hidden;
        }
        
        .loading-animation::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: loading-animation var(--semantic-animation-duration-feedback-loading) infinite;
        }
        
        @keyframes loading-animation {
          to {
            left: 100%;
          }
        }
        
        .success-animation {
          background-color: var(--semantic-color-status-success-global);
          color: white;
          animation: pulse var(--semantic-animation-duration-feedback-success) ease-in-out;
        }
        
        .error-animation {
          background-color: var(--semantic-color-status-error-global);
          color: white;
          animation: shake var(--semantic-animation-duration-feedback-error) ease-in-out;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-5px); }
          40%, 80% { transform: translateX(5px); }
        }
        
        /* 포커스 토큰 테스트 */
        .focus-samples {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .focus-sample {
          padding: 12px 20px;
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .focus-outline:focus-visible {
          outline: var(--semantic-focus-outline-width) var(--semantic-focus-outline-style) var(--semantic-focus-outline-color);
          outline-offset: var(--semantic-focus-outline-offset);
        }
        
        .focus-ring:focus-visible {
          box-shadow: 0 0 0 var(--semantic-focus-ring-width) var(--semantic-focus-ring-color);
          outline: none;
        }
        
        .focus-info {
          padding: 12px;
          background-color: #f9f9f9;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .focus-info p {
          margin: 4px 0;
        }
      `}</style>
    </div>
  );
};

export default TokenTest; 