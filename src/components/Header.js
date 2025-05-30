import Logo from '../assets/logo.png';

export const Header = () => {


  return (
    <header className="header">
        <div className="logo">
            <img src={Logo} alt="ToDone logo" />
            <span className='font-bold'>ToDone</span>
        </div>
    </header>
  )
}
