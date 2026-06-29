# EtlApiNasa 🚀🌌

Pipeline de ETL (Extract, Transform, Load) em Python que consome a **API APOD (Astronomy Picture of the Day)** da NASA, processa os dados e exibe os resultados através de uma interface visual feita em **HTML e CSS**.

Este projeto está sendo desenvolvido como parte do meu aprendizado em consumo de APIs, manipulação de dados com Python e visualização web. Futuras versões podem incluir integração com **TypeScript**.

---

## 📌 Sobre o projeto

O **EtlApiNasa** automatiza o processo de:

1. **Extract** — buscar dados da API APOD da NASA
2. **Transform** — tratar e organizar os dados retornados (datas, títulos, descrições, URLs de imagem, etc.)
3. **Load** — carregar/exibir os dados tratados em uma página web simples e visualmente agradável

---

## 🛠️ Tecnologias utilizadas

- **Python** — extração e transformação dos dados (ETL)
- **HTML** — estrutura da página de visualização
- **CSS** — estilização da interface
- **NASA APOD API** — fonte dos dados
- *(planejado)* **TypeScript** — futura integração para tipagem e interatividade no front-end

---

## ⚙️ Como funciona

```
NASA APOD API  →  Extração (Python)  →  Transformação (Python)  →  Visualização (HTML/CSS)
```

- O script em Python faz a requisição à API da NASA
- Os dados retornados (JSON) são tratados e organizados
- As informações tratadas são exibidas em uma página HTML estilizada com CSS

---

## 🚀 Como executar o projeto

> Instruções podem ser ajustadas conforme o projeto evolui.

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/EtlApiNasa.git
   cd EtlApiNasa
   ```

2. Crie um ambiente virtual (opcional, mas recomendado):
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate     # Windows
   ```

3. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure sua chave de API da NASA:
   - Obtenha uma chave gratuita em [api.nasa.gov](https://api.nasa.gov/)
   - Crie um arquivo `.env` na raiz do projeto com:
     ```
     NASA_API_KEY=sua_chave_aqui
     ```

5. Execute o script de ETL:
   ```bash
   python main.py
   ```

6. Abra o arquivo `index.html` no navegador para visualizar os resultados.

---

## 📂 Estrutura do projeto (sujeita a mudanças)

```
EtlApiNasa/
├── main.py              # Script principal do ETL
├── extract.py           # Funções de extração de dados da API
├── transform.py         # Funções de transformação/tratamento dos dados
├── index.html           # Página de visualização
├── style.css            # Estilização da página
├── requirements.txt     # Dependências do projeto
└── README.md
```

---

## 🔮 Próximos passos

- [ ] Adicionar tratamento de erros mais robusto
- [ ] Permitir busca por data específica (parâmetro da API APOD)
- [ ] Adicionar mais de uma API da NASA (ex: NEO, Mars Rover Photos)
- [ ] Integração com TypeScript no front-end
- [ ] Deploy da visualização

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, estudar e contribuir.

---

## ✨ Autor

Desenvolvido por Rebecca como parte do meu processo de aprendizado em ETL, Python e desenvolvimento web.
