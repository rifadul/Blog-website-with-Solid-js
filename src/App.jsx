// import { createSignal, createEffect } from 'solid-js'
import { Card } from './components/Card/Card';
import { createSignal } from 'solid-js';
import { Router, Route, Routes } from "@solidjs/router";
import Blog from './components/Blog';
import About from './components/About';

function App() {

  return (
    <Routes>
      <Route path="/" component={Blog} />
      <Route path="/about/:id" component={About} />
    </Routes>
  )
}

export default App
