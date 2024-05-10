import axios from 'axios'

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url)
    return response.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching from ${url}: ${error.message}`)
    } else {
      throw new Error(`Error fetching from ${url}`)
    }
  }
}

async function testFetch() {
  const url = 'https://api.example.com/data'
  try {
    const data = await fetchData<{ name: string; age: number }>(url)
    console.log(data.name, data.age)
  } catch (error) {
    console.error(error)
  }
}
