"""
Sample Python backend module for testing linting configuration.

This module demonstrates the code quality standards expected
for the Python backend codebase.
"""

from typing import Dict, List, Optional


def calculate_sum(numbers: List[int]) -> int:
    """Calculate the sum of a list of integers.
    
    Args:
        numbers: A list of integers to sum.
        
    Returns:
        The sum of all integers in the list.
        
    Raises:
        TypeError: If numbers is not a list or contains non-integers.
    """
    if not isinstance(numbers, list):
        raise TypeError("Expected a list of numbers")
    
    return sum(numbers)


def format_user_data(user_data: Dict[str, str]) -> Optional[str]:
    """Format user data into a readable string.
    
    Args:
        user_data: Dictionary containing user information.
        
    Returns:
        Formatted string or None if data is invalid.
    """
    if not user_data or "name" not in user_data:
        return None
    
    name = user_data.get("name", "Unknown")
    email = user_data.get("email", "No email provided")
    
    return f"User: {name} ({email})"


class UserManager:
    """Manages user operations for the backend."""
    
    def __init__(self) -> None:
        """Initialize the UserManager."""
        self.users: List[Dict[str, str]] = []
    
    def add_user(self, name: str, email: str) -> bool:
        """Add a new user to the system.
        
        Args:
            name: The user's name.
            email: The user's email address.
            
        Returns:
            True if user was added successfully, False otherwise.
        """
        if not name or not email:
            return False
        
        user = {"name": name, "email": email}
        self.users.append(user)
        return True
    
    def get_user_count(self) -> int:
        """Get the total number of users.
        
        Returns:
            The number of users in the system.
        """
        return len(self.users)