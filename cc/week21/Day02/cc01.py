# Q. Implement atoi which converts a string to an integer.

# Questiopn_url : https://leetcode.com/problems/string-to-integer-atoi/

# LEETCODE_SOLUTION :     

def myAtoi(self, str: str) -> int:
    tmp = ''
    res = 0
    
    for i in range(len(str)):
        if str[i] == ' ': continue
        elif str[i].isalpha() or str[i] == '.': break
        elif str[i].isdigit():
            tmp += str[i]
            if i+1 < len(str) and not str[i+1].isdigit(): break
        elif str[i] == '-' or str[i] == '+':
            if i+1 < len(str) and str[i+1].isdigit(): tmp += str[i]
            else: break
            
    res = int(tmp) if tmp else 0
    if -2**31 <= res <= 2**31-1: return res
    else: return -2**31 if res < 0 else 2**31-1