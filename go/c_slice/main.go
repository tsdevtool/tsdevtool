package main

import "fmt"

/*Change length of 1 slice*/
func main() {

	arr1 := [6]int{1, 2, 3, 4, 5, 6}
	my_slice := arr1[1:3]
	my_slice = append(my_slice, 11, 12, 13, 14)

	fmt.Println(my_slice)
	fmt.Println(len(my_slice))
	fmt.Println(cap(my_slice))

}

/*Add elements to a slice*/
// func main() {

// 	my_slice := []int{1, 2, 3, 4}
// 	my_slice = append(my_slice, 11, 12)

// 	//One slice to another slice
// 	your_slice := []int{5, 6}
// 	you_and_me_slice := append(my_slice, your_slice...)
// 	fmt.Println(you_and_me_slice)
// 	fmt.Println(len(you_and_me_slice))
// 	fmt.Println(cap(you_and_me_slice))

// 	fmt.Println(my_slice)
// 	fmt.Println(len(my_slice))
// 	fmt.Println(cap(my_slice))

// }

/*Slice Example*/
// func main() {
// 	var arr1 = [6]int{1, 2, 3, 4, 5, 6}
// 	myslice := arr1[2:2] //vay la se co mot phan tu co gia tri la 3 va mot phan tu rong
// 	fmt.Println(myslice)
// 	fmt.Println(len(myslice))
// 	fmt.Println(cap(myslice))
// }
