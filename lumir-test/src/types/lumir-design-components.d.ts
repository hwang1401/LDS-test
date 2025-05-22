declare module 'lumir-design-components' {
  import { ReactNode, CSSProperties, ElementType } from 'react';

  // 버튼 컴포넌트 타입 정의
  export interface ButtonProps {
    variant?: 'filled' | 'outlined' | 'transparent';
    buttonType?: 'text-icon' | 'text-only' | 'icon-only';
    colorScheme?: 'primary' | 'secondary' | 'cta';
    size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
    isDisabled?: boolean;
    isLoading?: boolean;
    isSelected?: boolean;
    isFullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    [key: string]: any;
  }

  export const Button: React.FC<ButtonProps>;

  // 텍스트 컴포넌트 타입 정의
  type TextVariant = 'hero-1' | 'hero-2' | 'title-1' | 'title-2' | 'heading-1' | 'heading-2' | 'heading-3' | 'body-1' | 'body-2' | 'label-1' | 'label-2' | 'caption-1' | 'caption-2' | 'caption-3';
  type FontWeight = 'regular' | 'medium' | 'bold';
  type TextAlign = 'left' | 'center' | 'right' | 'justify';
  type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  type TextColor = 'primary' | 'secondary' | 'tertiary' | 'onColor' | 'success' | 'warning' | 'error' | 'info';
  
  export interface TextProps {
    as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
    variant?: TextVariant;
    weight?: FontWeight;
    align?: TextAlign;
    transform?: TextTransform;
    color?: TextColor;
    noWrap?: boolean;
    truncate?: number;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
    [key: string]: any;
  }

  export const Text: React.FC<TextProps>;

  // 추가 컴포넌트 타입 정의를 확장할 수 있습니다.
} 