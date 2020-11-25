# Q. Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M

# Question url : https://leetcode.com/problems/roman-to-integer/

# Leetcode Solution:
class Solution:

    rmn_dict = {"IV": "+4",
                "IX": "+9",
                "XL": "+40",
                "XC": "+90",
                "CD": "+400",
                "CM": "+900",
                "I": "+1",
                "V": "+5",
                "X": "+10",
                "L": "+50",
                "C": "+100",
                "D": "+500",
                "M": "+1000"}

    def romanToInt(self, s: str) -> int:
        for st in self.rmn_dict:
            s = s.replace(st, self.rmn_dict[st])
        return eval(s)
