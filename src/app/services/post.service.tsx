export async function getPostsList() {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  }