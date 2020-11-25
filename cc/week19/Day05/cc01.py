# Q. There are N children standing in a line. Each child is assigned a rating value.
#    You are giving candies to these children subjected to the following requirements:
#      - Each child must have at least one candy.
#      - Children with a higher rating get more candies than their neighbors.
#    What is the minimum candies you must give?

# LEETCODE SOLUTION

# URL: https://leetcode.com/problems/candy/

def candy(self, ratings: List[int]) -> int:
    if not ratings:
        return 0
    # left -> right
    candies = [1]
    for i in range(len(ratings) - 1):
        # increase the candies when we increase the rating
        if ratings[i] < ratings[i + 1]:
            candies.append(candies[-1] + 1)
        else:
            candies.append(1)
    # right -> left
    for i in reversed(range(len(ratings) - 1)):
        if ratings[i] > ratings[i + 1]:
            # increase or keep the previous value
            candies[i] = max(candies[i], candies[i + 1] + 1)
    return sum(candies)