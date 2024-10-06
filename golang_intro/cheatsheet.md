# Golang Cheatsheet

## Variables

```go
var name string = "John"
var age int = 20
```

## Functions

```go
func main() {
    fmt.Println("Hello, World!")
}
```


## Arrays

```go
var numbers [5]int
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
```

## Slices

```go
var numbers []int
numbers = append(numbers, 1)
numbers = append(numbers, 2)
numbers = append(numbers, 3)
```

## Maps

```go
var numbers map[string]int
numbers["one"] = 1
numbers["two"] = 2
numbers["three"] = 3
```

## Structs

```go
type Person struct {
    Name string
    Age int
}

```

## Pointers

```go
var name string = "John"
var namePointer *string = &name
```

## Interfaces

```go
type Animal interface {
    Speak() string
}

```

## Channels

```go
var numbers chan int
numbers <- 1
numbers <- 2
numbers <- 3
```

## Goroutines

```go
go func() {
    fmt.Println("Hello, World!")
}()
```



## Mutexes

```go
var mutex sync.Mutex

```



