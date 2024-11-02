// src/components/Cartoes.js
/*import React, { useEffect, useState } from 'react';
import { fetchTarefas } from './services/api'; // Verifique se este caminho está correto após a criação do arquivo api.js

const Cartoes = () => {
    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTarefas = async () => {
            try {
                const data = await fetchTarefas();
                console.log("Dados das tarefas:", data);
                setTarefas(data);
            } catch (err) {
                console.error("Erro ao carregar tarefas:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadTarefas();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar tarefas: {error.message}</p>;

    return (
        <div>
            <h1>Meus Cartões</h1>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa.id}>{tarefa.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cartoes;*/

// src/components/Cartoes.js
// src/components/Cartoes.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cartoes = () => {
    const [cartoes, setCartoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Função para buscar os cartões
    const fetchCartoes = async () => {
        try {
            const response = await axios.get('http://localhost:3000/cartoes'); // URL do backend
            setCartoes(response.data);
        } catch (err) {
            setError(err);
            console.error('Erro ao buscar cartões:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartoes(); // Chama a função para buscar cartões quando o componente é montado
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar cartões: {error.message}</p>;

    return (
        <div>
            <h1>Meus Cartões</h1>
            <ul>
                {cartoes.map((cartao, index) => (
                    <li key={index}>Cartão: {cartao.titulo}</li> 
                ))}
            </ul>
        </div>
    );
};

export default Cartoes;
