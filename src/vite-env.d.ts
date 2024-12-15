/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

declare module '*.svg?react' {
  const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  export default ReactComponent;
}

interface ImportMetaEnv {
  readonly VITE_BRANCH_NAME: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
