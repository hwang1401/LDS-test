import React, { useState } from 'react';
import { Text } from 'lumir-design-components';

const TextTest: React.FC = () => {
  // 활성 탭 상태 관리
  const [activeTab, setActiveTab] = useState<string>('variant');

  return (
    <div>
      <h2>텍스트 컴포넌트 테스트</h2>
      <p>텍스트 컴포넌트의 다양한 속성과 변형을 테스트합니다.</p>

      {/* 텍스트 탭 네비게이션 */}
      <div className="text-tabs">
        <button 
          className={`tab-button ${activeTab === 'variant' ? 'active' : ''}`} 
          onClick={() => setActiveTab('variant')}
        >
          변형 (Variant)
        </button>
        <button 
          className={`tab-button ${activeTab === 'weight' ? 'active' : ''}`} 
          onClick={() => setActiveTab('weight')}
        >
          가중치 (Weight)
        </button>
        <button 
          className={`tab-button ${activeTab === 'tag' ? 'active' : ''}`} 
          onClick={() => setActiveTab('tag')}
        >
          태그 (As)
        </button>
        <button 
          className={`tab-button ${activeTab === 'color' ? 'active' : ''}`} 
          onClick={() => setActiveTab('color')}
        >
          색상 (Color)
        </button>
        <button 
          className={`tab-button ${activeTab === 'align' ? 'active' : ''}`} 
          onClick={() => setActiveTab('align')}
        >
          정렬 (Align)
        </button>
        <button 
          className={`tab-button ${activeTab === 'transform' ? 'active' : ''}`} 
          onClick={() => setActiveTab('transform')}
        >
          변환 (Transform)
        </button>
        <button 
          className={`tab-button ${activeTab === 'other' ? 'active' : ''}`} 
          onClick={() => setActiveTab('other')}
        >
          기타 속성
        </button>
      </div>

      <div className="text-content">
        {/* 변형 (Variant) */}
        {activeTab === 'variant' && (
          <div className="text-section">
            <h3>변형 (Variant)</h3>
            <p>텍스트의 크기와 스타일을 정의하는 변형 옵션입니다.</p>
            
            <div className="text-grid">
              <div className="text-card">
                <h4>Hero</h4>
                <div className="text-sample">
                  <Text variant="hero-1">Hero 1</Text>
                  <Text variant="hero-2">Hero 2</Text>
                </div>
                <div className="description">
                  가장 큰 텍스트 스타일로, 배너나 주요 헤드라인에 사용됩니다.
                </div>
                <div className="code">
                  <code>{`<Text variant="hero-1">Hero 1</Text>`}</code>
                  <code>{`<Text variant="hero-2">Hero 2</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card">
                <h4>Title</h4>
                <div className="text-sample">
                  <Text variant="title-1">Title 1</Text>
                </div>
                <div className="description">
                  주요 제목에 사용되는 텍스트 스타일입니다.
                </div>
                <div className="code">
                  <code>{`<Text variant="title-1">Title 1</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card">
                <h4>Heading</h4>
                <div className="text-sample">
                  <Text variant="heading-1">Heading 1</Text>
                </div>
                <div className="description">
                  섹션 제목에 사용되는 텍스트 스타일입니다.
                </div>
                <div className="code">
                  <code>{`<Text variant="heading-1">Heading 1</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card">
                <h4>Body</h4>
                <div className="text-sample">
                  <Text variant="body-1">Body 1</Text>
                  <Text variant="body-2">Body 2</Text>
                </div>
                <div className="description">
                  본문 텍스트에 사용되는 스타일입니다.
                </div>
                <div className="code">
                  <code>{`<Text variant="body-1">Body 1</Text>`}</code>
                  <code>{`<Text variant="body-2">Body 2</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card">
                <h4>Caption</h4>
                <div className="text-sample">
                  <Text variant="caption-1">Caption 1</Text>
                </div>
                <div className="description">
                  작은 보조 텍스트에 사용되는 스타일입니다.
                </div>
                <div className="code">
                  <code>{`<Text variant="caption-1">Caption 1</Text>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 가중치 (Weight) */}
        {activeTab === 'weight' && (
          <div className="text-section">
            <h3>가중치 (Weight)</h3>
            <p>텍스트의 굵기를 정의하는 옵션입니다.</p>
            
            <div className="text-grid">
              <div className="text-card">
                <h4>Regular</h4>
                <div className="text-sample">
                  <Text variant="body-1" weight="regular">Regular Weight</Text>
                </div>
                <div className="description">
                  기본 굵기의 텍스트입니다.
                </div>
                <div className="code">
                  <code>{`<Text weight="regular">Regular Weight</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card">
                <h4>Medium</h4>
                <div className="text-sample">
                  <Text variant="body-1" weight="medium">Medium Weight</Text>
                </div>
                <div className="description">
                  중간 굵기의 텍스트입니다.
                </div>
                <div className="code">
                  <code>{`<Text weight="medium">Medium Weight</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card">
                <h4>Bold</h4>
                <div className="text-sample">
                  <Text variant="body-1" weight="bold">Bold Weight</Text>
                </div>
                <div className="description">
                  굵은 텍스트입니다.
                </div>
                <div className="code">
                  <code>{`<Text weight="bold">Bold Weight</Text>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 태그 (As) */}
        {activeTab === 'tag' && (
          <div className="text-section">
            <h3>태그 변경 (as)</h3>
            <p>텍스트의 HTML 태그를 변경하는 옵션입니다.</p>
            
            <div className="text-grid">
              <div className="text-card">
                <h4>제목 태그</h4>
                <div className="text-sample">
                  <Text variant="body-1" as="h1">h1 태그</Text>
                  <Text variant="body-1" as="h2">h2 태그</Text>
                </div>
                <div className="description">
                  시각적 스타일은 유지하면서 HTML 태그를 제목 태그로 변경합니다.
                </div>
                <div className="code">
                  <code>{`<Text as="h1">h1 태그</Text>`}</code>
                  <code>{`<Text as="h2">h2 태그</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card">
                <h4>본문 태그</h4>
                <div className="text-sample">
                  <Text variant="body-1" as="p">p 태그</Text>
                  <Text variant="body-1" as="span">span 태그</Text>
                  <Text variant="body-1" as="div">div 태그</Text>
                </div>
                <div className="description">
                  시각적 스타일은 유지하면서 HTML 태그를 본문 태그로 변경합니다.
                </div>
                <div className="code">
                  <code>{`<Text as="p">p 태그</Text>`}</code>
                  <code>{`<Text as="span">span 태그</Text>`}</code>
                  <code>{`<Text as="div">div 태그</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card">
                <h4>기타 태그</h4>
                <div className="text-sample">
                  <Text variant="body-1" as="label">label 태그</Text>
                </div>
                <div className="description">
                  시각적 스타일은 유지하면서 HTML 태그를 기타 태그로 변경합니다.
                </div>
                <div className="code">
                  <code>{`<Text as="label">label 태그</Text>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 색상 (Color) */}
        {activeTab === 'color' && (
          <div className="text-section">
            <h3>색상 (Color)</h3>
            <p>텍스트의 색상을 정의하는 옵션입니다.</p>
            
            <div className="text-grid">
              <div className="text-card">
                <h4>기본 색상</h4>
                <div className="text-sample">
                  <Text color="primary">Primary Color</Text>
                  <Text color="secondary">Secondary Color</Text>
                  <Text color="tertiary">Tertiary Color</Text>
                </div>
                <div className="description">
                  디자인 시스템의 기본 색상 체계를 사용합니다.
                </div>
                <div className="code">
                  <code>{`<Text color="primary">Primary Color</Text>`}</code>
                  <code>{`<Text color="secondary">Secondary Color</Text>`}</code>
                  <code>{`<Text color="tertiary">Tertiary Color</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card">
                <h4>상태 색상</h4>
                <div className="text-sample">
                  <Text color="info">Info Color</Text>
                  <Text color="success">Success Color</Text>
                  <Text color="warning">Warning Color</Text>
                  <Text color="error">Error Color</Text>
                </div>
                <div className="description">
                  상태나 알림을 나타내는 색상입니다.
                </div>
                <div className="code">
                  <code>{`<Text color="info">Info Color</Text>`}</code>
                  <code>{`<Text color="success">Success Color</Text>`}</code>
                  <code>{`<Text color="warning">Warning Color</Text>`}</code>
                  <code>{`<Text color="error">Error Color</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card dark-card">
                <h4>배경 위 색상</h4>
                <div className="text-sample dark-bg">
                  <Text color="onColor">On Color</Text>
                </div>
                <div className="description light-text">
                  어두운 배경 위에서 사용하는 색상입니다.
                </div>
                <div className="code">
                  <code>{`<Text color="onColor">On Color</Text>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 정렬 (Align) */}
        {activeTab === 'align' && (
          <div className="text-section">
            <h3>정렬 (Align)</h3>
            <p>텍스트의 정렬 방향을 정의하는 옵션입니다.</p>
            
            <div className="text-grid">
              <div className="text-card wide">
                <h4>텍스트 정렬</h4>
                <div className="text-sample with-border">
                  <Text align="left">왼쪽 정렬된 텍스트입니다. 이 텍스트는 왼쪽에 정렬됩니다.</Text>
                </div>
                <div className="text-sample with-border">
                  <Text align="center">가운데 정렬된 텍스트입니다. 이 텍스트는 가운데에 정렬됩니다.</Text>
                </div>
                <div className="text-sample with-border">
                  <Text align="right">오른쪽 정렬된 텍스트입니다. 이 텍스트는 오른쪽에 정렬됩니다.</Text>
                </div>
                <div className="text-sample with-border">
                  <Text align="justify">양쪽 정렬된 텍스트입니다. 이 텍스트는 양쪽에 정렬되어 균일한 간격을 유지합니다.</Text>
                </div>
                <div className="description">
                  텍스트의 가로 정렬 방향을 지정합니다.
                </div>
                <div className="code">
                  <code>{`<Text align="left">왼쪽 정렬</Text>`}</code>
                  <code>{`<Text align="center">가운데 정렬</Text>`}</code>
                  <code>{`<Text align="right">오른쪽 정렬</Text>`}</code>
                  <code>{`<Text align="justify">양쪽 정렬</Text>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 변환 (Transform) */}
        {activeTab === 'transform' && (
          <div className="text-section">
            <h3>변환 (Transform)</h3>
            <p>텍스트의 대소문자 변환을 정의하는 옵션입니다.</p>
            
            <div className="text-grid">
              <div className="text-card">
                <h4>대문자 변환</h4>
                <div className="text-sample">
                  <Text transform="uppercase">대문자로 변환</Text>
                </div>
                <div className="description">
                  모든 문자를 대문자로 변환합니다.
                </div>
                <div className="code">
                  <code>{`<Text transform="uppercase">대문자로 변환</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card">
                <h4>소문자 변환</h4>
                <div className="text-sample">
                  <Text transform="lowercase">소문자로 변환</Text>
                </div>
                <div className="description">
                  모든 문자를 소문자로 변환합니다.
                </div>
                <div className="code">
                  <code>{`<Text transform="lowercase">소문자로 변환</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card">
                <h4>첫 글자 대문자</h4>
                <div className="text-sample">
                  <Text transform="capitalize">첫 글자만 대문자</Text>
                </div>
                <div className="description">
                  각 단어의 첫 글자만 대문자로 변환합니다.
                </div>
                <div className="code">
                  <code>{`<Text transform="capitalize">첫 글자만 대문자</Text>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 기타 속성 */}
        {activeTab === 'other' && (
          <div className="text-section">
            <h3>기타 속성</h3>
            <p>텍스트의 특수 기능을 정의하는 옵션입니다.</p>
            
            <div className="text-grid">
              <div className="text-card">
                <h4>줄바꿈 없음</h4>
                <div className="text-sample with-border">
                  <Text noWrap>이 텍스트는 넘치면 줄바꿈 없이 한 줄로 표시됩니다.</Text>
                </div>
                <div className="description">
                  텍스트가 컨테이너를 벗어나도 줄바꿈하지 않습니다.
                </div>
                <div className="code">
                  <code>{`<Text noWrap>줄바꿈 없는 텍스트</Text>`}</code>
                </div>
              </div>
              
              <div className="text-card">
                <h4>텍스트 줄임</h4>
                <div className="text-sample with-border">
                  <Text truncate={2}>이 텍스트는 두 줄까지만 표시되고 나머지는 줄임표로 처리됩니다. 텍스트가 두 줄을 초과하면 자동으로 잘립니다. 이것은 더 많은 컨텐츠를 보여주기 위한 방법입니다.</Text>
                </div>
                <div className="description">
                  지정된 줄 수를 초과하는 텍스트는 줄임표로 표시합니다.
                </div>
                <div className="code">
                  <code>{`<Text truncate={2}>두 줄까지만 표시하고 나머지는 줄임표로 처리</Text>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx={true}>{`
        .text-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: var(--semantic-spacingHor-global-sm);
          margin-bottom: var(--semantic-spacingVer-global-xxl);
          justify-content: center;
        }
        
        .tab-button {
          padding: var(--semantic-spacingVer-global-sm) var(--semantic-spacingHor-global-lg);
          border: var(--semantic-shape-borderWidth-thin) solid var(--semantic-color-secondary-stroke-2-rest);
          background: var(--semantic-color-secondary-background-inverse-rest);
          border-radius: var(--semantic-radius-global-md);
          cursor: pointer;
          font-weight: var(--semantic-typography-body-1-medium-fontWeight);
        }
        
        .tab-button.active {
          background-color: var(--semantic-color-primary-background-1-rest);
          color: var(--semantic-color-primary-oncolor-global);
          border-color: var(--semantic-color-primary-background-1-rest);
        }
        
        .text-section {
          margin-bottom: var(--semantic-spacingVer-global-xxxl);
        }
        
        .text-grid {
          display: flex;
          flex-wrap: wrap;
          gap: var(--semantic-spacingHor-global-xxl);
          justify-content: center;
        }
        
        .text-card {
          border: var(--semantic-shape-borderWidth-thin) solid var(--semantic-color-secondary-stroke-2-rest);
          border-radius: var(--semantic-radius-global-lg);
          padding: var(--semantic-spacingVer-global-lg);
          width: 280px;
          background-color: var(--semantic-color-secondary-background-inverse-rest);
          box-shadow: var(--semantic-shadow-interaction-card-rest);
        }
        
        .text-card.wide {
          width: 580px;
        }
        
        .dark-card {
          background-color: var(--semantic-color-secondary-background-1-rest);
        }
        
        .text-sample {
          display: flex;
          flex-direction: column;
          gap: var(--semantic-spacingVer-global-sm);
          padding: var(--semantic-spacingVer-global-xxl);
          background-color: var(--semantic-color-secondary-background-1-rest);
          border-radius: var(--semantic-radius-global-md);
          margin: var(--semantic-spacingVer-global-sm) 0;
          min-height: 80px;
        }
        
        .dark-bg {
          background-color: var(--semantic-color-primary-background-2-rest);
        }
        
        .with-border {
          border: var(--semantic-shape-borderWidth-thin) solid var(--semantic-color-secondary-stroke-2-rest);
        }
        
        .description {
          margin: var(--semantic-spacingVer-global-sm) 0;
          font-size: var(--semantic-typography-body-2-regular-fontSize);
          color: var(--semantic-color-secondary-foreground-1-rest);
        }
        
        .light-text {
          color: var(--semantic-color-primary-oncolor-global);
        }
        
        .code {
          background-color: var(--semantic-color-secondary-background-1-rest);
          padding: var(--semantic-spacingVer-global-sm);
          border-radius: var(--semantic-radius-global-md);
          font-size: var(--semantic-typography-caption-1-regular-fontSize);
          color: var(--semantic-color-secondary-foreground-1-rest);
        }
        
        .code code {
          white-space: pre-wrap;
          display: block;
          margin-bottom: var(--semantic-spacingVer-global-xxxs);
        }
      `}</style>
    </div>
  );
};

export default TextTest; 