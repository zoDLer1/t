const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_end=10");
    return await response.json();
};

export const fetchTodos = async () => {
    const [data] = await Promise.all([getTodos(), new Promise((resolve) => setTimeout(resolve, 500))]);
    return data;
};
