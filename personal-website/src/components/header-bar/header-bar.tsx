import logo from '../../images/logo.svg';

const HeaderBar = (props: any) => {
    const { changeTab, tabs, currentTab } = props;;

    return (
        <div className='header-bar'>
            <button className='logo-button'
                onClick={()=>changeTab(0)} 
            >
                <img src={logo} className="App-logo" alt="logo" />
                <p>Kay</p>
            </button>
            {tabs.map((t: string, i: number) => {
                return (
                    <button
                        className={`header-tab${i === currentTab? " selected" : ""}`}
                        key={i.toString()}
                        onClick={() => changeTab(i)} 
                    >
                        {t}
                    </button>
                )
            })}
        </div>
    );
}

export default HeaderBar;