package main

import (
	"context"
	"net/http"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	echoadapter "github.com/awslabs/aws-lambda-go-api-proxy/echo"
	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	router(e)

	echoLambda := echoadapter.New(e)

	handler := func(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
		return echoLambda.ProxyWithContext(ctx, req)
	}

	// e.Logger.Fatal(e.Start(":8080"))
	lambda.Start(handler)
}

func router(e *echo.Echo) {
	// // CORS設定
	// e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
	// 	AllowOrigins: []string{"http://localhost:3000", "*"},
	// 	AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
	// }))

	e.GET("/", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{"message": "ok"})
	})
}
