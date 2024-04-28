import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Layout, { LayoutType2 } from './layout/Layout'
import Todo from '../pages/todo/Todo'

function Routers() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/todo" element={<Todo />} />
                </Route>
                <Route element={<LayoutType2 />}>
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers
