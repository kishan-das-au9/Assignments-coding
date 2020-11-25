# Given an input string (s) and a pattern (p), implement regular expression matching with
# support for '.' and '*' where:
# • '.' Matches any single character.
# • '*' Matches zero or more of the preceding element.

# Question url : https://leetcode.com/problems/regular-expression-matching/


# Leetcode Solution:

  def isMatch(self, s: str, p: str) -> bool:
      match = re.match(p,s)
      if not match:
          return False
      if match.start()==0 and match.end()==len(s):
          return True
      return False
