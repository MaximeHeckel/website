package main //import "server"

import (
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/smtp"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

// Email struct for messages sent through the contact modal
type Email struct {
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Text    string `json:"text"`
}

//https://elithrar.github.io/article/vue-react-ember-server-golang/
func main() {
	var entry string
	var static string
	var port string

	flag.StringVar(&entry, "entry", "./index.html", "the entrypoint to serve.")
	flag.StringVar(&static, "static", ".", "the directory to serve static files from.")
	flag.StringVar(&port, "port", "8000", "the `port` to listen on.")
	flag.Parse()

	r := mux.NewRouter()
	r.Headers("Content-Type", "application/json")
	r.PathPrefix("/api/v1/helloworld").HandlerFunc(APIHandler)
	r.PathPrefix("/api/v1/contact").HandlerFunc(MailHandler)
	r.PathPrefix("/api/v1/healthhook").HandlerFunc(HealthHandler)
	r.PathPrefix("/dist").Handler(http.FileServer(http.Dir(static)))
	r.PathPrefix("/").HandlerFunc(IndexHandler(entry))

	log.Println("Server started")
	http.ListenAndServe(":8000", handlers.CORS()(r))
}

// IndexHandler function that handles the entrypoint of the react app
func IndexHandler(entrypoint string) func(w http.ResponseWriter, r *http.Request) {
	fn := func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, entrypoint)
	}

	return http.HandlerFunc(fn)
}

// APIHandler function that handles all api endpoints
func APIHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World")
}

// MailHandler function that handles the smtp send action
func MailHandler(w http.ResponseWriter, r *http.Request) {
	var email Email

	body, err := ioutil.ReadAll(r.Body)

	if err := r.Body.Close(); err != nil {
		log.Println("Error: " + err.Error())
		w.WriteHeader(400)
	}

	if err := json.Unmarshal(body, &email); err != nil {
		w.Header().Set("Content-Type", "application/json; charset=UTF-8")
		w.WriteHeader(422) // unprocessable entity
		if err := json.NewEncoder(w).Encode(err); err != nil {
			log.Println("Error: " + err.Error())
		}
	}

	from := os.Getenv("EMAIL_ADDR")
	pass := os.Getenv("EMAIL_PASS")
	to := os.Getenv("EMAIL_ADDR")

	msg := "From: " + from + "\n" +
		"To: " + to + "\n" +
		"Subject: " + email.Subject + " | " + email.Email + "\n\n" +
		email.Text

	err = smtp.SendMail("smtp.gmail.com:587",
		smtp.PlainAuth("", from, pass, "smtp.gmail.com"),
		from, []string{to}, []byte(msg))

	if err != nil {
		log.Printf("smtp error: %s", err)
		w.WriteHeader(400)
		return
	}
}

// HealthHandler ...
func HealthHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("--- RECEIVED HEALTH DATA FROM HEALTH PULSE ---")
	data, err := ioutil.ReadAll(r.Body)

	if err != nil {
		log.Println(err)
	}

	log.Println(string(data))
}
