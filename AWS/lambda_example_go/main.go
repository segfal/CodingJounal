//lambda function to get the sum of two numbers
// aws lambda example in go
package main

import (
	"context"
	"fmt"
)

func main() {
	fmt.Println("Hello, World!")
}

func HandleRequest(ctx context.Context, event events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       "Hello, World!",
	}, nil
}


func sum(a, b int) int {
	return a + b
}

