# Q. Given a 32-bit signed integer, reverse digits of an integer.

# Question url : https://leetcode.com/problems/reverse-integer/


# Leetcode Solution:

  def reverse(self, x: int) -> int:
      if(x<0):
          s=-int((str(-1*x)[::-1]))
          return s if(s>-2**31) else 0
      s=int((str(x)[::-1]))
      return s if (s<2**31-1) else 0