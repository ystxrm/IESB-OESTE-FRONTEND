// src/App.tsx
// ✅ O Vite procura automaticamente o index.tsx dentro da pasta Container!
import { Container } from './components/Container';

export function App() {
  return (
    <>
      {/* Seção 1: Logo */}
      <Container>
        <Heading>Logo</Heading>
      </Container>

      {/* Seção 2: Menu */}
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}