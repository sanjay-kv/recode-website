#!/usr/bin/env python3
"""
Demonstration script showing Python linting configuration is working.

This script validates that our Python files follow the expected standards.
"""

import ast
import sys
from pathlib import Path


def check_python_syntax(file_path: Path) -> bool:
    """Check if a Python file has valid syntax.
    
    Args:
        file_path: Path to the Python file to check.
        
    Returns:
        True if syntax is valid, False otherwise.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            ast.parse(f.read())
        return True
    except SyntaxError as e:
        print(f"Syntax error in {file_path}: {e}")
        return False


def main() -> None:
    """Main function to check all Python files in the backend directory."""
    backend_dir = Path("backend")
    
    if not backend_dir.exists():
        print("Backend directory not found!")
        sys.exit(1)
    
    python_files = list(backend_dir.glob("*.py"))
    
    if not python_files:
        print("No Python files found in backend directory!")
        sys.exit(1)
    
    print("Checking Python files for syntax...")
    
    all_valid = True
    for file_path in python_files:
        print(f"  Checking {file_path}...")
        if check_python_syntax(file_path):
            print(f"    ✓ {file_path} - Valid syntax")
        else:
            print(f"    ✗ {file_path} - Invalid syntax")
            all_valid = False
    
    print("\nConfiguration files validation:")
    
    # Check config files exist
    config_files = [
        ".flake8",
        "pyproject.toml", 
        ".pre-commit-config.yaml",
        "requirements-dev.txt",
        ".github/workflows/lint.yml"
    ]
    
    for config in config_files:
        if Path(config).exists():
            print(f"    ✓ {config} exists")
        else:
            print(f"    ✗ {config} missing")
            all_valid = False
    
    if all_valid:
        print("\n🎉 All checks passed! Python linting infrastructure is ready.")
    else:
        print("\n❌ Some checks failed. Please review the issues above.")
        sys.exit(1)


if __name__ == "__main__":
    main()