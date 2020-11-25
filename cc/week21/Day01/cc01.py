# Q. Write a function to find the longest common prefix string amongst an array of strings.
#    If there is no common prefix, return an empty string ""

# Leetcode_url: https: // leetcode.com/problems/longest-common-prefix/


# Leetcode_solution:

    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""

        res = strs[0]
        for i in range(1, len(strs)):
            word = strs[i]
            for j in range(min(len(res), len(word))):
                if res[j] != word[j]:
                    res = res[:j]
                    break
            res = word if len(word) < len(res) else res

        return res
