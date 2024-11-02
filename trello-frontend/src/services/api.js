import axios from 'axios';

const API_URL = 'http://localhost:3000/cartoes'; // URL base do seu backend

// Função para buscar cartões do backend
export const fetchCartoes = async () => {
    try {
        const response = await axios.get(API_URL); // Faz uma requisição GET à API
        return response.data; // Retorna os dados recebidos
    } catch (error) {
        console.error('Erro ao buscar cartões:', error);
        throw error; // Lança o erro para ser tratado no componente
    }
};
