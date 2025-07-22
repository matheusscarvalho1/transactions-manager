# 💸 Money - Gerenciamento Financeiro

Aplicativo mobile construído com **Expo**, **React Native** e **TypeScript** para ajudar usuários a **gerenciarem suas finanças pessoais**. Permite registrar receitas e despesas, visualizar um histórico de transações e manter os dados localmente mesmo após fechar o app.

---

## 📱 Funcionalidades

- 🧾 Listagem de transações (com remoção por swipe/toque)
- ➕ Cadastro de transações com:
  - Descrição
  - Valor com formatação de moeda
  - Data customizável
  - Categoria (ex: entrada, saída)
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
npm start              # Inicia o app com Expo
npm run android        # Abre no emulador Android
npm run ios            # Abre no simulador iOS (Mac)
npm run web            # Executa o app no navegador
npm run lint           # Executa o ESLint para verificar problemas de código
npm run reset-project  # Script que reseta a pasta app
```

---

## 🧾 Estrutura do Projeto

```bash
.
├── app/
│   ├── (tabs)/                  # Navegação por abas
│   ├── index.tsx                # Tela principal - lista de transações
│   ├── add-transaction.tsx      # Tela para adicionar nova transação
│   └── summary-transations.tsx  # Tela de resumo financeiro
├── assets/                      # Ícones e imagens
├── components/                  # Componentes reutilizáveis (Input, Botão, etc.)
├── constants/                   # Cores, categorias, etc.
├── contexts/                    # Estado global (MoneyContext)
├── scripts/                     # Scripts utilitários
├── styles/                      # Estilos globais
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
<img src="https://github.com/user-attachments/assets/0bc732f9-6f36-4173-9754-1d831e860496" width="300" />

<img src="https://github.com/user-attachments/assets/b479e602-5185-48d6-8ef0-2f49127f40a3" width="300" />

<img src="https://github.com/user-attachments/assets/c450d4be-c831-43ed-84d5-534d937e2091" width="300" />



---

## 👨‍💻 Autor

**Matheus Carvalho**
📧 contato: [matheusdocarvalho@gmail.com](mailto:matheusdocarvalho@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/matheusscarvalho) | [GitHub](https://github.com/matheusscarvalho1)
