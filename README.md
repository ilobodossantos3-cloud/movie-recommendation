# 🎬 Movie Recommendation System

Sistema de recomendação de filmes baseado em Machine Learning que utiliza duas abordagens diferentes para sugerir filmes similares.

## 📋 Sobre o Projeto

Este projeto implementa um sistema de recomendação de filmes utilizando:

1. **Content-Based Filtering com TF-IDF**: Análise de sinopses (overviews) dos filmes
2. **Metadata-Based Filtering**: Análise combinada de elenco, diretor, palavras-chave e géneros

O sistema utiliza medidas de similaridade de cosseno para encontrar filmes semelhantes com base nas suas características.

## 🎯 Funcionalidades

- **Top Movies**: Ranking de filmes baseado numa fórmula ponderada (inspirada no IMDB)
- **Recomendações por Sinopse**: Encontra filmes similares analisando o texto das descrições
- **Recomendações por Metadata**: Sugestões baseadas em elenco, diretor, géneros e palavras-chave
- **Processamento de Dados**: Limpeza e transformação de dados de múltiplas fontes

## 🛠️ Tecnologias Utilizadas

- **Python 3.x**
- **Pandas**: Manipulação e análise de dados
- **Scikit-learn**: Algoritmos de Machine Learning
- **NumPy**: Computação numérica

## 📦 Instalação

1. Clone este repositório:
```bash
git clone https://github.com/ilobodossantos3-cloud/movie-recommendation-system.git
cd movie-recommendation-system
```

2. Instale as dependências:
```bash
pip install -r requirements.txt
```

3. Certifique-se de que os datasets estão na pasta `archive/`:
   - `movies_metadata.csv`
   - `credits.csv`
   - `keywords.csv`

## 🎮 Como Usar

Execute o script principal:

```bash
python main.py
```

### Exemplo de Uso da Função de Recomendação

```python
# Obter recomendações para um filme
recommendations = get_recommendations('The Godfather', cosine_sim2)
print(recommendations)
```

## 📊 Dataset

Este projeto utiliza **The Movies Dataset**, que contém informações sobre:
- 45,000+ filmes
- Metadata detalhada (elenco, equipa técnica, palavras-chave, orçamentos, receitas)
- Avaliações e votos dos utilizadores

**Fonte**: [The Movies Dataset (Kaggle)](https://www.kaggle.com/rounakbanik/the-movies-dataset)

### Estrutura dos Dados

```
archive/
├── movies_metadata.csv    # Informação principal dos filmes
├── credits.csv           # Elenco e equipa técnica
└── keywords.csv          # Palavras-chave associadas
```

## 🧮 Metodologia

### 1. Sistema de Ranking Ponderado

Utiliza a fórmula do IMDB para calcular um score ponderado:

```
Score = (v/(v+m) × R) + (m/(m+v) × C)
```

Onde:
- `v` = número de votos do filme
- `m` = número mínimo de votos necessários
- `R` = avaliação média do filme
- `C` = média geral de todas as avaliações

### 2. Content-Based Filtering (TF-IDF)

- Vetorização TF-IDF das sinopses
- Cálculo de similaridade de cosseno
- Recomendação dos 10 filmes mais similares

### 3. Metadata-Based Filtering

- Combinação de: elenco + diretor + géneros + palavras-chave
- Criação de uma "sopa" de features
- CountVectorizer + Similaridade de Cosseno

## 📈 Resultados

O sistema retorna os top 10 filmes mais similares baseados nas características escolhidas, permitindo descobrir filmes com temáticas, elencos ou estilos semelhantes.

## 🔧 Melhorias Futuras

- [ ] Interface web com Flask/Django
- [ ] API REST para integração
- [ ] Sistema híbrido combinando múltiplas abordagens
- [ ] Análise de sentimento das reviews
- [ ] Collaborative Filtering baseado em utilizadores
- [ ] Cache de resultados para melhor performance

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

**Igor Santos**
- GitHub: [ilobodossantos3-cloud](https://github.com/ilobodossantos3-cloud)

## 🙏 Agradecimentos

- Dataset fornecido por [Rounak Banik](https://www.kaggle.com/rounakbanik) no Kaggle
- Inspiração da metodologia de ranking do IMDB
- Comunidade open-source de Machine Learning

---

⭐ Se este projeto te foi útil, considera dar uma estrela!
