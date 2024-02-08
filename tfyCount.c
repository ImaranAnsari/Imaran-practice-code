#include <stdio.h>

int main()
{
    int toffy = 50;
    int rem = 0;
    int count = 50;

    while (toffy > 3)
    {
        if (toffy >= rem + toffy / 3)
        {
            toffy = toffy / 3;
            rem = toffy % 3;
            count = count + toffy;
            // console.log('toffy', count);
            // return count;
        }
        // return count
    }
    // return count;
    printf("%d", count);
}