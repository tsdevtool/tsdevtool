package main

import "fmt"

func main() {
	var arr1 = [5]int{1, 2, 3, 4, 5}
	var arr2 = [...]int{1, 2, 3}
	arr3 := [5]int{1, 2, 3, 4, 5}
	arr4 := [...]int{1, 2, 3}
	arr5 := [...]int{1: 10, 2: 40}
	fmt.Println(arr1)
	fmt.Println(arr2)
	fmt.Println(arr3)
	fmt.Println(arr4)
	fmt.Println(arr5)
	fmt.Print(len(arr5))
}
