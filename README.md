# Epic Games Store Clone

[Live Demo](https://epic-games-taupe.vercel.app/)

## 🛠 Development Setup (VS Code Recommended)

### Recommended Extensions

Install these VS Code extensions for optimal development:

```bash
Name: ES7+ React/Redux/React-Native snippets
Id: dsznajder.es7-react-js-snippets

Name: Chakra UI Snippets
Id: christian-kohler.chakra-ui-snippets

Name: ESLint
Id: dbaeumer.vscode-eslint
```

### Project Structure

```bash
📦src
├─ 🗂️ api          # API service configuration
├─ 🗂️ components  # Reusable UI components
├─ 🗂️ hooks       # Custom React hooks
├─ 🗀 styles       # Global CSS/Chakra config
└─ 🗀 types        # TypeScript type definitions
```

## 🚀 Quick Start

1. Clone repo & open in VS Code:

```bash
git clone https://github.com/yourusername/epic-games-clone.git && code epic-games-clone
```

2. Install dependencies:

```bash
npm install
```

3. Start dev server (VS Code terminal):

```bash
npm run dev
```

## 🔍 Code Quality

Configured for VS Code's built-in tools:

- `.eslintrc` - TypeScript/React linting rules
- `.prettierrc` - Consistent code formatting
- `jsconfig.json` - Improved IntelliSense

## 🌐 Deployment

```mermaid
graph LR
  A[VS Code] --> B[Git Commit]
  B --> C[Push to GitHub]
  C --> D[Vercel Auto-Deploy]
```

## 📋 Key Features

| Category         | Technologies Used         |
| ---------------- | ------------------------- |
| Core Framework   | React.js + TypeScript     |
| Styling          | Chakra UI + CSS Modules   |
| State Management | Custom Hooks + useContext |
| API Handling     | RESTful API Integration   |

## ⚠️ Important Notes

1. Add `.env` file for API endpoints:

```env
REACT_APP_API_BASE_URL=your_api_endpoint
```

2. Enable VS Code auto-format on save:

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## 📄 License

MIT Licensed - See [LICENSE](LICENSE) for details

```

Key VS Code-specific enhancements:
1. Added IDE configuration recommendations
2. Terminal command formatting
3. File structure visualization
4. MermaidJS deployment diagram
5. Extension installation guidance
6. VS Code settings snippet

Would you like me to add any specific VS Code debugging configurations or additional IDE integration details?
```
