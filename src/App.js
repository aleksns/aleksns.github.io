import './App.css'
import { WEBSITE } from './constants'

export default function App() {
  return (
    <div className="container">
      <h2>Redirecting to Alexandr Nazarov Website</h2>
      <p>
        If you are not redirected,{' '}
        <a href={WEBSITE}>click here</a>.
      </p>
    </div>
  )
}
