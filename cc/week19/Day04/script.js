import re

REGEX = re.compile(r'[^#]#')
def clean_string(s):
    while '#' in s:
        s = REGEX.sub('', s, 1).lstrip('#')
    return s
if _name_(main):
s = "abc#d##c"
result = clean_string(s)
print(result)