# Contributing to StaffSync

Thank you for your interest in contributing to **StaffSync**! We welcome contributions, feature enhancements, documentation improvements, and bug fixes from the developer community.

---

## 🛠️ Development Workflow

### 1. Fork & Clone
Fork the repository and clone your fork locally:
```bash
git clone https://github.com/<your-username>/Staff-syncc.git
cd StaffSync
```

### 2. Branching Strategy
Create a feature branch following conventional naming:
- `feat/feature-name` for new capabilities
- `fix/bug-description` for bug fixes
- `docs/doc-updates` for documentation changes
- `refactor/component-name` for code refactoring

```bash
git checkout -b feat/custom-shift-scheduling
```

### 3. Install Dependencies
```bash
npm run install:all
```

### 4. Code Standards & Linting
- Follow standard JavaScript/ES6+ guidelines.
- Use meaningful variable and function names.
- Ensure all modules handle errors gracefully using standard HTTP status codes.
- Run Oxlint on the client before committing:
  ```bash
  npm --prefix client run lint
  ```

### 5. Commit Guidelines
We follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat: add export to CSV for attendance reports`
- `fix: resolve midnight boundary in hours computation`
- `docs: update API endpoints reference table`

### 6. Pull Request Process
1. Push your branch to GitHub.
2. Open a Pull Request against the `main` branch.
3. Describe the problem your change solves and include screenshots or API payloads if applicable.
4. Ensure the automated CI checks pass.

