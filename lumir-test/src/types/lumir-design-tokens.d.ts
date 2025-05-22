declare module 'lumir-design-tokens' {
  export type SemanticColorToken = string;

  interface ColorTokens {
    [key: string]: {
      [key: string]: {
        [key: string]: {
          [key: string]: string | {
            [key: string]: string;
          };
        };
      };
    };
  }

  interface TypographyTokens {
    [key: string]: {
      [key: string]: {
        fontSize?: string;
        fontWeight?: string | number;
        lineHeight?: string | number;
        letterSpacing?: string;
        [key: string]: any;
      };
    };
  }

  interface SpacingTokens {
    [key: string]: {
      [key: string]: {
        [key: string]: string;
      };
    };
  }

  interface ShapeTokens {
    [key: string]: {
      [key: string]: {
        [key: string]: string;
      };
    };
  }

  interface ShadowTokens {
    [key: string]: {
      [key: string]: {
        [key: string]: string;
      };
    };
  }

  interface SemanticTokens {
    color: ColorTokens;
    typography: TypographyTokens;
    spacing: SpacingTokens;
    shape: ShapeTokens;
    shadow: ShadowTokens;
    [key: string]: any;
  }

  interface FoundationTokens {
    color: {
      [key: string]: {
        [key: string]: {
          [key: string]: string;
        };
      };
    };
    typography: {
      [key: string]: {
        [key: string]: string | number;
      };
    };
    spacing: {
      [key: string]: string;
    };
    [key: string]: any;
  }

  interface TokensObject {
    semantic: SemanticTokens;
    foundation: FoundationTokens;
    [key: string]: any;
  }

  interface TokensModule {
    __esModule: boolean;
    default: TokensObject;
  }

  const tokensModule: TokensModule;
  export default tokensModule;
} 