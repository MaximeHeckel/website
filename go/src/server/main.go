package main //import "server"

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

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
	r.PathPrefix("/api/helloworld").HandlerFunc(APIHandler)
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
