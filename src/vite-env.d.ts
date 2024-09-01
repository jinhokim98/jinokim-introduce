/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

declare module '*.svg?react' {
  const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  export default ReactComponent;
}
