Using this repository, after creating a "stackmodel" in your Mongo database (which is done at the end of the video), create a `GET` to `http://localhost:3000/v1/stacks/` to list your stacks, and then create a `GET`to `http://localhost:3000/v1/stacks/:id/` to get the individual stack with your given "_id" from the database.


For instance, if I do an HTTP `GET` request to `http://localhost:3000/v1/stacks/5f54222bc02b22d5f078e4e5/` I will get a JSON response of the following:

```json
{
  "_id": "f54222bc02b22d5f078e4e5",
  "name": "Node, Mongoose and Typescript stack",
  "wikipediaLink": "https://en.wikipedia.org/wiki/Mongoose_(web_server)"
}
```

If I do an HTTP `GET` request to `http://localhost:3000/v1/stacks/` then I will get a JSON response of the following:

```json
[
  {
    "_id": "f54222bc02b22d5f078e4e5",
    "name": "Node, Mongoose and Typescript stack",
    "wikipediaLink": "https://en.wikipedia.org/wiki/Mongoose_(web_server)"
  }
]
```


Make a Pull Request to this repo when you're finished.

Happy coding!
