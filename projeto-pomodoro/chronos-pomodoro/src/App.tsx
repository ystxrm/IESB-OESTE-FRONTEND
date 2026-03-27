import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton'; // <-- Importado!

// Importando os ícones do pacote lucide-react (Certifique-se de ter instalado!)
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      {/* ... containers anteriores (Logo, Menu, CountDown) ... */}

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='task'
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          {/* Testando os nossos botões dinâmicos */}
          <div className='formRow'>
            {/* Como o color padrão é 'green', não precisamos passar a prop aqui! */}
            <DefaultButton icon={<PlayCircleIcon />} color='green' />

            {/* Forçando o botão a ser vermelho e mudando o ícone */}
            <DefaultButton icon={<StopCircleIcon />} color='red' />
          </div>
        </form>
      </Container>
    </>
  );
}