import { Outlet } from "react-router-dom"

export const Public = () => {
  return (
    <>
    <header> menu de header</header>
    <main>
        <Outlet/>
    </main>
    <footer>este es el pie</footer>
    </>
  )
}

