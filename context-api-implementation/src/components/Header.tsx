import ToggleThemeButton from "./ToggleThemeButton"

export default function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center my-4">      <h1>Todo App (Context API)</h1>
      <ToggleThemeButton />
    </div>
  )
}
