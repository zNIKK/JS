import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { NotFound } from './components/NotFound'
import { Post } from './components/Post'
import { Posts } from './components/Posts'
import { Redirect } from './components/Redirect'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/posts' element={<Posts />}/>
        {/* <Route path='/posts/:id' element={<Posts />}/> */}
        <Route path='/posts' element={<Posts />}> 
          <Route path=':id' element={<Post />}></Route>
        </ Route>
        <Route path='/redirect' element={<Redirect />}/>
        <Route path='*' element={<NotFound />}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
