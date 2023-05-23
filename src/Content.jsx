import axios from "axios"
import { useEffect } from "react"

export function Content() {
  const getNews = () => {
    console.log('getNews')
    axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=").then(response => {
      console.log(response.data)
    })
  }

  useEffect(getNews, [])

  return (
    <div>
      <h1>Welcome to React!</h1>
    </div>
  )
}