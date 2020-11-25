# Q. Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of
# the two sorted arrays.

# Question url : https://leetcode.com/problems/median-of-two-sorted-arrays/


# Leetcode Solution:

    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        for i in nums2:
            nums1.append(i)
        nums1.sort()
        if int(len(nums1)%2)==0:
            return ((nums1[int(len(nums1)/2)]+nums1[int(len(nums1)/2)-1])/2)
        else:
            return nums1[len(nums1)//2]