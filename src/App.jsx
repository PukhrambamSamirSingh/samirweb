import "./App.css"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Feedbacks from "./pages/Feedbacks";
import 'animate.css'
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ThemeProvider } from "./context/theme";
import { useEffect, useState } from "react";
import Forgot from "./pages/Forgot";
import { UserProvider } from "./context/userContext";
import Profile from "./pages/Profile";


const App = () => {
    const [themeMode, setThemeMode] = useState("light")
    const darkTheme = () => {
        setThemeMode("dark")
    }
    const lightTheme = () => {
        setThemeMode("light")
    }
    useEffect(() => {
        document.querySelector("html").classList.remove("dark", "light")
        document.querySelector("html").classList.add(themeMode)
    }, [themeMode])

    return (
        <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
            <UserProvider>
                <Router>
                    <div className="dark:bg-gray-950 dark:text-white bg-slate-100 font-semibold">
                        <Navbar />
                        <Home />
                        <About />
                        <Skills />
                        <Projects />
                        <Blogs />
                        <Feedbacks />
                        <Contact />
                        <Footer />
                    </div>
                    <Routes>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/forgot" element={<Forgot />} />
                        <Route exact path="/profile" element={<Profile />} />
                    </Routes>
                </Router>
            </UserProvider>
        </ThemeProvider >
    )
}

export default App
