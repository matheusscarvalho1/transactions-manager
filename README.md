# 💸 Money - Gerenciamento Financeiro

Aplicativo mobile construído com **Expo**, **React Native** e **TypeScript** para ajudar usuários a **gerenciarem suas finanças pessoais**. Permite registrar receitas e despesas, visualizar um histórico de transações e manter os dados localmente mesmo após fechar o app.

Esse projeto foi desenvolvido como parte da minha transição de **desenvolvedor web com React** para o mundo do **desenvolvimento mobile com React Native**.

Embora já trabalhe há algum tempo com **React para aplicações web**, essa é uma das minhas **primeiras experiências com React Native**. A proposta deste app foi justamente me familiarizar com os **componentes nativos do ambiente mobile** e entender as **diferenças práticas entre o React tradicional (web) e o React Native**.

Durante o desenvolvimento, pude aplicar conhecimentos já consolidados, como o uso de componentes reutilizáveis, contexto global e tipagem com TypeScript, ao mesmo tempo em que explorei recursos exclusivos do mobile, como:

- Componentes básicos e específicos do React Native como 'View', 'Text', 'TextInput', 'TouchableOpacity', 'ScrollView', 'FlatList', 'SectionList', entre outros, querendo ou não mudam algumas coisas, são detalhes diferentes, porém é interessante saber.

- Gerenciamento de teclado para evitar sobreposição dos inputs, com componentes como KeyboardAvoidingView e tratamento de toques fora do teclado com TouchableWithoutFeedback

- Manipulação de datas e seletores nativos usando bibliotecas como @react-native-community/datetimepicker

- Estilização eficiente com o objeto StyleSheet do React Native para criar estilos otimizados e reutilizáveis

- Persistência de dados local usando AsyncStorage para salvar dados entre sessões

- Animações e gestos usando Animated e react-native-gesture-handler para interações como swipe para excluir itens

- Formatação e validação de entradas, como máscara para valores monetários e controle de teclado numérico

- Navegação entre telas com bibliotecas como react-navigation (embora não mostrado aqui, normalmente usada em apps mobile)

- Uso de hooks do React e TypeScript para garantir tipagem segura e melhor manutenção do código

- Adaptação de UI para diferentes plataformas (iOS/Android), como ajustes no seletor de data (display inline no iOS, default no Android)

- Controle de estado local e global para gerenciamento eficiente dos dados e reatividade da interface

Com essa experiência, agora posso atuar tanto no desenvolvimento web quanto mobile, pois o conhecimento em React é amplamente reaproveitável para React Native, ampliando minha capacidade de atender a diferentes demandas.

---

## 📱 Funcionalidades

- 🧾 Listagem de transações (com remoção por swipe/toque)
- ➕ Cadastro de transações com:
  - Descrição
  - Valor com formatação de moeda
  - Data customizável
  - Categoria (Origem dos gastos)
- 📊 Tela de **resumo financeiro** (estrutura preparada)
- 💾 Persistência local com `AsyncStorage`
- Layout adaptado com `KeyboardAvoidingView`, `TouchableWithoutFeedback`, `ScrollView` e outros recursos de UX

---

## 🧠 Tecnologias e Conceitos

| Área | Tecnologias Utilizadas |
|------|-------------------------|
| Mobile | React Native + Expo SDK 53 |
| Navegação | `expo-router`, `@react-navigation/native`, `@react-navigation/bottom-tabs` |
| Interface | `@expo/vector-icons`, `expo-blur`, `expo-image`, `expo-status-bar` |
| Armazenamento | `@react-native-async-storage/async-storage` |
| Inputs | `react-native-datetimepicker`, `@react-native-picker/picker` |
| Tipagem | TypeScript |
| Estado global | React Context (`MoneyContext`) |
| Estilo | `StyleSheet` e estilos reutilizáveis (`globalStyles`) |
| Lint | ESLint com `eslint-config-expo` |
| Organização | Componentização e separação de responsabilidades por pasta |

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/app-gerenciamento-financeiro.git
cd app-gerenciamento-financeiro
````

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npx expo start
```

Você poderá rodar o app em:

* Dispositivo físico com **Expo Go**
* Emulador Android / iOS
* Navegador (modo Web)

---

## 🛠 Scripts

```bash
npx expo start          # Inicia o app com Expo
```

---

## 🧾 Estrutura do Projeto

```bash
.
├── app/
│   ├── (tabs)/                 
│   │   ├── _layout.tsx              # Define a navegação por abas
│   │   ├── index.tsx                # Tela principal - lista de transações
│   │   ├── add-transaction.tsx      # Tela para adicionar nova transação
│   │   └── summary-transations.tsx  # Tela de resumo financeiro
│   ├── _layout.tsx                 # Define a navegação geral do app
│   └── not-found.tsx              # Página de rota não encontrada (404)
├── assets/                         # Ícones e imagens
├── components/                     # Componentes reutilizáveis (Input, Botão, etc.)
├── constants/                      # Cores, categorias, etc.
├── contexts/                       # Estado global (MoneyContext)
├── scripts/                        # Scripts utilitários
├── styles/                         # Estilos globais
└── ...

```

---

## 🔄 Cadastro de Transações

A tela de adição (`add-transaction.tsx`) utiliza um formulário controlado com os campos:

* `description: string`
* `value: number`
* `date: Date`
* `category: string`

As transações são salvas no contexto global e também persistidas no `AsyncStorage`.

```tsx
const addingTransaction = async () => {
  const newTransaction = { id: transactions.length + 1, ...form };
  const updateTransactions = [...transactions, newTransaction];

  setTransactions(updateTransactions);
  setForm(initialForm);
  await AsyncStorage.setItem("transactions", JSON.stringify(updateTransactions));

  Alert.alert("Transação adicionada com sucesso!");
};
```

---

## 📚 Resultado

* Para melhor entendimento: [Assista ao vídeo com as funcionalidades](https://youtube.com/shorts/bzRidm1hqDU)

* ### Telas
<img src="https://github.com/user-attachments/assets/0bc732f9-6f36-4173-9754-1d831e860496" width="250" />

<img src="https://github.com/user-attachments/assets/b479e602-5185-48d6-8ef0-2f49127f40a3" width="250" />

<img src="https://github.com/user-attachments/assets/c450d4be-c831-43ed-84d5-534d937e2091" width="250" />



---

## 👨‍💻 Autor

**Matheus Carvalho**
📧 contato: [matheusdocarvalho@gmail.com](mailto:matheusdocarvalho@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/matheusscarvalho) | [GitHub](https://github.com/matheusscarvalho1)
