## README - Recruta.ai Frontend

### **Visão Geral**

O **Recruta.ai** é uma plataforma de recrutamento focada em humanizar e inovar o processo de seleção de talentos. Este documento aborda o status atual do **frontend** do projeto, baseado no design que foi desenvolvido até o momento.

---

### **Status do Projeto**

#### **O que foi desenvolvido:**

1. **Protótipo no Figma:**
   - **Página Inicial**:
     - Banner com campo de busca.
     - Seções para "Jobs em Destaque", categorias de vagas e avaliações de usuários.
     - Formulário de contato.
   - **Página de Processo Seletivo**:
     - Exibe as vagas em andamento com uma barra de progresso que indica o status da candidatura.
     - Botão para visualização de feedback.
   - **Página de Feedback**:
     - Mensagem de rejeição com sugestões de como melhorar o currículo.
     - Ilustração para reforçar a mensagem.

2. **Componentes de UI**:
   - Elementos como botões, menus, formulários e cartões de vaga foram criados para garantir a consistência visual e a facilidade de uso.

---

### **O que ainda está pendente:**

1. **Interatividade:**
   - Implementação de funcionalidades como campos de busca e filtros de vagas.
   - Interação com o backend (ainda não desenvolvido).

2. **Validação de Formulários**:
   - Validação para os formulários de contato e de candidatura.

3. **Integração com Backend**:
   - Para exibir e filtrar vagas, bem como gerenciar candidaturas e feedbacks.

4. **Melhoria de Animações e Transições**:
   - Tornar a interface mais fluida com transições suaves entre páginas e componentes.
   
5. **Design Responsivo**:
   - O layout foi desenvolvido para se ajustar bem em diversos tamanhos de tela (desktop, tablet e smartphone).

---

### **Próximos Passos**

1. **Integração com Backend** para fornecer dados dinâmicos nas páginas de vagas, processo seletivo e feedback.
2. **Ajustes de Responsividade e Acessibilidade**, garantindo uma experiência otimizada em todas as plataformas.


### **Como Instalar e Rodar o Projeto**

Este projeto foi desenvolvido utilizando **Next.js**. Siga as instruções abaixo para rodá-lo localmente.

#### **Pré-requisitos**

- **Node.js** instalado (recomenda-se a versão LTS mais recente).
- **Yarn** ou **npm** para gerenciamento de pacotes.

#### **Passo a Passo de Instalação**

1. **Instale as dependências**:

   Se estiver utilizando **npm**:

   ```bash
   npm install
   ```

   Ou, se estiver utilizando **Yarn**:

   ```bash
   yarn install
   ```

2. **Rodar o projeto em modo de desenvolvimento**:

   Para rodar o projeto localmente com hot-reload, execute:

   Se estiver utilizando **npm**:

   ```bash
   npm run dev
   ```

   Ou, se estiver utilizando **Yarn**:

   ```bash
   yarn dev
   ```

3. **Acesse o projeto no navegador**:

   Após rodar o comando acima, abra o navegador e acesse:

   ```
   http://localhost:3000
   ```

---

### **Scripts Disponíveis**

- **`dev`**: Executa o projeto em modo de desenvolvimento.
- **`build`**: Gera uma build de produção.
- **`start`**: Inicia o projeto em modo de produção após a build.
- **`lint`**: Executa o linting para verificar problemas no código.
```

---

Este documento será atualizado à medida que o desenvolvimento do frontend avançar.