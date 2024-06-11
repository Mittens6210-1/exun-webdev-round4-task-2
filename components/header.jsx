import '../src/styles.css'

export default function Header() {
    return (
        <>
            <header>
            <nav className="navbar">
                    <div className="logo">whatDo?</div>
                    <ul class="ulH">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Products</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}