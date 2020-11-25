# Given a string, determine if it is a palindrome, considering only alphanumeric characters
# and ignoring cases.

# LEETCODE SOLUTION

# URL: https://leetcode.com/problems/valid-palindrome/

def isPalindrome(self, s: str) -> bool:
      if s == "":
          return True

      list_s = []

      for i in s:
          if i.isalnum():
              list_s.append(i.lower())

      if list_s == list_s[::-1]:
          return True
      else:
          return False
