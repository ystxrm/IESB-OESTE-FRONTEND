// src/App.tsx
import { Container } from './components/Container';
import { Heading } from './components/Heading';

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