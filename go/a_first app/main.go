package main

import "fmt"

/*Formatting verbs*/
func main() {
	var pi float32 = 1234553.146

	fmt.Printf("\n%e", pi) //In ra co e thuong la 6 chu so sau dau cham\n
	fmt.Printf("\n%f", pi)
	fmt.Printf("\n%g", pi)
	fmt.Printf("\n%.2f", pi)
	fmt.Printf("\n%6.2f", pi)
}

/*Output functions*/
// func main() {
// 	var i, j string = "Hello", "World"
// 	fmt.Println(i, j)
// 	fmt.Printf("i has value: %v and has type: %T\n", i, i)
// 	fmt.Printf("j has value: %v and has type: %T\n", j, j)
// }

/*Variables*/

// Khong co gia tri ban dau
// func main() {
// 	var a string
// 	var b int
// 	var c bool
// 	var d float32

// 	fmt.Println(a)
// 	fmt.Println(b)
// 	fmt.Println(c)
// 	fmt.Println(d)

// }

// Co gia tri ban dau
// func main() {
// 	var student1 string = "John"
// 	var student2 = "Jane"
// 	x := 2

// 	fmt.Println(student1)
// 	fmt.Println(student2)
// 	fmt.Println(x)

// }

// Comments
//This is a comment

/*
func main() {
	fmt.Println("Hello world")
}
*/
