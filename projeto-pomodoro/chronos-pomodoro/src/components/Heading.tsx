// src/components/Heading.tsx

// 1. Criamos o "contrato" do componente
type HeadingProps = {
  // Agora aceitamos texto OU outros componentes JSX!
  children: React.ReactNode;
};

// 2. Aplicamos o tipo ao parâmetro da função (props: HeadingProps)
export function Heading(props: HeadingProps) {
  return <h1 className='heading'>{props.children}</h1>;
}