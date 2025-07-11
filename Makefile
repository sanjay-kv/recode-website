.PHONY: help install format lint test security clean all

# Default target
help:
	@echo "Available targets:"
	@echo "  install    - Install development dependencies"
	@echo "  format     - Format code with black and isort"
	@echo "  lint       - Run linting with flake8 and mypy"
	@echo "  test       - Run tests with pytest"
	@echo "  security   - Run security checks with bandit"
	@echo "  clean      - Clean up cache files and build artifacts"
	@echo "  all        - Run format, lint, test, and security checks"
	@echo "  validate   - Validate configuration setup"

# Install development dependencies
install:
	pip install -r requirements-dev.txt
	pre-commit install

# Format code
format:
	black .
	isort .

# Lint code
lint:
	flake8 .
	mypy .

# Run tests
test:
	pytest --cov=. --cov-report=term-missing

# Security checks
security:
	bandit -r . -x "*/test_*,*/tests/*"
	safety check

# Clean up
clean:
	find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
	find . -type f -name "*.pyc" -delete 2>/dev/null || true
	find . -type f -name "*.pyo" -delete 2>/dev/null || true
	find . -type d -name "*.egg-info" -exec rm -rf {} + 2>/dev/null || true
	rm -rf .pytest_cache .coverage htmlcov/ .mypy_cache/

# Run all checks
all: format lint test security

# Validate setup
validate:
	python validate_config.py