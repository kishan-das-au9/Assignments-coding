# Q. Say you have an array for which the i
# th element is the price of a given stock on day i.
# If you were only permitted to complete at most one transaction (i.e., buy one and sell one
# share of the stock), design an algorithm to find the maximum profit.

# LEETCODE SOLUTION

# URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


def maxProfit(self, prices: List[int]) -> int:
    mp=0
    for i in range(len(prices)-1):
        sp=max(prices[i:])
        profit=sp-prices[i]
        if(profit>mp):
            mp=profit
            return(mp)