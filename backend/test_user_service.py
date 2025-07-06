"""
Test module for user_service.

This module tests the user management functionality
using pytest and demonstrates testing standards.
"""

import pytest
from typing import Dict, List

from backend.user_service import UserManager, calculate_sum, format_user_data


class TestCalculateSum:
    """Test cases for the calculate_sum function."""
    
    def test_calculate_sum_valid_input(self) -> None:
        """Test calculate_sum with valid input."""
        assert calculate_sum([1, 2, 3, 4, 5]) == 15
        assert calculate_sum([]) == 0
        assert calculate_sum([-1, 1]) == 0
    
    def test_calculate_sum_invalid_input(self) -> None:
        """Test calculate_sum with invalid input."""
        with pytest.raises(TypeError):
            calculate_sum("not a list")  # type: ignore


class TestFormatUserData:
    """Test cases for the format_user_data function."""
    
    def test_format_user_data_valid(self) -> None:
        """Test format_user_data with valid data."""
        user_data = {"name": "John Doe", "email": "john@example.com"}
        result = format_user_data(user_data)
        assert result == "User: John Doe (john@example.com)"
    
    def test_format_user_data_missing_email(self) -> None:
        """Test format_user_data with missing email."""
        user_data = {"name": "Jane Doe"}
        result = format_user_data(user_data)
        assert result == "User: Jane Doe (No email provided)"
    
    def test_format_user_data_invalid(self) -> None:
        """Test format_user_data with invalid data."""
        assert format_user_data({}) is None
        assert format_user_data({"email": "test@example.com"}) is None


class TestUserManager:
    """Test cases for the UserManager class."""
    
    def test_init(self) -> None:
        """Test UserManager initialization."""
        manager = UserManager()
        assert manager.get_user_count() == 0
    
    def test_add_user_valid(self) -> None:
        """Test adding valid users."""
        manager = UserManager()
        assert manager.add_user("John Doe", "john@example.com") is True
        assert manager.get_user_count() == 1
    
    def test_add_user_invalid(self) -> None:
        """Test adding invalid users."""
        manager = UserManager()
        assert manager.add_user("", "john@example.com") is False
        assert manager.add_user("John Doe", "") is False
        assert manager.get_user_count() == 0
    
    def test_multiple_users(self) -> None:
        """Test adding multiple users."""
        manager = UserManager()
        manager.add_user("John Doe", "john@example.com")
        manager.add_user("Jane Smith", "jane@example.com")
        assert manager.get_user_count() == 2