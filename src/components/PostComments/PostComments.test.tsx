import { fireEvent, render, screen } from '@testing-library/react';
import Post from './index'; // esse é seu componente certo

describe('Teste para o componente PostComments', () => {
    it('deve inserir dois comentários e exibi-los na tela', () => {
        render(<Post />);

        const inputComentario = screen.getByTestId('input-comentario') as HTMLTextAreaElement;
        const botaoEnviar = screen.getByTestId('botao-enviar');

        // Primeiro comentário
        fireEvent.change(inputComentario, { target: { value: 'Primeiro comentário!' } });
        fireEvent.click(botaoEnviar);

        // Segundo comentário
        fireEvent.change(inputComentario, { target: { value: 'Segundo comentário!' } });
        fireEvent.click(botaoEnviar);

        // Verifica se os dois aparecem
        expect(screen.getByText('Primeiro comentário!')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário!')).toBeInTheDocument();
    });
});
