// hooks/useProdutos.js
import { useState, useEffect } from 'react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Hook para buscar todos os produtos
export const useProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${BACKEND_URL}/api/produtos`);
        
        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.success && data.produtos) {
          setProdutos(data.produtos);
        } else {
          throw new Error('Formato de resposta inválido');
        }
        
      } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        setError(err.message);
        setProdutos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  const refetch = async () => {
    const fetchProdutos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${BACKEND_URL}/api/produtos`);
        const data = await response.json();
        
        if (data.success && data.produtos) {
          setProdutos(data.produtos);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    await fetchProdutos();
  };

  return { produtos, loading, error, refetch };
};

// Hook para buscar produto específico por slug
export const useProduto = (slug) => {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchProduto = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${BACKEND_URL}/api/produtos/${slug}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Produto não encontrado');
          }
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.success && data.produto) {
          setProduto(data.produto);
        } else {
          throw new Error('Produto não encontrado');
        }
        
      } catch (err) {
        console.error('Erro ao buscar produto:', err);
        setError(err.message);
        setProduto(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduto();
  }, [slug]);

  const refetch = async () => {
    if (!slug) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${BACKEND_URL}/api/produtos/${slug}`);
      const data = await response.json();
      
      if (data.success && data.produto) {
        setProduto(data.produto);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { produto, loading, error, refetch };
};