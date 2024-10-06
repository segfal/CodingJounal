#include <iostream>
#include <string>
#include <cmath>
#include <vector>
#include <unordered_map>




std::vector<int> two_sum(std::vector<int> nums, int target){
    std::unordered_map<int,int> table;

    for(int i=0;i<nums.size();i++){
        int targ = target-nums[i];
        if(table.count(targ)){
            return {table[targ],i};
        }
        table[nums[i]] = i;
    }

    return {-1,-1};
}



int main(){

}