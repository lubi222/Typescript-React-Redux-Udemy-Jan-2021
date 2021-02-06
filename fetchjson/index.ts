export { };
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((res) => {
    // implementing an interface so we know exactly what properties we're looking for.
    const todo = res.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

// type definitions in functions
const logTodo = (id: number, title: string, finished: boolean) => {
    console.log(`
        The todo with Id: ${id}
        Has a title of: ${title}
        Is it finished? ${finished}
    `);
};
