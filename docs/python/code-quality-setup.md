# Python Code Quality Setup

This repository includes a comprehensive Python code quality and linting infrastructure to ensure consistent code style and high-quality contributions.

## 🛠️ Tools Included

- **black** - Automatic code formatting
- **isort** - Import sorting
- **flake8** - PEP8 compliance and linting
- **mypy** - Static type checking
- **bandit** - Security linting
- **pytest** - Testing framework
- **pre-commit** - Git hooks for quality checks

## 📋 Configuration Files

### `.flake8`
- Line length: 88 characters (compatible with black)
- Excludes build directories and common ignore patterns
- Enables complexity checking (max complexity: 10)

### `pyproject.toml`
- **black**: 88-character line length, Python 3.8+ compatibility
- **isort**: Black-compatible profile, sorts imports by sections
- **mypy**: Strict type checking configuration
- **coverage**: Test coverage reporting settings

### `.pre-commit-config.yaml`
- Runs black, isort, flake8, mypy, and bandit
- Includes general hooks for file validation
- Security scanning with bandit

### `requirements-dev.txt`
- All development dependencies with pinned versions
- Includes testing, documentation, and code analysis tools

### `.github/workflows/lint.yml`
- Runs on Python 3.8, 3.9, 3.10, and 3.11
- Automated linting and testing on pull requests
- Includes security scanning and coverage reporting

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   pip install -r requirements-dev.txt
   ```

2. **Set up pre-commit hooks:**
   ```bash
   pre-commit install
   ```

3. **Run code formatting:**
   ```bash
   black .
   isort .
   ```

4. **Run linting:**
   ```bash
   flake8 .
   mypy .
   ```

5. **Run tests:**
   ```bash
   pytest
   ```

## 🔍 Code Standards

- **PEP 8** compliance enforced by flake8
- **Type hints** required for all function signatures
- **Docstrings** required for all public functions and classes
- **Line length** limited to 88 characters
- **Import organization** handled by isort
- **Security** scanning with bandit

## 🧪 Example Usage

The `backend/` directory contains example Python files that demonstrate the coding standards:

- `backend/user_service.py` - Service module with proper type hints and docstrings
- `backend/test_user_service.py` - Test module with comprehensive test cases
- `backend/__init__.py` - Package initialization

## 🔧 Validation

Run the validation script to ensure everything is set up correctly:

```bash
python validate_config.py
```

This will check:
- Python syntax of all backend files
- Existence of all configuration files
- Basic validation of configuration formats

## 📚 Additional Resources

- [Black documentation](https://black.readthedocs.io/)
- [isort documentation](https://pycqa.github.io/isort/)
- [flake8 documentation](https://flake8.pycqa.org/)
- [mypy documentation](https://mypy.readthedocs.io/)
- [pre-commit documentation](https://pre-commit.com/)