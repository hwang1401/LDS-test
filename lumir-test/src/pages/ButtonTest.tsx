import React, { useState } from 'react';
import { Button } from 'lumir-design-components';

const ButtonTest: React.FC = () => {
  // 활성 탭 상태 관리
  const [activeTab, setActiveTab] = useState<string>('variant');
  const [clickCount, setClickCount] = useState<Record<string, number>>({});

  const handleClick = (buttonId: string) => {
    setClickCount(prev => ({
      ...prev,
      [buttonId]: (prev[buttonId] || 0) + 1
    }));
  };

  return (
    <div>
      <h2>버튼 컴포넌트 테스트</h2>
      <p>버튼 컴포넌트의 다양한 속성과 변형을 테스트합니다.</p>

      {/* 버튼 탭 네비게이션 */}
      <div className="button-tabs">
        <button 
          className={`tab-button ${activeTab === 'variant' ? 'active' : ''}`} 
          onClick={() => setActiveTab('variant')}
        >
          변형 (Variant)
        </button>
        <button 
          className={`tab-button ${activeTab === 'color' ? 'active' : ''}`} 
          onClick={() => setActiveTab('color')}
        >
          색상 (Color)
        </button>
        <button 
          className={`tab-button ${activeTab === 'size' ? 'active' : ''}`} 
          onClick={() => setActiveTab('size')}
        >
          크기 (Size)
        </button>
        <button 
          className={`tab-button ${activeTab === 'state' ? 'active' : ''}`} 
          onClick={() => setActiveTab('state')}
        >
          상태 (State)
        </button>
        <button 
          className={`tab-button ${activeTab === 'buttonType' ? 'active' : ''}`} 
          onClick={() => setActiveTab('buttonType')}
        >
          버튼 타입
        </button>
        <button 
          className={`tab-button ${activeTab === 'icon' ? 'active' : ''}`} 
          onClick={() => setActiveTab('icon')}
        >
          아이콘
        </button>
        <button 
          className={`tab-button ${activeTab === 'combined' ? 'active' : ''}`} 
          onClick={() => setActiveTab('combined')}
        >
          조합 예시
        </button>
      </div>

      <div className="button-content">
        {/* 버튼 변형 (Variant) */}
        {activeTab === 'variant' && (
          <div className="button-section">
            <h3>버튼 변형 (Variant)</h3>
            <p>버튼의 외관 스타일을 정의하는 변형 옵션입니다.</p>
            
            <div className="button-grid">
              <div className="button-card">
                <h4>Filled</h4>
                <div className="button-sample">
                  <Button 
                    variant="filled" 
                    onClick={() => handleClick('filled')}
                  >
                    Filled
                  </Button>
                  <div className="counter">클릭: {clickCount['filled'] || 0}</div>
                </div>
                <div className="description">
                  배경색이 채워진 기본 버튼 스타일입니다.
                </div>
                <div className="code">
                  <code>{`<Button variant="filled">Filled</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Outlined</h4>
                <div className="button-sample">
                  <Button 
                    variant="outlined" 
                    onClick={() => handleClick('outlined')}
                  >
                    Outlined
                  </Button>
                  <div className="counter">클릭: {clickCount['outlined'] || 0}</div>
                </div>
                <div className="description">
                  테두리만 있는 버튼 스타일입니다.
                </div>
                <div className="code">
                  <code>{`<Button variant="outlined">Outlined</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Transparent</h4>
                <div className="button-sample">
                  <Button 
                    variant="transparent" 
                    onClick={() => handleClick('transparent')}
                  >
                    Transparent
                  </Button>
                  <div className="counter">클릭: {clickCount['transparent'] || 0}</div>
                </div>
                <div className="description">
                  배경색과 테두리가 없는 텍스트 형태의 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button variant="transparent">Transparent</Button>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 색상 스키마 (Color) */}
        {activeTab === 'color' && (
          <div className="button-section">
            <h3>색상 스키마 (Color Scheme)</h3>
            <p>버튼의 색상 테마를 정의하는 옵션입니다.</p>
            
            <div className="button-grid">
              <div className="button-card">
                <h4>Primary</h4>
                <div className="button-sample">
                  <div className="sample-row">
                    <Button 
                      variant="filled" 
                      colorScheme="primary" 
                      onClick={() => handleClick('primary-filled')}
                    >
                      Filled
                    </Button>
                    <Button 
                      variant="outlined" 
                      colorScheme="primary" 
                      onClick={() => handleClick('primary-outlined')}
                    >
                      Outlined
                    </Button>
                    <Button 
                      variant="transparent" 
                      colorScheme="primary" 
                      onClick={() => handleClick('primary-transparent')}
                    >
                      Transparent
                    </Button>
                  </div>
                </div>
                <div className="description">
                  주요 강조 색상을 사용하는 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button colorScheme="primary">Primary</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Secondary</h4>
                <div className="button-sample">
                  <div className="sample-row">
                    <Button 
                      variant="filled" 
                      colorScheme="secondary" 
                      onClick={() => handleClick('secondary-filled')}
                    >
                      Filled
                    </Button>
                    <Button 
                      variant="outlined" 
                      colorScheme="secondary" 
                      onClick={() => handleClick('secondary-outlined')}
                    >
                      Outlined
                    </Button>
                    <Button 
                      variant="transparent" 
                      colorScheme="secondary" 
                      onClick={() => handleClick('secondary-transparent')}
                    >
                      Transparent
                    </Button>
                  </div>
                </div>
                <div className="description">
                  보조 색상을 사용하는 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button colorScheme="secondary">Secondary</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>CTA (Call To Action)</h4>
                <div className="button-sample">
                  <div className="sample-row">
                    <Button 
                      variant="filled" 
                      colorScheme="cta" 
                      onClick={() => handleClick('cta-filled')}
                    >
                      Filled
                    </Button>
                    <Button 
                      variant="outlined" 
                      colorScheme="cta" 
                      onClick={() => handleClick('cta-outlined')}
                    >
                      Outlined
                    </Button>
                    <Button 
                      variant="transparent" 
                      colorScheme="cta" 
                      onClick={() => handleClick('cta-transparent')}
                    >
                      Transparent
                    </Button>
                  </div>
                </div>
                <div className="description">
                  사용자 행동 유도에 사용되는 강한 강조 색상 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button colorScheme="cta">Call To Action</Button>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 크기 (Size) */}
        {activeTab === 'size' && (
          <div className="button-section">
            <h3>크기 (Size)</h3>
            <p>버튼의 크기를 정의하는 옵션입니다.</p>
            
            <div className="button-grid">
              <div className="button-card wide">
                <h4>크기 비교</h4>
                <div className="button-sample">
                  <div className="sample-row size-row">
                    <div className="size-item">
                      <Button 
                        size="xsm" 
                        onClick={() => handleClick('size-xsm')}
                      >
                        Extra Small
                      </Button>
                      <div className="size-label">xsm</div>
                    </div>
                    <div className="size-item">
                      <Button 
                        size="sm" 
                        onClick={() => handleClick('size-sm')}
                      >
                        Small
                      </Button>
                      <div className="size-label">sm</div>
                    </div>
                    <div className="size-item">
                      <Button 
                        size="md" 
                        onClick={() => handleClick('size-md')}
                      >
                        Medium
                      </Button>
                      <div className="size-label">md</div>
                    </div>
                    <div className="size-item">
                      <Button 
                        size="lg" 
                        onClick={() => handleClick('size-lg')}
                      >
                        Large
                      </Button>
                      <div className="size-label">lg</div>
                    </div>
                    <div className="size-item">
                      <Button 
                        size="xlg" 
                        onClick={() => handleClick('size-xlg')}
                      >
                        Extra Large
                      </Button>
                      <div className="size-label">xlg</div>
                    </div>
                  </div>
                </div>
                <div className="description">
                  버튼의 다섯 가지 크기 옵션을 비교합니다.
                </div>
                <div className="code">
                  <code>{`<Button size="xsm">Extra Small</Button>`}</code>
                  <code>{`<Button size="sm">Small</Button>`}</code>
                  <code>{`<Button size="md">Medium</Button>`}</code>
                  <code>{`<Button size="lg">Large</Button>`}</code>
                  <code>{`<Button size="xlg">Extra Large</Button>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 상태 (State) */}
        {activeTab === 'state' && (
          <div className="button-section">
            <h3>상태 (State)</h3>
            <p>버튼의 다양한 상태를 정의하는 옵션입니다.</p>
            
            <div className="button-grid">
              <div className="button-card">
                <h4>Disabled</h4>
                <div className="button-sample">
                  <Button 
                    isDisabled={true} 
                    onClick={() => handleClick('state-disabled')}
                  >
                    Disabled Button
                  </Button>
                </div>
                <div className="description">
                  비활성화된 버튼 상태입니다. 클릭할 수 없습니다.
                </div>
                <div className="code">
                  <code>{`<Button isDisabled={true}>Disabled</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Loading</h4>
                <div className="button-sample">
                  <Button 
                    isLoading={true} 
                    onClick={() => handleClick('state-loading')}
                  >
                    Loading Button
                  </Button>
                </div>
                <div className="description">
                  로딩 중인 버튼 상태입니다. 스피너가 표시됩니다.
                </div>
                <div className="code">
                  <code>{`<Button isLoading={true}>Loading</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Selected</h4>
                <div className="button-sample">
                  <Button 
                    isSelected={true} 
                    onClick={() => handleClick('state-selected')}
                  >
                    Selected Button
                  </Button>
                </div>
                <div className="description">
                  선택된 버튼 상태입니다. 토글 버튼 등에 사용됩니다.
                </div>
                <div className="code">
                  <code>{`<Button isSelected={true}>Selected</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Full Width</h4>
                <div className="button-sample">
                  <Button 
                    isFullWidth={true} 
                    onClick={() => handleClick('state-fullwidth')}
                  >
                    Full Width Button
                  </Button>
                </div>
                <div className="description">
                  컨테이너의 전체 너비를 차지하는 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button isFullWidth={true}>Full Width</Button>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 버튼 타입 */}
        {activeTab === 'buttonType' && (
          <div className="button-section">
            <h3>버튼 타입 (Button Type)</h3>
            <p>버튼의 내용 구성 타입을 정의하는 옵션입니다.</p>
            
            <div className="button-grid">
              <div className="button-card">
                <h4>Text Only</h4>
                <div className="button-sample">
                  <Button 
                    buttonType="text-only" 
                    onClick={() => handleClick('type-text-only')}
                  >
                    Text Only Button
                  </Button>
                </div>
                <div className="description">
                  텍스트만 포함하는 기본 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button buttonType="text-only">Text Only</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Text with Icon</h4>
                <div className="button-sample">
                  <Button 
                    buttonType="text-icon" 
                    leftIcon={<span>🔍</span>}
                    onClick={() => handleClick('type-text-icon')}
                  >
                    Text with Icon
                  </Button>
                </div>
                <div className="description">
                  텍스트와 아이콘을 함께 포함하는 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button buttonType="text-icon" leftIcon={<span>🔍</span>}>
  Text with Icon
</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Icon Only</h4>
                <div className="button-sample">
                  <Button 
                    buttonType="icon-only" 
                    leftIcon={<span>⭐</span>}
                    onClick={() => handleClick('type-icon-only')}
                  >
                  </Button>
                </div>
                <div className="description">
                  아이콘만 포함하는 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button 
  buttonType="icon-only" 
  leftIcon={<span>⭐</span>}
/>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 아이콘 */}
        {activeTab === 'icon' && (
          <div className="button-section">
            <h3>아이콘 (Icon)</h3>
            <p>버튼에 아이콘을 추가하는 옵션입니다.</p>
            
            <div className="button-grid">
              <div className="button-card">
                <h4>Left Icon</h4>
                <div className="button-sample">
                  <Button 
                    leftIcon={<span>👈</span>} 
                    onClick={() => handleClick('icon-left')}
                  >
                    Left Icon Button
                  </Button>
                </div>
                <div className="description">
                  텍스트 왼쪽에 아이콘이 있는 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button leftIcon={<span>👈</span>}>Left Icon</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Right Icon</h4>
                <div className="button-sample">
                  <Button 
                    rightIcon={<span>👉</span>} 
                    onClick={() => handleClick('icon-right')}
                  >
                    Right Icon Button
                  </Button>
                </div>
                <div className="description">
                  텍스트 오른쪽에 아이콘이 있는 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button rightIcon={<span>👉</span>}>Right Icon</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Both Icons</h4>
                <div className="button-sample">
                  <Button 
                    leftIcon={<span>🏆</span>} 
                    rightIcon={<span>🎉</span>} 
                    onClick={() => handleClick('icon-both')}
                  >
                    Both Icons Button
                  </Button>
                </div>
                <div className="description">
                  텍스트 양쪽에 아이콘이 있는 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button 
  leftIcon={<span>🏆</span>}
  rightIcon={<span>🎉</span>}
>
  Both Icons
</Button>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 조합 예시 */}
        {activeTab === 'combined' && (
          <div className="button-section">
            <h3>조합 예시 (Combined Examples)</h3>
            <p>다양한 속성을 조합한 버튼 예시입니다.</p>
            
            <div className="button-grid">
              <div className="button-card">
                <h4>Primary CTA</h4>
                <div className="button-sample">
                  <Button 
                    variant="filled"
                    colorScheme="cta"
                    size="lg"
                    rightIcon={<span>→</span>}
                    onClick={() => handleClick('combined-cta')}
                  >
                    회원가입
                  </Button>
                </div>
                <div className="description">
                  사용자 가입 유도를 위한 CTA 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button 
  variant="filled"
  colorScheme="cta"
  size="lg"
  rightIcon={<span>→</span>}
>
  회원가입
</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Secondary Action</h4>
                <div className="button-sample">
                  <Button 
                    variant="outlined"
                    colorScheme="secondary"
                    size="md"
                    leftIcon={<span>↩</span>}
                    onClick={() => handleClick('combined-secondary')}
                  >
                    뒤로가기
                  </Button>
                </div>
                <div className="description">
                  이전 페이지로 돌아가기 위한 보조 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button 
  variant="outlined"
  colorScheme="secondary"
  size="md"
  leftIcon={<span>↩</span>}
>
  뒤로가기
</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Loading Submit</h4>
                <div className="button-sample">
                  <Button 
                    variant="filled"
                    colorScheme="primary"
                    size="lg"
                    isLoading={true}
                    isFullWidth={true}
                    onClick={() => handleClick('combined-loading')}
                  >
                    제출 중...
                  </Button>
                </div>
                <div className="description">
                  폼 제출 중인 상태를 나타내는 로딩 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button 
  variant="filled"
  colorScheme="primary"
  size="lg"
  isLoading={true}
  isFullWidth={true}
>
  제출 중...
</Button>`}</code>
                </div>
              </div>
              
              <div className="button-card">
                <h4>Icon Button</h4>
                <div className="button-sample">
                  <Button 
                    variant="transparent"
                    colorScheme="secondary"
                    size="sm"
                    buttonType="icon-only"
                    leftIcon={<span>⚙️</span>}
                    onClick={() => handleClick('combined-icon')}
                  />
                </div>
                <div className="description">
                  설정 메뉴를 여는 아이콘 전용 버튼입니다.
                </div>
                <div className="code">
                  <code>{`<Button 
  variant="transparent"
  colorScheme="secondary"
  size="sm"
  buttonType="icon-only"
  leftIcon={<span>⚙️</span>}
/>`}</code>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx={true}>{`
        .button-tabs {
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
        
        .button-section {
          margin-bottom: var(--semantic-spacingVer-global-xxxl);
        }
        
        .button-grid {
          display: flex;
          flex-wrap: wrap;
          gap: var(--semantic-spacingHor-global-xxl);
          justify-content: center;
        }
        
        .button-card {
          border: var(--semantic-shape-borderWidth-thin) solid var(--semantic-color-secondary-stroke-2-rest);
          border-radius: var(--semantic-radius-global-lg);
          padding: var(--semantic-spacingVer-global-lg);
          width: 280px;
          background-color: var(--semantic-color-secondary-background-inverse-rest);
          box-shadow: var(--semantic-shadow-interaction-card-rest);
        }
        
        .button-card.wide {
          width: 580px;
        }
        
        .button-sample {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--semantic-spacingVer-global-xxl);
          background-color: var(--semantic-color-secondary-background-1-rest);
          border-radius: var(--semantic-radius-global-md);
          margin: var(--semantic-spacingVer-global-sm) 0;
          min-height: 80px;
        }
        
        .sample-row {
          display: flex;
          gap: var(--semantic-spacingHor-global-sm);
          flex-wrap: wrap;
        }
        
        .size-row {
          align-items: center;
        }
        
        .size-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--semantic-spacingVer-global-sm);
        }
        
        .size-label {
          font-size: var(--semantic-typography-caption-1-regular-fontSize);
          color: var(--semantic-color-secondary-foreground-2-rest);
        }
        
        .description {
          margin: var(--semantic-spacingVer-global-sm) 0;
          font-size: var(--semantic-typography-body-2-regular-fontSize);
          color: var(--semantic-color-secondary-foreground-1-rest);
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
        
        .counter {
          margin-top: var(--semantic-spacingVer-global-sm);
          font-size: var(--semantic-typography-caption-1-regular-fontSize);
          color: var(--semantic-color-secondary-foreground-2-rest);
        }
      `}</style>
    </div>
  );
};

export default ButtonTest;