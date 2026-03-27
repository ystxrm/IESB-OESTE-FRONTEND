import React from 'react';

// O nosso tipo terá:
// 1. A nossa prop customizada "id" (forçando ela a ser obrigatória como string)
// & (E)
// 2. Todas as props que um <input> normal já aceita (type, placeholder, onChange...)
type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>;

// Desestruturamos apenas o id e o type por enquanto
export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input id={id} type={type} />
    </>
  );
}