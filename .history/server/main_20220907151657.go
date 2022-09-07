package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

type Todo struct {
	ID    int    `jason:"id"`
	Title string `json:"title"`
	Done  bool   `json:"done"`
	Body  int    `json:"body"`
}

func main() {
	fmt.Println("Hello World")

	app := fiber.New()

	todos := []Todo{}

	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})

	app.Post("/api/todos", func(c *fiber.Ctx) error {
		todo := &Todo{}

		err := c.BodyParser(todo)

	})

	log.Fatal(app.Listen(":4000"))
}
