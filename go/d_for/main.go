package main

import "fmt"

func main() {
	fruits := []string{"apple", "banana", "cherry"}
	for idx, val := range fruits {
		fmt.Printf("index: %v, value: %v\n", idx, val)
	}
}
